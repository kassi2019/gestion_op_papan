
import listeOpProvisoire from "../page/GestionRapport/listeOpProvisoire.vue"
import VerifierFacture from "../page/GestionRapport/VerifierFacture.vue"
import ExecutionParLigne from "../page/GestionRapport/ExecutionParLigne.vue"
import situationComposante from "../page/GestionRapport/SituationParComposante.vue"
const gestionutilisateur = [
   {
        path: '/situationComposante',
        name:"situationComposante",
       component: situationComposante
     },
      {
        path: '/listeOpProvisoire',
        name:"listeOpProvisoire",
       component: listeOpProvisoire
     },
   {
        path: '/VerifierFacture',
        name:"VerifierFacture",
       component: VerifierFacture
  },
     {
        path: '/ExecutionParLigne',
        name:"ExecutionParLigne",
       component: ExecutionParLigne
     }
 ]

 export default gestionutilisateur;