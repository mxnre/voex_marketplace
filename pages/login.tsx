import React, { useState, useContext } from 'react'
import { createGlobalStyle } from 'styled-components'
import { BaseLayout } from '@ui'
import axios from 'axios'
import Router from 'next/router'
import { MoralisContextValue, useMoralis } from 'react-moralis'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import authApi, { LoginResponse, UserData, WalletResponse } from 'apis/authApi'
import strApi from 'apis/strApi'
import { UserContext } from 'context/PreferencesProvider'
import Moralis from 'moralis/types'
import VoexStorage from 'utils/voex.storage'

const GlobalStyles: any = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #403f83;
    border-bottom: solid 1px #403f83;
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: rgba(255, 255, 255, .5);
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;

const SignInSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
})

const gotoRegister = () => {
  Router.push('create')
}

const logintwo = () => {
  const context = useContext(UserContext)
  const [isSignInError, setSignInError] = useState<boolean | string>()

  const {
    isAuthenticated,
    user,
    authenticate,
    logout: MoralisLogout,
  }: MoralisContextValue = useMoralis()

  const onSubmit = async (values: { email: string; password: string }) => {
    
    let currentUser: Moralis.User<Moralis.Attributes>
    if (!isAuthenticated || !user) {
      let newUser = await authenticate()
      if (!newUser) {
        return
      }
      currentUser = newUser
    } else {
      currentUser = user
    }

    authApi
      .login({
        identifier: values.email,
        password: values.password,
      })
      .then(async ({ jwt, user: userData }: LoginResponse) => {
        const user_id = userData.id
        const wallets: WalletResponse[] = await authApi.getMyWallets(user_id)
        console.log({ wallets })

        let exist_current_address = false
        const wallet_ids = []
        wallets.forEach((item: WalletResponse) => {
          wallet_ids.push(item.id)
          if (item.wallet_address === currentUser.attributes.ethAddress)
            exist_current_address = true
        })

        if (!exist_current_address) {
          const new_wallet = await strApi
            .createWallet({
              user_id: user_id,
              wallet_address: currentUser.attributes.ethAddress,
            })
            .catch((error) => {
              if (error.response.status === 400) {
                MoralisLogout();
                return Promise.reject(
                  new Error('The wallet already registered by another user.'),
                )
              }
              return Promise.reject(error)
            })

          wallet_ids.push(new_wallet.id)

          await authApi.updateUserData({ wallet_ids })
        }

        context.setUser(userData)
        VoexStorage.setItem('strapi-jwt', `Bearer ${jwt}`)

        setSignInError(false)
        Router.push('/my-profile')
      })
      .catch((error) => {
        console.log(error)
        
        error.response && console.log(error.response.data.error.message)
        setSignInError(error.message)
      })
  }

  return (
    <BaseLayout>
      <GlobalStyles />
      <section
        className="jumbotron breadcumb no-bg"
        style={{
          backgroundImage: `url(${'./img/background/subheader.jpg'})`,
        }}
      >
        <div className="mainbreadcumb">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-5 text-light wow fadeInRight"
                data-wow-delay=".5s"
              >
                <div className="spacer-10"></div>
                <h1>Sign In</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  ut enim.
                </p>
              </div>
              <div
                className="col-lg-4 offset-lg-2 wow fadeIn"
                data-wow-delay=".5s"
              >
                <div className="box-login">
                  <h3 className="mb10">Sign In</h3>
                  <p>
                    Login using an existing account or create a new account{' '}
                    <span onClick={gotoRegister}>here</span>.
                  </p>
                  <Formik
                    initialValues={{
                      password: '',
                      email: '',
                    }}
                    validationSchema={SignInSchema}
                    onSubmit={onSubmit}
                  >
                    {({ errors, touched }) => (
                      <Form
                        name="contactForm"
                        id="contact_form"
                        className="form-border"
                      >
                        <div className="field-set">
                          <Field
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="username"
                          />
                          {errors.email && touched.email ? (
                            <div className="validation-error">
                              {errors.email}
                            </div>
                          ) : null}
                        </div>

                        <div className="field-set">
                          <Field
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            placeholder="password"
                          />
                          {errors.password && touched.password ? (
                            <div className="validation-error">
                              {errors.password}
                            </div>
                          ) : null}
                        </div>

                        {isSignInError ? (
                          <div className="validation-error">
                            {isSignInError}
                          </div>
                        ) : null}

                        <div className="field-set">
                          <input
                            type="submit"
                            id="send_message"
                            value="Submit"
                            className="btn btn-main btn-fullwidth color-2"
                          />
                        </div>

                        <div className="clearfix"></div>

                        <div className="spacer-single"></div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}
export default logintwo
