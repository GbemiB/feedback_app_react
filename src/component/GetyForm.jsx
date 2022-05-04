import { useState } from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'
import { Link } from 'react-router-dom'

function GetyForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(15)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  // Conditions and responses
  const handleTextChange = ({ target: { value } }) => { // 👈  get the value
    if (value === '') {
      setBtnDisabled(true)
      setMessage(null)
      
  // Conditions and responses
    } else if (value.trim().length < 5) { // 👈 check for less than 10
      setMessage('Text must be at least 10 characters, The characters are way too small, try to do better')
      setBtnDisabled(true)
    } else if (value.trim().length >5 && value.trim().length < 10) { // 👈 check for less than 10
      setMessage('Text must be at least 10 characters, The characters are still small, add little more effort')
      setBtnDisabled(true)
    } else if (value.trim().length > 15) { // 👈 check for less than 10
      setMessage('Text must not be more than 1s characters, The characters are much, reduce a bit')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(value)
  }

  return (
    <Card>
      <form >
        <h4>Customer Feedback Form</h4>
      <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Please enter your name'
            value={text}
          />
        </div>
        {message && <div className='message'>{message}</div>}
        <div className='input-group'>
  
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Please enter your age'
            value={text}
          />
        </div>
        {message && <div className='message'>{message}</div>}
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Please enter your occupation'
            value={text}
          />
        </div>
        {message && <div className='message'>{message}</div>}

        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating} />
        
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
      <Link to='/about'>Go to about</Link> 
    </Card>
  )
}


export default GetyForm
