<template>
  <div class="container">
    
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #EEEEC6">
        <div class="card-header">
          <div class="page-header">
            <h6 class="fw-bold mb-3">Personnel</h6>
            <ul class="breadcrumbs mb-3">
              <li class="nav-home">
                <a href="#">
                  <i class="icon-home"></i>
                </a>
              </li>
              <li class="separator">
                <i class="icon-arrow-right"></i>
              </li>
              <li class="nav-item">
                <a href="#">Gestion Personnel</a>
              </li>
              <li class="separator">
                <i class="icon-arrow-right"></i>
              </li>
              <li class="nav-item">
                <a href="#">Information sur le personnel</a>
              </li>

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <li class="nav-item">
                <span
                  class="badge badge-warning"
                  style="cursor: pointer; color: #000"
                  @click.prevent="retour"
                  ><i class="fas fa-arrow-alt-circle-left"></i> Retour</span
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr >
                  <!-- <th scope="col" style="background-color: #EEEEC6 !important;">#</th> -->
                  <th scope="col" style="background-color: #EEEEC6 !important;">Exercice</th>
                  <th scope="col" style="background-color: #EEEEC6 !important;">Unité opérationnelle</th>
                  <th scope="col" style="background-color: #EEEEC6 !important;">Activité</th>
                  <th scope="col" style="background-color: #EEEEC6 !important;">Composante</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ exerciceBudgetaire }}</td>
                  <td>{{ afficheUoTableau }}</td>
                  <td>{{ afficheActiviteTableau }}</td>
                  <td>{{ afficheSousBudgetTableau }}</td>
                </tr>
              </tbody>
            </table>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <!-- <th scope="col" style="background-color: #EEEEC6 !important;">#</th> -->

                  <th scope="col" style="background-color: #EEEEC6 !important;">Fonction</th>
                  <th scope="col" style="background-color: #EEEEC6 !important;">Service</th>
                  
                  <th scope="col" style="background-color: #EEEEC6 !important;">Emploi</th>
                  <th scope="col" style="background-color: #EEEEC6 !important;">Diplôme</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ afficheFonctionTableau }}</td>
                  <td>{{ afficheServiceTableau }}</td>
                  
                  <td>{{ afficheEmploiTableau }}</td>
                  <td>{{ afficheDiplomeTableau }}</td>
                </tr>
              </tbody>
            </table>
            <table class="table table-bordered">
              <thead>
                <tr >
                  <!-- <th scope="col" style="background-color: #EEEEC6 !important;">#</th> -->
                  <th scope="col" style="background-color: #EEEEC6 !important;" >Tyep Personnel</th>
                  <th scope="col" style="background-color: #EEEEC6 !important;">N° du Contrat</th>
                  <th scope="col" style="background-color: #EEEEC6 !important;">Matricule</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  
                  <td>{{ affichonsTypePersonne(afficheTypePersonnelTableau) }}</td>
                  <td>{{ afficheContratTableau }}</td>
                  <td>{{ afficheMatriculeTableau }}</td>
                </tr>
              </tbody>
            </table>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <!-- <th scope="col" style="background-color: #EEEEC6 !important;">#</th> -->
                  <th scope="col" style="background-color: #EEEEC6 !important;width: 20px !important;">Nom</th>
                  <th scope="col" style="background-color: #EEEEC6 !important;width: 70px !important;">Prénoms</th>
                  <th scope="col" style="background-color: #EEEEC6 !important;width: 10px !important;">Date Naissance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ affichenomTableau }}</td>
                  <td>{{ afficheprenomTableau }}</td>
                  <td>{{ formaterDate(afficheDateNaissanceTableau) }}</td>
                </tr>
              </tbody>
            </table>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <!-- <th scope="col" style="background-color: #EEEEC6 !important;">#</th> -->
                  <th scope="col" style="background-color: #EEEEC6 !important;">Type de piece</th>
                  <th scope="col" style="background-color: #EEEEC6 !important;">Lieu de Naissance</th>
                  <th scope="col" style="background-color: #EEEEC6 !important;">Numéro de la piece</th>
                  <th scope="col" style="background-color: #EEEEC6 !important;">N° de télephone</th>
                  <th scope="col" style="background-color: #EEEEC6 !important;">Nature contrat</th>
                  <th scope="col" style="background-color: #EEEEC6 !important;">Date début contrat</th>
                  <th scope="col" style="background-color: #EEEEC6 !important;">Date fin contrat</th>
                  <th scope="col" style="background-color: #EEEEC6 !important;">Durée ( jours)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ afficheTypePieceTableau }}</td>
                  <td>{{ afficheLieuNaissanceTableau }}</td>
                  <td>{{ afficheNumeroPieceTableau }}</td>
                  <td>{{ afficheNumeroTelephoneTableau }}</td>
                  <td>{{ afficheTypeContratTableau }}</td>
                  <td>{{ formaterDate(affichedatedebutTableau) }}</td>
                  <td>{{ formaterDate(affichedateFinTableau) }}</td>
                  <td>{{ affichedureTableau }} Jours</td>
                </tr>
              </tbody>
            </table>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <!-- <th scope="col" style="background-color: #EEEEC6 !important;">#</th> -->
                  <th scope="col" style="background-color: #EEEEC6 !important;">Type dépense</th>
                  <th scope="col" style="background-color: #EEEEC6 !important;">Nature économique</th>
                  <th scope="col" style="background-color: #EEEEC6 !important;">Type financement</th>
                  <th scope="col" style="background-color: #EEEEC6 !important;">Source de financement</th>
                  <th scope="col" style="background-color: #EEEEC6 !important;">Montant</th>
                 
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in gettersDetailDepensePerso" :key="item.id">
                  <td>{{ item.type_depense }}</td>
                  <td>{{ item.nature_economique }}</td>
                  <td>{{ item.type_financement }}</td>
                  <td>{{ item.source_finacement }}</td>
                  <td>{{ formatageSommeSansFCFA(parseFloat(item.montant)) }}</td>
                </tr>
                <tr>
                    <td colspan="4">TOTAL</td>
                    <td>{{ formatageSommeSansFCFA(parseFloat(total)) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- modal de modification -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
import {
  
  formatageSommeSansFCFA,
} from "../../page/Repositories/Repository";
export default {
  name: "TheDefault",
  components: {},
  data() {
    return {
      ajouterNatureDepense: {
        code: "",
        libelle: "",
      },
      modNatureDepense: {
        code: "",
        libelle: "",
      },
    };
  },
  created() {
      this.id_personnel = this.$route.params.id;
      let objet = {
        id:this.id_personnel
      }
      this.getDetailDepensePersonnel(objet)
      this.getPersonnel();
      this.getProjet();
      this.getActivite();
      this.getSousBudget();
       this.getService();
    this.getFonction();
    this.getEmploi();
    this.getNatureContrat();
    this.getSituationMatrimonial();
    this.getDiplome();
    this.getTypeIndemnite();
    this.getTypePiece();
    this.getNatureEconomique();
    this.getTypeFinancement();
    this.getBailleur();
    //   this.getTypeFinancement();
    //   this.getBailleur();
      
    //   this.getNatureDepense();
    //this.getBailleur();
  },
  computed: {
    ...mapGetters("Personnel", [
      "getterNatureDepense","gettersDetailDepensePerso",
      "gettersPersonnelParUtilisateur",
      "gettersPersonnel",
      "gettersFonction",
      "gettersService",
      "gettersSituationMatrimonial",
      "gettersEmploi",
      "gettersNatureContrat",
      "gettersDiplome",
      "gettersTypeIndemnite",
      "gettersTypePiece",
    ]),
    ...mapGetters("parametrage", [
      "getterProjet",
      "getterBudgetViseGroupeParActivite",
      "getterActivite",
      "getterTypeFinancement",
      "getterExerciceBudgetaire",
      "getterDotationNotifie",
      "getterNatureEconomique",
      "getterBudgetViseParActivite",
      "getterSousBudget",
      "getterBailleur",
      "getterDotationReport",
      "getterDotationRessourcePropre",
      "getterDotationAutreRessource",
      "getterListeBudgetEclate",
    ]),
total() {
      return this.gettersDetailDepensePerso

        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.montant),
          0
        )
        .toFixed(0);
    },
      AfficheNatureEconomique() {
    return this.gettersPersonnel.filter(item=>item.id==this.id_personnel)
},


    exerciceBudgetaire() {
      //
      const qtereel = this.gettersPersonnel.find((qtreel) => qtreel.id == this.id_personnel);

      if (qtereel) {
        return qtereel.exercice;
      }
      return 0;
      },
// UNITE OPERATIONNELLE
      afficheUoTableau() {
      //
      const qtereel = this.gettersPersonnel.find((qtreel) => qtreel.id == this.id_personnel);

      if (qtereel) {
        return this.libelleUO(qtereel.unite_operationnelle_id);
      }
      return 0;
      },
     libelleUO() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterProjet.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.nom_projet;
          }
          return 0;
        }
      };
      },


      // ACTIVITE
      afficheActiviteTableau() {
      //
      const qtereel = this.gettersPersonnel.find((qtreel) => qtreel.id == this.id_personnel);

      if (qtereel) {
        return this.libelleActivite(qtereel.activite_id);
      }
      return 0;
      },
     libelleActivite() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterActivite.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat(' ',qtereel.libelle);
          }
          return 0;
        }
      };
      },


       // sous budget
      afficheSousBudgetTableau() {
      //
      const qtereel = this.gettersPersonnel.find((qtreel) => qtreel.id == this.id_personnel);

      if (qtereel) {
        return this.libelleSousBudget(qtereel.activite_id);
      }
      return 0;
      },
     libelleSousBudget() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterSousBudget.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
      },

