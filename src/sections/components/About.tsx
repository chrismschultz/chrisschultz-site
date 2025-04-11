const About = () => {
    return (
        <>
            <section id="about" className="py-16 md:py-24 px-4">
                <div className="mx-auto w-full max-w-[50%]">
                    <h1 className="text-5xl font-bold mb-12">
                        About
                    </h1>
                    <div className="space-y-6">
                        <p className="text-xl leading-relaxed text-left">
                            When I was 15, I decided on a whim to take a coding class my high school offered. In that class,
                            we made games. My first ever "real" software project was a video game designed to teach the alphabet.
                            It was, frankly, terrible, but that sparked my passion for building software and creative problem-solving,
                            which drove me to where I am today.
                        </p>
                        <p className="text-xl leading-relaxed text-left">
                            Today, I'm a software developer with 5 years of experience building web and mobile applications.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export {
    About
}