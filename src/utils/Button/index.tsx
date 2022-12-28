import { ButtonPrimary } from "./styles";

interface ButtonType {
    icon?: React.ReactNode;
    title: any;
    link: string;
    margin?: string;
}

export default function Button({ icon, title, link, margin }: ButtonType) {
    return (
        <ButtonPrimary
            style={{ margin: `${margin}` }}
            href={link}
            target="_blank"
        >
            <span>
                {icon}
                {title}
            </span>
        </ButtonPrimary>
    );
}
