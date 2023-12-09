// Write your code here.

import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="head">FAQs</h1>
          <ul className="con">
            {faqsList.map(each => (
              <FaqItem key={each.id} faqsDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
