interface INavItem {
    id: number;
    name: string;
    href: string;
}

function NavBar() {
    const navItems: INavItem[] = [
        { id: 1, name: 'About', href: '#about' },
        { id: 2, name: 'Experience', href: '#experience' },
        { id: 3, name: 'Resume', href: '#resume' },
        { id: 4, name: 'Contact', href: '#contact'},
    ];

    const handleClick = (e: any, href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    return (
        <>
            <nav className="fixed">
                <div className="max-w-screen mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-end h-16">
                        <ul className="font-medium flex flex-row md:space-x-8 rtl:space-x-reverse">
                            {navItems.map(x => (
                                <li key={x.id} className="p-2 hover:bg-[#56A3A6] rounded-xl cursor-pointer duration-300 hover:text-black">
                                    <a 
                                        href={x.href} 
                                        onClick={e => handleClick(e, x.href)}
                                        className="text-gray-900 text-xl dark:text-white md:dark:hover:text-blue-500">
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

export {
    NavBar
}