import styled, {keyframes,css} from "styled-components";

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
`;

//criando animacao para o button

const animate = keyframes`
  from{
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs(props=>({
  type: "submit",
  disabled: props.loading,

}))`
  background: #431259;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items:center;


  &[disabled]{
    cursor:not-allowed;
    opacity: 0.5;
  }

  ${props => props.loading  && 
  css`
    svg{
      animation: ${animate} 2s linear infinite;
    }
  `
  }

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

export const List = styled.ul`
  list-style: none;
  margin-top: 20px;

  li{
    padding: 15px 0;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    & + li{ // ignora a primeira li e so aplica as respectivas propiedades do segundo para baixo
       border-top: 1px solid #EEE;
    }

    a{
      color: #000;
      text-decoration:none;
    }
  }

`;

export const DeleteButton = styled.button.attrs({
  type:'button'
})`
  margin-left: 6px;
  background: transparent;
  color:#431259;
  border: none;
  padding: 8px 7px;
  outline: 0;
  border-radius: 4px;
`