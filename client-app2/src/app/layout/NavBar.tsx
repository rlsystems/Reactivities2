import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

import { Disclosure, Transition } from '@headlessui/react'
import { HomeIcon, ChatAlt2Icon, CogIcon } from '@heroicons/react/outline'
import { PlusSmIcon } from '@heroicons/react/solid'
import { useDarkMode } from '../../hook/useDarkMode';


interface Props {
    setTheme: () => void;
}

export default function NavBar({ setTheme }: Props) {
    //const {setTheme, colorTheme} = useDarkMode;
    return (
        <aside className="flex w-16 flex-col fixed inset-y-0">

            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex-1 flex flex-col bg-gray-50 border-r border-gray-100">
                <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                    <div className="flex items-center justify-center flex-shrink-0 px-4">
                        <img
                            className="block  h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                            alt="Workflow"
                        />
                    </div>
                    <nav className="mt-5 flex flex-col flex-1 px-2 space-y-1">
                        <NavLink
                            key={3}
                            href=''
                            className='flex justify-center text-gray-700 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium'
                            to="/" exact
                        >
                            <HomeIcon className="h-6 w-6 text-black" aria-hidden="true" />
                        </NavLink>
                        <NavLink
                            key={1}
                            href=''
                            className='flex justify-center text-gray-700 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium'
                            to="/activities"
                        >
                            <ChatAlt2Icon className="h-6 w-6 text-black" aria-hidden="true" />
                        </NavLink>

                        <Link
                            key={2}
                            href=''
                            className='flex justify-center'
                            to="/createActivity"
                        >
                            <button
                                type="button"
                                className="relative flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                            >
                                <PlusSmIcon className="h-5 w-5" aria-hidden="true" />

                            </button>
                        </Link>


                    </nav>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="p-3">
                        <button
                            type="button"
                            onClick={() => setTheme()}
                        >
                            <CogIcon className="h-6 w-6 text-gray-700 hover:bg-gray-100 hover:text-black" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="border-t border-gray-600  py-3 mx-2">
                        <a href="#" className="flex-shrink-0 w-full group block">
                            <img
                                className="inline-block h-9 w-9 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </a>
                    </div>

                </div>
            </div>


        </aside>



    )
}