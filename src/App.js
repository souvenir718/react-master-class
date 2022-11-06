import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;
const Input = styled.input.attrs({required: true})`
  background-color: tomato;
`

function App() {
  return (
    <Father as="header">
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Btn>Log in</Btn>
      <Btn as="a" href="/">
        Log in
      </Btn>
    </Father>
  );
}

export default App;
