import apiGuest from '../../../request/AppRequest';
//import apiImage from '../../../request/AppRequestImage';
import authHeader from '../../../services/auth-header';
//import router from '../../../routes/index';
import Swal from 'sweetalert2';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css"


// exercice budgetaire
export function getExerciceBudgetaire({ commit }) {
  apiGuest.get("/listeExerciceBudgetaire", { headers: authHeader() })
    .then(response => {
      commit("GET_EXERCICE_BUDGETAIRE", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouterExerciceBudgetaire({ commit }, nouveau) {
 
    apiGuest.post("/AjouterExerciceBudgetaire", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_EXERCICE_BUDGETAIRE", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}

export function encoursExerciceBudgetaire({ commit,dispatch}, nouveau) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
 
  Swal.fire({
  // title: "Are you sure?",
  text: "Voulez vous vraiment changer Exercice budgétaire ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "OUI"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.put('/encours/' + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("ENCOURS_EXERCICE_BUDGETAIRE", response.data);
       dispatch('getExerciceBudgetaire');
//       toast("Changement effectué avec succès!", {
//         "theme": "auto",
//         "type": "success",
//         "dangerouslyHTMLString": true
      // })
      
    });
    
    Swal.fire({
      title: "Changement",
      text: "effectué avec succès.",
      icon: "success"
    });
    // toast("Suppression effectué avec succès!", {
    //     "theme": "auto",
    //     "type": "success",
    //     "dangerouslyHTMLString": true
    // })
    
  }
});
      
        //.then(() => dialog.close())
   // });
}

export function modifierExerciceBudgetaire({ commit }, nouveau) {
  apiGuest.
    put("/ModifierExerciceBudgetaire/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_EXERCICE_BUDGETAIRE", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerExerciceBudgetaire({ commit,dispatch}, id) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
 
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
   
    apiGuest.delete('/supprimerExerciceBudgetaire/' + id, { headers: authHeader() })
     commit('SUPPRIMER_EXERCICE_BUDGETAIRE', id)
     dispatch('getExerciceBudgetaire');
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });
    // toast("Suppression effectué avec succès!", {
    //     "theme": "auto",
    //     "type": "success",
    //     "dangerouslyHTMLString": true
    // })
    
  }
});
      
        //.then(() => dialog.close())
   // });
}




// section


