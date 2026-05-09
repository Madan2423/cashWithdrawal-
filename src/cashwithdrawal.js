import {Component} from "react"
import CashButton from "./cashbutton"
import "./cashwithdrawal.css"

class CashWithdrawal extends Component {
    state = {amount: 2000}

    decreaseValue = (value) => {
        this.setState(prevState => ({
            amount : prevState.amount - value
        }))
    }

    render() {
        const {amount} = this.state
        const {denominationsList} = this.props
        return(
            <div className="outter">
                <div className="inner">
                    <div className="profile">
                        <p className="p1">S</p>
                        <h1 className="h1">Sarah Williams</h1>
                    </div>
                    <div className="balance">
                        <div>
                            <h1 className="h2">Your Balance</h1>
                        </div>
                        <div className="amount">
                            <h1 className="h3">{amount}</h1>
                            <p className="p2">In Rupees</p>
                        </div>
                    </div>
                    <div className="withD">
                            <h1 className="h4">Withdraw</h1>
                            <h4 className="h5">CHOOSE SUM (IN RUPEES)</h4>
                    </div>
                    <ul className="unorder">
                        {denominationsList.map(each => 
                            <CashButton detailsBtn={each} key={each.id} decreaseValue={this.decreaseValue}/>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default CashWithdrawal