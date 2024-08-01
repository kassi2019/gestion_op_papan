import apiGuest from '../../../request/AppRequest';
//import apiImage from '../../../request/AppRequestImage';
import authHeader from '../../../services/auth-header';
//import router from '../../../routes/index';
import Swal from 'sweetalert2';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css"

//// GESTION DU PERSONNEL /////

//SERVICE


export function getService({ commit }) {
  apiGuest.get("/listeService", { headers: authHeader() })
    .then(response => {
      commit("GET_SERVICE", response.data);
    })
    .catch(error => console.log(error));
}

export function AjouterService({ commit }, nouveau) {
 
    apiGuest.post("/AjouterService", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_SERVICE", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}


export function ModifierService({ commit }, nouveau) {
  apiGuest.
    put("/ModifierService/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_SERVICE", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerService({ commit}, id) {

  Swal.fire({
  // title: "Are you sure?",
  text: "Voulez vous vraiment supprimer ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Confimer"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.delete('/supprimerService/' + id, { headers: authHeader() })
     commit('SUPPRIMER_SERVICE', id)
 
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});
}

// FONCTION


export function getFonction({ commit }) {
  apiGuest.get("/listeFonction", { headers: authHeader() })
    .then(response => {
      commit("GET_FONCTION", response.data);
    })
    .catch(error => console.log(error));
}

export function AjouterFonction({ commit }, nouveau) {
 
    apiGuest.post("/AjouterFonction", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_FONCTION", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}


export function ModifierFonction({ commit }, nouveau) {
  apiGuest.
    put("/ModifierFonction/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_FONCTION", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerFonction({ commit}, id) {

  Swal.fire({
  // title: "Are you sure?",
  text: "Voulez vous vraiment supprimer ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Confimer"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.delete('/supprimerFonction/' + id, { headers: authHeader() })
     commit('SUPPRIMER_FONCTION', id)
 
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});
}

// EMPLOI


export function getEmploi({ commit }) {
  apiGuest.get("/listeEmploi", { headers: authHeader() })
    .then(response => {
      commit("GET_EMPLOI", response.data);
    })
    .catch(error => console.log(error));
}

export function AjouterEmploi({ commit }, nouveau) {
 
    apiGuest.post("/AjouterEmploi", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_EMPLOI", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}


export function ModifierEmploi({ commit }, nouveau) {
  apiGuest.
    put("/ModifierEmploi/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_EMPLOI", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerEmploi({ commit}, id) {

  Swal.fire({
  // title: "Are you sure?",
  text: "Voulez vous vraiment supprimer ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Confimer"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.delete('/supprimerEmploi/' + id, { headers: authHeader() })
     commit('SUPPRIMER_EMPLOI', id)
 
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});
}

// NATURE CONTRAT


export function getNatureContrat({ commit }) {
  apiGuest.get("/listeNatureContrat", { headers: authHeader() })
    .then(response => {
      commit("GET_NATURE_CONTRAT", response.data);
    })
    .catch(error => console.log(error));
}

export function AjouterNatureContrat({ commit }, nouveau) {
 
    apiGuest.post("/AjouterNatureContrat", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_NATURE_CONTRAT", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}


export function ModifierNatureContrat({ commit }, nouveau) {
  apiGuest.
    put("/ModifierNatureContrat/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_NATURE_CONTRAT", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerNatureContrat({ commit}, id) {

  Swal.fire({
  // title: "Are you sure?",
  text: "Voulez vous vraiment supprimer ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Confimer"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.delete('/supprimerNatureContrat/' + id, { headers: authHeader() })
     commit('SUPPRIMER_NATURE_CONTRAT', id)
 
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});
}

// SITUATION MATRIMONIAL


export function getSituationMatrimonial({ commit }) {
  apiGuest.get("/listeSituationMatrimonial", { headers: authHeader() })
    .then(response => {
      commit("GET_SITUATION_MATRIMONIAL", response.data);
    })
    .catch(error => console.log(error));
}

export function AjouterSituationMatrimonial({ commit }, nouveau) {
 
    apiGuest.post("/AjouterSituationMatrimonial", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_SITUATION_MATRIMONIAL", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}


export function ModifierSituationMatrimonial({ commit }, nouveau) {
  apiGuest.
    put("/ModifierSituationMatrimonial/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_SITUATION_MATRIMONIAL", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerSituationMatrimonial({ commit}, id) {

  Swal.fire({
  // title: "Are you sure?",
  text: "Voulez vous vraiment supprimer ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Confimer"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.delete('/supprimerSituationMatrimonial/' + id, { headers: authHeader() })
     commit('SUPPRIMER_SITUATION_MATRIMONIAL', id)
 
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});
}

/// DIPLOME


export function getDiplome({ commit }) {
  apiGuest.get("/listeDiplome", { headers: authHeader() })
    .then(response => {
      commit("GET_DIPLOME", response.data);
    })
    .catch(error => console.log(error));
}

export function AjouterDiplome({ commit }, nouveau) {
 
    apiGuest.post("/AjouterDiplome", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_DIPLOME", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}


export function ModifierDiplome({ commit }, nouveau) {
  apiGuest.
    put("/ModifierDiplome/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_DIPLOME", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerDiplome({ commit}, id) {

  Swal.fire({
  // title: "Are you sure?",
  text: "Voulez vous vraiment supprimer ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Confimer"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.delete('/supprimerDiplome/' + id, { headers: authHeader() })
     commit('SUPPRIMER_DIPLOME', id)
 
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});
}

/// TYPE INDEMNITE


export function getTypeIndemnite({ commit }) {
  apiGuest.get("/listeTypeIndemnite", { headers: authHeader() })
    .then(response => {
      commit("GET_TYPE_INDEMNITE", response.data);
    })
    .catch(error => console.log(error));
}

export function AjouterTypeIndemnite({ commit }, nouveau) {
 
    apiGuest.post("/AjouterTypeIndemnite", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_TYPE_INDEMNITE", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}


export function ModifierTypeIndemnite({ commit }, nouveau) {
  apiGuest.
    put("/ModifierTypeIndemnite/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_TYPE_INDEMNITE", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerTypeIndemnite({ commit}, id) {

  Swal.fire({
  // title: "Are you sure?",
  text: "Voulez vous vraiment supprimer ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Confimer"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.delete('/supprimerTypeIndemnite/' + id, { headers: authHeader() })
     commit('SUPPRIMER_TYPE_INDEMNITE', id)
 
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});
}

// TYPE DE PIECE


export function getTypePiece({ commit }) {
  apiGuest.get("/listeTypePiece", { headers: authHeader() })
    .then(response => {
      commit("GET_TYEP_PIECE", response.data);
    })
    .catch(error => console.log(error));
}

export function AjouterTypePiece({ commit }, nouveau) {
 
    apiGuest.post("/AjouterTypePiece", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_TYEP_PIECE", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}


export function ModifierTypePiece({ commit }, nouveau) {
  apiGuest.
    put("/ModifierTypePiece/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_TYEP_PIECE", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerTypePiece({ commit}, id) {

  Swal.fire({
  // title: "Are you sure?",
  text: "Voulez vous vraiment supprimer ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Confimer"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.delete('/supprimerTypePiece/' + id, { headers: authHeader() })
     commit('SUPPRIMER_TYEP_PIECE', id)
 
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});
}

// PERSONNEL

export function getCumulMontantContrat({ commit }) {
  apiGuest.get("/AfficheDetailPersonnelParSousBudget", { headers: authHeader() })
    .then(response => {
      commit("GET_DETAIL_CUMUL_MONTANT_PERSONNEL", response.data);
    })
    .catch(error => console.log(error));
}
export function getListePersonnelOp({ commit }, objet) {

  return new Promise((resolve, reject) => {
    apiGuest
      .get("/AfficheListePersonnelOP/" + objet.id, { headers: authHeader() })
      .then(response => {
        resolve(response);
        commit("GET_LISTE_PERSONNEL_OP", response.data);
      }).catch(error => {
        reject(error);
      });
  });

}
export function getPersonnelParActivite({ commit }, objet) {

  return new Promise((resolve, reject) => {
    apiGuest
      .get("/AffichePersonnelParActivite/" + objet.id, { headers: authHeader() })
      .then(response => {
        resolve(response);
        commit("GET_PERSONNEL_PAR_ACTIVITE", response.data);
      }).catch(error => {
        reject(error);
      });
  });

}

export function getDetailDepensePersonnel({ commit }, objet) {

  return new Promise((resolve, reject) => {
    apiGuest
      .get("/AfficheDetailPersonnel/" + objet.id, { headers: authHeader() })
      .then(response => {
        resolve(response);
        commit("GET_DETAIL_DEPENSE_PERSONNEL", response.data);
      }).catch(error => {
        reject(error);
      });
  });

}

export function getPersonnel({ commit }) {
  apiGuest.get("/listePersonnel", { headers: authHeader() })
    .then(response => {
      commit("GET_PERSONNEL", response.data);
    })
    .catch(error => console.log(error));
}
export function getPersonnelUtilisateur({ commit }) {
  apiGuest.get("/listePersonnelParUtilisateur", { headers: authHeader() })
    .then(response => {
      commit("GET_PERSONNEL_UTILISATEUR", response.data);
    })
    .catch(error => console.log(error));
}
export function AjouterPersonnel({ commit }, nouveau) {
 
    apiGuest.post("/EnregistrementPersonnel", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_PERSONNEL", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}


export function ModifierPersonnel({ commit }, nouveau) {
  apiGuest.
    put("/ModifierPersonnel/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_PERSONNEL", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerPersonnel({ commit}, id) {

  Swal.fire({
  // title: "Are you sure?",
  text: "Voulez vous vraiment supprimer ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Confimer"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.delete('/supprimerPersonnel/' + id, { headers: authHeader() })
     commit('SUPPRIMER_PERSONNEL', id)
 
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});
}


export function supprimerPersonnelParUser({ commit}, id) {

  Swal.fire({
  // title: "Are you sure?",
  text: "Voulez vous vraiment supprimer ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Confimer"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.delete('/supprimerPersonnel/' + id, { headers: authHeader() })
     commit('SUPPRIMER_PERSONNEL_USER', id)
 
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});
}



// ORDRE MISSION


export function getOrdreMission({ commit }) {
  apiGuest.get("/listeOrdreMission", { headers: authHeader() })
    .then(response => {
      commit("GET_ORDRE_MISSION", response.data);
    })
    .catch(error => console.log(error));
}

export function getOrdreMissionUser({ commit }) {
  apiGuest.get("/listeOrdreMissionPerUtilisateur", { headers: authHeader() })
    .then(response => {
      commit("GET_ORDRE_MISSION_USER", response.data);
    })
    .catch(error => console.log(error));
}
export function AjouterOrdreMission({ commit }, nouveau) {
 
    apiGuest.post("/AjouterOrdreMission", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_ORDRE_MISSION", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}

export function ModifierOrdreMissionUser({ commit }, nouveau) {
  apiGuest.
    put("/ModifierOrdreMission/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_ORDRE_MISSION_USER", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerOrdreMissionUser({ commit}, id) {

  Swal.fire({
  // title: "Are you sure?",
  text: "Voulez vous vraiment supprimer ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Confimer"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.delete('/supprimerOrdreMission/' + id, { headers: authHeader() })
     commit('SUPPRIMER_ORDRE_MISSION_USER', id)
 
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});
}

export function ModifierOrdreMission({ commit }, nouveau) {
  apiGuest.
    put("/ModifierOrdreMission/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_ORDRE_MISSION", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerOrdreMission({ commit}, id) {

  Swal.fire({
  // title: "Are you sure?",
  text: "Voulez vous vraiment supprimer ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Confimer"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.delete('/supprimerOrdreMission/' + id, { headers: authHeader() })
     commit('SUPPRIMER_ORDRE_MISSION', id)
 
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});
}