export function getSection({ commit }) {
  apiGuest.get("/listeSection", { headers: authHeader() })
    .then(response => {
      commit("GET_SECTION", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouteSection({ commit }, nouveau) {
 
    apiGuest.post("/AjouterSection", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_SECTION", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
      // return false;
  
}

export function modifierSection({ commit }, nouveau) {
  apiGuest.
    put("/ModifierSection/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_SECTION", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}



export function supprimerSection({ commit}, id) {


  Swal.fire({

  text: "Voulez vous vraiment supprimer ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Confimer"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.delete('/supprimerSection/' + id, { headers: authHeader() })
    commit('SUPPRIMER_SECTION', id);
    // dispatch('getSection');
  
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });
    
    
  }
});

}




//nature de depense

export function getNatureDepense({ commit }) {
  apiGuest.get("/listeNatureDepense", { headers: authHeader() })
    .then(response => {
      commit("GET_NATURE_DEPENSE", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouteNatureDepense({ commit }, nouveau) {
 
    apiGuest.post("/AjouterNatureDepense", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_NATURE_DEPENSE", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}

export function modifierNatureDepense({ commit }, nouveau) {
  apiGuest.
    put("/ModifierNatureDepense/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_NATURE_DEPENSE", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}



export function supprimerNatureDepense({ commit,dispatch}, id) {


  Swal.fire({

  text: "Voulez vous vraiment supprimer ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Confimer"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.delete('/supprimerNatureDepense/' + id, { headers: authHeader() })
    commit('SUPPRIMER_NATURE_DEPENSE', id);
    dispatch('getNatureDepense');
  
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });
    
    
  }
});

}
// TYPE FINANCEMENT



export function getTypeFinancement({ commit }) {
  apiGuest.get("/listetypeFinancement", { headers: authHeader() })
    .then(response => {
      commit("GET_TYPE_FINANCEMENT", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouteTypeFinancement({ commit }, nouveau) {
 
    apiGuest.post("/AjoutertypeFinancement", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_TYPE_FINANCEMENT", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}

export function modifierTypeFinancement({ commit }, nouveau) {
  apiGuest.
    put("/ModifiertypeFinancement/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_TYPE_FINANCEMENT", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}


export function supprimerTypeFinancement({ commit,dispatch}, id) {


  Swal.fire({

  text: "Voulez vous vraiment supprimer ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Confimer"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.delete('/supprimertypeFinancement/' + id, { headers: authHeader() })
    commit('SUPPRIMER_TYPE_FINANCEMENT', id);
    dispatch('getTypeFinancement');
  
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });
    
    
  }
});

}
// bailleur


export function getBailleur({ commit }) {
  apiGuest.get("/listeBailleur", { headers: authHeader() })
    .then(response => {
      commit("GET_BAILLEUR", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouteBailleur({ commit }, nouveau) {
 
    apiGuest.post("/AjouterBailleur", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_BAILLEUR", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}

export function modifierBailleur({ commit }, nouveau) {
  apiGuest.
    put("/ModifierBailleur/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_BAILLEUR", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}




export function supprimerBailleur({ commit}, id) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
 
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
    apiGuest.delete('/supprimerBailleur/' + id, { headers: authHeader() })
    commit('SUPPRIMER_BAILLEUR', id);
    // dispatch('getNatureEconomique');
    // dispatch('getNatureEconomique');
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});

}

//Activite


export function getActivite({ commit }) {
  apiGuest.get("/listeActivite", { headers: authHeader() })
    .then(response => {
      commit("GET_ACTIVITE", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouteActivite({ commit }, nouveau) {
 
    apiGuest.post("/AjouterActivite", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_ACTIVITE", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}

export function modifierActivite({ commit }, nouveau) {
  apiGuest.
    put("/ModifierBailleur/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_ACTIVITE", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}




export function supprimerActivite({ commit}, id) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
 
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
    apiGuest.delete('/supprimerActivite/' + id, { headers: authHeader() })
    commit('SUPPRIMER_ACTIVITE', id);
    // dispatch('getNatureEconomique');
    // dispatch('getNatureEconomique');
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});

}

//NATURE ECONOMIQUE



export function getNatureEconomique({ commit }) {
  apiGuest.get("/listeNatureEconomique", { headers: authHeader() })
    .then(response => {
      commit("GET_NATURE_ECONOMIQUE", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouteNatureEconomique({ commit,dispatch }, nouveau) {
 
    apiGuest.post("/AjouterNatureEconomique", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_NATURE_ECONOMIQUE", response.data);
        dispatch('getNatureEconomique');
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}

export function modifierNatureEconomique({ commit,dispatch }, nouveau) {
  apiGuest.
    put("/ModifierNatureEconomique/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_NATURE_ECONOMIQUE", response.data);
      dispatch('getNatureEconomique');
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerNatureEconomique({ commit,dispatch}, id) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
 
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
    apiGuest.delete('/supprimerNatureEconomique/' + id, { headers: authHeader() })
    commit('SUPPRIMER_NATURE_ECONOMIQUE', id);
    dispatch('getNatureEconomique');
    dispatch('getNatureEconomique');
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});

}
// PROJET

export function getProjet({ commit }) {
  apiGuest.get("/listeProjet", { headers: authHeader() })
    .then(response => {
      commit("GET_PROJET", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouteProjet({ commit , dispatch}, nouveau) {
 
    apiGuest.post("/AjouterProjet", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_PROJET", response.data);
        dispatch('getSection')
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}

export function modifierProjet({ commit }, nouveau) {
  apiGuest.
    put("/ModifierProjet/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_PROJET", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}




export function supprimerProjet({ commit}, id) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
 
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
    apiGuest.delete('/supprimerProjet/' + id, { headers: authHeader() })
    commit('SUPPRIMER_PROJET', id);
    
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});

}

// SOUS BUDGET
export function getGroupeActivite({ commit }) {
  apiGuest.get("/listeActiviteGroupe", { headers: authHeader() })
    .then(response => {
      commit("GET_GROUPE_ACTIVITE", response.data);
    })
    .catch(error => console.log(error));
}
export function getSousBudget({ commit }) {
  apiGuest.get("/listeSousBudget", { headers: authHeader() })
    .then(response => {
      commit("GET_SOUS_BUDGET", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouterSousBudget({ commit }, nouveau) {
 
    apiGuest.post("/AjouterSousBudget", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_SOUS_BUDGET", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}


export function modifierSousBudget({ commit }, nouveau) {
  apiGuest.
    put("/ModifierSousBudget/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_SOUS_BUDGET", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerSousBudget({ commit,dispatch}, id) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
 
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
   
    apiGuest.delete('/supprimerSousBudget/' + id, { headers: authHeader() })
     commit('SUPPRIMER_SOUS_BUDGET', id)
    dispatch('getSousBudget');
    dispatch('getSousBudget');
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });
    // toast("Suppression effectué avec succès!", {
    //     "theme": "auto",
    //     "type": "success",
    //     "dangerouslyHTMLString": true
    // })
    
  }
});
      
        //.then(() => dialog.close())
   // });
}

// DOTATION NOTIFIER

export function getDotationNotifie({ commit }) {
  apiGuest.get("/listeDotationNotifie", { headers: authHeader() })
    .then(response => {
      commit("GET_DOTATION_NOTIFIE", response.data);
    })
    .catch(error => console.log(error));
}
export function getGroupeActivitebudgetNotifie({ commit }) {
  apiGuest.get("/listeActiviteGroupeBudgetNotifie", { headers: authHeader() })
    .then(response => {
      commit("GET_GROUPE_ACTIVITE_BUDGET_NOTIFIE", response.data);
    })
    .catch(error => console.log(error));
}
export function ajouterDotationNotifie({ commit }, nouveau) {
 
    apiGuest.post("/AjouterDotationNotifie", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_DOTATION_NOTIFIE", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}


export function modifierDotationNotifie({ commit }, nouveau) {
  apiGuest.
    put("/ModifierDotationNotifie/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_DOTATION_NOTIFIE", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerDotationNotifie({ commit}, id) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
 
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
   
    apiGuest.delete('/supprimerDotationNotifie/' + id, { headers: authHeader() })
     commit('SUPPRIMER_DOTATION_NOTIFIE', id)
     
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});
}

// DOTATION REPORT

export function getDotationReport({ commit }) {
  apiGuest.get("/listeDotationReport", { headers: authHeader() })
    .then(response => {
      commit("GET_DOTATION_REPORT", response.data);
    })
    .catch(error => console.log(error));
}
export function getGroupeActivitebudgetReport({ commit }) {
  apiGuest.get("/listeActiviteGroupeBudgetReport", { headers: authHeader() })
    .then(response => {
      commit("GET_GROUPE_ACTIVITE_BUDGET_REPORT", response.data);
    })
    .catch(error => console.log(error));
}
export function ajouterDotationReport({ commit,dispatch}, nouveau) {
 
    apiGuest.post("/AjouterDotationReport", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_DOTATION_REPORT", response.data);
        //dispatch('getGroupeActivitebudgetReport')
        dispatch('getDotationReport')
        dispatch('getDotationReport')
        dispatch('getDotationReport')
       dispatch('getDotationReport')
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}


export function modifierDotationReport({ commit }, nouveau) {
  apiGuest.
    put("/ModifierDotationReport/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_DOTATION_REPORT", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerDotationReport({ commit,dispatch}, id) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
 
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
   
    apiGuest.delete('/supprimerDotationReport/' + id, { headers: authHeader() })
     commit('SUPPRIMER_DOTATION_REPORT', id)
        dispatch('getDotationReport')
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});

}

// DOTATION RESSOURCE PROPRE

export function getDotationRessourcePropre({ commit }) {
  apiGuest.get("/listeDotationRessourcePropre", { headers: authHeader() })
    .then(response => {
      commit("GET_DOTATION_RESSOURCE_PROPRE", response.data);
    })
    .catch(error => console.log(error));
}
export function getGroupeActivitebudgetRessourcePropre({ commit }) {
  apiGuest.get("/listeActiviteGroupeBudgetRessourcePropre", { headers: authHeader() })
    .then(response => {
      commit("GET_GROUPE_ACTIVITE_BUDGET_RESSOURCE_PROPRE", response.data);
    })
    .catch(error => console.log(error));
}
export function ajouterDotationRessourcePropre({ commit }, nouveau) {
 
    apiGuest.post("/AjouterDotationRessourcePropre", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_DOTATION_RESSOURCE_PROPRE", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}


export function modifierDotationRessourcePropre({ commit }, nouveau) {
  apiGuest.
    put("/ModifierDotationRessourcePropre/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_DOTATION_RESSOURCE_PROPRE", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerDotationRessourcePropre({ commit}, id) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
 
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
   
    apiGuest.delete('/supprimerDotationRessourcePropre/' + id, { headers: authHeader() })
     commit('SUPPRIMER_DOTATION_RESSOURCE_PROPRE', id)
     
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});

}


// DOTATION AUTRE RESSOURCE

export function getDotationAutreRessource({ commit }) {
  apiGuest.get("/listeDotationAutreRessource", { headers: authHeader() })
    .then(response => {
      commit("GET_DOTATION_AUTRE_RESSOURCE", response.data);
    })
    .catch(error => console.log(error));
}
export function getGroupeActivitebudgetAutreRessource({ commit }) {
  apiGuest.get("/listeActiviteGroupeBudgetAutreRessource", { headers: authHeader() })
    .then(response => {
      commit("GET_GROUPE_ACTIVITE_BUDGET_AUTRE_RESSOURCE", response.data);
    })
    .catch(error => console.log(error));
}
export function ajouterDotationAutreRessource({ commit }, nouveau) {
 
    apiGuest.post("/AjouterDotationAutreRessource", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_DOTATION_AUTRE_RESSOURCE", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}


export function modifierDotationAutreRessource({ commit }, nouveau) {
  apiGuest.
    put("/ModifierDotationAutreRessource/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_DOTATION_AUTRE_RESSOURCE", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerDotationAutreRessource({ commit}, id) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
 
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
   
    apiGuest.delete('/supprimerDotationAutreRessource/' + id, { headers: authHeader() })
     commit('SUPPRIMER_DOTATION_AUTRE_RESSOURCE', id)
 
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});
      
        //.then(() => dialog.close())
   // });
}



// INFORMATION SUR LE BUDGET



export function getInformationBudget({ commit }) {
  apiGuest.get("/listeInformationBudget", { headers: authHeader() })
    .then(response => {
      commit("GET_INFORMATION_BUDGET", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouterInformationBudget({ commit }, nouveau) {
 
    apiGuest.post("/AjouterInformationBudget", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_INFORMATION_BUDGET", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}


export function modifierInformationBudget({ commit }, nouveau) {
  apiGuest.
    put("/ModifierInformationBudget/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_INFORMATION_BUDGET", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerInformationBudget({ commit}, id) {

  //this.$app.$dialog
   // .confirm("Voulez vous vraiment supprimer ?.")
   // .then(dialog => {
 
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
   
    apiGuest.delete('/supprimerInformationBudget/' + id, { headers: authHeader() })
     commit('SUPPRIMER_INFORMATION_BUDGET', id)
 
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});
      
        //.then(() => dialog.close())
   // });
}

//BUDGET ECLATE


export function ajouterBudgetEclate({ commit,dispatch }, nouveau) {
 
    apiGuest.post("/EnregistrementBudget", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_BUDGET_ECLATE", response.data);
        dispatch("getBudgetEclate");
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}

export function ReamenagementBudgetEclate({ commit,dispatch }, nouveau) {
 
    apiGuest.post("/reamenagementBudgetaire", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("REAMENAGEMENT_BUDGET_ECLATE", response.data);
         dispatch("getBudgetEclate");
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}

export function VisaReamenagementBudgetEclate({ commit }, nouveau) {
 
    apiGuest.post("/viseReamenagement", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("VISA_REAMENAGEMENT_INFORMATION_BUDGET", response.data);
        // dispatch("getBudgetEclate");
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}

export function AjouterNouvelleNature({ commit }, nouveau) {
 
    apiGuest.post("/AjouterNouvelleNature", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_NOUVELLE_NATURE", response.data);
        // dispatch("getBudgetEclate");
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}
// export function getAfficherDotation({ commit }, objet1) {

//   return new Promise((resolve, reject) => {
//     axios
//       .get("/afficheDotationParActivite/" + objet1.id, { headers: authHeader() })
//       .then(response => {
//         resolve(response);
//         commit("GET_AFFICHE_DOTATION_BUDGET", response.data);
//       }).catch(error => {
//         reject(error);
//       });
//   });

// }
export function getBudgetEclate({ commit }) {
  apiGuest.get("/listeBudgetEclate", { headers: authHeader() })
    .then(response => {
      commit("GET_AFFICHE_BUDGET_ECLATE", response.data);
    })
    .catch(error => console.log(error));
}
export function getBudgetModifierEnProjet({ commit }) {
  apiGuest.get("/listeBudgetModifierEnProjet", { headers: authHeader() })
    .then(response => {
      commit("GET_AFFICHE_BUDGET_MODIFIER_EN_PROJET", response.data);
    })
    .catch(error => console.log(error));
}
export function getBudgetViseParActvite({ commit }, objet) {

  return new Promise((resolve, reject) => {
    apiGuest
      .get("/listeBudgetEclateViser/" + objet.id, { headers: authHeader() })
      .then(response => {
        resolve(response);
        commit("GET_BUDGET_VISE_PAR_ACTIVITE", response.data);
      }).catch(error => {
        reject(error);
      });
  });

}
export function getBudgetViseModifierParActvite({ commit }, objet) {

  return new Promise((resolve, reject) => {
    apiGuest
      .get("/listeBudgetModifierViseParActivite/" + objet.id, { headers: authHeader() })
      .then(response => {
        resolve(response);
        commit("GET_BUDGET_MODIFIER_VISE_PAR_ACTIVITE", response.data);
      }).catch(error => {
        reject(error);
      });
  });

}
export function getBudgetEclateViseGroupeParActivte({ commit }) {
  apiGuest.get("/AfficheBudgetViseGroupeParActivite", { headers: authHeader() })
    .then(response => {
      commit("GET_BUDGET_VISE_GROUPE_PAR_ACTIVITE", response.data);
    })
    .catch(error => console.log(error));
}

export function supprimerBudgetEclate({ commit}, id) {

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
   
    apiGuest.delete('/supprimerBudgetEclate/' + id, { headers: authHeader() })
     commit('SUPPRIMER_BUDGET_ECLATE', id)
 
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});

}
export function modifierBudget({ commit }, nouveau) {
  apiGuest.
    put("/ModifierBudgetEclate/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_BUDGET_ECLATE", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}
// ENTREPRISE



export function getEntreprise({ commit }) {
  apiGuest.get("/listeEntreprise", { headers: authHeader() })
    .then(response => {
      commit("GET_ENTREPRISE", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouterEntreprise({ commit }, nouveau) {
 
    apiGuest.post("/AjouterEntreprise", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_ENTREPRISE", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}


export function modifierEntreprise({ commit }, nouveau) {
  apiGuest.
    put("/ModifierEntreprise/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_ENTREPRISE", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerEntreprise({ commit}, id) {

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
   
    apiGuest.delete('/supprimerEntreprise/' + id, { headers: authHeader() })
     commit('SUPPRIMER_ENTREPRISE', id)
 
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});

}


// taux




export function getTaux({ commit }) {
  apiGuest.get("/listeTaux", { headers: authHeader() })
    .then(response => {
      commit("GET_TAUX", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouterTaux({ commit }, nouveau) {
 
    apiGuest.post("/AjouterTaux", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_TAUX", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}


export function modifierTaux({ commit }, nouveau) {
  apiGuest.
    put("/ModifierTaux/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_TAUX", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerTaux({ commit}, id) {

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
   
    apiGuest.delete('/supprimerTaux/' + id, { headers: authHeader() })
     commit('SUPPRIMER_TAUX', id)
 
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});
}


export function encoursTaux({ commit,dispatch}, nouveau) {

  Swal.fire({

  text: "Voulez vous vraiment changer Taux ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "OUI"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.put('/encoursTaux/' + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("ENCOURS_TAUX", response.data);
       dispatch('getTaux');

    });
    
    Swal.fire({
      title: "Changement",
      text: "effectué avec succès.",
      icon: "success"
    });
    
  }
});
      
        //.then(() => dialog.close())
   // });
}
/// ORDRE PAIEMENT

export function ajouterOrdrePaiement({ commit,dispatch }, nouveau) {
 
    apiGuest.post("/EnregistrementOrdrePaiement", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_ORDRE_PAIEMENT", response.data);
        dispatch("getActiviteOp");
        dispatch('getListeOrdrePaiementGlobal');
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}
export function ajouterOrdrePaiementDefinitif({ commit,dispatch }, nouveau) {
 
    apiGuest.post("/EnregistrementOrdrePaiementDefinitif", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_ORDRE_PAIEMENT_DEFINITIF", response.data);
        dispatch("getActiviteOp");
        dispatch('getListeOrdrePaiementGlobal');
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}
export function ajouterOrdrePaiementAnnulation({ commit,dispatch }, nouveau) {
 
    apiGuest.post("/EnregistrementOrdrePaiementAnnulation", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_ORDRE_PAIEMENT_ANNULATION", response.data);
        dispatch("getActiviteOp");
        dispatch('getListeOrdrePaiementGlobal');
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}
export function getActiviteOp({ commit }) {
  apiGuest.get("/listeOrdrePaiementGroupeActivite", { headers: authHeader() })
    .then(response => {
      commit("GET_ACTIVITE_OP", response.data);
    })
    .catch(error => console.log(error));
}
export function getListeOrdrePaiementParUtilisateur({ commit }) {
  apiGuest.get("/listeOrdrePaiementParUtilisateur", { headers: authHeader() })
    .then(response => {
      commit("GET_LISTE_OP_PAR_UTILISATEUR", response.data);
    })
    .catch(error => console.log(error));
}

export function getListeFacture({ commit }) {
  apiGuest.get("/listeFacture", { headers: authHeader() })
    .then(response => {
      commit("GET_LISTE_FACTURE", response.data);
    })
    .catch(error => console.log(error));
}



export function getActiviteGlobal({ commit }) {
  apiGuest.get("/ActiviteGroupe", { headers: authHeader() })
    .then(response => {
      commit("GET_ACTIVITE_GLOBAL", response.data);
    })
    .catch(error => console.log(error));
}
export function getListeOrdrePaiementGlobal({ commit }) {
  apiGuest.get("/listeToutOrdrePaiement", { headers: authHeader() })
    .then(response => {
      commit("GET_LISTE_OP_GLOBAL", response.data);
    })
    .catch(error => console.log(error));
}

export function getOpParActvite({ commit }, objet) {

  return new Promise((resolve, reject) => {
    apiGuest
      .get("/listeOPParActivite/" + objet.id, { headers: authHeader() })
      .then(response => {
        resolve(response);
        commit("GET_OP_PAR_ACTIVITE", response.data);
      }).catch(error => {
        reject(error);
      });
  });

}
export function getFactureParOP({ commit }, objet) {

  return new Promise((resolve, reject) => {
    apiGuest
      .get("/AfficheFactureParOP/" + objet.id, { headers: authHeader() })
      .then(response => {
        resolve(response);
        commit("GET_FACTURE_PAR_OP", response.data);
      }).catch(error => {
        reject(error);
      });
  });

}

export function getBudgetVise({ commit }) {
  apiGuest.get("/afficherBudgetVise", { headers: authHeader() })
    .then(response => {
      commit("GET_BUDGET_VISE", response.data);
    })
    .catch(error => console.log(error));
}

export function modifierOrdrePaiement({ commit }, nouveau) {
  apiGuest.
    put("/ModifierOrdrePaiement/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_ORDRE_PAIEMENT", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function getInformationOp({ commit }, objet) {

  return new Promise((resolve, reject) => {
    apiGuest
      .get("/AfficheInformationSurOP/" + objet.id, { headers: authHeader() })
      .then(response => {
        resolve(response);
        commit("GET_INFORMATION_ORDRE_PAIEMENT", response.data);
      }).catch(error => {
        reject(error);
      });
  });

}

// Banque


export function getBanque({ commit }) {
  apiGuest.get("/listeBanque", { headers: authHeader() })
    .then(response => {
      commit("GET_BANQUE", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouteBanque({ commit }, nouveau) {
 
    apiGuest.post("/AjouterBanque", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_BANQUE", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}

export function modifierBanque({ commit }, nouveau) {
  apiGuest.
    put("/ModifierBanque/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_BANQUE", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}


export function supprimerBanque({ commit,dispatch}, id) {


  Swal.fire({

  text: "Voulez vous vraiment supprimer ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Confimer"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.delete('/supprimerBanque/' + id, { headers: authHeader() })
    commit('SUPPRIMER_BANQUE', id);
    dispatch('getBanque');
  
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });
    
    
  }
});

}


// COMPTE BANCAIRE


export function getCompteBancaire({ commit }) {
  apiGuest.get("/listeCompteBancaire", { headers: authHeader() })
    .then(response => {
      commit("GET_COMPTE_BANCAIRE", response.data);
    })
    .catch(error => console.log(error));
}

export function ajouteCompteBancaire({ commit }, nouveau) {
 
    apiGuest.post("/AjouterCompteBancaire", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_COMPTE_BANCAIRE", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}

export function modifierCompteBancaire({ commit }, nouveau) {
  apiGuest.
    put("/ModifierCompteBancaire/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_COMPTE_BANCAIRE", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}


export function supprimerCompteBancaire({ commit,dispatch}, id) {


  Swal.fire({

  text: "Voulez vous vraiment supprimer ?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Confimer"
}).then((result) => {
  if (result.isConfirmed) {
   
    apiGuest.delete('/supprimerCompteBancaire/' + id, { headers: authHeader() })
    commit('SUPPRIMER_COMPTE_BANCAIRE', id);
    dispatch('getBanque');
  
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });
    
    
  }
});

}


// SIGNATAIRE

export function getSignataire({ commit }) {
  apiGuest.get("/listeSignataire", { headers: authHeader() })
    .then(response => {
      commit("GET_SIGNATAIRE", response.data);
    })
    .catch(error => console.log(error));
}

export function AjouterSignataire({ commit }, nouveau) {
 
    apiGuest.post("/AjouterSignataire", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_SIGNATAIRE", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}


export function ModifierSignataire({ commit }, nouveau) {
  apiGuest.
    put("/ModifierSignataire/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_SIGNATAIRE", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerSignataire({ commit}, id) {

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
   
    apiGuest.delete('/supprimerSignataire/' + id, { headers: authHeader() })
     commit('SUPPRIMER_SIGNATAIRE', id)
 
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});
}

// SECTEUR ACTIVITE

export function getSecteurActivite({ commit }) {
  apiGuest.get("/listeSecteurActivite", { headers: authHeader() })
    .then(response => {
      commit("GET_SECTEUR_ACTIVITE", response.data);
    })
    .catch(error => console.log(error));
}

export function AjouterSecteurActivite({ commit }, nouveau) {
 
    apiGuest.post("/AjouterSecteurActivite", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_SECTEUR_ACTIVITE", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}


export function ModifierSecteurActivite({ commit }, nouveau) {
  apiGuest.
    put("/ModifierSecteurActivite/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_SECTEUR_ACTIVITE", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerSecteurActivite({ commit}, id) {

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
   
    apiGuest.delete('/supprimerSecteurActivite/' + id, { headers: authHeader() })
     commit('SUPPRIMER_SECTEUR_ACTIVITE', id)
 
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});
}

// FORME JURIDIQUE

export function getFormeJuridique({ commit }) {
  apiGuest.get("/listeFormeJuridique", { headers: authHeader() })
    .then(response => {
      commit("GET_FORME_JURIDIQUE", response.data);
    })
    .catch(error => console.log(error));
}

export function AjouterFormeJuridique({ commit }, nouveau) {
 
    apiGuest.post("/AjouterFormeJuridique", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_FORME_JURIDIQUE", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}


export function ModifierFormeJuridique({ commit }, nouveau) {
  apiGuest.
    put("/ModifierFormeJuridique/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_FORME_JURIDIQUE", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerFormeJuridique({ commit}, id) {

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
   
    apiGuest.delete('/supprimerFormeJuridique/' + id, { headers: authHeader() })
     commit('SUPPRIMER_FORME_JURIDIQUE', id)
 
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});
}

// REGIME IMPOSSITION

export function getRegimeImposition({ commit }) {
  apiGuest.get("/listeRegimeImposition", { headers: authHeader() })
    .then(response => {
      commit("GET_REGIME_IMPOSSITION", response.data);
    })
    .catch(error => console.log(error));
}

export function AjouterRegimeImposition({ commit }, nouveau) {
 
    apiGuest.post("/AjouterRegimeImposition", nouveau, { headers: authHeader() })
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_REGIME_IMPOSSITION", response.data);
       toast("Enregistrement effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
      }
    }).catch();
}


export function ModifierRegimeImposition({ commit }, nouveau) {
  apiGuest.
    put("/ModifierRegimeImposition/" + nouveau.id, nouveau, { headers: authHeader() })
    .then(response => {
      commit("MODIFIER_REGIME_IMPOSSITION", response.data);
      toast("Modification effectué avec succès!", {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
})
    });
}

export function supprimerRegimeImposition({ commit}, id) {

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
   
    apiGuest.delete('/supprimerRegimeImposition/' + id, { headers: authHeader() })
     commit('SUPPRIMER_REGIME_IMPOSSITION', id)
 
    Swal.fire({
      title: "Suppression",
      text: "effectué avec succès.",
      icon: "success"
    });

    
  }
});
}


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

