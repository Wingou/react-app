import { connect } from "react-redux"
import PersonneForm from "../components/personneForm"

const mapStateToPropsForm = state => {

  const idNext = state.personne.reduce((acc, v) => {
    if (acc > v.id) { return acc }
    else {
      acc = v.id;
      return acc;
    }
  }, 0) + 1;

  return {
    isDisplayForm: state.isDisplayForm,
    personneInput: state.personneInput,
    idNext
  }
}

const personneForm = connect(mapStateToPropsForm)(PersonneForm)

export default personneForm