import { FunctionComponent, useState } from 'react'
import Head from 'next/head'
import Header from '@voex'
import { WalletContext } from '../../../context/WalletContext'
import { Footer } from '@voex'

const BaseLayout: FunctionComponent = ({ children }) => {
  const [userWallet, setUserWallet] = useState(null)

  return (
    <WalletContext.Provider value={{ userWallet, setUserWallet }}>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <Header />
      <div className=" min-h-screen BaseLayoutContainer text-white">
        <div className="text-white ">{children}</div>
      </div>
      <Footer />
    </WalletContext.Provider>
  )
}

export default BaseLayout
