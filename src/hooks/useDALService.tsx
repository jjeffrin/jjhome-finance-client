import { useContext } from "react"
import { DALServiceContext } from "../contexts/dalServiceContext"

export const useDALService = () => {
    return useContext(DALServiceContext)
}