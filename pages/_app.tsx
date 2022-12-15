import '../styles/globals.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Web3Provider } from '@providers'
import { ethers } from 'ethers'
import { ToastContainer } from 'react-toastify'
import { MoralisProvider } from 'react-moralis'
import { NftProvider } from 'use-nft'
import 'react-toastify/dist/ReactToastify.css'
import PreferencesProvider from "context/PreferencesProvider"


function MyApp({ Component, pageProps }: AppProps) {
  const serverUrl = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL
  const appId = process.env.NEXT_PUBLIC_MORALIS_APP_ID

  const rpc_provider = new ethers.providers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_GOERLI_PROVIDER_URL || "https://goerli.infura.io/v3/5ee386b7234c487284fc76a8677c1500",
  )
  const fetcher = ['ethers', { ethers, provider: rpc_provider }]

  return (
    <MoralisProvider serverUrl={`${serverUrl}`} appId={`${appId}`}>
      <>
        <NftProvider fetcher={fetcher as any}>
          <ToastContainer />
          <Web3Provider>
            <PreferencesProvider>
                <Component {...pageProps} />
            </PreferencesProvider>
          </Web3Provider>
        </NftProvider>
      </>
    </MoralisProvider>
  )
}

export default MyApp
