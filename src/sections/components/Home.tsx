const Home = () => {
    return (
        <section id="home" className="relative flex min-h-screen w-full items-center justify-center">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
                {/* Profile + Text */}
                <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
                    <div className="shrink-0 md:w-1/3">
                        <img 
                            className="mx-auto h-48 w-48 rounded-full border-4 border-white object-cover shadow-lg md:h-64 md:w-64"
                            src="src/assets/profile.png"
                            alt="Chris Schultz Profile Image" 
                        />
                    </div>
                    
                    <div className="space-y-4 text-center md:w-2/3 md:text-left">
                        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl dark:text-white">
                            Chris Schultz
                        </h1>
                        <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
                            Full-stack software developer and chronically online guy.
                        </h2>
                    </div>
                </div>

                {/* Down Arrow (Image Version) */}
                <div className="mt-16">
                    <a 
                        href="#about" 
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#about')?.scrollIntoView({ 
                                behavior: 'smooth' 
                            });
                        }}
                        className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2  brightness-0 invert border-white transition-all hover:scale-110"
                        aria-label="Scroll down"
                    >
                        <img 
                            src="/down-arrow.png" 
                            alt="Down arrow"
                            className="h-6 w-6 filter invert dark:invert-0"
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}

export {
    Home
}