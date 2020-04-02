const SET_RESULT_DATA = 'SET-RESULT-DATA'

let initialState = {
    source: [],
    sourceWithNoise: [],
    receivedMessage: [],
    a: '',
    b: '',
    c: '',
    e: '',
    ea: '',
    eb: '',
    ec: ''
}

let resultReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_RESULT_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export const setResultData = (data) => ({type: SET_RESULT_DATA, data})

export default resultReducer
