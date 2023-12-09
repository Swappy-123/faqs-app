// Write your code here.

import {Component} from 'react'

import './index.css'

const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isChange: false}

  answerText = () => {
    const {faqsDetails} = this.props
    const {answerText} = faqsDetails
    const {isChange} = this.state

    if (isChange) {
      return (
        <div>
          <hr className="hori" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  toggleBtn = () => {
    this.setState(prevState => ({
      isChange: !prevState.isChange,
    }))
  }

  buttonText = () => {
    const {isChange} = this.state

    const imgUrl = isChange ? minusImg : plusImg

    const imgAlt = isChange ? 'minus' : 'plus'

    return (
      <button className="button" type="button" onClick={this.toggleBtn}>
        <img src={imgUrl} alt={imgAlt} />
      </button>
    )
  }

  render() {
    const {faqsDetails} = this.props
    const {questionText} = faqsDetails

    return (
      <li className="container">
        <div className="itemCon">
          <h1 className="ques">{questionText}</h1>
          {this.buttonText()}
        </div>

        {this.answerText()}
      </li>
    )
  }
}

export default FaqItem
