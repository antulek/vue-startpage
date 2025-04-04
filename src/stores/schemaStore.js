import { defineStore } from 'pinia';
import * as yup from 'yup';
import { useDataStore } from "./dataStore.js";

export const useSchemaStore = defineStore('schema', {
    state: () => ({
        schema: yup.object({
            logo: yup.object({
                src: yup.string()
                    .required('image for logo needs a source!')
                    .default('https://ih1.redbubble.net/image.980012480.5663/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg')
            }),
            settings: yup.object({
                themes: yup.object({
                    themesList: yup.array().of(yup.string()).required('themeList is required!').default(['default']),
                    currentTheme: yup.string().required('currentTheme is required!').default('default'),
                }).required()
            }).required()
        })
    }),
    actions: {
        async validateApplicationData() {
            try {
                const dataStore = useDataStore(); // ✅ Access data store dynamically
                const result = await this.schema.validate(dataStore.data, {
                    strict: true,
                    abortEarly: false
                });
                return result;
            } catch (error) {
                error.inner.forEach(e => {
                    console.error(e.message, e.path);
                });
                console.error("Validation Error:", error.errors);
                return null;
            }
        },
        async validateModuleData(module="settings", cast=false){
            const dataStore = useDataStore(); // ✅ Access data store dynamically
            if(!dataStore.data.hasOwnProperty(module)){
                throw new Error(`Data for module ${module} was not found!`);
            }

            try {
                const result = await this.schema.fields[module].cast(dataStore.data[module]);
                console.log(result);
                return result;
            } catch (error) {
                error.inner.forEach(e => {
                    console.error(e.message, e.path);
                });
                console.error("Validation Error:", error.errors);
                return null;
            }

        }
    }
});
