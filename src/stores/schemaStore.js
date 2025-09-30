import { defineStore } from 'pinia';
import * as yup from 'yup';
import { useDataStore } from "./dataStore.js";

const globalSettings = yup.object({
    settings: yup.object({
        themes: yup.object({
            themesList: yup.array().of(yup.string())
                .default(["default","debug", "abstract","arizona-pink"]),
            currentTheme: yup.string()
                .default('arizona-pink')
        })
    })
});
const modules = {
    logo: yup.object({
        src: yup.string().required(),
        scale: yup.number().default(1),
        repeat: yup.boolean().default(false),
        isPixelArt: yup.boolean().default(false)
    }),
};
const layoutModule = yup.object({
    x: yup.number().default(0).min(0),
    y: yup.number().required().min(0),
    width: yup.number().default(1).min(1),
    height: yup.number().default(1).min(1),
});

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
        }),
        globalSettings,
        modules,
        layoutModule
    }),
    actions: {
        validateLayout(data, cast){
            if(data == null){
                throw new Error('ModuleType or data for validation was not specified!');
            }

            let modulesSchema = yup.object({
                index: yup.number().required(),
                type: yup.string().required(),
                layout: this.layoutModule,
                data: obj=>this.modules[obj.type] || yup.mixed()
            });

            let finalSchema =  yup.object({
                settings: this.globalSettings,
                layout: yup.array().of(modulesSchema)
            }).required();

            return finalSchema.validateSync(data);
        },
        validateModuleData(moduleType=null, data = null, parse=false){
            if(moduleType == null || data == null){
                throw new Error('ModuleType or data for validation was not specified!');
            }

            if(!this.modules.hasOwnProperty(moduleType)){
                throw new Error('ModuleType fo this type does not have a schema defined!');
            }

            let moduleSchema = this.modules[moduleType];
            return moduleSchema.validateSync(data, {
                strict: parse
            });
        },
        validateModuleLayout(data, parse=false){
            if(data == null){
                throw new Error('ModuleType or data for validation was not specified!');
            }

            return this.layoutModule.validateSync(data, {
                strict: parse
            });
        },
        validateSettings(data, parse=false){
            if(data == null){
                throw new Error('ModuleType or data for validation was not specified!');
            }

            return this.globalSettings.validateSync(data, {
                strict: parse
            });
        }
    }
});
