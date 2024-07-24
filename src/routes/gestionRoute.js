
 import ExerciceBudgetaire from "../page/ParametreGeneraux/ExerciceBudgetaire.vue"
 import NatureDepense from "../page/ParametreGeneraux/NatureDepense.vue"
 import Section from "../page/ParametreGeneraux/Section.vue"
 import typeFinancement from "../page/ParametreGeneraux/typeFinancement.vue"
 import Entreprise from "../page/ParametreGeneraux/Entreprise.vue"
 import bailleur from "../page/ParametreGeneraux/bailleur.vue"
import Activite from "../page/ParametreGeneraux/Activite.vue"
import NatureEconomique from "../page/ParametreGeneraux/NatureEconomique.vue"
import projet from "../page/ParametreGeneraux/projet.vue"
 import sousBudget from "../page/GestionBudgetaire/sousBudget.vue"
import BudgetNotifie from "../page/GestionBudgetaire/BudgetNotifie.vue"
import BudgetReport from "../page/GestionBudgetaire/BudgetReport.vue"
// import BudgetAutreRessource from "../page/GestionBudgetaire/BudgetAutreRessource.vue"
// import BudgetRessourcePropre from "../page/GestionBudgetaire/BudgetRessourcePropre.vue"
 import Budget from "../page/GestionBudgetaire/InformationBudget.vue"
import VentilationBudget from "../page/GestionBudgetaire/VentilationBudget.vue"


import AfficheSousBudgetEclate from "../page/GestionBudgetaire/AfficheSousBudgetEclate.vue"
import VoirBudgetEclate from "../page/GestionBudgetaire/VoirBudgetEclateParActivite.vue"
import VentilationSousBudget from "../page/GestionBudgetaire/VentilationSousBudget.vue"
import OrdrePaiementProvisoire from "../page/GestionBudgetaire/OrdrePaiementProvisoire.vue"
import OrdrePaiementDirect from "../page/GestionBudgetaire/OrdrePaiementDirect.vue"
import AfficheOpActivite from "../page/GestionBudgetaire/AfficheOpActivite.vue"
import AfficheOpDirectActivite from "../page/GestionBudgetaire/AfficheOpDirectActivite.vue"
import ImprimerOp from "../page/GestionBudgetaire/ImprimerOp.vue"
import AfficheActiviteDesOP from "../page/GestionBudgetaire/AfficheActiviteDesOP.vue"
import listeToutOP from "../page/GestionBudgetaire/listeToutOP.vue"
import ExecutionBailleur from "../page/GestionRapport/ExecutionBailleur.vue"
import ExecutionParLigne from "../page/GestionRapport/ExecutionParLigne.vue"
import PresentationBudgetVise from "../page/GestionBudgetaire/PresentationBudgetVise.vue"
import OrdrePaiementDefinitif from "../page/GestionBudgetaire/OrdrePaiementDefinitif.vue"

import OrdrePaiementAnnulation from "../page/GestionBudgetaire/OrdrePaiementAnnulation.vue"
import Banque from "../page/ParametreGeneraux/Banque.vue"
import CompteBancaire from "../page/ParametreGeneraux/CompteBancaire.vue"
import AfficheOPDefinitif from "../page/GestionBudgetaire/AfficheOPDefinitif.vue"
import AfficheOPAnnulation from "../page/GestionBudgetaire/AfficheOPAnnulation.vue"

import InformationBudgetModifier from "../page/GestionBudgetaire/InformationBudgetModifier.vue"
 
