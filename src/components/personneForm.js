import React, { Component } from "react"
import { handleMajPersonne, handleMajPersonneInput } from "../actions/personne";
import AffButton from "./affButton";
import styled from "styled-components";

const Tr = styled.div`
display:flex;
flex-direction:row;
`;

const Td = styled.div`
flex:1;
text-align:center;
border:solid;
`;

class PersonneForm extends Component {
  render() {
    const id = this.props.personneInput.id;
    const personneInput = this.props.personneInput;
    const isVisible = this.props.isDisplayForm;
    const personne = personneInput.personne;
    const adresse = personneInput.adresse;
    const travail = personneInput.travail;

    return (
      <div>
        <div hidden={!isVisible}>
          <Tr >
            <Td>
              <input style={{ width: '10rem' }} placeholder="Nom" type="text" name="personne.nom" value={personne.nom} onChange={(e) => { handleMajPersonneInput(personneInput, e); }} />
            </Td>
            <Td>
              <input style={{ width: '10rem' }} placeholder="Prénom" type="text" name="personne.prenom" value={personne.prenom} onChange={(e) => { handleMajPersonneInput(personneInput, e); }} />
            </Td>
            <Td>
              <input style={{ width: '3rem' }} placeholder="Numéro" type="text" name="adresse.num" value={adresse.num} onChange={(e) => { handleMajPersonneInput(personneInput, e); }} />
            </Td>
            <Td> <input style={{ width: '10rem' }} placeholder="Voie" type="text" name="adresse.voie" value={adresse.voie} onChange={(e) => { handleMajPersonneInput(personneInput, e); }} />
            </Td>
            <Td><input style={{ width: '10rem' }} placeholder="Code Postal" type="text" name="adresse.cp" value={adresse.cp} onChange={(e) => { handleMajPersonneInput(personneInput, e); }} />
            </Td>
            <Td> <input style={{ width: '10rem' }} placeholder="Ville" type="text" name="adresse.ville" value={adresse.ville} onChange={(e) => { handleMajPersonneInput(personneInput, e); }} />

            </Td>
            <Td>
              <input style={{ width: '10rem' }} placeholder="Société" type="text" name="travail.societe" value={travail.societe} onChange={(e) => { handleMajPersonneInput(personneInput, e); }} />
            </Td>
            <Td><input style={{ width: '10rem' }} placeholder="Fonction" type="text" name="travail.fonction" value={travail.fonction} onChange={(e) => { handleMajPersonneInput(personneInput, e); }} />
            </Td>
            <Td>
              <AffButton affText="Valider" onClick={() => {
                handleMajPersonne(id, personneInput);
              }} />
            </Td>
          </Tr>
        </div>
      </div>
    )
  }
}

export default PersonneForm

