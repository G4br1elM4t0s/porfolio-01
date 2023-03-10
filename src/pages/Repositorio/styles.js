import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 700px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 70px rgba(81, 31, 115, 0.6);
  margin: 80px auto;
  padding: 30px;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 150px;
    border-radius: 20%;
    margin: 20px 0;
  }

  h1 {
    font-size: 30px;
    color: #431259;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #000;
    text-align: center;
    line-height: 1.4;
    max-width: 400px;
  }
`;

export const Loading = styled.div`
  color: "#FFF";
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const BackButton = styled(Link)`
  border: none;
  outline: none;
  background: tranparent;
`;

export const IssuesList = styled.ul`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #eee;
  list-style-type: none;

  li {
    display: flex;
    padding: 15px 10px;
    align-items: center;

    & + li {
      margin-top: 12px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #431259;
    }

    div {
      margin-left: 12px;
      flex: 1;

      p{
        margin-top:10px;
        font-size:12px;
        color:#000;
      }
    }

    strong {
      font-size: 15px;
      a {
        text-decoration: none;
        color: #222;
        transform:0.3s;
        &:hover {
          color: #431259;
         
        }
      }

      span {
        background: #222;
        color: #fff;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 600;
        padding: 4px 7px;
        margin-left: 10px;
      }
    }
  }
`;
