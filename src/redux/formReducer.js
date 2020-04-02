import {getResult} from "../api/api"
import {setResultData} from "./resultReducer"

const EXPONENTIAL = 'exponential'
const QUADRATIC = 'quadratic'
const TRIGONOMETRIC = 'trigonometric'

const EXPONENTIAL_FUNCTION_TYPE = {id: 0, str: 'y = a + b * x^c', type: EXPONENTIAL, isSelected: true}
const QUADRATIC_FUNCTION_TYPE = {id: 1, str: 'y = a + bx + cx^2', type: QUADRATIC, isSelected: false}
const TRIGONOMETRIC_FUNCTION_TYPE = {
    id: 2,
    str: 'y = a + b * sin(x) + c * cos(x)',
    type: TRIGONOMETRIC,
    isSelected: false
}

const SET_MAX_VALUE = 'SET-MAX-VALUE'
const SET_MIN_VALUE = 'SET-MIN-VALUE'
const SET_COUNT = 'SET-COUNT'
const SET_A_PARAMETER = 'SET-A-PARAMETER'
const SET_B_PARAMETER = 'SET-B-PARAMETER'
const SET_C_PARAMETER = 'SET-C-PARAMETER'
const SET_K_PARAMETER = 'SET-K-PARAMETER'
const SET_FUNCTION_TYPE = 'SET-FUNCTION-TYPE'

let initialState = {
    functionTypes: [
        EXPONENTIAL_FUNCTION_TYPE, QUADRATIC_FUNCTION_TYPE, TRIGONOMETRIC_FUNCTION_TYPE
    ],
    min: '',
    max: '',
    count: '',
    aParameter: '',
    bParameter: '',
    cParameter: '',
    kParameter: ''
}

let formReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_MIN_VALUE:
            return {
                ...state,
                min: action.value
            }
        case SET_MAX_VALUE:
            return {
                ...state,
                max: action.value
            }
        case SET_COUNT:
            return {
                ...state,
                count: action.value
            }
        case SET_A_PARAMETER:
            return {
                ...state,
                aParameter: action.value
            }
        case SET_B_PARAMETER:
            return {
                ...state,
                bParameter: action.value
            }
        case SET_C_PARAMETER:
            return {
                ...state,
                cParameter: action.value
            }
        case SET_K_PARAMETER:
            return {
                ...state,
                kParameter: action.value
            }
        case SET_FUNCTION_TYPE:
            return {
                ...state,
                functionTypes: state.functionTypes.map(fType => {
                    return fType.type === action.funcType
                        ? {...fType, isSelected: true}
                        : {...fType, isSelected: false}
                })
            }
        default:
            return state
    }
}

export const setMax = (value) => ({type: SET_MAX_VALUE, value})
export const setMin = (value) => ({type: SET_MIN_VALUE, value})
export const setCount = (value) => ({type: SET_COUNT, value})
export const setFunctionType = (funcType) => ({type: SET_FUNCTION_TYPE, funcType})
export const setAParameter = (value) => ({type: SET_A_PARAMETER, value})
export const setBParameter = (value) => ({type: SET_B_PARAMETER, value})
export const setCParameter = (value) => ({type: SET_C_PARAMETER, value})
export const setKParameter = (value) => ({type: SET_K_PARAMETER, value})

export const setResult = () => (dispatch) => {
    getResult().then(response => dispatch(setResultData(response)))
}

export default formReduser
