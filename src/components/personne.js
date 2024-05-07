import React, { Component } from "react"
import AffButton from "./affButton"
import { handleDelPersonne, handlePersonneMajForm } from "../actions/personne"
import styled from "styled-components";
import { handleDisplayForm } from "../actions/personne";

const Tr = styled.div`
display:flex;
flex-direction:row;
`;

const Th = styled.div`
flex:1;
font-weight: bold;
background-color:lightgray;
text-align:center;
border:solid;
`;

const Td = styled.div`
flex:1;
text-align:center;
border:solid;
`;

class Personne extends Component {
  render() {
    const isVisible = this.props.isDisplayForm;
    return (
      <div>
        <Tr>
          <Th>Nom</Th>
          <Th>Prénom</Th>
          <Th>Num</Th>
          <Th>Voie</Th>
          <Th>CP</Th>
          <Th>Ville</Th>
          <Th>Société</Th>
          <Th>Fonction</Th>
          <Th>
            <div hidden={isVisible}>
              <AffButton affText="Ajouter" onClick={() => {
                handleDisplayForm()
              }} />
            </div></Th>
        </Tr>
        {this.props.personne.map(personne => (
          <Tr key={personne.id}>
            <Td>{personne.personne.nom}</Td>
            <Td>{personne.personne.prenom}</Td>
            <Td>{personne.adresse.num}</Td>
            <Td>{personne.adresse.voie}</Td>
            <Td>{personne.adresse.cp}</Td>
            <Td>{personne.adresse.ville}</Td>
            <Td>{personne.travail.societe}</Td>
            <Td>{personne.travail.fonction}</Td>

            <Td>
              <AffButton affText="Modif" onClick={() => {
                handlePersonneMajForm(personne)
              }} />
              <AffButton affText="Suppr" onClick={() => {
                handleDelPersonne(personne.id)
              }} />
            </Td>
          </Tr>
        ))}
      </div>
    )
  }
}

export default Personne
