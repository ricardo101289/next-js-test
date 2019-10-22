import VehicleCard from '../src/Used/components/VehicleCard'
import Layout from "../src/Used/components/Layout/Layout";
import {useRouter} from 'next/router'
import {withApollo} from '../lib/apollo'

export const config = {amp: true};
const IndexPage = () => {
  const router = useRouter();
  return (
<Layout title="APP | USADOS"><VehicleCard query={router.query}/>;</Layout>
  )
};

IndexPage.getInitialProps = () => {
  return {}
};

export default withApollo(IndexPage)
