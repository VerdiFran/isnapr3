import React from 'react'

const Calculation = (props) => {
    return (
        <div>
            <form>
                <label htmlFor='func'>Функция:&nbsp;</label>
                <select id='func'>
                    <option>y&nbsp;=&nbsp;a&nbsp;+&nbsp;b&nbsp;*&nbsp;x^c</option>
                    <option>y&nbsp;=&nbsp;a&nbsp;+&nbsp;bx&nbsp;+&nbsp;cx^2</option>
                    <option>y&nbsp;=&nbsp;a&nbsp;+&nbsp;b&nbsp;*&nbsp;sin(x)&nbsp;+&nbsp;c&nbsp;*&nbsp;cos(x)</option>
                </select>
                <label htmlFor='minValue'>min&nbsp;=&nbsp;</label>
                <input id='minValue'/>
                <label htmlFor='maxValue'>max&nbsp;=&nbsp;</label>
                <input id='maxValue'/>
                <label htmlFor='count'>count&nbsp;=&nbsp;</label>
                <input id='count'/>
                <label htmlFor='aValue'>a&nbsp;=&nbsp;</label>
                <input id='aValue'/>
                <label htmlFor='bValue'>b&nbsp;=&nbsp;</label>
                <input id='bValue'/>
                <label htmlFor='cValue'>c&nbsp;=&nbsp;</label>
                <input id='cValue'/>
                <label htmlFor='kValue'>k&nbsp;=&nbsp;</label>
                <input id='kValue'/>
                <button onClick={props.onCalcClick}>Рассчитать</button>
            </form>
        </div>
    )
}

export default Calculation
