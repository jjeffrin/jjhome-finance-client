import { Flex, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Button, Text, Tag } from "@chakra-ui/react"
import { useState } from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { HiMenuAlt3 } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import { ORGANIZATION_ROUTE, SALARY_ROUTE } from "../constants"
import KeyCloakService from "../services/keycloakService"

export const AppBar = () => {

    const [showMenu, setShowMenu] = useState<boolean>(false)
    const navigate = useNavigate()

    const closeMenu = () => {
        setShowMenu(false)
    }

    const openMenu = () => {
        setShowMenu(true)
    }

    const navigateToPage = (path: string) => {
        // close the menu before navigating to any page..
        setShowMenu(false)

        // redirect the user to required page
        navigate(path)
    }

    return (
        <>
            <Flex flexDir={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Flex flexDir={'column'}>
                    <Text display={'block'} fontSize={'xl'}><b>JJHome</b> Finance.</Text>
                    <Text>Welcome, {KeyCloakService.GetName()}</Text>
                </Flex>
                <HiMenuAlt3 cursor={'pointer'} onClick={openMenu} />
            </Flex>

            <Drawer
                isOpen={showMenu}
                placement='right'
                onClose={() => { }}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>
                        <Flex flexDir={'row'} alignItems={'center'} justifyContent={'space-between'}>
                            <Text display={'block'}>Menu</Text>
                            <AiOutlineCloseCircle cursor={'pointer'} onClick={closeMenu} />
                        </Flex>
                    </DrawerHeader>

                    <DrawerBody>
                        {KeyCloakService.IsLoggedIn() &&
                            <>
                                {/* <Button display={'block'} variant={'ghost'} mb={'0.5rem'} onClick={() => console.log(keycloak.token)}>Log current token</Button> */}
                                <Button display={'block'} variant={'ghost'} mb={'0.5rem'}>Account</Button>
                                <Button display={'block'} variant={'ghost'} mb={'0.5rem'} onClick={() => navigateToPage(SALARY_ROUTE)}>Salary</Button>
                                <Button display={'block'} variant={'ghost'} mb={'0.5rem'}>Expenses</Button>
                                <Button display={'block'} variant={'ghost'} mb={'0.5rem'}>Savings</Button>
                                <Button display={'block'} variant={'ghost'} mb={'0.5rem'}>Subscriptions</Button>
                                <Button display={'block'} variant={'ghost'} mb={'0.5rem'}>Loans</Button>
                                <Button display={'block'} variant={'ghost'} mb={'0.5rem'} onClick={() => navigateToPage(ORGANIZATION_ROUTE)}>Organization</Button>
                                <Button display={'block'} variant={'ghost'} mb={'0.5rem'} onClick={() => KeyCloakService.CallLogout()}>Logout</Button>
                                <Button display={'block'} variant={'ghost'} mb={'0.5rem'}>View changelog</Button>
                            </>
                        }
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}