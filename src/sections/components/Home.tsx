const Home = () => {
    return (
        <>
        <div className="flex items-center justify-center min-h-screen pb-16">
            <div className="flex items-center w-full max-w-[50%] space-x-8 px-4">
                <img 
                    className="h-72 border-4 rounded-full" 
                    src="src/assets/profile.png"
                    alt="Chris Schultz profile image" />
                <div className="flex flex-col items-start space-y-8">
                    <h1 className="text-7xl font-bold">Chris Schultz</h1>
                    <h2 className="text-3xl">Full-stack software developer. Musician. Chronically online guy.</h2>
                </div>
            </div>

        </div>
        </>
    )
}

export {
    Home
}