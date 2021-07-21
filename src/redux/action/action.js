export const incrementAction = num => {
    return {
        type: 'INCREMENT',
        payload: num ? num : 1
    }
}

export const decrementAction = num => {
    return {
        type: 'DECREMENT',
        payload: num ? num : 1
    }
}