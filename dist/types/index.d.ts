import { App } from "vue";
export { setDefaultHttpInfo } from "./functions/functions";
declare const LktHttpInfo: {
    install: (app: App, options?: {}) => void;
};
export default LktHttpInfo;
