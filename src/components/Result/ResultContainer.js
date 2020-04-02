import React from "react"
import Result from "./Result"
import {connect} from "react-redux"

class ResultContainer extends React.Component {

    render() {
        return <Result {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    source: state.result.source,
    sourceWithNoise: state.result.sourceWithNoise,
    receivedMessage: state.result.receivedMessage,
    aParameter: state.result.a,
    bParameter: state.result.b,
    cParameter: state.result.c,
    error: state.result.e,
    aError: state.result.ea,
    bError: state.result.eb,
    cError: state.result.ec
})

export default  connect(mapStateToProps, {})(ResultContainer)
