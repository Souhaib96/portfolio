import Image from "next/image";

interface LogoProps {
    src?: string;
}

const Logo = (props:LogoProps) => {
    return (
        <Image
            src={props.src || ""}
            alt="Logo"
            width={50}
            height={50}
        />
    );
}

export default Logo;
