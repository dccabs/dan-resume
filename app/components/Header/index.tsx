import Link from 'next/link'

interface HeaderProps {
    title: string
    description: string
}


const Header = (props: HeaderProps) => {
    const { title, description } = props
    return (
        <div className="bg-white pt-8 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h2>
                <p className="mt-6  leading-8 text-gray-600">
                    {description}
                </p>
                <p className="mt-6 leading-8 text-gray-600">646.286.2960 | dccabs@gmail.com | https://github.com/dccabs</p>
            </div>
        </div>
    )
}

export default Header
