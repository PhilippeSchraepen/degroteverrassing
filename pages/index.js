import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {useState} from "react";
import {useRouter} from "next/router";


export default function Home() {
    const [answer, setAnswer] = useState('')
    const router = useRouter();
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
                    <h1>Vraag</h1>
                    <p>In welke stad gaat de verrassing door?</p>
                    <input type={"text"} onChange={(e) => setAnswer(e.target.value)}/>

                    <button style={{marginTop: '1rem'}} onClick={async () => {
                        if (answer.toLowerCase() === 'lier') {
                            await alert('Correct!')
                            await router.push('/answer')
                        } else {
                            alert('Fout!')
                        }
                    }}>Verstuur antwoord</button>
                </div>
            </div>
        </>
    )
}
