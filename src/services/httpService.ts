import axios from "axios";
import KeyCloakService from './keycloakService'

const HttpMethods = {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE",
};

const _axios = axios.create();

const configure = () => {
    _axios.interceptors.request.use((config: any) => {
        console.log("Interceptor")
        if (KeyCloakService.IsLoggedIn()) {
            console.log(KeyCloakService.GetToken())
            const cb = () => {
                config.headers.Authorization = `Bearer ${KeyCloakService.GetToken()}`;
                return Promise.resolve(config);
            };
            return KeyCloakService.UpdateToken(cb);
        }
    });
};

const getAxiosClient = () => _axios;

const HttpService = {
    HttpMethods,
    configure,
    getAxiosClient,
};

export default HttpService;