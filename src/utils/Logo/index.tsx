
interface LogoType{
    size: string;
    marginTop?: string;
}
export default function Logo(props: LogoType){
    return(
        <>
            <h1 className="glitch" data-text="ARTHUR" style={{fontSize: props.size, marginTop: props.marginTop}}>ARTHUR</h1>
        </>
    )
}