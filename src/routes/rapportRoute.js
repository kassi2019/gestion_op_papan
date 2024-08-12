
import listeOpProvisoire from "../page/GestionRapport/listeOpProvisoire.vue"
import VerifierFacture from "../page/GestionRapport/VerifierFacture.vue"
import ExecutionParLigne from "../page/GestionRapport/ExecutionParLigne.vue"
import situationComposante from "../page/GestionRapport/SituationParComposante.vue"
import EtatPersonnel from "../page/GestionRapport/EtatPersonnel.vue"
import SituataionMission from "../page/GestionRapport/SituataionMission.vue"
const gestionutilisateur = [
  {
        path: '/SituataionMission',
        name:"SituataionMission",
       component: SituataionMission
     },
  {
        path: '/EtatPersonnel',
        name:"EtatPersonnel",
       component: EtatPersonnel
     },
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