

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
import ListeDuPersonnel from "../page/GestionPersonnel/ListeDuPersonnel.vue"
import InfoBordOpProvisoirePerso from "../page/GestionBudgetaire/DossierOPPersonnel/DossierOpProvisoire/InfoBordOpProvisoirePerso.vue"
import InfoBordOpDirectPerso from "../page/GestionBudgetaire/DossierOPPersonnel/DossierOpDirect/InfoBordOpDirectPerso.vue"

import OPProvisoirePerso from "../page/GestionBudgetaire/DossierOPPersonnel/DossierOpProvisoire/OPProvisoirePerso.vue"
import OPDirectPerso from "../page/GestionBudgetaire/DossierOPPersonnel/DossierOpDirect/OPDirectPerso.vue"

const gestionutilisateur = [
       {
        path: '/InfoBordOpDirectPerso',
        name:"InfoBordOpDirectPerso",
       component: InfoBordOpDirectPerso
  },
     {
        path: '/OPDirectPerso/:id',
        name:"OPDirectPerso",
       component: OPDirectPerso
  },
    {
        path: '/OPProvisoirePerso/:id',
        name:"OPProvisoirePerso",
       component: OPProvisoirePerso
  },
   {
        path: '/InfoBordOpProvisoirePerso',
        name:"InfoBordOpProvisoirePerso",
       component: InfoBordOpProvisoirePerso
  },
      {
        path: '/ListeDuPersonnel',
        name:"ListeDuPersonnel",
       component: ListeDuPersonnel
  },
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