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
                <a href="#">Liste Ordre de Mission</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-body">
          <FormWizard color="#1D702D">
            <TabContent
              title="ORDRE DE MISSION EN ATTENTE"
              icon="fas fa-hourglass-start"
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
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in afficheOrdreMissionEnAttente"
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
            <TabContent
              title="ORDRE DE MISSION SIGNER"
              icon="fas fa-hourglass-start"
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
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in afficheOrdreMissionVise"
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
                            @click.prevent="AfficheModalModification(item.id)"
                            >Modifier</span
                          >
                          <span
                            class="badge bg-danger"
                            style="cursor: pointer"
                            @click.prevent="supprimerOrdreMissionUser(item.id)"
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
//import { ModelListSelect } from "vue-search-select";
import { FormWizard, TabContent } from "vue3-form-wizard";
// import {
//   formatageSomme,
//   formatageSommeSansFCFA,
// } from "../../page/Repositories/Repository";
export default {
  name: "TodoItem",
  components: {
    // ModelListSelect,
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
    this.getOrdreMission();
    // this.getOrdreMissionUser();
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
    ]),

    afficheOrdreMissionEnAttente() {
      return this.gettersOrdreMission.filter((item) => item.decision == 0);
    },
    afficheOrdreMissionVise() {
      return this.gettersOrdreMission.filter((item) => item.decision != 0);
    },
    AfficheNomPersonnel() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersOrdreMission.find(
            (qtreel) => qtreel.personnel_id == id
          );

          if (qtereel) {
            return qtereel.nom_personnel;
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

    fonctionImprimer(id) {
      this.$router.push({
        name: "ImprimerOrdreMission",
        params: { id: id },
      });
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
