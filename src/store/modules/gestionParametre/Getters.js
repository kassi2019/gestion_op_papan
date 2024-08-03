
export const getterExerciceBudgetaire = state => state.stateExercice.sort((a, b) => (a.annee > b.annee) ? -1 : 1);
export const getterSection = state => state.stateSection.sort((a, b) => (a.code < b.code) ? -1 : 1);
export const getterNatureDepense = state => state.stateNatureDepense.sort((a, b) => (a.code < b.code) ? -1 : 1);
export const getterTypeFinancement = state => state.stateTypeFinancement.sort((a, b) => (a.code < b.code) ? -1 : 1);
export const getterBailleur = state => state.stateBailleur.sort((a, b) => (a.code < b.code) ? -1 : 1);
export const getterActivite = state => state.stateActivite.sort((a, b) => (a.code < b.code) ? -1 : 1);
export const getterNatureEconomique = state => state.stateNatureEconomique.sort((a, b) => (a.code < b.code) ? -1 : 1);
export const getterProjet = state => state.stateProjet;
export const getterSousBudget = state => state.stateSousBudget;

export const getterDotationNotifie= state => state.stateDotationNotifie;

export const getterDotationReport = state => state.stateDotationReport;
export const getterAfficheNouvelleNature = state => state.stateAfficheNouvelleNature;

export const getterDotationRessourcePropre = state => state.stateDotationRessourcePropre;

export const getterDotationAutreRessource = state => state.stateDotationAutreRessource;
export const getterInformationBudget = state => state.stateInformationBudget;
export const getterBordereauParUser = state => state.stateBordereauParUser;

export const getterListeBudgetEclate = state => state.stateListeBudgetEclate;
export const getterEntreprise = state => state.stateEntreprise;
export const getterBudgetViseParActivite = state => state.stateBudgetViseParActivite;
export const getterBudgetViseGroupeParActivite = state => state.stateBudgetViseGroupeParActivite;
export const getterTaux = state => state.stateTaux.sort((a, b) => (a.taux < b.taux) ? -1 : 1);
export const getterActiviteSurOP = state => state.stateActiviteSurOP;
export const getterListeOPParUser = state => state.stateListeOPParUser;
export const getterOpPersonnelParUser = state => state.stateOpPersonnelParUser;

export const getterFacture = state => state.stateFacture;
export const getterActiviteglobal = state => state.stateActiviteglobal;
export const getterListeOPgloba = state => state.stateListeOPgloba;

export const getterOpParActivite = state => state.stateOpParActivite;
export const getterInfoOrdrePaiement = state => state.stateInfoOrdrePaiement;

export const getterAfficheBudgetVise = state => state.stateAfficheBudgetVise;
export const getterBanque = state => state.stateBanque.sort((a, b) => (a.code < b.code) ? -1 : 1);
export const getterCompteBancaire = state => state.stateCompteBancaire.sort((a, b) => (a.code < b.code) ? -1 : 1);

export const getterstateFactureParOp = state => state.stateFactureParOp;
export const gettersBudgetModifierEnProjet = state => state.stateBudgetModifierEnProjet;

export const gettersSignataire = state => state.stateSignataire;
export const gettersSecteurActivite = state => state.stateSecteurActivite;
export const gettersRegimeImpossition = state => state.stateRegimeImpossition;
export const gettersFormeJuridique = state => state.stateFormeJuridique;
export const gettersBordereauParUser = state => state.stateBordereauParUser;
// export const getterAfficheDotation = state => state.stateAfficheDotation;



