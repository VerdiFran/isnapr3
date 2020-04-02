import React from 'react'

const Form = (props) => {
    return (
        <div>
            <h2>Source:</h2>
            <form>
                <div>
                    <label htmlFor='func'>Функция:&nbsp;</label>
                    <select
                        id='func'
                        value={props.funcTypes.find(fType => fType.isSelected).type}
                        onChange={(e) => props.setFunctionType(e.target.value)}
                    >
                        {
                            props.funcTypes.map(item => <option
                                key={item.id}
                                value={item.type}
                            >{item.str}</option>)
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor='minValue'>min&nbsp;=&nbsp;</label>
                    <input
                        id='minValue'
                        value={props.min}
                        onChange={(e) => props.setMin(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='maxValue'>max&nbsp;=&nbsp;</label>
                    <input
                        id='maxValue'
                        value={props.max}
                        onChange={(e) => props.setMax(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='count'>count&nbsp;=&nbsp;</label>
                    <input
                        id='count'
                        value={props.count}
                        onChange={(e) => props.setCount(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='aValue'>a&nbsp;=&nbsp;</label>
                    <input
                        id='aValue'
                        value={props.aParameter}
                        onChange={(e) => props.setAParameter(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='bValue'>b&nbsp;=&nbsp;</label>
                    <input
                        id='bValue'
                        value={props.bParameter}
                        onChange={(e) => props.setBParameter(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='cValue'>c&nbsp;=&nbsp;</label>
                    <input
                        id='cValue'
                        value={props.cParameter}
                        onChange={(e) => props.setCParameter(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='kValue'>k&nbsp;=&nbsp;</label>
                    <input
                        id='kValue'
                        value={props.kParameter}
                        onChange={(e) => props.setKParameter(e.target.value)}
                    />
                </div>
                <button onClick={props.setResult}>Рассчитать</button>
            </form>
        </div>
    )
}

export default Form
