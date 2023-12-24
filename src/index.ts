import {App} from "vue";
import {default as httpInfo} from "./lib-components/LktHttpInfo.vue";
export {setDefaultHttpInfo} from "./functions/functions";


const LktHttpInfo = {
    install: (app: App, options = {}) => {
        app.component('lkt-http-info', httpInfo);
    },
};
export default LktHttpInfo;