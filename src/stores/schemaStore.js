import { defineStore } from 'pinia';
import * as yup from 'yup';
import { useDataStore } from "./dataStore.js";

export const useSchemaStore = defineStore('schema', {
    state: () => {
        const dataStore = useDataStore();
        return{
            schema: yup.object({
                settings: yup.object({
                    themes: yup.object({
                        themesList: yup.array().of(yup.string()).required('themeList is required!').default(['default']),
                        currentTheme: yup.string().required('currentTheme is required!').default('default'),
                    }).required()
                }).required()
            })
        }
    },

    actions: {
        async validateApplicationData() {
            try {
                const dataStore = useDataStore(); // ✅ Access data store dynamically
                const result = await this.schema.validate(dataStore.data, {
                    strict: true,
                    abortEarly: false
                });

                console.log("Validation Success:", result);
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
