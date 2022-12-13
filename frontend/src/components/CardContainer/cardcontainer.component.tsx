import React from "react";

interface CardContainerProps extends React.HTMLAttributes<HTMLDivElement> { }

const CardContainer = ({ children, ...cardContainerProps }: CardContainerProps) => {
    return <div className="flex flex-grow items-center justify-center h-full" {...cardContainerProps}>{children}</div>
}

export default CardContainer;