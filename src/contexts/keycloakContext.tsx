import Keycloak from "keycloak-js";
import { PropsWithChildren, createContext } from "react";

interface IKeycloakContext {
    login: () => Promise<void>,
    logout: () => Promise<void>,
    getUserInfo: () => {} | undefined
    isAuthenticated: () => boolean | undefined
}

export const KeycloakContext = createContext<IKeycloakContext>({} as IKeycloakContext)

export const KeycloakContextProvider = (props: PropsWithChildren) => {

    const instance = new Keycloak({
        url: 'https://keycloak.jjhome.in/',
        realm: 'JJHome',
        clientId: 'JeffTest',
    });

    instance.init({ onLoad: 'check-sso' })

    const login = () => {
        return instance.login()
    }

    const loginTest = () => {
        instance.login()
    }

    const logout = () => {
        return instance.logout()
    }

    const getUserInfo = () => {
        return instance.userInfo
    }

    const isAuthenticated = () => {
        return instance.authenticated;
    }

    return (
        <KeycloakContext.Provider value={{ login, logout, getUserInfo, isAuthenticated }}>
            {props.children}
        </KeycloakContext.Provider>
    )
}