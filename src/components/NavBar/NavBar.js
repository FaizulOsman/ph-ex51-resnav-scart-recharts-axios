import React from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const NavBar = () => {
    const [menu, setMenu] = useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Products', path: '/products' },
        { id: 3, name: 'Orders', path: '/orders' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'About', path: '/about' }
    ]


    return (
        <nav className='bg-purple-300 py-2'>
            <div onClick={() => setMenu(!menu)} className="h-6 ml-3 w-6 md:hidden">
                {
                    menu ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>

            <ul className={`bg-purple-300 w-full md:flex justify-center absolute md:static duration-500 ease-in ${menu ? 'top-8' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link route={route} key={route.id}></Link>)
                }
            </ul>
        </nav >
    );
};

export default NavBar;
