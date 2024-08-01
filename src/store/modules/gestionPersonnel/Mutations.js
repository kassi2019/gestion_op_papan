

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



//PERSONNEL

export const GET_PERSONNEL = (state,value)=>{
    state.statePersonnel=value
}
export const GET_PERSONNEL_UTILISATEUR = (state,value)=>{
    state.statePersonnelParUtilisateur=value
}
export const GET_DETAIL_DEPENSE_PERSONNEL = (state,value)=>{
    state.stateDetailDepensePerso=value
}
export const GET_PERSONNEL_PAR_ACTIVITE = (state,value)=>{
    state.statePersonnelParActivite=value
}
export const GET_LISTE_PERSONNEL_OP = (state,value)=>{
    state.stateListePersonnelOP=value
}
export const SUPPRIMER_PERSONNEL_USER = (state, id) => {
    state.statePersonnelParUtilisateur = state.statePersonnelParUtilisateur.filter(titre => titre.id != id)
};
export const AJOUTER_PERSONNEL = (state, elementAjouter) => {
    state.statePersonnel.unshift(elementAjouter)
}

export const MODIFIER_PERSONNEL = (state, elementModif) => {
    state.statePersonnel = state.statePersonnel.map(response => {

        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_PERSONNEL = (state, id) => {
    state.statePersonnel = state.statePersonnel.filter(titre => titre.id != id)
};
