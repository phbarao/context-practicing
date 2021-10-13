import React, { useState } from "react";
import styled from "styled-components";

import { useUser } from "../../contexts/user/context";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .current-data {
    width: 50%;
    display: flex;
    flex-direction: column;
    border: 1px solid #32292f;
    margin-top: 10px;
    padding: 10px;
  }
`;

export default function First() {
  //estado para manipular o novo nome
  const { setState, state } = useUser();
  const [name, setName] = useState("");

  //função que irá submeter a alteração do novo nome
  function handleEditName() {
    setState({
      ...state,
      name: name,
    });
  }

  return (
    <Container>
      <h2>Filho 01 (Nome)</h2>

      <input
        type="text"
        placeholder="Novo Nome"
        onChange={(e) => setName(e.target.value)}
      />

      <button type="button" onClick={handleEditName}>
        Alterar
      </button>

      <div className="current-data">
        <span>
          Nome : <strong>{state.name}</strong>
        </span>

        <span>
          Sobrenome : <strong>{state.lastName}</strong>
        </span>

        <span>
          Email : <strong>{state.email}</strong>
        </span>
      </div>
    </Container>
  );
}
