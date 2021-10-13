import React, { useState } from "react";

import { useUser } from "../../contexts/user/context";
import { Container } from "../First";

export default function Third() {
  const { setState, state } = useUser();
  const [email, setEmail] = useState("");

  function handleEditEmail() {
    setState({
      ...state,
      email: email,
    });
  }

  return (
    <Container>
      <h3>Filho 03 (Email)</h3>

      <input
        type="text"
        placeholder="Novo Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="button" onClick={handleEditEmail}>
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
