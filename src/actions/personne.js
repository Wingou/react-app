import { store } from "../App";

export const handleMajPersonneInput = (personne, event) => {
    const { name, value } = event.target;
    const chemin = name.split(".");
    const table = chemin[0];
    const champ = chemin[1];

    let newPersonne = {}

    switch (table) {
        case "personne":
            newPersonne = {
                ...personne
                , personne: {
                    ...personne.personne
                    , [champ]: value
                }
            };
            break;
        case "adresse":
            newPersonne = {
                ...personne
                , adresse: {
                    ...personne.adresse
                    , [champ]: value
                }
            };
            break;
        case "travail":
            newPersonne = {
                ...personne
                , travail: {
                    ...personne.travail
                    , [champ]: value
                }
            };
            break;
        default:
            newPersonne = {};
    }
    const action = {
        type: "PERSONNEINPUTMAJ",
        payload: newPersonne
    }
    store.dispatch(action);
}

export const handlePersonneMajForm = (personne) => {
    const action = {
        type: "PERSONNEMAJFORM",
        payload: personne
    }
    store.dispatch(action);
}

export const handleMajPersonne = async (id, personneInput) => {
    let actionType = "PERSONNEMAJ";
    let apiUrl = "http://localhost:3001/update";
    if (id === 0) {
        actionType = "ADDPERSONNE";
        apiUrl = "http://localhost:3001/add";
    }
    const dataInput = {
        id: personneInput.id,
        nom: personneInput.personne.nom,
        prenom: personneInput.personne.prenom,
        num: personneInput.adresse.num,
        voie: personneInput.adresse.voie,
        cp: personneInput.adresse.cp,
        ville: personneInput.adresse.ville,
        societe: personneInput.travail.societe,
        fonction: personneInput.travail.fonction
    }
    await fetch(apiUrl, { method: "POST", body: JSON.stringify(dataInput) })
        .then(data => data.json())
        .then(res => {
            const payload = {
                id: res[0].id,
                personne: {
                    nom: res[0].personne.nom,
                    prenom: res[0].personne.prenom,
                },
                adresse: {
                    num: res[0].adresse.num,
                    voie: res[0].adresse.voie,
                    cp: res[0].adresse.cp,
                    ville: res[0].adresse.ville
                },
                travail: {
                    societe: res[0].travail.societe,
                    fonction: res[0].travail.fonction
                }
            }
            store.dispatch({
                type: actionType,
                payload
            })
        })
        .catch(error => console.error(error));
}

export const handleDelPersonne = async (id) => {
    const apiUrl = "http://localhost:3001/delete";
    const data = {
        id,
        deltype: 2
    }
    const action = {
        type: "DELPERSONNE",
        payload: id
    }

    await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(data)
    })
        .then(store.dispatch(action))
        .catch(error => console.error(error));
}

export const handleDisplayForm = () => {
    const action = {
        type: "TOGGLEISDISPLAYFORM"
    }
    store.dispatch(action);
}