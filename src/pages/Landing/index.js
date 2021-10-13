import React, { useState } from "react";
import styled from "styled-components";

import First from "../../components/First";
import Second from "../../components/Second";
import Third from "../../components/Third";
import { useUser } from "../../contexts/user/context";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #99e1d9;

  #parent {
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #childrens {
    height: 80%;
    display: flex;
    gap: 20px;
    padding: 20px;
  }

  @media (max-width: 600px) {
    #childrens {
      flex-direction: column;
    }
  }
`;

export default function LandingData() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { state, setState } = useUser();

  function handleSubmit() {
    setState({ email, lastName, name });
  }

  return (
    <Container>
      <div id="parent">
        <h3>Componente Pai</h3>

        <input
          type="text"
          placeholder="nome"
          onChange={(e) => setName(e.target.value)}
        />
        {""}

        <input
          type="text"
          placeholder="sobrenome"
          onChange={(e) => setLastName(e.target.value)}
        />
        {""}

        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {""}

        <button type="button" onClick={handleSubmit}>
          OK
        </button>

        <span>
          <strong>{`${state.name} ${state.lastName} `}</strong>({state.email})
        </span>
      </div>

      <div id="childrens">
        <First />
        <Second />
        <Third />
      </div>
    </Container>
  );
}
