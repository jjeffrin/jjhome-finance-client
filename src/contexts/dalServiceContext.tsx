import { PropsWithChildren, createContext } from "react";

interface IDALServiceContext {

}

export const DALServiceContext = createContext<IDALServiceContext>({} as IDALServiceContext)

export const DALServiceProvider = (props: PropsWithChildren) => {
    return (
        <DALServiceContext.Provider value={{}}>
            {props.children}
        </DALServiceContext.Provider>
    )
}