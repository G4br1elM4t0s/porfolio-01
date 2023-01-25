import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import { Container,Owner,Loading,BackButton } from "./styles";
import { FaArrowLeft } from 'react-icons/fa';

export default function Repositorio({ match }) {
  const [repo, setRepo] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  const { repositorio } = useParams();
  useEffect(() => {
    async function load() {
      // const response = await api.get(`/repos/${repositorio}`);
      // const issues = await api.get(`/repos/${repositorio}/issues`)
      // console.log(response);

      const [repositorioData, issuesData] = await Promise.all([
        api.get(`/repos/${repositorio}`),
        api.get(`/repos/${repositorio}/issues`, {
          params: {
            state: "open",
            per_page: 5, //para o maximo de informacao ser '5'
          },
        }),
      ]);

      setRepo(repositorioData.data);
      setIssues(issuesData.data);
      setLoading(false);
    }
    load();
  },[repositorio]);

  if(loading){
    return (<Loading>
        <h1>Carrengando</h1>
    </Loading>)
  }
  return (
    <Container>
      <BackButton to={'/'}>
        <FaArrowLeft color={'#000'}  size={20}/> 
      </BackButton>
      <Owner>
        <img src={repo.owner.avatar_url} alt={repo.owner.login}/>
        <h1>{repo.name}</h1>
        <p>{repo.description}</p>  
      </Owner>
    </Container>
  )
}
