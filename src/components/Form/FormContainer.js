import React from 'react'
import {connect} from "react-redux"
import Form from "./Form"

class FormContainer extends React.Component {

    render() {
        return <Form {...this.props}/>
    }
}

let mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {})(FormContainer)
