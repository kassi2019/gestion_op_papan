
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
import AfficheOpActivite from "../page/GestionBudgetaire/AfficheOpActivite.vue"

import ImprimerOp from "../page/GestionBudgetaire/ImprimerOp.vue"
const gestionutilisateur = [
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
        path: '/VentilationBudget',
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