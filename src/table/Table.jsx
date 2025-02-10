import Row from "./Row.jsx";

export default function Table() {
    return (
        <table border="1" cellPadding="5" style={{ marginBottom: "10px" }}>
            <tbody>
                <Row id="1" text="Satu" />
                <Row id="2" text="Dua" />
                <Row id="3" text="Tiga" />
            </tbody>
        </table>
    )
}
