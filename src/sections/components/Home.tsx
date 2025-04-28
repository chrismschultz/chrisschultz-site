const Home = () => {
    return (
        <>
        <section
            id="home"
            className="relative flex min-h-screen w-full items-center justify-center">
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 md:flex-row md:gap-12">
                    <div className="shrink-0 md:w-1/3">
                        <img 
                            className="mx-auto h-48 w-48 rounded-full border-4 object-cover shadow-lg md:h-64 md:w-64" 
                            src="src/assets/profile.png"
                            alt="Chris Schultz Profile Image" />
                    </div>
                    <div className="space-y-4 text-center md:w-2/3 md:text-left">
                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                        Chris Schultz
                    </h1>
                    <h2 className="text-xl sm:text-2xl">
                        Full-stack software developer. Musician. Chronically online guy.
                    </h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export {
    Home
}