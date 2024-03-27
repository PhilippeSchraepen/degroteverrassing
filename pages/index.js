import Head from 'next/head'
import {useState} from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import anne from "/public/anne.png";

export default function Home() {
    const [answer, setAnswer] = useState('')
    const router = useRouter();
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css" />
            </Head>
            <div className={"bg"}>
                <div style={{background: "#ccd5ae", minHeight: '200px', padding: "2rem", borderRadius: '7px', display: 'flex', gap: '2rem', flexWrap: 'wrap'}}>
                    <Image src={anne} placeholder="blur" width={150} height={200}  alt=""/>
                    <div>
                        <h1>Vraag</h1>
                        <p>In welke stad gaat de verrassing door?</p>
                        <input type={"text"} value={answer} onChange={(e) => setAnswer(e.target.value)}/>
                        <button style={{marginTop: '1rem'}} onClick={async () => {
                            if (answer.toLowerCase() === 'lier') {
                                await alert('Correct!')
                                await router.push('/answer')
                            } else {
                                alert('Fout!')
                                setAnswer('');
                            }
                        }}>Verstuur antwoord</button>
                    </div>
                </div>
            </div>
        </>
    )
}
