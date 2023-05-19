import Link from "next/link";

interface ButtonProps {
    text: string;
    href?: string;
    size?: string;
}

const Button = (props: ButtonProps) => {
    const text = props.text;
    const href = props.href ?? "";
    const size = props.size ?? "text-xl"
    return(
        <Link href={href} className={`btn border-2 border-[#dcff2d] pt-4 pb-4 pl-8 pr-8 font-roboto-mono ${size}`}>{text}</Link>
    );
};

export default Button;