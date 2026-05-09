import "./cashbutton.css"

const CashButton = (props) => {
    const {detailsBtn,decreaseValue} = props
    const {value} = detailsBtn

    const decreaseAm = () =>{
        decreaseValue(value)
    }


    return(
        <li className="list">
            <button className="Btn" onClick={decreaseAm} type="button">{value}</button>
        </li>
    )
}

export default CashButton