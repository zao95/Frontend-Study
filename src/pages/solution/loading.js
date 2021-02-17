import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import styles from "../../styles/solution/loading.module.sass"
import { useState, useRef } from 'react'
import { getRandomInt } from "../../utils/utils"

const Loading = () => {
    const [contents, setContents] = useState("")
    const textInput = useRef(null)
    const loadingButton = useRef(null)

    const handleClick = async () => {
        const animationClass = `loading${getRandomInt(0, 15)}`
        loadingButton.current.classList.add(animationClass, "playAnimation")
        loadingButton.current.value = ""
        const response = await axios.get(`${window.location.origin}/api/test?input=${textInput.current.value}`)
        const data = response.data.contents
        data && setContents(`${contents}\n${data}`)
        loadingButton.current.classList.remove(animationClass, "playAnimation")
        loadingButton.current.value = "Button"
    }

    return (
        <div>
            <div className={styles.inputWrap}>
                <input ref={textInput} type="text" placeholder="Input any text" className={styles.textInput} />
                <input ref={loadingButton} type="button" value="Button" onClick={handleClick} className={styles.loading} />
            </div>
            <pre>
                {contents}
            </pre>
        </div>
    )
}

const Page = () => {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/icon/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Lee Jeong-woo, Frontend Developer & Designer"
                />
                <meta name="robots" content="index" />
                <link rel="apple-touch-icon" sizes="57x57" href="/icon/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/icon/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/icon/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/icon/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/icon/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/icon/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/icon/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/icon/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192"  href="/icon/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/icon/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/icon/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />
                <link href="/fonts.css" rel="stylesheet" />
                <title>Loading Solution</title>
            </Head>

            <main>
                <Link href="/"><p className="link">To Main Page</p></Link>
                <div>Loading Solution</div>
                <p>API 호출 시 서버와 통신하는 동안,</p>
                <p>랜덤한 로딩 이미지를 사용자에게 svg에 내장된 애니메이션으로 보여주면서</p>
                <p>API 응답이 오면 원상태로 버튼을 보여주는 형태</p>
                <Loading />
            </main>
        </div>
    )
}

export default Page