import React, { useState } from 'react'

interface NavItem{
    label: string
    page: string
}

const NAV_ITEM: Array<NavItem> = [
    {
        label: "Home",
        page: "home",

    },
    {
        label: "About US",
        page: "aboutus",

    },
    {
        label: "Help",
        page: "help",

    },
    {
        label: "Help",
        page: "help",

    },
    {
        label: "Contact US",
        page: "contactus",

    }
]


export default function Navbar() {
    const Navbar = () => {
        // const { systemTheme, theme, setTheme } = useTheme()
        // const currentTheme = theme === "system" ? systemTheme : theme
        const [navbr, setNavBar] = useState(false)
    }

  return (
    <header>
        <div>navbar</div>
        <div>
            {NAV_ITEM.map((item, idx) => {
                return <a key={idx}>{item.label}</a>
            })}
        </div>
    </header>
    
  )
}
