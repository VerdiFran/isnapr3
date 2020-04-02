import React from "react"

const Result = (props) => {
    return (
        <div>
            <h2>Result</h2>
            <table>
                <thead>
                <tr>
                    <th>x</th>
                    <th>y</th>
                </tr>
                </thead>
                <tbody>
                {props.source.map(row => <tr>
                    <td>{row.x}</td>
                    <td>{row.y}</td>
                </tr>)}
                </tbody>
            </table>
            <table></table>
            <table></table>
            <table></table>
        </div>
    )
}

export default Result
