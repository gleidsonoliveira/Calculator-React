import React from 'react'
import './Button.css';

//Cria um componente sem estado.
export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button onClick={e => props.click && props.click(props.label)} className={classes}>{props.label}</button>
    )
}

// Outra forma de utilizar a criação de botão com if ternario de classes 
// export default props =>
//  <button className={`
//      button
//      ${props.operation ? 'operation' : ''}
//      ${props.double ? 'double' : ''}
//      ${props.triple ? 'triple' : ''}
//      `}>{props.label}</button>



