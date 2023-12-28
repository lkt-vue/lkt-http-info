import {LktObject} from "lkt-ts-interfaces";

export class Settings {

    /**
     * Date ranges
     */
    static customTitles: LktObject = {
        200: 'Success',
        403: 'Forbidden',
        404: 'Not Found',
        500: 'Internal Server Error',
    };
    static customMessages: LktObject = {
        403: 'You don\'t have access',
    };
    static customIcons: LktObject = {};
}