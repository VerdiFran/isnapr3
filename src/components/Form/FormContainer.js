import React from 'react'
import {connect} from "react-redux"
import Form from "./Form"
import {
    setAParameter,
    setBParameter,
    setCount, setCParameter,
    setFunctionType, setKParameter,
    setMax,
    setMin,
    setResult
} from "../../redux/formReducer"

class FormContainer extends React.Component {

    render() {
        return <Form {...this.props} onCalcClick={setResult} />
    }
}

let mapStateToProps = (state) => ({
    funcTypes: state.form.functionTypes,
    max: state.form.max,
    min: state.form.min,
    aParameter: state.form.aParameter,
    bParameter: state.form.bParameter,
    cParameter: state.form.cParameter,
    count: state.form.count,
    kParameter: state.form.kParameter
})

export default connect(mapStateToProps, {
    setResult, setMax, setMin, setCount,
    setFunctionType, setAParameter, setBParameter,
    setCParameter, setKParameter})(FormContainer)
