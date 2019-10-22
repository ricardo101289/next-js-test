import React from 'react'
import VehicleCard from '../src/Used/components/VehicleCard'
import {withApollo} from '../lib/apollo'
import {useRouter} from 'next/router'
import Layout from "../src/Used/components/Layout/Layout";

export const config = {amp: true};

const IndexPage = () => {
  const router = useRouter();
  return <Layout title="APP | USADOS"><VehicleCard query={router.query}/>;</Layout>
};

export default withApollo(IndexPage)