import { ReactNode } from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement>

const Card = ({ children, ...cardProps }: CardProps) => {

    return (<div className="bg-white p-5 shadow-md rounded-md" {...cardProps}>
        {children}
    </div>)
}

export default Card;