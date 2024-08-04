<template>
  <div class="container">
   
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="page-header">
            <h6 class="fw-bold mb-3">Ordre de Mission</h6>
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
                <a href="#">Ordre de Mission</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-body">
          <FormWizard @on-complete="onComplete" color="#e67e22">
            <TabContent title="INFORMATION SUR LA PERSONNEL" icon="fas fa-home">
              <div class="row">
                <div class="col-lg-12">
                  <form class="row g-3">
                    <div class="col-3">
                      <label class="form-label">N° Ordre de mission</label>
                      <input
                        type="text"
                        class="form-control"
                        style="
                          border: 1px solid #000 !important;
                          color: #000 !important;
                        "
                        :value="automatiseNumeroOP"
                        readonly
                      />
                    </div>
                    <div class="col-9">
                      <label class="form-label"
                        >Activité
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                        ></span
                      ></label>
                      <model-list-select
                        :list="getterBudgetViseGroupeParActivite"
                        v-model="activite_id"
                        option-value="activite_id"
                        option-text="plan_activite"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <!-- <span style="color: red" v-if="activite_id == 0"
                        >Ce champs est obligatoire!
                      </span> -->
                    </div>
                    <div class="col-6">
                      <label class="form-label"
                        >Unité Opérationnelle
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                        ></span
                      ></label>

                      <model-list-select
                        :list="getterBudgetViseGroupeParActivite"
                        v-model="unite_operationnelle_id"
                        option-value="unite_operationnelle_id"
                        option-text="nom_projet"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <!-- <span
                        style="color: red"
                        v-if="unite_operationnelle_id == 0"
                        >Ce champs est obligatoire!
                      </span> -->
                    </div>
                    <div class="col-6">
                      <label class="form-label"
                        >Composante
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label
                      >
                      <model-list-select
                        :list="libelleSousBudget"
                        v-model="sous_budget_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <!-- <span style="color: red" v-if="sous_budget_id == 0"
                        >Ce champs est obligatoire!
                      </span> -->
                    </div>
                    <div class="col-12">
                      <label class="form-label"
                        >Nature économique / Imputation
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label
                      >
                      <model-list-select
                        :list="AfficheNatureEconomique"
                        v-model="nature_economique_id"
                        option-value="id"
                        option-text="objet"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <!-- <span style="color: red" v-if="nature_economique_id == 0"
                        >Ce champs est obligatoire!
                      </span> -->
                    </div>
                    <div class="col-6">
                      <label class="form-label"
                        >Fonction
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label
                      >
                      <model-list-select
                        :list="gettersFonction"
                        v-model="fonction_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <!-- <span style="color: red" v-if="fonction_id == 0"
                        >Ce champs est obligatoire!
                      </span> -->
                    </div>
                    <div class="col-6">
                      <label class="form-label"
                        >Personnel
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label
                      >
                      <model-list-select
                        :list="gettersPersonnelParActivite"
                        v-model="personnel_id"
                        option-value="id"
                        option-text="nom_prenoms"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <!-- <span
                        style="color: red"
                        v-if="personnel_id == 0"
                        >Ce champs est obligatoire!
                      </span> -->
                    </div>
                  </form>
                </div>
              </div>
            </TabContent>
            <TabContent
              title="INFORMATION SUR L'ORDRE MISSION"
              icon="fas fa-bus-alt"
            >
              <div class="row">
                <div class="col-lg-12">
                  <form class="row g-3">
                    <div class="col-12">
                      <label class="form-label"
                        >Objet de la depense
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-model="objet_depense"
                      />
                      <span style="color: red" v-if="objet_depense == 0"
                        >Ce champs est obligatoire!
                      </span>
                    </div>
                    <div class="col-6">
                      <label class="form-label"
                        >Lieu de la mission
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-model="lieu_ordre_mission"
                      />
                      <span style="color: red" v-if="lieu_ordre_mission == 0"
                        >Ce champs est obligatoire!
                      </span>
                    </div>
                    <div class="col-6">
                      <label class="form-label"
                        >Moyen de transport
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-model="moyen_transport"
                      />
                      <span style="color: red" v-if="moyen_transport == 0"
                        >Ce champs est obligatoire!
                      </span>
                    </div>
                    <div class="col-4">
                      <label class="form-label"
                        >Date depart
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label
                      >
                      <input
                        type="date"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-model="date_depart"
                      />
                      <span style="color: red" v-if="date_depart == 0"
                        >Ce champs est obligatoire!
                      </span>
                    </div>
                    <div class="col-4">
                      <label class="form-label"
                        >Date Retour
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label
                      >
                      <input
                        type="date"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-model="date_retour"
                      />
                      <span style="color: red" v-if="date_retour == 0"
                        >Ce champs est obligatoire!
                      </span>
                    </div>
                    <div class="col-4">
                      <label class="form-label"
                        >Durée
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                        ></span
                      ></label>
                      <input
                        type="text"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        :value="totalDuree"
                        readonly
                      />
                    </div>
                    <div class="col-9"></div>
                    <div class="col-3">
                      <button
                        type="button"
                        class="btn btn-success"
                        @click.prevent="EnregistrerSection()"
                      >
                        Enregistrer
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </TabContent>
            <TabContent
              title="VOIR L'ORDRE MISSION DU JOUR"
              icon="fas fa-walking"
            >
              <div class="table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">N°</th>

                      <th scope="col" style="width: 10px">N°ordre mission</th>
                      <th scope="col" style="width: 15px">Nom et prénoms</th>
                      <th scope="col" style="width: 50% !important">Objet</th>
                      <!-- <th scope="col" style="width: ">lieu mission</th> -->
                      <th scope="col" style="width: 10px">date depart</th>
                      <th scope="col" style="width: 10px">date retour</th>
                      <th scope="col" style="width: 5px">Durée (Jours)</th>
                      <th>Annexe Mission</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in gettersOrdreMissionParUser"
                      :key="item.id"
                    >
                      <td>{{ index + 1 }}</td>
                      <td>{{ item.numero_mission }}</td>
                      <td>{{ AfficheNomPersonnel(item.personnel_id) }}</td>
                      <td style="width: 50px !important">
                        {{ item.objet_depense }}
                      </td>
                      <!-- <td>{{ item.lieu_ordre_mission }}</td> -->
                      <td>{{ formaterDate(item.date_depart) }}</td>
                      <td>{{ formaterDate(item.date_retour) }}</td>
                      <td>{{ item.duree }}</td>
                      <td>
                        <a
                          title="Télécharger"
                          v-if="item.code_fichier==1"
                          :href="afficheicone(item.code_fichier)"
                          class="btn btn-default"
                          target="_blank"
                        >
                          <span class=""><i class="fas fa-book"></i></span>
                        </a>
                      </td>
                      <td>
                        <div
                          class="btn-group"
                          role="group"
                          aria-label="Basic mixed styles example"
                        >
                          <span
                            class="badge rounded-pill bg-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#largeModal1"
                            style="cursor: pointer"
                            >Modifier</span
                          >
                          <span class="badge bg-danger" style="cursor: pointer"
                            >Supprimer</span
                          >
                          <span
                            class="badge bg-warning"
                            title="Imprimer OP"
                            style="
                              cursor: pointer;
                              color: #000;
                              font-weight: bolder;
                            "
                            @click.prevent="fonctionImprimer(item.id)"
                          >
                            <i class="fas fa-print" style="color: #000"></i
                            >Imprimer</span
                          >
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabContent>
          </FormWizard>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="decision"
      tabindex="-1"
      data-bs-target="#staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Appliquer décision</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Décision</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.decision_cf"
                >
                  <option selected></option>
                  <option :value="1">Visé</option>
                  <option :value="2">Visé avec observation</option>
                  <option :value="3">Différé</option>
                  <option :value="4">Réjetté</option>
                  <option :value="0">En attente</option>
                </select>
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label"
                  >Date décision</label
                >
                <input
                  type="date"
                  class="form-control"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.date_decision"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="this.getPersonnel()"
            >
              Fermer
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="modificationSection()"
              data-bs-dismiss="modal"
            >
              Appliquer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
