interface IRole {
    id: number;
    role: string;
    company: string;
    startDate: string;
    endDate: string;
    achievements: string[];
    skills: string[];
}

const Experience = () => {
    const roles: IRole[] = [
        {
            id: 1,
            role: 'Software Engineer - Remote',
            company: 'Returned.com',
            startDate: 'Aug 2023',
            endDate: 'Feb 2025',
            achievements: [
                'Built a scalable AWS backend for a returns management platform',
                'Developed internal Next.js platform cutting issue resolution by 65%',
                'Integrated AI APIs to automate customer support'
            ],
            skills: ['TypeScript', 'Node.js', 'AWS', 'Next.js']
        },
        {
            id: 2,
            role: 'Software Engineer - Remote',
            company: 'Drill Spot, LLC',
            startDate: 'Jul 2020',
            endDate: 'Aug 2023',
            achievements: [
                'Migrated e-commerce platform to .NET 6 microservices',
                'Created pricing engine driving 30% revenue growth',
                'Automated 100+ annual work hours via REST API optimization'
            ],
            skills: ['C#', '.NET', 'SQL Server', 'React.js']
        }
    ];

    return (
        <>
        <section id="experience" className="py-16 md:py-24 px-4">
            <div className="mx-auto max-w-4xl px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-12">
                    Professional Experience
                </h1>

                <div className="relative pl-8 md:pl-12">
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>

                    {roles.map((role) => (
                        <div key={role.id} className="relative mb-12">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md ml-4">
                                <div className="flex flex-col sm:flex-row justify-between gap-2">
                                    <h3 className="text-xl font-bold dark:text-white">
                                        {role.role} · <span className="text-indigo-600 dark:text-indigo-400">{role.company}</span>
                                    </h3>
                                    <span className="text-gray-500 dark:text-gray-400">
                                        {role.startDate} – {role.endDate}
                                    </span>
                                </div>

                                <ul className="mt-4 space-y-2">
                                    {role.achievements.map((item, i) => (
                                        <li key={i} className="flex">
                                            <span className="mr-2 mt-1 text-indigo-500">▹</span>
                                            <span className="dark:text-gray-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {role.skills.map((skill) => (
                                        <span 
                                            key={skill}
                                            className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}

export {
    Experience
}