import logo from './logo.svg';
import './App.css';
import Logo from './Components/Logo';
import styled from 'styled-components';
import Form from './Components/Form';
import PackingList from './Components/PackingList';
import Stats from './Components/Stats';
import { useState } from 'react';


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
function App() {
  const [list, setList] = useState([
    
  ])
  const [percentage ,setPercentage] = useState(0)
  const [count,setCount] = useState(0)
  return (
    <Container>
      <Logo />
      <Form list={list} setList={setList}/>
      <PackingList list={list} setList={setList} count={count} setCount={setCount}/>
      <Stats list={list} setList={setList} count={count} setCount={setCount} percentage={percentage} setPercentage={setPercentage}/>
    </Container>
  );
}

export default App;
