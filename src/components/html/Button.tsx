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
        <Link href={href} className={`btn border-2 border-[#dcff2d] font-roboto-mono text-sm tablet:${size} pt-3 pb-3 pl-4 pr-4 tablet:pt-4 tablet:pb-4 tablet:pl-8 tablet:pr-8`}>{text}</Link>
    );
};

export default Button;