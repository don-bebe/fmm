import React, { ReactNode } from "react";

interface CardContentProps {
    children: ReactNode;
    className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
    return (
        <div className={`flex flex-col items-center ${className || ""}`}>
            {children}
        </div>
    );
};

export default CardContent;