import modificationBudgetaire from "../page/GestionBudgetaire/modificationBudgetaire.vue"
const gestionutilisateur = [
   {
        path: '/modificationBudgetaire/:id',
        name:"modificationBudgetaire",
       component: modificationBudgetaire
     },
  {
        path: '/InformationBudgetModifier',
        name:"InformationBudgetModifier",
       component: InformationBudgetModifier
     },
   {
        path: '/AfficheOPAnnulation/:id',
        name:"AfficheOPAnnulation",
       component: AfficheOPAnnulation
     },
  {
        path: '/AfficheOPDefinitif/:id',
        name:"AfficheOPDefinitif",
       component: AfficheOPDefinitif
     },
  {
        path: '/OrdrePaiementAnnulation',
        name:"OrdrePaiementAnnulation",
       component: OrdrePaiementAnnulation
     },
  {
        path: '/OrdrePaiementDefinitif',
        name:"OrdrePaiementDefinitif",
       component: OrdrePaiementDefinitif
     },
   {
        path: '/CompteBancaire/:id',
        name:"CompteBancaire",
       component: CompteBancaire
     },
   {
        path: '/Banque',
        name:"Banque",
       component: Banque
     },
   {
        path: '/PresentationBudgetVise',
        name:"PresentationBudgetVise",
       component: PresentationBudgetVise
     },
  {
        path: '/ExecutionParLigne',
        name:"ExecutionParLigne",
       component: ExecutionParLigne
     },
   {
        path: '/ExecutionBailleur',
        name:"ExecutionBailleur",
       component: ExecutionBailleur
     },
  {
        path: '/listeToutOP/:id',
        name:"listeToutOP",
       component: listeToutOP
     },
   {
        path: '/AfficheActiviteDesOP',
        name:"AfficheActiviteDesOP",
       component: AfficheActiviteDesOP
     },
  {
        path: '/AfficheOpDirectActivite/:id',
        name:"AfficheOpDirectActivite",
       component: AfficheOpDirectActivite
     },
  {
        path: '/OrdrePaiementDirect',
        name:"OrdrePaiementDirect",
       component: OrdrePaiementDirect
     },
  {
        path: '/ImprimerOp/:id',
        name:"ImprimerOp",
       component: ImprimerOp
     },
  {
        path: '/AfficheOpActivite/:id',
        name:"AfficheOpActivite",
       component: AfficheOpActivite
     },
  {
        path: '/Entreprise',
        name:"Entreprise",
       component: Entreprise
     },
     {
        path: '/OrdrePaiementProvisoire',
        name:"OrdrePaiementProvisoire",
       component: OrdrePaiementProvisoire
     },
     {
        path: '/VentilationSousBudget/:id',
        name:"VentilationSousBudget",
       component: VentilationSousBudget
     },
     {
        path: '/VoirBudgetEclate/:id',
        name:"VoirBudgetEclate",
       component: VoirBudgetEclate
     },
      {
        path: '/AfficheSousBudgetEclate/:id',
        name:"AfficheSousBudgetEclate",
       component: AfficheSousBudgetEclate
     },
     {
        path: '/VentilationBudget/:id',
        name:"VentilationBudget",
       component: VentilationBudget
     },
      {
        path: '/Budget',
        name:"Budget",
       component: Budget
     },
      {
        path: '/BudgetNotifie',
        name:"BudgetNotifie",
       component: BudgetNotifie
     },
  {
        path: '/BudgetReport',
        name:"BudgetReport",
       component: BudgetReport
     },
//   {
//         path: '/BudgetAutreRessource',
//         name:"BudgetAutreRessource",
//        component: BudgetAutreRessource
//      },
//   {
//         path: '/BudgetRessourcePropre',
//         name:"BudgetRessourcePropre",
//        component: BudgetRessourcePropre
//   },
      {
        path: '/sousBudget',
        name:"sousBudget",
       component: sousBudget
  },
     {
        path: '/projet',
        name:"projet",
       component: projet
  },
      {
        path: '/NatureEconomique',
        name:"NatureEconomique",
       component: NatureEconomique
  },
     {
        path: '/Activite',
        name:"Activite",
       component: Activite
  },
   {
        path: '/bailleur',
        name:"bailleur",
       component: bailleur
  },
   {
        path: '/typeFinancement',
        name:"typeFinancement",
       component: typeFinancement
  },
   {
        path: '/NatureDepense',
        name:"NatureDepense",
       component: NatureDepense
  },
    {
        path: '/ExerciceBudgetaire',
        name:"ExerciceBudgetaire",
       component: ExerciceBudgetaire
  },
 {
        path: '/Section',
        name:"Section",
       component: Section
  },
  
 ]

 export default gestionutilisateur;