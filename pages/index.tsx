/* eslint-disable @next/next/no-img-element */

import type { NextPage } from 'next'
import { BaseLayout } from '@ui'
import { HomeHeader } from '@voex/components/HomeHeader'
import {
  FeaturedNFTs,
  HomeAdvertising,
  HomeBlog,
  UpcomingProjects,
} from '@voex'

const Home: NextPage = () => {
  return (
      <BaseLayout>
        <HomeHeader />
        <UpcomingProjects />
        <FeaturedNFTs />
        <HomeAdvertising />
        <HomeBlog />
      </BaseLayout>
    
   
  )
}

export default Home
