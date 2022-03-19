import { Link } from 'react-router-dom'
import { FaSnowflake } from 'react-icons/fa'
import Card from '../component/shared/Card'

function AboutPage(props) {
  return (
    <Card>
      <div className='about'>
        <h1>About This Gety Store</h1>
        <p>We are existed to have you in this shopping mall</p>
        <p>Promise: You'll be wowed <span> <FaSnowflake size={20} /></span></p>
        <h3>ITEMS</h3>
        <p>Wrist watch</p>
        <p>Ladies gown</p>
        <p>Ladies shirts</p>
        <p>Ladies Polo</p>
        <p>Ladies Pants</p>
        <p>Ladies Underwears</p>
        <p> Makeup</p>
        <p> Human hair wigs</p>
        <p> Sleeping dresses</p>
        <p>Men pants</p>
        <p>Men shirts</p>
        <p>Men Polo</p>
        <p>Men footwears</p>
        <p>Men Underwears</p>
        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
