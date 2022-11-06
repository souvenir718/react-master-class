import styled from "styled-components";

const Father = styled.div`
  display: flex;
`
const Box = styled.div`
  background-color: ${props => props.bgColor ?? 'blue'};
  width: 100px;
  height: 100px;
`
const Circle = styled(Box)`
  border-radius: 50px;
`

function App() {
  return (
    <Father>
      <Box bgColor={"tomato"}/>
      <Box bgColor={"teal"}/>
      <Circle/>
    </Father>
  );
}

export default App;
