
interface LogoType{
    size: string;
}
export default function Logo(props: LogoType){
    return(
        <>
            <div className="glitch" data-text="ARTHUR" style={{fontSize: props.size}}>ARTHUR</div>
            <div className="glow">ARTHUR</div>
        </>
    )
}