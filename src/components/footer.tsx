import Link from "next/link";
import ContainerContent from "./container-content";

import Logo from "./logo";

export const Footer = () => {
    return (
        <footer className="flex items-center justify-center bg-background h-[5rem]">
            <ContainerContent className="flex flex-row items-center justify-center gap-4 py-2">
                <Link href="https://github.com/Souhaib96">
                    <Logo src={'/github.svg'}/>
                </Link>
                <Link href="https://www.linkedin.com/in/souhaib-abdessamie-bounah-405292b7/">
                    <Logo src={'/in.png'}/>
                </Link>
                
            </ContainerContent>
            
        </footer>
    );
}