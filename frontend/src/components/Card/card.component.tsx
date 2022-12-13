type CardProps = React.HTMLAttributes<HTMLDivElement>

const Card = ({ children, ...cardProps }: CardProps) => {

    return (<div className="bg-white px-5 py-10 shadow-md rounded-lg" {...cardProps}>
        {children}
    </div>)
}

export default Card;