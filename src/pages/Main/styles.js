import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  background: #FFF;
  border-radius:4px;
  margin: 80px auto;
  box-shadow: 0 0 70px rgba(81, 31, 115, 0.6);
  padding: 30px;

  h1{
    font-size: 20px;
    display:flex;
    align-items: center;
    flex-direction: row;
    
    svg{
      margin-right: 10px;
    }

  }
`

export const SubmitButton = styled.button.attrs({
  type: "submit"
})`
  background: #431259;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items:center;
`

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  input{
    flex:1;
    border: 1px solid #DDD;
    border-radius: 4px;
    padding: 8px;
    font-size:17px;
  }
`