const school =
    {
        name: 'Arizona State University',
        degree: 'BS in Finance',
        year: '1999',
    }

export default function Example() {
    return (
        <div className="px-6 lg:px-8">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">Education</h2>
            <div>
                <div className="py-4">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{school.name}</h3>
                    <p className="text-gray-500 py-2">{school.degree}</p>
                    <p className="text-gray-500 py-2">Graduated {school.year}</p>
                </div>
            </div>
        </div>
    )
}
