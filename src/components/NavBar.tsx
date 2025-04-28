interface INavItem {
    id: number;
    name: string;
    href: string;
    isDownload?: boolean;
}

function NavBar() {
    const navItems: INavItem[] = [
        { id: 1, name: 'About', href: '#about' },
        { id: 2, name: 'Experience', href: '#experience' },
        { id: 3, name: 'Resume', href: '#resume', isDownload: true },
        { id: 4, name: 'Contact', href: '#contact'},
    ];

    const handleClick = (e: React.MouseEvent, item: INavItem) => {
        if (item.isDownload) {
            handleResumeDownload();
        }
        const element = document.querySelector(item.href);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    const handleResumeDownload = () => {
        fetch('/Chris_Schultz_Resume_2025.pdf')
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'Chris_Schultz_Resume.pdf';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            })
    }

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-sm">
                <div className="max-w-screen mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <a 
                            href="#home" onClick={(e) => handleClick(e, { id: 0, href: '#home', name: 'Home' })}
                            className="text-xl font-semibold">
                            Chris Schultz
                        </a>
                        <ul className="flex items-center space-x-4">
                            {navItems.map(x => (
                                <li key={x.id}>
                                    <a
                                        href={x.href}
                                        onClick={e => handleClick(e, x)}
                                        className="px-3 py-2 rounded-md text-lg font-medium hover:text-black transition-colors duration-300">
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