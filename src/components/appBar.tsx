import { Flex, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Button, Text } from "@chakra-ui/react"
import { useKeycloak } from "@react-keycloak/web"
import { useState, useEffect } from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { HiMenuAlt3 } from "react-icons/hi"
import { useNavigate } from "react-router-dom"

export const AppBar = () => {

    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [userInfo, setUserInfo] = useState<any>({})
    const { keycloak } = useKeycloak()
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

    useEffect(() => {
        if (keycloak.authenticated) {
            keycloak.loadUserInfo().then(data => { setUserInfo(data) })
        }
    })

    return (
        <>
            <Flex flexDir={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Text display={'block'} fontSize={'xl'}><b>JJHome</b> Finance.</Text>
                <HiMenuAlt3 cursor={'pointer'} onClick={openMenu} />
            </Flex>

            {
                keycloak.authenticated &&
                <Text>Welcome, {userInfo?.name}</Text>
            }

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
                        {!keycloak.authenticated &&
                            <Button display={'block'} variant={'ghost'} mb={'0.5rem'} onClick={() => keycloak.login()}>Login</Button>
                        }
                        {keycloak.authenticated &&
                            <>
                                <Button display={'block'} variant={'ghost'} mb={'0.5rem'} onClick={() => navigateToPage('/salary')}>Salary</Button>
                                <Button display={'block'} variant={'ghost'} mb={'0.5rem'}>Expenses</Button>
                                <Button display={'block'} variant={'ghost'} mb={'0.5rem'}>Savings</Button>
                                <Button display={'block'} variant={'ghost'} mb={'0.5rem'}>Subscriptions</Button>
                                <Button display={'block'} variant={'ghost'} mb={'0.5rem'}>Loans</Button>
                                <Button display={'block'} variant={'ghost'} mb={'0.5rem'} onClick={() => keycloak.logout()}>Logout</Button>
                            </>
                        }
                        <Button display={'block'} variant={'ghost'} mb={'0.5rem'}>View changelog</Button>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}