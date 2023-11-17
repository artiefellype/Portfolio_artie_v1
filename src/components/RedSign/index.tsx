import Marquee from "react-fast-marquee";
interface RedSignType {
    title: string;
}
export default function RedSign({ title }: RedSignType) {
    return (
        <Marquee
            gradient={false}
            style={{
                fontWeight: "bold",
                fontFamily: "rajdhani Bold",
                fontSize: "258px",
                opacity: "15%",
                color: "#FF124F",
                cursor: "default",
            }}
        >
            {title}
        </Marquee>
    );
}
