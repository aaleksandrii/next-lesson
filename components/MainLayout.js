import Link from "next/link";
import Head from "next/head";

export default function MainLayout({ children, title = 'Next App' }) {
    return <>
        <Head>
            <title>{title} | Next course</title>
            <meta charSet="utf-8" />
            <meta name="keywords" content="js, react, next" />
            <meta name="description" content="Next course bla bla bla" />
        </Head>
        <nav>
            <h1>Navigation</h1>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/posts"><a>Posts</a></Link>
        </nav>
        <main>
            { children }
        </main>
        <style jsx>{`
            nav {
                position: fixed;
                height: 60px;
                left: 0;
                right: 0;
                top: 0;
                background: red;
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
            nav a {
                color: white;
                text-decoration: none;
            }
            maim {
                margin-top: 50px;
                padding: 10px 20px;
            }
        `}</style>
    </>
}
