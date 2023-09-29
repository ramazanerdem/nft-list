import { useState } from 'react'
import { IData } from '../../dataTypes/nftTypes'
import axios from 'axios'
import useSWR from 'swr'

const Main = () => {
  const [nftCount, setNftCount] = useState<number | undefined>()

  const URI: string = import.meta.env.VITE_URI
  const KEY: string = import.meta.env.VITE_API_KEY

  var nftFullName: string[]
  var nftName: string
  var nftNameCode: string

  const headers = {
    'X-API-KEY': KEY,
  }

  const fetcher = async (URI: string) => {
    try {
      const { data } = await axios.get(URI, { headers })
      const content: IData[] = data.data.content
      if (content) {
        const nftLength = content.length
        setNftCount(nftLength)
      }
      return content
    } catch (err) {
      console.log(err)
    }
  }
  const {
    data: nftData,
    error,
    isLoading,
  } = useSWR<IData[] | undefined>(URI, fetcher)

  return (
    <main className="">
      <section className="top-section">
        <img src="./yachtclub.avif" alt="yachtclub" />
      </section>
      <section className="collector-section">
        <article className="collector-article">
          <div className="collector-container">
            <img src="./cyberholy.png" alt="cyberholy" />
          </div>
        </article>
        <h1>Cyberholy</h1>
        <p>
          CyberHoly is a company that brings innovative solutions to the world
          of NFT and Web3 under the UnivestHub company, and offers new ideas to
          the world of entertainment and advertising.
        </p>
        <article className="info-container">
          <div>
            <span>1.341.749 ETH</span>
            <span>total volume</span>
          </div>
          <div>
            <span>19.43 ETH</span>
            <span>floor price</span>
          </div>
          <div>
            <span>18.194 WETH</span>
            <span>best offer</span>
          </div>
          <div>
            <span>5%</span>
            <span>listed</span>
          </div>
          <div>
            <span>2.426</span>
            <span>owners</span>
          </div>
          <div>
            <span>63%</span>
            <span>unique owners</span>
          </div>
        </article>
      </section>
      <section className="mid-section">
        <article className="left-article">
          <div>
            <span>Items</span>
            <span>{nftCount}</span>
          </div>
          <div>
            <span>Created</span>
            <span>Apr 2021</span>
          </div>
          <div>
            <span>Creator earnings</span>
            <span>2.5%</span>
          </div>
          <div>
            <span>Chain</span>
            <span>Ethereum</span>
          </div>
          <div>
            <span>Category</span>
            <span>PFPs</span>
          </div>
        </article>
        <article className="right-article">
          <ul>
            {isLoading ? (
              <div className="loading">Loading...</div>
            ) : error ? (
              <div className="error">Fetch Error!</div>
            ) : (
              nftData &&
              nftData.map((nft) => {
                nftFullName = nft.name.split('#')
                if (nftFullName.length > 1) {
                  nftName = nftFullName[0]
                  nftNameCode = nftFullName[1]
                }
                return (
                  <li key={nft.name}>
                    <div className="image-container">
                      <img src={nft.image_uri} alt={nftName} />
                    </div>
                    <div className="content-container">
                      <h2>#{nftNameCode}</h2>
                      <h3>
                        <span>Collection: </span>
                        {nftName}
                      </h3>
                    </div>
                  </li>
                )
              })
            )}
          </ul>
        </article>
      </section>
    </main>
  )
}
export default Main
