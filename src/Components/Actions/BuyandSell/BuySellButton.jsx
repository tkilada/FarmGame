import React from 'react'
import { Button, Container } from 'reactstrap'
import Buy from './Buy/Buy'
import Sell from './Sell/Sell'
import './BuySell.css'
function BuySellButton() {

  return (
    <Container className='ShopBuySellContainer'>
      <Buy></Buy>
      <Sell></Sell>
    </Container>
  )
}

export default BuySellButton