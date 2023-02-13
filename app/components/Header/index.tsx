import Link from 'next/link'

interface HeaderProps {
    title: string
    description: string
}


const Header = (props: HeaderProps) => {
    const { title, description } = props
    return (
        <div className="bg-white py-24 px-6 sm:py-8 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{title}</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    {description}
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">646.286.2960 | dccabs@gmail.com | <Link href="https://github.com/dccabs">github</Link> | <Link href="https://www.linkedin.com/in/dan-cabaniss-b7b1006/">linkedin</Link></p>
            </div>
        </div>
    )
}

export default Header
