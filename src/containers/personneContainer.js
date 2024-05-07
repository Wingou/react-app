import { connect } from "react-redux"
import Personne from "../components/personne"

const mapStateToProps = state => {
  return { personne: state.personne }
}

const personne = connect(mapStateToProps)(Personne)

export default personne