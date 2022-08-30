// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  }

  showFirstName = () => {
    const {showFirstName} = this.state
    this.setState({showFirstName: !showFirstName})
  }

  showLastName = () => {
    const {showLastName} = this.state
    this.setState({showLastName: !showLastName})
  }

  render() {
    const {showFirstName, showLastName} = this.state
    const firstName = showFirstName ? 'displayName' : 'hideName'
    const lastName = showLastName ? 'displayName' : 'hideName'
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="btn-container">
          <div>
            <button onClick={this.showFirstName}>Show/Hide Firstname</button>
            <div className={firstName}>
              <p>Roy</p>
            </div>
          </div>
          <div>
            <button onClick={this.showLastName}>Show/Hide Lastname</button>
            <div className={lastName}>
              <p>Joy</p>
            </div>
            <div />
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
