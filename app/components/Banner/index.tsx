interface BannerProps {
    title : string
    children : React.ReactNode
}

const Banner = (props: BannerProps) => {
    const { title, children } = props
    return (
        <div className="flex items-center justify-center gap-x-6 bg-indigo-600 py-2.5 px-6 sm:px-3.5" data-test-id="banner">
            <div className="text-sm leading-6 text-white">
                {title}
                <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                    <circle cx={1} cy={1} r={1} />
                </svg>
                {children}
            </div>
        </div>
    )
}

export default Banner
