

// gestion du personnel ///
import Diplome from "../page/GestionPersonnel/Diplome.vue"
import Emploi from "../page/GestionPersonnel/Emploi.vue"
import Fonction from "../page/GestionPersonnel/Fonction.vue"
import NatureContrat from "../page/GestionPersonnel/NatureContrat.vue"
import Service from "../page/GestionPersonnel/Service.vue"
import SituationMatrimonial from "../page/GestionPersonnel/SituationMatrimonial.vue"
import TypeIndemnite from "../page/GestionPersonnel/TypeIndemnite.vue"
import TypePiece from "../page/GestionPersonnel/TypePiece.vue"
import SaisirContratPersonnel from "../page/GestionPersonnel/SaisirContratPersonnel.vue"
import DetailPersonnel from "../page/GestionPersonnel/DetailPersonnel.vue"
const gestionutilisateur = [
     {
        path: '/DetailPersonnel/:id',
        name:"DetailPersonnel",
       component: DetailPersonnel
  },
    {
        path: '/SaisirContratPersonnel',
        name:"SaisirContratPersonnel",
       component: SaisirContratPersonnel
  },
   {
        path: '/TypeIndemnite',
        name:"TypeIndemnite",
       component: TypeIndemnite
  },
   {
        path: '/TypePiece',
        name:"TypePiece",
       component: TypePiece
  },
  {
        path: '/Diplome',
        name:"Diplome",
       component: Diplome
  },
     {
        path: '/Emploi',
        name:"Emploi",
       component: Emploi
  },
     {
        path: '/Fonction',
        name:"Fonction",
       component: Fonction
  },
     {
        path: '/NatureContrat',
        name:"NatureContrat",
       component: NatureContrat
  },
     {
        path: '/Service',
        name:"Service",
       component: Service
  },
     {
        path: '/SituationMatrimonial',
        name:"SituationMatrimonial",
       component: SituationMatrimonial
     },
  
 ]

 export default gestionutilisateur;