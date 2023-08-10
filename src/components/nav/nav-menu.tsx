'use client'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { ModeToggle } from "./nav-theme-button"
  

export default function NavMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                
                <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                    <ModeToggle></ModeToggle>
                </NavigationMenuItem>
            
            </NavigationMenuList>            
        </NavigationMenu>

    )
}