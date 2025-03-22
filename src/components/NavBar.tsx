interface INavItem {
    id: number;
    name: string;
}

function NavBar() {
    const navItems: INavItem[] = [
        { id: 1, name: 'About' },
        { id: 2, name: 'Experience' },
        { id: 3, name: 'Resume' },
        { id: 4, name: 'Contact' },
    ];

    return (
        <>
            <nav className="">
                <div className="max-w-screen flex flex-wrap items-center justify-end mx-auto p-4">
                    <div className="w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-row md:space-x-8 rtl:space-x-reverse">
                            {navItems.map(x => (
                                <li key={x.id} className="p-2 hover:bg-[#00df9a] rounded-xl cursor-pointer duration-300 hover:text-black">
                                    <a href="#" className="text-gray-900 dark:text-white md:dark:hover:text-blue-500">
                                        {x.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;