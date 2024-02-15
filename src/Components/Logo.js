import React from 'react'
import styled from 'styled-components'
import tree from '../Images/tree.png'
import bag from '../Images/Bag.png'

const Container = styled.div`
    width: 100%;
    background-color: #f19720;
`
const Wrapper = styled.div`
    width: 60%;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const Images = styled.img`
    height: 90px;
    width: 90px;
`
const Title  = styled.p`
    font-size: 58px;
    color: #683500;
    font-weight: 900;
    margin: 0;
    letter-spacing: 10px;
`
const Logo = () => {
  return (
    <Container>
      <Wrapper>
      <Images src={tree}/>
      <Title>FARAWAY</Title>
      <Images src={bag}/>
      </Wrapper>
    </Container>
  )
}

export default Logo