// fonction
      afficheFonctionTableau() {
      //
      const qtereel = this.gettersPersonnel.find((qtreel) => qtreel.id == this.id_personnel);

      if (qtereel) {
        return this.libelleFonction(qtereel.fonction_id);
      }
      return 0;
      },
     libelleFonction() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersFonction.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },


    
// SERVICE
      afficheServiceTableau() {
      //
      const qtereel = this.gettersPersonnel.find((qtreel) => qtreel.id == this.id_personnel);

      if (qtereel) {
        return this.libelleService(qtereel.service_id);
      }
      return 0;
      },
     libelleService() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersService.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
      },

      // EMPLOI
      afficheEmploiTableau() {
      //
      const qtereel = this.gettersPersonnel.find((qtreel) => qtreel.id == this.id_personnel);

      if (qtereel) {
        return this.libelleEmploi(qtereel.emploi_id);
      }
      return 0;
      },
     libelleEmploi() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersEmploi.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
},
     
// DIPLOME
      afficheDiplomeTableau() {
      //
      const qtereel = this.gettersPersonnel.find((qtreel) => qtreel.id == this.id_personnel);

      if (qtereel) {
        return this.libelleDiplome(qtereel.diplome_id);
      }
      return 0;
      },
     libelleDiplome() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersDiplome.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },


    // NUMERO CONTRAT
      afficheContratTableau() {
      //
      const qtereel = this.gettersPersonnel.find((qtreel) => qtreel.id == this.id_personnel);

      if (qtereel) {
        return qtereel.numero_contrat;
      }
      return 0;
      },
    // NUMERO matricule
      afficheMatriculeTableau() {
      //
      const qtereel = this.gettersPersonnel.find((qtreel) => qtreel.id == this.id_personnel);

      if (qtereel) {
        return qtereel.matricule;
      }
      return 0;
      },
      // NOM
      affichenomTableau() {
      //
      const qtereel = this.gettersPersonnel.find((qtreel) => qtreel.id == this.id_personnel);

      if (qtereel) {
        return qtereel.nom;
      }
      return 0;
      },

      // Prenoms
      afficheprenomTableau() {
      //
      const qtereel = this.gettersPersonnel.find((qtreel) => qtreel.id == this.id_personnel);

      if (qtereel) {
        return qtereel.prenom;
      }
      return 0;
      },

       // date_naissance
      afficheDateNaissanceTableau() {
      //
      const qtereel = this.gettersPersonnel.find((qtreel) => qtreel.id == this.id_personnel);

      if (qtereel) {
        return qtereel.date_naissance;
      }
      return 0;
      },

       // lieu_naissance
      afficheLieuNaissanceTableau() {
      //
      const qtereel = this.gettersPersonnel.find((qtreel) => qtreel.id == this.id_personnel);

      if (qtereel) {
        return qtereel.lieu_naissance;
      }
      return 0;
      },

      // numero piece
      afficheNumeroPieceTableau() {
      //
      const qtereel = this.gettersPersonnel.find((qtreel) => qtreel.id == this.id_personnel);

      if (qtereel) {
        return qtereel.numero_piece;
      }
      return 0;
      },

       // numero telephone
      afficheNumeroTelephoneTableau() {
      //
      const qtereel = this.gettersPersonnel.find((qtreel) => qtreel.id == this.id_personnel);

      if (qtereel) {
        return qtereel.numero_telephone;
      }
      return 0;
      },
      // date debut
      affichedatedebutTableau() {
      //
      const qtereel = this.gettersPersonnel.find((qtreel) => qtreel.id == this.id_personnel);

      if (qtereel) {
        return qtereel.date_debut;
      }
      return 0;
      },

      // date fin
      affichedateFinTableau() {
      //
      const qtereel = this.gettersPersonnel.find((qtreel) => qtreel.id == this.id_personnel);

      if (qtereel) {
        return qtereel.date_fin;
      }
      return 0;
      },
       // dure
      affichedureTableau() {
      //
      const qtereel = this.gettersPersonnel.find((qtreel) => qtreel.id == this.id_personnel);

      if (qtereel) {
        return qtereel.dure;
      }
      return 0;
      },

      // type personnel
      afficheTypePersonnelTableau() {
      //
      const qtereel = this.gettersPersonnel.find((qtreel) => qtreel.id == this.id_personnel);

      if (qtereel) {
        return qtereel.type_personnel_id;
      }
      return 0;
      },


      // TYPE DE PIECE
      afficheTypePieceTableau() {
      //
      const qtereel = this.gettersPersonnel.find((qtreel) => qtreel.id == this.id_personnel);

      if (qtereel) {
        return this.libelleTypePiece(qtereel.type_piece_id);
      }
      return 0;
      },
     libelleTypePiece() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersTypePiece.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
      },


       // TYPE CONTRAT
      afficheTypeContratTableau() {
      //
      const qtereel = this.gettersPersonnel.find((qtreel) => qtreel.id == this.id_personnel);

      if (qtereel) {
        return this.libelleTypeContrat(qtereel.nature_contrat_id);
      }
      return 0;
      },
     libelleTypeContrat() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersNatureContrat.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
      },
  },
  methods: {
    ...mapActions("parametrage", [
      "getActivite",
      "getBudgetEclateViseGroupeParActivte",
      "supprimerBudgetEclate",
      "getSousBudget",
      "getBudgetEclate",
      "getDotationRessourcePropre",
      "getTypeFinancement",
      "getBailleur",
      "getProjet",
      "getNatureDepense",
      "getExerciceBudgetaire",
      "getDotationNotifie",
      "getDotationReport",
      "getNatureEconomique",
      "ajouterBudgetEclate",
      "getDotationAutreRessource",
      "modifierBudget",
      "getBudgetViseParActvite",
    ]),
    ...mapActions("Personnel", [
      "getService","getPersonnel",'getDetailDepensePersonnel',
      "getPersonnelUtilisateur",
      "supprimerPersonnel",
      "supprimerPersonnelParUser",
      "getFonction",
      "getEmploi",
      "getNatureContrat",
      "getSituationMatrimonial",
      "getDiplome",
      "getTypeIndemnite",
      "getTypePiece",
      "getBudgetViseParActvite",
      "AjouterPersonnel",
    ]),

      affichonsTypePersonne($id) {
          if ($id == 0) {
            return 'Fonctionnaire'
          } else {
            return 'Contractuel'
        }
      },
    formatageSommeSansFCFA: formatageSommeSansFCFA,
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
