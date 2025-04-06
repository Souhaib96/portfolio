import React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {

}
const Section = ({className: string, ...props}: SectionProps) => {
    return (
        <section className={`w-full py-16 flex flex-col items-center justify-center ${string}`} {...props}/>
    );
}
/*
const Section = ({ children }:{ children: React.ReactNode }) => {
    return (
        <section className="py-16">
            {children}
        </section>
    );
}*/

export default Section;