import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { PropsWithChildren, createContext } from "react";
import HttpService from "../services/httpService";

interface IDALServiceContext {
    getQuery: UseQueryResult<any, unknown>
}

export const DALServiceContext = createContext<IDALServiceContext>({} as IDALServiceContext)

export const DALServiceProvider = (props: PropsWithChildren) => {

    const axiosInstance = HttpService.getAxiosClient()

    const getEndpoint = (endpoint: string) => {
        return `https://localhost:7071/api/${endpoint}`
    }

    const getQuery = useQuery({
        queryKey: ['organization'],
        queryFn: () => getData('Organizations')
    })

    const getData = (endpoint: string) => {
        return axiosInstance.get(getEndpoint(endpoint)).then(response => response.data)
    }

    // const getQuery = <T,>(endpoint: string): UseQueryResult<T, unknown> => {
    //     return useQuery({
    //         queryKey: [endpoint],
    //         queryFn: () => {
    //             return instance.get(`https://app1.jjhome.in/${endpoint}`).then(data => data.data as T[])
    //         }
    //     })
    // }

    return (
        <DALServiceContext.Provider value={{ getQuery }}>
            {props.children}
        </DALServiceContext.Provider>
    )
}