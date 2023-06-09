import './home.scss'
import Image from 'next/image'
import Head from 'next/head';
export default function Home() {
    return (
        <div className="pages-home">
            <Head>
                <title>First Post</title>
            </Head>
            <div className="pages-home-header">
                <Image src="/img/header.webp"
                    width={375}
                    height={375}
                    alt="未知" />
                <div className="pages-home-header-title">
                    Build a leading brand of<br />
                    China's<br />
                    digital energy solutions
                </div>
            </div>
            <div className="pages-home-main">
                <div className="pages-home-main-title">
                    <div className="pages-home-main-title-text">
                        <div>Company Profile</div>
                        <div className="pages-home-main-title-border" />
                    </div>
                </div>
                <div className="pages-home-main-des">
                    Yotai Digital Energy Group is based in Shenzhen and is committed to integrating digital technology, electronic power technology, energy storage technology and other advanced technologies to provide customers with services like energy storage, electric vehicles charging and swapping, energy management solution. We aim at leading the digitization of clean and intelligence of energy to realize green power generation and high-efficiency electricity consumption, In accordance with the national strategy, Yotai built a new power system so as to contributes to the realization of the national "30·60" carbon target.
                </div>
            </div>
        </div>
    )
}