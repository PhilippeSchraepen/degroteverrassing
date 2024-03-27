import Head from "next/head";

const AnswerPage = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css" />
            </Head>
            <div style={{
                background: "#fefae0",
                color: "black",
                height: '100vh',
                width: '100vw',
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <div style={{background: "#ccd5ae", minHeight: '200px', padding: "2rem", borderRadius: '7px'}}>

                    <h1>Antwoord</h1>
                    <p>De exacte locatie ligt op</p>
                    <p>51.1501 NB</p>
                </div>
            </div>
        </>
    )
}

export default AnswerPage;
