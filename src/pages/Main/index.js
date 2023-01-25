import React, { useState, useCallback } from "react";
import { FaGithub, FaPlus, FaSpinner,FaBars,FaTrash } from "react-icons/fa";
import { Container, Form, SubmitButton,List,DeleteButton } from "./styles";


import api from "../../api";

export default function Main() {
  const [newRepo, setNewRepo] = useState("");
  const [repositorios, setRepositorios] = useState([]);
  const [loading, setLoading] = useState(false);
  
  function handleinputChange(e) {
    setNewRepo(e.target.value);
  }

/*nao esta sendo utilizado o async await pois estou utilizando os estados abaixo
* entao fica bem mais objetivo, rapido e intuitivo usar o useCallback
*/
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLoading(true);
      async function submit() {
        try {
          const response = await api.get(`/repos/${newRepo}`); // buscando repos aula-05
          const data = {
            name: response.data.full_name,
          };

          setRepositorios([...repositorios, data]);
          setNewRepo("");
          console.log(data.name);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }

      submit();
    },
    [newRepo, repositorios]
  );

  const handleDelete = useCallback((repo)=>{
    const find = repositorios.filter(r => r.name !== repo);
    setRepositorios(find);
  },[repositorios])


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

        <SubmitButton  loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="#fff" size={14} />
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>

      <List>
          {repositorios.map(repo=>(
            <li key={repo.name}>
              <span>
                <DeleteButton onClick={()=>{handleDelete(repo.name)}}>
                 <FaTrash size={14}/>
                </DeleteButton>
                {repo.name}
                </span>
              <a href="#">
              <FaBars size={20}/>
              </a>
            </li>
          ))}
      </List>
    </Container>
  );
}
