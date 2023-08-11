import { data } from "autoprefixer";

'use client'
import { useState, useEffect, lazy } from 'react'
import Image from "next/image";
import dynamic from "next/dynamic";

const DashboardMain = dynamic(() => import("./Comps/DashboardComp"))
const Items = dynamic(() => import("./Comps/ItemsComp"))
const Checkouts = dynamic(() => import("./Comps/CheckoutsComp"))

export default function Dashboard(){

    const [activeComponent, setComponent] = useState("dashboard")
    const [menuActive, setMenuState] = useState(true)
    // const [isClicked, click] = useState(false)

    // Hamburger menu button
    const toggleMenu = () => {
        setMenuState(!menuActive)
        console.log(menuActive)
    }

    const navData = [
        {
            navName : 'Dashboard',
            navIcon : '/Icons/dashboard.svg',
            alt: 'dashboard-icon',
            component: 'dashboard'
        },
        {
            navName : 'Items',
            navIcon : '/Icons/bag.svg',
            alt: 'items-icon',
            component: 'items'
        },
        {
            navName: 'Checkouts',
            navIcon: '/Icons/notes.svg',
            alt: 'checkouts-icon',
            component: 'checkouts'
        }
    ]

    useEffect( () => {
        // console.log(navData)
        navData.forEach( (k) => {
            // console.log(k.navName)
        }, [])
    })

    return(
        <>
        <div className=" min-h-screen">
            <header className="w-full z-10 fixed">
                <div className=" bg-header-color min-h-header w-full">

                </div>

                <div className={`min-h-screen bg-white ${menuActive ? 'w-sidebar' : 'w-sidebar-min'} transition-[width] ease-in-out duration-300`}>
                    <button onClick={toggleMenu} className="p-5">
                        <Image src="/Icons/list.svg"
                                width={39}
                                height={39}
                                alt="list-icon"/>
                    </button>
                    <nav className={`flex flex-col p-5 space-y-5`}>
                        {navData.map((n, i) => (
                            <button key={i} className={`rounded-lg flex flex-row py-4 text-black items-center ${menuActive ? 'justify-start px-5' : 'px-2'} transition-[padding] transition-[transform] ease-in-out duration-300 hover:bg-gray-400 hover:-translate-y-4`} onClick={() => setComponent(n.component)}>
                                <Image src={n.navIcon}
                                    width={39}
                                    height={39}
                                    alt="list-icon"/>
                                <h1 className={`${menuActive ? 'visible ml-4' : 'hidden'} transition-[visibility] ease-in-out duration-300`}>{n.navName}</h1>
                            </button>
                        ))}
                    </nav>
                </div>
            </header>

            <main className="flex flex-row min-h-screen w-full">
                <div className="min-h-screen w-full bg-dashboard-body text-black p-5">
                        {/* Content */}
                        {/* <h1 className="text-black">Hello</h1> */}
                        {(() => {
                            switch(activeComponent){
                                case "dashboard":
                                    return <DashboardMain name="Dashboard" menuActive={menuActive}/>;
                                case "items":
                                    return <Items name="Items" menuActive={menuActive}/>;
                                case "checkouts":
                                    return <Checkouts name="Checkouts" menuActive={menuActive}/>;
                            }
                        })()}

                    </div>

            </main>
        </div>
        </>
    );
}
