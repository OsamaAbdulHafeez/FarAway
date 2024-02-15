import React from 'react'
import styled from 'styled-components'
import List from './List'

const sortingArr = [
    "Sort by Input Order",
    "Sort by Description",
    "sort by packed List"
]
const Container = styled.div`
    background-color: #4c3423;
    height: 56vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
`
const Wrapper = styled.div`
    display: flex;
    gap: 20px;
`
const Sorting = styled.select`
    background-color: #fde7aa;
    border: none;
    font-size: 14px;
    padding: 7px 15px;
    border-radius: 20px;
    text-transform: uppercase;
`
const Button = styled.button`
  background-color: #fde7aa;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  text-transform: uppercase;
`
const PackingList = ({ list, setList,count,setCount }) => {
    const clear = () => {
        const Lists = [...list]
        Lists.length = 0
        console.log(Lists.length)
        setList(Lists)
    }
    const sorthandler = (val) => {
        if (val == 0) {
            list.sort((a, b) => a.Quantity > b.Quantity ? 1 : -1)
            const meraLsit = [...list]
            setList(meraLsit)
        }
        if (val == 1) {
            list.sort((a, b) => a.Item > b.Item ? 1 : -1)
            const meraLsit = [...list]
            setList(meraLsit)
        }
        if (val == 2) {
            list.sort((a, b) => a.Packed == b.Packed ? 0 : a.Packed ? -1 : 1)
            // list.sort((a, b) => a.Packed ? -1 : 1)
            const meraLsit = [...list]
            setList(meraLsit)
        }
    }
    return (
        <Container>
            <List list={list} setList={setList} count={count} setCount={setCount}  />
            <Wrapper>
                <Sorting onChange={(e) => sorthandler(e.target.value)}>
                    {sortingArr.map((e, index) => (
                        <option style={{ textTransform: "uppercase" }} value={index}>{e}</option>
                    ))}
                </Sorting>
                <Button onClick={clear}>Clear List</Button>
            </Wrapper>
        </Container>
    )
}

export default PackingList
