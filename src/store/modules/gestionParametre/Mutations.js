
// exercice budgetaire
export const GET_EXERCICE_BUDGETAIRE = (state, value) => {
    state.stateExercice=value
}

export const AJOUTER_EXERCICE_BUDGETAIRE = (state, elementAjouter) => {
    state.stateExercice.unshift(elementAjouter)
}

export const MODIFIER_EXERCICE_BUDGETAIRE = (state, elementModif) => {
    state.stateExercice = state.stateExercice.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}
export const ENCOURS_EXERCICE_BUDGETAIRE = (state, elementModif) => {
    state.stateExercice = state.stateExercice.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}
export const SUPPRIMER_EXERCICE_BUDGETAIRE = (state, id) => {
    state.stateExercice = state.stateExercice.filter(titre => titre.id != id)
};

// section

export const GET_SECTION = (state,value)=>{
    state.stateSection=value
}

export const AJOUTER_SECTION = (state, elementAjouter) => {
    state.stateSection.unshift(elementAjouter)
}

export const MODIFIER_SECTION = (state, elementModif) => {
    state.stateSection = state.stateSection.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_SECTION = (state, id) => {
    state.stateSection = state.stateSection.filter(titre => titre.id != id)
};


//nature depense



export const GET_NATURE_DEPENSE = (state,value)=>{
    state.stateNatureDepense=value
}

export const AJOUTER_NATURE_DEPENSE = (state, elementAjouter) => {
    state.stateNatureDepense.unshift(elementAjouter)
}

export const MODIFIER_NATURE_DEPENSE = (state, elementModif) => {
    state.stateNatureDepense = state.stateNatureDepense.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_NATURE_DEPENSE = (state, id) => {
    state.stateNatureDepense = state.stateNatureDepense.filter(titre => titre.id != id)
};

// type financement



export const GET_TYPE_FINANCEMENT = (state,value)=>{
    state.stateTypeFinancement=value
}

export const AJOUTER_TYPE_FINANCEMENT = (state, elementAjouter) => {
    state.stateTypeFinancement.unshift(elementAjouter)
}

export const MODIFIER_TYPE_FINANCEMENT = (state, elementModif) => {
    state.stateTypeFinancement = state.stateTypeFinancement.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_TYPE_FINANCEMENT = (state, id) => {
    state.stateTypeFinancement = state.stateTypeFinancement.filter(titre => titre.id != id)
};


// Bailleur

export const GET_BAILLEUR = (state,value)=>{
    state.stateBailleur=value
}

export const AJOUTER_BAILLEUR = (state, elementAjouter) => {
    state.stateBailleur.unshift(elementAjouter)
}

export const MODIFIER_BAILLEUR = (state, elementModif) => {
    state.stateBailleur = state.stateBailleur.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_BAILLEUR = (state, id) => {
    state.stateBailleur = state.stateBailleur.filter(titre => titre.id != id)
};

// activite

export const GET_ACTIVITE = (state,value)=>{
    state.stateActivite=value
}

export const AJOUTER_ACTIVITE = (state, elementAjouter) => {
    state.stateActivite.unshift(elementAjouter)
}

export const MODIFIER_ACTIVITE = (state, elementModif) => {
    state.stateActivite = state.stateActivite.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_ACTIVITE = (state, id) => {
    state.stateActivite = state.stateActivite.filter(titre => titre.id != id)
};


// nature economique


export const GET_NATURE_ECONOMIQUE = (state,value)=>{
    state.stateNatureEconomique=value
}

export const AJOUTER_NATURE_ECONOMIQUE = (state, elementAjouter) => {
    state.stateNatureEconomique.unshift(elementAjouter)
}

export const MODIFIER_NATURE_ECONOMIQUE = (state, elementModif) => {
    state.stateNatureEconomique = state.stateNatureEconomique.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_NATURE_ECONOMIQUE = (state, id) => {
    state.stateNatureEconomique = state.stateNatureEconomique.filter(titre => titre.id != id)
};

//projet



export const GET_PROJET = (state,value)=>{
    state.stateProjet=value
}

export const AJOUTER_PROJET = (state, elementAjouter) => {
    state.stateProjet.unshift(elementAjouter)
}

export const MODIFIER_PROJET = (state, elementModif) => {
    state.stateProjet = state.stateProjet.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_PROJET = (state, id) => {
    state.stateProjet = state.stateProjet.filter(titre => titre.id != id)
};


// sous budget
export const GET_SOUS_BUDGET = (state, value) => {
    state.stateSousBudget=value
}
export const GET_GROUPE_ACTIVITE = (state, value) => {
    state.stateGrpeActivite=value
}
export const AJOUTER_SOUS_BUDGET = (state, elementAjouter) => {
    state.stateSousBudget.unshift(elementAjouter)
}

export const MODIFIER_SOUS_BUDGET = (state, elementModif) => {
    state.stateSousBudget = state.stateSousBudget.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_SOUS_BUDGET = (state, id) => {
    state.stateSousBudget = state.stateSousBudget.filter(titre => titre.id != id)
};


// dotation notifier

export const GET_DOTATION_NOTIFIE = (state, value) => {
    state.stateDotationNotifie=value
}
export const GET_GROUPE_ACTIVITE_BUDGET_NOTIFIE = (state, value) => {
    state.stateGrpeActiviteBudgetNotifie=value
}
export const AJOUTER_DOTATION_NOTIFIE = (state, elementAjouter) => {
    state.stateDotationNotifie.unshift(elementAjouter)
}

export const MODIFIER_DOTATION_NOTIFIE = (state, elementModif) => {
    state.stateDotationNotifie = state.stateDotationNotifie.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_DOTATION_NOTIFIE = (state, id) => {
    state.stateDotationNotifie = state.stateDotationNotifie.filter(titre => titre.id != id)
};


// DOTATION REPORT

export const GET_DOTATION_REPORT = (state, value) => {
    state.stateDotationReport=value
}
export const GET_GROUPE_ACTIVITE_BUDGET_REPORT = (state, value) => {
    state.stateGrpeActiviteBudgetReport=value
}
export const AJOUTER_DOTATION_REPORT = (state, elementAjouter) => {
    state.stateDotationReport.unshift(elementAjouter)
}

export const MODIFIER_DOTATION_REPORT = (state, elementModif) => {
    state.stateDotationReport = state.stateDotationReport.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_DOTATION_REPORT = (state, id) => {
    state.stateDotationReport = state.stateDotationReport.filter(titre => titre.id != id)
};


// DOTATION RESSOURCE PROPRE

export const GET_DOTATION_RESSOURCE_PROPRE = (state, value) => {
    state.stateDotationRessourcePropre=value
}
export const GET_GROUPE_ACTIVITE_BUDGET_RESSOURCE_PROPRE = (state, value) => {
    state.stateGrpeActiviteBudgetRessourcePropre=value
}
export const AJOUTER_DOTATION_RESSOURCE_PROPRE = (state, elementAjouter) => {
    state.stateDotationRessourcePropre.unshift(elementAjouter)
}

export const MODIFIER_DOTATION_RESSOURCE_PROPRE = (state, elementModif) => {
    state.stateDotationRessourcePropre = state.stateDotationRessourcePropre.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_DOTATION_RESSOURCE_PROPRE = (state, id) => {
    state.stateDotationRessourcePropre = state.stateDotationRessourcePropre.filter(titre => titre.id != id)
};


// DOTATION AUTRE RESSOURCE

export const GET_DOTATION_AUTRE_RESSOURCE = (state, value) => {
    state.stateDotationAutreRessource=value
}
export const GET_GROUPE_ACTIVITE_BUDGET_AUTRE_RESSOURCE = (state, value) => {
    state.stateGrpeActiviteBudgetAutreRessource=value
}
export const AJOUTER_DOTATION_AUTRE_RESSOURCE = (state, elementAjouter) => {
    state.stateDotationAutreRessource.unshift(elementAjouter)
}

export const MODIFIER_DOTATION_AUTRE_RESSOURCE = (state, elementModif) => {
    state.stateDotationAutreRessource = state.stateDotationAutreRessource.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_DOTATION_AUTRE_RESSOURCE = (state, id) => {
    state.stateDotationAutreRessource = state.stateDotationAutreRessource.filter(titre => titre.id != id)
};


// INFORMATION SUR LE BUDGET

export const GET_BORDEREAU_PAR_USER = (state, value) => {
    state.stateBordereauParUser=value
}
export const GET_INFORMATION_BUDGET = (state, value) => {
    state.stateInformationBudget=value
}
export const GET_INFORMATION_BUDGET_USER = (state, value) => {
    state.stateBordereauParUser=value
}
export const AJOUTER_INFORMATION_BUDGET = (state, elementAjouter) => {
    state.stateBordereauParUser.unshift(elementAjouter)
}
export const VISA_REAMENAGEMENT_INFORMATION_BUDGET = (state, elementAjouter) => {
    state.stateInformationBudget.unshift(elementAjouter)
}
export const APPLICATION_DECISION = (state, elementAjouter) => {
    state.stateInformationBudget.unshift(elementAjouter)
}
export const MODIFIER_INFORMATION_BUDGET = (state, elementModif) => {
    state.stateBordereauParUser = state.stateBordereauParUser.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_INFORMATION_BUDGET = (state, id) => {
    state.stateBordereauParUser = state.stateBordereauParUser.filter(titre => titre.id != id)
};


/// budget eclate

export const AJOUTER_BUDGET_ECLATE = (state, elementAjouter) => {
    state.stateBudgetEclate.unshift(elementAjouter)
}

export const REAMENAGEMENT_BUDGET_ECLATE = (state, elementAjouter) => {
    state.stateBudgetEclateMod.unshift(elementAjouter)
}
export const GET_AFFICHE_BUDGET_ECLATE = (state, value) => {
    state.stateListeBudgetEclate=value
}

export const SUPPRIMER_BUDGET_ECLATE = (state, id) => {
    state.stateListeBudgetEclate = state.stateListeBudgetEclate.filter(titre => titre.id != id)
};
export const AJOUTER_NOUVELLE_NATURE = (state, elementAjouter) => {
    state.stateListeBudgetEclate.unshift(elementAjouter)
}
export const MODIFIER_BUDGET_ECLATE = (state, elementModif) => {
    state.stateListeBudgetEclate = state.stateListeBudgetEclate.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}
export const GET_AFFICHE_BUDGET_MODIFIER_EN_PROJET = (state, value) => {
    state.stateBudgetModifierEnProjet=value
}
export const GET_BUDGET_VISE_PAR_ACTIVITE = (state,value)=>{
    state.stateBudgetViseParActivite=value
}
export const GET_BUDGET_MODIFIER_VISE_PAR_ACTIVITE = (state,value)=>{
    state.stateAfficheNouvelleNature=value
}
export const GET_BUDGET_VISE_GROUPE_PAR_ACTIVITE = (state,value)=>{
    state.stateBudgetViseGroupeParActivite=value
}
export const GET_BUDGET_VISE_GROUPE_UO = (state,value)=>{
    state.stateBudgetViseGroupeUniteOp=value
}
// entreprise


export const GET_ENTREPRISE = (state,value)=>{
    state.stateEntreprise=value
}

export const AJOUTER_ENTREPRISE = (state, elementAjouter) => {
    state.stateEntreprise.unshift(elementAjouter)
}

export const MODIFIER_ENTREPRISE = (state, elementModif) => {
    state.stateEntreprise = state.stateEntreprise.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_ENTREPRISE = (state, id) => {
    state.stateEntreprise = state.stateEntreprise.filter(titre => titre.id != id)
};


// taux


export const GET_TAUX = (state,value)=>{
    state.stateTaux=value
}

export const AJOUTER_TAUX = (state, elementAjouter) => {
    state.stateTaux.unshift(elementAjouter)
}

export const MODIFIER_TAUX = (state, elementModif) => {
    state.stateTaux = state.stateTaux.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_TAUX = (state, id) => {
    state.stateTaux = state.stateTaux.filter(titre => titre.id != id)
};

export const ENCOURS_TAUX = (state, elementModif) => {
    state.stateTaux = state.stateTaux.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}
// ORDRE PAIEMENT
export const GET_LISTE_ORDRE_PAIEMENT= (state,value)=>{
    state.stateOrdrePaiement=value
}
export const AJOUTER_ORDRE_PAIEMENT= (state, elementAjouter) => {
    state.stateOrdrePaiement.unshift(elementAjouter)
}
export const AJOUTER_ORDRE_PAIEMENT_DEFINITIF= (state, elementAjouter) => {
    state.stateOrdrePaiement.unshift(elementAjouter)
}
export const AJOUTER_ORDRE_PAIEMENT_ANNULATION= (state, elementAjouter) => {
    state.stateOrdrePaiement.unshift(elementAjouter)
}
export const GET_ACTIVITE_OP= (state,value)=>{
    state.stateActiviteSurOP=value
}
export const GET_LISTE_OP_PAR_UTILISATEUR= (state,value)=>{
    state.stateListeOPParUser=value
}
export const GET_LISTE_OP_PERSONNEL_PAR_UTILISATEUR= (state,value)=>{
    state.stateOpPersonnelParUser=value
}
export const GET_LISTE_FACTURE= (state,value)=>{
    state.stateFacture=value
}

export const GET_ACTIVITE_GLOBAL= (state,value)=>{
    state.stateActiviteglobal=value
}
export const GET_LISTE_OP_GLOBAL= (state,value)=>{
    state.stateListeOPgloba=value
}
export const GET_LISTE_OP_PAR_BORDEREAU= (state,value)=>{
    state.stateOpBordereau=value
}

export const GET_OP_PERSO_SUPPRIMER = (state, id) => {
    state.stateOpPersonnelParUser = state.stateOpPersonnelParUser.filter(titre => titre.id != id)
};
export const GET_OP_SUPPRIMER_BORDEREAU = (state, id) => {
    state.stateOpBordereau = state.stateOpBordereau.filter(titre => titre.id != id)
};
export const GET_OP_SUPPRIMER = (state, id) => {
    state.stateOrdrePaiement = state.stateOrdrePaiement.filter(titre => titre.id != id)
};
export const GET_OP_PAR_ACTIVITE = (state,value)=>{
    state.stateOpParActivite=value
}
export const GET_INFORMATION_ORDRE_PAIEMENT = (state,value)=>{
    state.stateInfoOrdrePaiement=value
}
export const GET_FACTURE_PAR_OP = (state,value)=>{
    state.stateFactureParOp=value
}
export const GET_BUDGET_VISE = (state,value)=>{
    state.stateAfficheBudgetVise=value
}

export const MODIFIER_ORDRE_PAIEMENT = (state, elementModif) => {
    state.stateOrdrePaiement = state.stateOrdrePaiement.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}


// banque


export const GET_BANQUE = (state,value)=>{
    state.stateBanque=value
}

export const AJOUTER_BANQUE = (state, elementAjouter) => {
    state.stateBanque.unshift(elementAjouter)
}

export const MODIFIER_BANQUE = (state, elementModif) => {
    state.stateBanque = state.stateBanque.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_BANQUE = (state, id) => {
    state.stateBanque = state.stateBanque.filter(titre => titre.id != id)
};

// compte bancaire


export const GET_COMPTE_BANCAIRE = (state,value)=>{
    state.stateCompteBancaire=value
}

export const AJOUTER_COMPTE_BANCAIRE = (state, elementAjouter) => {
    state.stateCompteBancaire.unshift(elementAjouter)
}

export const MODIFIER_COMPTE_BANCAIRE = (state, elementModif) => {
    state.stateCompteBancaire = state.stateCompteBancaire.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_COMPTE_BANCAIRE = (state, id) => {
    state.stateCompteBancaire = state.stateCompteBancaire.filter(titre => titre.id != id)
};

// SIGNATAIRE
export const GET_SIGNATAIRE = (state,value)=>{
    state.stateSignataire=value
}

export const AJOUTER_SIGNATAIRE = (state, elementAjouter) => {
    state.stateSignataire.unshift(elementAjouter)
}

export const MODIFIER_SIGNATAIRE = (state, elementModif) => {
    state.stateSignataire = state.stateSignataire.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_SIGNATAIRE = (state, id) => {
    state.stateSignataire = state.stateSignataire.filter(titre => titre.id != id)
};

// SECTEUR ACTIVITE 

export const GET_SECTEUR_ACTIVITE = (state,value)=>{
    state.stateSecteurActivite=value
}

export const AJOUTER_SECTEUR_ACTIVITE = (state, elementAjouter) => {
    state.stateSecteurActivite.unshift(elementAjouter)
}

export const MODIFIER_SECTEUR_ACTIVITE = (state, elementModif) => {
    state.stateSecteurActivite = state.stateSecteurActivite.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_SECTEUR_ACTIVITE = (state, id) => {
    state.stateSecteurActivite = state.stateSecteurActivite.filter(titre => titre.id != id)
};


// FORME JURIDIQUE

export const GET_FORME_JURIDIQUE = (state,value)=>{
    state.stateFormeJuridique=value
}

export const AJOUTER_FORME_JURIDIQUE = (state, elementAjouter) => {
    state.stateFormeJuridique.unshift(elementAjouter)
}

export const MODIFIER_FORME_JURIDIQUE = (state, elementModif) => {
    state.stateFormeJuridique = state.stateFormeJuridique.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_FORME_JURIDIQUE = (state, id) => {
    state.stateFormeJuridique = state.stateFormeJuridique.filter(titre => titre.id != id)
};

// REGIME IMPOSITION

export const GET_REGIME_IMPOSSITION = (state,value)=>{
    state.stateRegimeImpossition=value
}

export const AJOUTER_REGIME_IMPOSSITION = (state, elementAjouter) => {
    state.stateRegimeImpossition.unshift(elementAjouter)
}

export const MODIFIER_REGIME_IMPOSSITION = (state, elementModif) => {
    state.stateRegimeImpossition = state.stateRegimeImpossition.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_REGIME_IMPOSSITION = (state, id) => {
    state.stateRegimeImpossition = state.stateRegimeImpossition.filter(titre => titre.id != id)
};




// GESTION DU PERSONNEL//

//SERVICE

export const GET_SERVICE = (state,value)=>{
    state.stateService=value
}

export const AJOUTER_SERVICE = (state, elementAjouter) => {
    state.stateService.unshift(elementAjouter)
}

export const MODIFIER_SERVICE = (state, elementModif) => {
    state.stateService = state.stateService.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_SERVICE = (state, id) => {
    state.stateService = state.stateService.filter(titre => titre.id != id)
};

// EMPLOI


export const GET_EMPLOI = (state,value)=>{
    state.stateEmploi=value
}

export const AJOUTER_EMPLOI = (state, elementAjouter) => {
    state.stateEmploi.unshift(elementAjouter)
}

export const MODIFIER_EMPLOI = (state, elementModif) => {
    state.stateEmploi = state.stateEmploi.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_EMPLOI = (state, id) => {
    state.stateEmploi = state.stateEmploi.filter(titre => titre.id != id)
};

// SITUATION MATRIMONIAL


export const GET_SITUATION_MATRIMONIAL = (state,value)=>{
    state.stateSituationMatrimonial=value
}

export const AJOUTER_SITUATION_MATRIMONIAL = (state, elementAjouter) => {
    state.stateSituationMatrimonial.unshift(elementAjouter)
}

export const MODIFIER_SITUATION_MATRIMONIAL = (state, elementModif) => {
    state.stateSituationMatrimonial = state.stateSituationMatrimonial.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_SITUATION_MATRIMONIAL = (state, id) => {
    state.stateSituationMatrimonial = state.stateSituationMatrimonial.filter(titre => titre.id != id)
};

// NATURE CONTRAT


export const GET_NATURE_CONTRAT = (state,value)=>{
    state.stateNatureContrat=value
}

export const AJOUTER_NATURE_CONTRAT = (state, elementAjouter) => {
    state.stateNatureContrat.unshift(elementAjouter)
}

export const MODIFIER_NATURE_CONTRAT = (state, elementModif) => {
    state.stateNatureContrat = state.stateNatureContrat.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_NATURE_CONTRAT = (state, id) => {
    state.stateNatureContrat = state.stateNatureContrat.filter(titre => titre.id != id)
};

// DIPLOME


export const GET_DIPLOME = (state,value)=>{
    state.stateDiplome=value
}

export const AJOUTER_DIPLOME = (state, elementAjouter) => {
    state.stateDiplome.unshift(elementAjouter)
}

export const MODIFIER_DIPLOME = (state, elementModif) => {
    state.stateDiplome = state.stateDiplome.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_DIPLOME = (state, id) => {
    state.stateDiplome = state.stateDiplome.filter(titre => titre.id != id)
};

// FONCTION


export const GET_FONCTION = (state,value)=>{
    state.stateFonction=value
}

export const AJOUTER_FONCTION = (state, elementAjouter) => {
    state.stateFonction.unshift(elementAjouter)
}

export const MODIFIER_FONCTION = (state, elementModif) => {
    state.stateFonction = state.stateFonction.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_FONCTION = (state, id) => {
    state.stateFonction = state.stateFonction.filter(titre => titre.id != id)
};


/// TYPE INDEMNITE


export const GET_TYPE_INDEMNITE = (state,value)=>{
    state.stateTypeIndemnite=value
}

export const AJOUTER_TYPE_INDEMNITE = (state, elementAjouter) => {
    state.stateTypeIndemnite.unshift(elementAjouter)
}

export const MODIFIER_TYPE_INDEMNITE = (state, elementModif) => {
    state.stateTypeIndemnite = state.stateTypeIndemnite.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_TYPE_INDEMNITE = (state, id) => {
    state.stateTypeIndemnite = state.stateTypeIndemnite.filter(titre => titre.id != id)
};

// TYPE DE PIECE


export const GET_TYEP_PIECE = (state,value)=>{
    state.stateTypePiece=value
}

export const AJOUTER_TYEP_PIECE = (state, elementAjouter) => {
    state.stateTypePiece.unshift(elementAjouter)
}

export const MODIFIER_TYEP_PIECE = (state, elementModif) => {
    state.stateTypePiece = state.stateTypePiece.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_TYEP_PIECE = (state, id) => {
    state.stateTypePiece = state.stateTypePiece.filter(titre => titre.id != id)
};

export const AJOUTER_OP_PERSONNEL = (state, elementAjouter) => {
    state.stateOpPersonnelParUser.unshift(elementAjouter)
}

/// documentation

export const GET_DOCUMENTATION = (state,value)=>{
    state.stateDocumentation=value
}
export const AJOUTER_DOCUMENTATION = (state, elementAjouter) => {
    state.stateDocumentation.unshift(elementAjouter)
}

// rapport
