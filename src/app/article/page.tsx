import './article.scss'
import Image from 'next/image'
import Head from 'next/head';
export default function Article() {
    return (
        <div className="pages-article">
            <Head>
                <title>First Post</title>
            </Head>
            <div className="pages-article-header">
                <Image src="/img/header.webp"
                    width={375}
                    height={375}
                    alt="未知" />
                <div className="pages-article-header-title">
                    Build a leading brand of<br />
                    China's<br />
                    digital energy solutions
                </div>
            </div>
            <div className="pages-article-main">
                <div className="pages-article-main-title">
                    <div className="pages-article-main-title-text">
                        <div>Company Profile</div>
                        <div className="pages-article-main-title-border" />
                    </div> 
                </div>
                <div className="pages-article-main-des">
                    Yotai Digital Energy Group is based in Shenzhen and is committed to integrating digital technology, electronic power technology, energy storage technology and other advanced technologies to provide customers with services like energy storage, electric vehicles charging and swapping, energy management solution. We aim at leading the digitization of clean and intelligence of energy to realize green power generation and high-efficiency electricity consumption, In accordance with the national strategy, Yotai built a new power system so as to contributes to the realization of the national "30·60" carbon target.
                </div>
            </div>
        </div>
    )
}