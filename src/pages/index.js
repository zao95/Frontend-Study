import Head from 'next/head'
import Link from 'next/link'

const Main = () =>{
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
                <title>Main Page</title>
            </Head>

            <main>
                <div>Main Page</div>
                <Link href="/solution/throttle"><p className="link">Throttle</p></Link>
                <Link href="/solution/infinitescroll"><p className="link">Infinite Scroll[미구현]</p></Link>
                <Link href="/solution/todolist"><p className="link">Todo List[미구현]</p></Link>
                <Link href="/solution/sort"><p className="link">Sort[미구현]</p></Link>
                <Link href="/solution/asyncsearch"><p className="link">Async Search[미구현]</p></Link>
                <Link href="/solution/loading"><p className="link">Loading</p></Link>
            </main>
        </div>
    )
}

export default Main