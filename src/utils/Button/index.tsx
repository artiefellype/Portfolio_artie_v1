import { ButtonPrimary } from './styles';

interface ButtonType{
    title: string;
    link: string;
    margin?: string;
}

export default function Button({title, link, margin}: ButtonType){
    return(
        <ButtonPrimary style={{margin: `${margin}`}} href={link} target="_blank"><span>{title}</span></ButtonPrimary>
    );

}