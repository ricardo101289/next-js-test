import React from 'react'
import VehicleCard from '../src/Used/components/VehicleCard'
import {withApollo} from '../lib/apollo'
import { useRouter } from 'next/router';

export const config = { amp: true };

const IndexPage = () => {
    const router = useRouter();
    return <VehicleCard query={router.query}/>;
};

export default withApollo(IndexPage)
