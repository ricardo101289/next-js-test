import React from 'react'
import { useDispatch } from 'react-redux'
import { withRedux } from '../lib/redux'
import useInterval from '../lib/useInterval'
import Counter from '../src/Used/components/Counter'

const IndexPage = () => {
  // Tick the time every second
  const dispatch = useDispatch()
  useInterval(() => {
    dispatch({
      type: 'TICK',
      light: true,
      lastUpdate: Date.now()
    })
  }, 1000);
  return (
    <>
      <Counter />
    </>
  )
};

IndexPage.getInitialProps = ({ reduxStore: {dispatch} }) => {
  dispatch({
    type: 'TICK',
    light: typeof window === 'object',
    lastUpdate: Date.now()
  });

  return {}
};

export default withRedux(IndexPage)
