import { useIsFetching } from "@tanstack/react-query";
import { PropsWithChildren, createContext, useState } from "react";

interface IAppStateContext {
    setIsAppLoading: React.Dispatch<React.SetStateAction<boolean>>,
    isAppLoading: boolean,
    isFetching: number
}

export const AppStateContext = createContext<IAppStateContext>({} as IAppStateContext)

export const AppStateProvider = (props: PropsWithChildren) => {

    const [isAppLoading, setIsAppLoading] = useState<boolean>(false)
    const isFetching = useIsFetching()

    return (
        <AppStateContext.Provider value={{ isAppLoading, setIsAppLoading, isFetching }}>
            {props.children}
        </AppStateContext.Provider>
    )
}