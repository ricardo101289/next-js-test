import { useSelector, shallowEqual } from 'react-redux'


const useClock = () => {
    return useSelector(
        state => ({
            lastUpdate: state.lastUpdate,
            light: state.light
        }),
        shallowEqual
    )
};

export const formatTime = time => {
    return new Date(time).toJSON().slice(11, 19)
};

export default useClock;