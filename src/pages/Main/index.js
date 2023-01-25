import React, { useState, useCallback, useEffect } from "react";
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from "react-icons/fa";
import { Container, Form, SubmitButton, List, DeleteButton } from "./styles";
import { Link } from "react-router-dom";

import api from "../../api";

export default function Main() {
  const [newRepo, setNewRepo] = useState("");
  const [repositorios, setRepositorios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // Buscar
  useEffect(() => {
    const repoStorage = localStorage.getItem("repos");
    const testeRepo = JSON.parse(repoStorage);
    if (repoStorage) {
      setRepositorios(testeRepo);
      console.log(testeRepo);
    }
  }, []);

  // Salvar alterações
  useEffect(() => {
    localStorage.setItem("repos", JSON.stringify(repositorios));
  }, [repositorios]);

  function handleinputChange(e) {
    setNewRepo(e.target.value);
    setAlert(null);
  }

  /*nao esta sendo utilizado o async await pois estou utilizando os estados abaixo
   * entao fica bem mais objetivo, rapido e intuitivo usar o useCallback
   */
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLoading(true);
      setAlert(null);
      async function submit() {
        try {
          if (newRepo === " ") {
            throw new Error("invalid, input is required");
          }

          const response = await api.get(`/repos/${newRepo}`); // buscando repos aula-05
          const data = {
            name: response.data.full_name,
          };

          const hasRepo = repositorios.find((repo) => repo.name === newRepo);

          if (hasRepo) {
            throw new Error("repositories already exists");
          }

          setRepositorios([...repositorios, data]);
          setNewRepo("");
          console.log(data.name);
        } catch (error) {
          setAlert(true);
          console.log(error);
        } finally {
          setLoading(false);
        }
      }

      submit();
    },
    [newRepo, repositorios]
  );

  const handleDelete = useCallback(
    (repo) => {
      const find = repositorios.filter((r) => r.name !== repo);
      setRepositorios(find);
    },
    [repositorios]
  );

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        My Repositories
      </h1>

      <Form onSubmit={handleSubmit} error={alert}>
        <input
          type="text"
          placeholder="Enter the creator first and then the repository"
          value={newRepo}
          onChange={handleinputChange}
        />

        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="#fff" size={14} />
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repositorios.map((repo) => (
          <li key={repo.name}>
            <span>
              <DeleteButton
                onClick={() => {
                  handleDelete(repo.name);
                }}
              >
                <FaTrash size={14} />
              </DeleteButton>
              {repo.name}
            </span>
            
            <Link   to={`/repositorio/${encodeURIComponent(repo.name)}`}>
              {" "}
              <FaBars size={20} />
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
}
