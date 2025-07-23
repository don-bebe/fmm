import React, { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
    return (
        <div className={`bg-white shadow-lg rounded-2xl p-6 ${className || ""}`}>
            {children}
        </div>
    );
};

export default Card;
