import { useContext } from "react"
import { KeycloakContext } from "../contexts/keycloakContext"

export const useKeycloak = () => {
    return useContext(KeycloakContext)
}