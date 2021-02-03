import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/solution/throttle.module.sass";

const Main = () => {
    // 쓰로틀링과 디바운스를 체크하기 위한 변수를 만들어줍니다.
    let throttleCheck
    // throttle과 debounce 모두 실행할 콜백 함수와 실행할 주기를 인자로 받습니다.
    const throttle = (callback, milliseconds) => {
        return () => {
            if (!throttleCheck) {
                // setTimeout을 이용하여 설정한 주기마다 콜백이 실행될 수 있도록 하였고,
                // 실행이 끝난 후에는 다시 throttleCheck를 false로 만들어 주어, 설정한 주기마다 이벤트가 한 번씩만 호출되도록 하였습니다.
                throttleCheck = setTimeout(() => {
                    callback(...arguments)
                    throttleCheck = false
                }, milliseconds)
            }
        }
    }
    const throttleFunc = throttle(() => {
        console.log("scroll!")
    }, 300);
    const handleScroll = () => {
        throttleFunc()
    };
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
            <link
                rel="apple-touch-icon"
                sizes="57x57"
                href="/icon/apple-icon-57x57.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="60x60"
                href="/icon/apple-icon-60x60.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="72x72"
                href="/icon/apple-icon-72x72.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="76x76"
                href="/icon/apple-icon-76x76.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="114x114"
                href="/icon/apple-icon-114x114.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="120x120"
                href="/icon/apple-icon-120x120.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="144x144"
                href="/icon/apple-icon-144x144.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="152x152"
                href="/icon/apple-icon-152x152.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/icon/apple-icon-180x180.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="/icon/android-icon-192x192.png"
            />
            <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icon/favicon-32x32.png"
            />
            <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/icon/favicon-96x96.png"
            />
            <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icon/favicon-16x16.png"
            />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta
            name="msapplication-TileImage"
            content="/icon/ms-icon-144x144.png"
            />
            <meta name="theme-color" content="#ffffff" />
            <link href="/fonts.css" rel="stylesheet" />
            <title>Throttle Solution</title>
        </Head>

        <main>
            <Link href="/">
            <p>To Main Page</p>
            </Link>
            <div>Throttle Solution</div>
            <div className={styles.wrap} onScroll={handleScroll}>
            <div className={styles.inBox} />
            </div>
        </main>
        </div>
    );
};

export default Main;
