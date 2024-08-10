import apiGuest from '../../../request/AppRequest';
//import apiImage from '../../../request/AppRequestImage';
import authHeader from '../../../services/auth-header';
//import router from '../../../routes/index';
// import Swal from 'sweetalert2';
// import { toast } from "vue3-toastify";
// import "vue3-toastify/dist/index.css"



export function getVerificationFactureEncours({ commit }) {
  apiGuest.get("/verificationFactureEnCours", { headers: authHeader() })
    .then(response => {
      commit("GET_VERIFICATION_FACTURE_EN_COURS", response.data);
    })
    .catch(error => console.log(error));
}

export function getVerificationFactureAcheve({ commit }) {
  apiGuest.get("/verificationFactureAcheve", { headers: authHeader() })
    .then(response => {
      commit("GET_VERIFICATION_FACTURE_ACHEVE", response.data);
    })
    .catch(error => console.log(error));
}

export function getRapportOp({ commit }) {
  apiGuest.get("/listeOrdrePaiementRapport", { headers: authHeader() })
    .then(response => {
      commit("GET_RAPPORT_LISTE_OP", response.data);
    })
    .catch(error => console.log(error));
}

export function getRapportSituationParComposante({ commit }) {
  apiGuest.get("/situationDesComposante", { headers: authHeader() })
    .then(response => {
      commit("GET_RAPPORT_SITUATION_PAR_COMPOSANTE", response.data);
    })
    .catch(error => console.log(error));
}