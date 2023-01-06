import React,{useState} from "react";
import { FaGithub,FaPlus } from "react-icons/fa";
import { Container,Form,SubmitButton } from "./styles";


import api from "../../api";

export default function Main() {
  const [newRepo,setNewRepo] = useState('');

  function handleinputChange(e){
    setNewRepo(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    
    const response = api.get(`repos/${newRepo}`);
    
  }

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositorios
      </h1>

      <Form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Enter the creator first and then the repository"
        value={newRepo}
        onChange={handleinputChange}
        />

        <SubmitButton >
          <FaPlus color="#FFF" size={14}/>
        </SubmitButton>
      </Form>
    </Container>
  );
}
