import { Text } from "@chakra-ui/react"
import { useDALService } from "../hooks/useDALService"

interface IWeatherForecast {
    date: string,
    temperatureC: string,
    temperatureF: string,
    summary: string
}

interface IOrganization {
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    userId: string
}

export const SalaryPage = () => {

    const { getQuery } = useDALService()

    return (
        <>
            <Text mt={'1rem'} fontWeight={'semibold'}>Manage Salary</Text>
            {(getQuery.data as IOrganization[])?.map(org => {
                return <><Text>{org.id}</Text> | <Text>{org.name}</Text> | <Text>{org.userId}</Text> | <Text>{org.updatedAt}</Text></>
            })}
        </>
    )
}