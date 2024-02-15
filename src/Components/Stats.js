import React, { useState } from 'react'
import styled from 'styled-components'
import bag from "../Images/Bag.png"

const Container = styled.div`
    background-color: #67c1a3;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    gap: 20px;
`
const Image = styled.img`
    width: 30px;
    height: 30px;
`
const Text = styled.p`
    font-size: 22px;
    font-weight: 600;
    color: #303b27;
`
const Stats = ({ list,count,percentage,setPercentage }) => {
    const per = (count/list.length)*100
    setPercentage(per)
  return (
    <Container>
      <Image src={bag}/><Text>You have {list.length} items on your list, and you already packed {count} ({Math.ceil(percentage)}%)</Text>
    </Container>
  )
}

export default Stats
