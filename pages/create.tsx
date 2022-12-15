import React, { Component } from 'react'
import { useMoralis } from 'react-moralis'
import Clock from '@voex/components/Clock'
import { BaseLayout } from '@ui'
import { createGlobalStyle } from 'styled-components'
import axios from 'axios'
import { useState,useContext } from 'react'
import ImageUpload from '@voex/components/avatar/ImageUpload'
import { ImageListType, ImageType } from 'react-images-uploading'
import { useRouter } from 'next/router'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import authApi, { SignupData, UserData } from 'apis/authApi'
import strApi from 'apis/strApi'
import { UserContext } from "context/PreferencesProvider"
// import fs from 'fs'

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
`

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
})

export default function Createpage() {
  const [images, setImages] = useState<ImageListType>([])
  const { Moralis } = useMoralis()
  const router = useRouter()

  type SignupFormData = {
    email: string
    username: string
    password: string
  }

  const onSubmit = (values: SignupFormData) => {
    if (images.length === 0) {
      alert('select avatar')
      return
    }

    let imageFormData = new FormData()

    imageFormData.append('files', images[0].file as File)
    
    strApi
      .upload(imageFormData)
      .then(({ data }) => {
        console.log({ data })
        var profile: SignupData = {
          ...values,
          avatar_url: data[0].url,
          avatar_thumbnail: data[0].formats.thumbnail.url,
        }

        console.log('avatar upload', profile)

        authApi.register(profile).then(() => {
          router.push('/login')
          
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const onImageChange = (images: ImageListType) => {
    setImages(images)
  }

  const gotoLogin = () => {
    router.push('/login')
  }

  
   

  return (
    <div>
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
              <div className="row m-10-hor">
                <div className="col-12">
                  <h1 className="text-center">Sign UP</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 offset-lg-1 col-xs-12">
              <h5>Preview item</h5>
              <ImageUpload images={images} onChange={onImageChange} />
              <div className="spacer-single"></div>
            </div>

            <div className="col-lg-5 offset-lg-1 mb-5">
              <Formik
                initialValues={{
                  username: '',
                  password: '',
                  email: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={onSubmit}
              >
                {({ errors, touched }) => (
                  <Form id="form-create-item" className="form-border">
                    <div className="field-set">
                      <h5>User name</h5>
                      <Field
                        type="text"
                        name="username"
                        id="username"
                        className="form-control"
                        placeholder="User name"
                      />
                      {errors.username && touched.username ? (
                        <div className="validation-error">
                          {errors.username}
                        </div>
                      ) : null}
                      <div className="spacer-10"></div>

                      <h5>Bio</h5>
                      <textarea
                        data-autoresize
                        name="biology"
                        id="biology"
                        className="form-control"
                        placeholder="Please input your biology"
                      ></textarea>

                      <div className="spacer-10"></div>

                      <h5>Email address</h5>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Please input email address"
                      />
                      {errors.email && touched.email ? (
                        <div className="validation-error">{errors.email}</div>
                      ) : null}

                      <h5>Password</h5>
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

                      <div className="spacer-10"></div>

                      <div className="spacer-10"></div>

                      <div className="d-flex justify-content-center">
                        <input
                          type="submit"
                          id="submit"
                          className="btn-main"
                          value="Save"
                        />
                        <button className="btn-main" onClick={gotoLogin}>
                          {' '}
                          Goto Login{' '}
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </section>
      </BaseLayout>
    </div>
  )
}
