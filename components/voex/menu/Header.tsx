import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { setDefaultBreakpoints } from 'react-socks'

import Link from 'next/link'

import { useMoralis } from 'react-moralis'
import { logoVoex } from '@assets'
import { UserContext } from 'context/PreferencesProvider'

setDefaultBreakpoints([{ xs: 0 }, { l: 1199 }, { xl: 1200 }])

const Header = () => {
  const userContext = useContext(UserContext)
  const router = useRouter()

  const {
    isWeb3Enabled,
    isWeb3EnableLoading,
    enableWeb3,
    authenticate,
    isAuthenticated,
    logout: MoralisLogout,
  } = useMoralis()

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) {
      console.log('Enabling web3')

      enableWeb3()
    }
  }, [isAuthenticated, isWeb3Enabled])

  const connectWallet = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: 'Connect Wallet on Voex' })
    } else {
      MoralisLogout()
    }
  }

  const logout = async () => {
    await MoralisLogout()
    localStorage.clear()
    userContext.setUser()
    router.push('/login')
  }

  const gotoProfile = () => {
    userContext.user !== undefined
      ? router.push('/my-profile')
      : router.push('/login')
  }

  const handleSearch = (e: any) => {
    if (e.keyCode === 13) {
      const query = e.target.value
      router.push('/search?search=' + query)
    }
  }

  const redirectHome = () => {
    router.push('/')
  }

  const [showmenu, btn_icon] = useState(false)

  return (
    <div id="myHeader" className="navbar position-relative ">
      <div className="container">
        <div className="row w-100-nav">
          <div className="logo px-0">
            <div className="navbar-title navbar-item">
              <Link href="/">
                <>
                  <img
                    onClick={redirectHome}
                    src={logoVoex.src}
                    className="img-fluid d-block"
                    alt="#"
                    role="button"
                  />
                </>
              </Link>
            </div>
          </div>
          <div className="search">
            <input
              id="quick_search"
              className="xs-hide text-white"
              name="quick_search"
              placeholder="Search VOEX..."
              type="text"
              onKeyUp={handleSearch}
            />
          </div>{' '}
          <div className=" d-block d-xl-none  breakpoint__l-down ">
            {showmenu && (
              <div className="menu d-flex flex-column align-items-center bg-red ">
                <div className="navbar-item">
                  <Link href="/marketplace">
                    <a>MarketPlace</a>
                  </Link>
                </div>

                <div className="navbar-item">
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </div>
                {/* <div className='navbar-item'>
										<a href='/blog'>Blog</a>
									</div> */}
              </div>
            )}
          </div>
          <div className="d-none d-xl-block breakpoint__xl-only">
            <div className="menu">
              <div className="navbar-item">
                <Link href="/marketplace">
                  <a>MarketPlace</a>
                </Link>
              </div>

              <div className="navbar-item">
                <Link href="/about">
                  <a>About</a>
                </Link>
              </div>
              <div className="navbar-item">
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="mainside ms-5 d-flex align-items-center">
            <button onClick={connectWallet} className="btn-main">
              {isAuthenticated ? 'Disconect Wallet' : 'Connect Wallet'}
            </button>
            <div>
              {
                // isAuthenticated ?
                userContext.user != undefined ? (
                  <div className="flex">
                    <img
                      className="bg-round-8"
                      src={
                        process.env.NEXT_PUBLIC_ADMIN_BASE_URL +
                        userContext.user.avatar_url
                      }
                      alt="user profile"
                      width="40"
                      onClick={gotoProfile}
                    />
                    <span
                      className="fa fa-sign-out profile-icon pa-9"
                      onClick={logout}
                    ></span>
                  </div>
                ) : (
                  <div
                    className="far fa-user-circle profile-icon"
                    onClick={gotoProfile}
                  ></div>
                )
                // : <div className="far fa-user-circle profile-icon" onClick={gotoProfile}></div>
              }
            </div>
          </div>
        </div>

        <div
          className="nav-icon text-white"
          onClick={() => btn_icon(!showmenu)}
        >
          <div className="menu-line white bg-white"></div>
          <div className="menu-line1 white bg-white"></div>
          <div className="menu-line2 white bg-white"></div>
        </div>
      </div>
      {/* <div className="bg-danger col-12 text-white text-center">
        This site is currently in ...{" "}
      </div> */}
    </div>
  )
}
export default Header
