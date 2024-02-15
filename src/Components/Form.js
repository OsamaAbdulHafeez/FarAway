import React, { useState } from 'react'
import styled from 'styled-components'
import emogi from '../Images/Imogi.png'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #df6b1b;
    padding: 20px 0;
    gap: 20px;
`
const Trip = styled.p`
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1.5px;
    margin: 0px;
    display: flex;
    align-items: center;
`
const Emogi = styled.img`
    width: 30px;
    height: 30px;
`
const Numbers = styled.select`
  background-color: #fde7aa;
  border: none;
  font-size: 18px;
  padding: 5px 10px;
  border-radius: 20px;
  width: 70px;
  outline: none;
`
const Input = styled.input`
  background-color: #fde7aa;
  border: none;
  font-size: 18px;
  padding: 5px 20px;
  border-radius: 20px;
  color: #000;
  outline: none;
`
const Button = styled.button`
  background-color: #67c1a3;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-weight: 600;
  font-family: sans-serif;
`
const NumbersArr = []

for (let i = 1; i <= 20; i++) {
  NumbersArr.push(i)
}
const Form = ({ list, setList }) => {
  const [quantity, setQuantity] = useState(1)
  const [item, setItem] = useState("")
  const add = () => {
    const copyList = [...list]
    const addItem = {
      Quantity: quantity,
      Item: item,
      Packed: false
    }
    copyList.push(addItem)
    setList(copyList)
    setItem('')
    setQuantity('')
  }
  return (
    <Container>
      <Trip>what do you need for your<Emogi src={emogi} />trip?</Trip>
      <Numbers onChange={(e) => setQuantity(e.target.value)} value={quantity}>
        {NumbersArr.map(e => (
          <option value={e}>{e}</option>
        ))}
      </Numbers>
      <Input type='text' placeholder='...items' value={item} onChange={(e) => setItem(e.target.value)} />
      <Button onClick={add}>ADD</Button>
    </Container>
  )
}

export default Form