import { ModelListSelect } from "vue-search-select";
import { FormWizard, TabContent } from "vue3-form-wizard";
import {
  formatageSomme,
  formatageSommeSansFCFA,
} from "../../page/Repositories/Repository";
export default {
  name: "TodoItem",
  components: {
    ModelListSelect,
    FormWizard,
    TabContent,
  },
  data() {
    return {
      activite_id: 0,
      sous_budget_id: 0,
      unite_operationnelle_id: 0,
      nature_economique_id: 0,
      personnel_id: 0,
      fonction_id: 0,
      objet_depense: "",
      lieu_ordre_mission: "",
      date_depart: "",
      date_retour: "",
decision:0,
      modNatureDepense: {},
      objetTypePersonnel: [
        {
          id: "0",
          libelle: "Fonctionnaire",
        },
        {
          id: "1",
          libelle: "Contractuel",
        },
      ],
    };
  },
  created() {
    // this.getPersonnel();
    // this.getExerciceBudgetaire();
    this.getBudgetEclateViseGroupeParActivte();
    this.getSousBudget();
    this.getNatureEconomique();
    // this.getService();
    this.getFonction();
    this.getOrdreMissionUser();
    this.getDocumentation();
    // this.getEmploi();
    // this.getNatureContrat();
    // this.getSituationMatrimonial();
    // this.getDiplome();
    // this.getTypeIndemnite();
    // this.getTypePiece();
  },
  computed: {
    ...mapGetters("Personnel", [
      "getterNatureDepense",
      "gettersOrdreMissionParUser",
      "gettersOrdreMission",
      "gettersOrdreMission",
      "gettersPersonnel",
      "gettersPersonnelParUtilisateur",
      "gettersPersonnelParActivite",
      "gettersFonction",
      "gettersService",
      "gettersSituationMatrimonial",
      "gettersEmploi",
      "gettersNatureContrat",
      "gettersDiplome",
      "gettersTypeIndemnite",
      "gettersTypePiece",
      "gettersDetailDepensePerso",
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
      "gettersDocumentation",
    ]),
    afficheicone() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersDocumentation.find(
            (qtreel) => qtreel.code == id
          );

          if (qtereel) {
            let url = process.env.VUE_APP_IMAGE_URL;
            return url + "/public/" + qtereel.fichier;
            //    return qtereel.fichier;
          }
          return "vide";
        }
      };
    },
    automatiseNumeroOP() {
      return (
        this.gettersOrdreMissionParUser.length +
        1 +
        "/" +
        "MIRAH" +
        "/" +
        "" +
        "PAPAN"
      );
    },
    dateDuJours() {
      let date = new Date();
      let aaaa = date.getFullYear();
      let gg = date.getDate();
      let mm = date.getMonth() + 1;
      let moi;
      let jour;
      if (gg < 10) {
        jour = "0" + gg;
      } else {
        jour = gg;
      }
      if (mm < 10) {
        moi = "0" + mm;
      } else {
        moi = mm;
      }
      let cur_day = aaaa + "-" + moi + "-" + jour;
      return cur_day;
      // return cur_day + " " + hours + ":" + minutes + ":" + seconds;
    },
    idUser() {
      let objLinea = localStorage.getItem("User");
      let objJson = JSON.parse(objLinea);
      return objJson.id;
    },
    afficherOrdreMissionDuJour() {
      return this.gettersOrdreMission.filter(
        (item) =>
          item.created == this.dateDuJours && item.user_id == this.idUser
      );
    },

    exerciceBudgetaire() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterExerciceBudgetaire.find(
        (qtreel) => qtreel.encours == 1
      );

      if (qtereel) {
        return qtereel.annee;
      }
      return 0;
      //     }
      //   };
    },

    AfficheNomPersonnel() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersOrdreMissionParUser.find(
            (qtreel) => qtreel.personnel_id == id
          );

          if (qtereel) {
            return qtereel.nom_personnel;
          }
          return 0;
        }
      };
    },
    totalDuree() {
      if (this.date_retour == "") {
        return 0;
      } else {
        return this.DureContrat + 1;
      }
    },
    DureContrat() {
      if (
        this.date_depart == this.date_retour &&
        this.date_retour !== "" &&
        this.date_depart !== ""
      )
        return 1;
      if (this.date_retour == "" && this.date_depart == "") return null;
      var dateR = new Date(this.date_retour).getTime();
      var dateD = new Date(this.date_depart).getTime();
      var diffTime = dateR - dateD;

      var diffJours = diffTime / (1000 * 3600 * 24);
      if (isNaN(diffJours)) return null;

      if (parseFloat(diffJours) < 0) return "durée invalide";

      return diffJours;
    },
    afficheNatureEconomique() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterNatureEconomique.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle_code;
          }
          return 0;
        }
      };
    },
    AfficheNatureEconomique() {
      let collet = [];
      this.GroupeParNatureEconomique.filter((item) => {
        // if (item.activite_id == this.activite_id)
        {
          let data = {
            id: item,
            objet: this.afficheNatureEconomique(item),
          };
          collet.push(data);
        }
      });
      return collet;
    },
    GroupeParNatureEconomique() {
      // return (id) => {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        let objet = this.getterBudgetViseParActivite.filter(
          (item) => item.activite_id == this.activite_id && item.actuelle == 1
        );
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.ligneeconomique_id);
          });
          let unique = [...new Set(array_exercie)];

          if (unique.length == 0) {
            return [];
          }
          return unique.sort((a, b) => (a.unique > b.unique ? 1 : -1));
        }
        return [];
        // };
      } else {
        let objet = this.getterBudgetViseParActivite.filter(
          (item) =>
            item.sous_budget_id == this.sous_budget_id && item.actuelle == 1
        );
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.ligneeconomique_id);
          });
          let unique = [...new Set(array_exercie)];

          if (unique.length == 0) {
            return [];
          }
          return unique.sort((a, b) => (a.unique > b.unique ? 1 : -1));
        }
        return [];
        // };
      }
    },
    libelleSousBudget() {
      let collet = [];
      this.getterSousBudget.filter((item) => {
        if (item.activite_id == this.activite_id) {
          let data = {
            id: item.id,
            libelle: item.libelle,
          };
          collet.push(data);
        }
      });
      return collet;
    },

    AfficheContratVise() {
      return this.gettersPersonnel.filter(
        (item) => item.decision_cf == 1 || item.decision_cf == 2
      );
    },
    AfficheContratAttente() {
      return this.gettersPersonnel.filter(
        (item) =>
          item.decision_cf == 0 ||
          item.decision_cf == 3 ||
          item.decision_cf == 4
      );
    },

    libelleSousBudgetModifier() {
      let collet = [];
      this.getterSousBudget.filter((item) => {
        if (item.activite_id == this.modNatureDepense.activite_id) {
          let data = {
            id: item.id,
            libelle: item.libelle,
          };
          collet.push(data);
        }
      });
      return collet;
    },
  },
  methods: {
    ...mapActions("parametrage", [
      "getActivite",
      "getDocumentation",
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
      "getService",
      "supprimerOrdreMissionUser",
      "getOrdreMissionUser",
      "getOrdreMission",
      "AjouterOrdreMission",
      "ModifierOrdreMission",
      "supprimerOrdreMission",
      "getPersonnelParActivite",
      "getDetailDepensePersonnel",
      "getPersonnelUtilisateur",
      "getPersonnel",
      "supprimerPersonnel",
      "supprimerPersonnelParUser",
      "getFonction",
      "getEmploi",
      "getNatureContrat",
      "getSituationMatrimonial",
      "getDiplome",
      "ModifierPersonnel",
      "getTypeIndemnite",
      "getTypePiece",

      "AjouterPersonnel",
    ]),
    afficheDecision($id) {
      if ($id == 1) {
        return "Visé";
      } else if ($id == 2) {
        return "Visé avec observation";
      } else if ($id == 3) {
        return "Différé";
      } else if ($id == 4) {
        return "Réjetté";
      } else {
        return "En attente";
      }
    },
    fonctionImprimer(id) {
      this.$router.push({
        name: "ImprimerOrdreMission",
        params: { id: id },
      });
    },
    formatageSomme: formatageSomme,
    formatageSommeSansFCFA: formatageSommeSansFCFA,
    AfficheVentilationBudget(id) {
      this.$router.push({
        name: "DetailPersonnel",
        params: { id: id },
      });
    },
    AfficheModalModificationApplique(id1) {
      this.modNatureDepense = this.AfficheContratAttente.find(
        (items) => items.id == id1
      );
      let objet = {
        id: id1,
      };
      this.getDetailDepensePersonnel(objet);
    },
    AfficheModalModification(id1) {
      this.modNatureDepense = this.gettersPersonnel.find(
        (items) => items.id == id1
      );
      let objet = {
        id: id1,
      };
      this.getDetailDepensePersonnel(objet);
    },
    EnregistrerSection() {
      var objetDirect1 = {
        numero_mission: this.automatiseNumeroOP,
        activite_id: this.activite_id,
        unite_operationnelle_id: this.unite_operationnelle_id,
        sous_budget_id: this.sous_budget_id,
        nature_economique_id: this.nature_economique_id,
        fonction_id: this.fonction_id,
        personnel_id: this.personnel_id,
        objet_depense: this.objet_depense,
        lieu_ordre_mission: this.lieu_ordre_mission,
        moyen_transport: this.moyen_transport,
        date_depart: this.date_depart,
        date_retour: this.date_retour,
        duree: this.totalDuree,
        decision:this.decision
      };

      this.AjouterOrdreMission(objetDirect1);
      (this.numero_mission = ""),
        (this.unite_operationnelle_id = ""),
        (this.sous_budget_id = ""),
        (this.nature_economique_id = ""),
        (this.fonction_id = ""),
        (this.personnel_id = ""),
        (this.objet_depense = ""),
        (this.lieu_ordre_mission = ""),
        (this.moyen_transport = ""),
        (this.date_depart = ""),
        (this.date_retour = ""),
        (this.duree = "");
    },

    modificationSection() {
      var objetDirect1 = {
        id: this.modNatureDepense.id,

        type_piece_id: this.modNatureDepense.libelle,
        nature_contrat_id: this.modNatureDepense.nature_contrat_id,
        diplome_id: this.modNatureDepense.diplome_id,
        emploi_id: this.modNatureDepense.emploi_id,
        service_id: this.modNatureDepense.service_id,
        fonction_id: this.modNatureDepense.fonction_id,
        activite_id: this.modNatureDepense.activite_id,
        unite_operationnelle_id: this.modNatureDepense.unite_operationnelle_id,
        sous_budget_id: this.modNatureDepense.sous_budget_id,
        date_debut: this.modNatureDepense.date_debut,
        date_fin: this.modNatureDepense.date_fin,
        type_personnel_id: this.modNatureDepense.type_personnel_id,
        dure: this.modNatureDepense.dure,
        numero_contrat: this.modNatureDepense.numero_contrat,
        matricule: this.modNatureDepense.matricule,
        nom: this.modNatureDepense.nom,
        prenom: this.modNatureDepense.prenom,
        date_naissance: this.modNatureDepense.date_naissance,
        lieu_naissance: this.modNatureDepense.lieu_naissance,
        numero_piece: this.modNatureDepense.numero_piece,
        numero_telephone: this.modNatureDepense.numero_telephone,
        decision_cf: this.modNatureDepense.decision_cf,
        date_decision: this.modNatureDepense.date_decision,
      };

      this.ModifierPersonnel(objetDirect1);
      this.modNatureDepense = {};
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },

  watch: {
    activite_id: function (value) {
      let objet = {
        id: value,
      };
      this.getBudgetViseParActvite(objet);
      //   this.getOpParActvite(objet);
      this.getPersonnelParActivite(objet);
    },
  },
};
</script>
