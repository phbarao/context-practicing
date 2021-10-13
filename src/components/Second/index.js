import React, { useState } from "react";

import { useUser } from "../../contexts/user/context";

import { Container } from "../First";

export default function Second() {
  const { setState, state } = useUser();
  const [lastName, setEditLastName] = useState("");

  function handleEditLastName() {
    setState({
      ...state,
      lastName: lastName,
    });
  }

  return (
    <Container>
      <h3>Filho 02 (Sobrenome)</h3>

      <input
        type="text"
        placeholder="Novo Sobrenome"
        onChange={(e) => setEditLastName(e.target.value)}
      />

      <button type="button" onClick={handleEditLastName}>
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
