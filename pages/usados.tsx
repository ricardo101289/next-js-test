import React from 'react'
import { useDispatch } from 'react-redux'
import { withRedux } from '../lib/redux'
import useInterval from '../lib/useInterval'
import Clock from '../src/Used/components/Clock'

const IndexPage = () => {
    const dispatch = useDispatch();
    useInterval(() => {
        dispatch({
            type: 'TICK',
            light: true,
            lastUpdate: Date.now()
        })
    }, 1000);
    return (
        <>
            <Clock />
        </>
    )
}

IndexPage.getInitialProps = ({ reduxStore: {dispatch} }) => {
    dispatch({
        type: 'TICK',
        light: typeof window === 'object',
        lastUpdate: Date.now()
    });
    return {}
};

export default withRedux(IndexPage)
