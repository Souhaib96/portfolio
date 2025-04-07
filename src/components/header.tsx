
'use client'
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import * as React from "react"
import Logo from "./logo";
import ContainerContent from "./container-content";
import { NavLinks } from "@/type";
import { RootState, useAppDispatch, useAppSelector } from "@/state/store";
import { logout } from "@/state/login/loginSlice";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignJustify, Apple } from "lucide-react";


interface HeaderProps {
    logoSrc?: string;
    menuItems?: NavLinks[];
}

const Header = (props:HeaderProps) => {
    const loginState = useAppSelector((state: RootState) => state.login);
    const dispatch = useAppDispatch();

    const onLogout = () => {
        dispatch(logout());
        alert("Vous êtes déconnecté");
    }
        

    return (
        <header className="flex items-center justify-center bg-background h-[5rem] ">
            <ContainerContent>
                <div className="flex items-center justify-between py-2">
                    <Link href="/">
                        <Logo src={props.logoSrc}/>
                    </Link>

                    {//Main header
                    }
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList>
                            {
                                props.menuItems?.map((item, index) => (
                                    <NavigationMenuItem key={index}>
                                        <Link href={item.href} legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                {item.name}
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                ))
                            }
                            {
                                loginState.isLoggedIn &&
                                    <Button onClick={onLogout} >
                                        Déconnexion
                                    </Button>
                                
                            }
                        </NavigationMenuList>
                    </NavigationMenu>

                    {//Mobile header
                    }
                    <div className='md:hidden'>
                        <Sheet>
                            <SheetTrigger>
                            <AlignJustify />
                            </SheetTrigger>
                            <SheetContent side='left'>
                                <Link href="/">
                                    <Logo src={props.logoSrc}/>
                                </Link>
                                <nav className='flex flex-col gap-3 lg:gap-4 mt-6'>
                                    {
                                        props.menuItems?.map((item, index) => (
                                            <Link key={index} href={item.href}>
                                                {item.name}
                                            </Link>
                                        ))
                                    }
                                    {
                                        loginState.isLoggedIn &&
                                            <Button onClick={onLogout} >
                                                Déconnexion
                                            </Button>
                                    }
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>

                </div>
            </ContainerContent>
        </header>
    );
}

const MobileHeader = (props:HeaderProps) => {
    return (
        <header className="flex items-center justify-center bg-background h-[5rem] ">
            <ContainerContent>
                <div className="flex items-center justify-between py-2">
                    <Link href="/">
                        <Logo src={props.logoSrc}/>
                    </Link>
                </div>
            </ContainerContent>
        </header>
    );
}

export default Header;