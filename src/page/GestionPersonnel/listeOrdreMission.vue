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
                      <th>Annexe Mission</th>
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
                        <a
                          title="Télécharger"
                          v-if="item.code_fichier == 1"
                          :href="afficheicone(item.code_fichier)"
                          class="btn btn-default"
                          target="_blank"
                        >
                          <span class=""><i class="fas fa-book"></i></span>
                        </a>
                      </td>
                      <td>
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
                        <span
                          class="badge bg-info"
                          data-bs-toggle="modal"
                          data-bs-target="#decision"
                          style="cursor: pointer"
                          title="Appliquer décision"
                          @click="AfficheModalModificationApplique(item.id)"
                          ><i class="fas fa-stamp"></i> Appliquer décision</span
                        >
                        <span
                          class="badge rounded-pill bg-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#largeModal1"
                          style="cursor: pointer"
                           @click="AfficheModalModificationApplique(item.id)"
                          >Modifier</span
                        >
                        <span class="badge bg-danger" style="cursor: pointer"
                        @click.prevent="supprimerOrdreMission(item.id)"
                        
                          >Supprimer</span
                        >
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
                      <th>Annexe Mission</th>
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
                        <a
                          title="Télécharger"
                          v-if="item.code_fichier == 1"
                          :href="afficheicone(item.code_fichier)"
                          class="btn btn-default"
                          target="_blank"
                        >
                          <span class=""><i class="fas fa-book"></i></span>
                        </a>
                      </td>
                      <td>
                       
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
                           @click.prevent="supprimerOrdreMission(item1.id)"
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
                           <span
                          class="badge bg-info"
                          data-bs-toggle="modal"
                          data-bs-target="#decision"
                          style="cursor: pointer"
                          title="Appliquer décision"
                          @click="AfficheModalModificationAppliqueVise(item.id)"
                          ><i class="fas fa-stamp"></i> Appliquer décision</span
                        >
                        
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
                  v-model="modNatureDepense.decision"
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
                  v-model="modNatureDepense.date_signature"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="this.getOrdreMission()"
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









    <div
      class="modal fade"
      id="largeModal1"
      tabindex="-1"
      data-bs-target="#staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier Ordre Mission</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
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
                        v-model="modNatureDepense.numero_mission"
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
                        v-model="modNatureDepense.activite_id"
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
                        v-model="modNatureDepense.unite_operationnelle_id"
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
                        v-model="modNatureDepense.sous_budget_id"
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
                        v-model="modNatureDepense.nature_economique_id"
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
                        v-model="modNatureDepense.fonction_id"
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
                        v-model="modNatureDepense.personnel_id"
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
                        v-model="modNatureDepense.objet_depense"
                      />
                      <span style="color: red" v-if="modNatureDepense.objet_depense == 0"
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
                        v-model="modNatureDepense.lieu_ordre_mission"
                      />
                      <span style="color: red" v-if="modNatureDepense.lieu_ordre_mission == 0"
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
                        v-model="modNatureDepense.moyen_transport"
                      />
                      <span style="color: red" v-if="modNatureDepense.moyen_transport == 0"
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
                        v-model="modNatureDepense.date_depart"
                      />
                      <span style="color: red" v-if="modNatureDepense.date_depart == 0"
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
                        v-model="modNatureDepense.date_retour"
                      />
                      <span style="color: red" v-if="modNatureDepense.date_retour == 0"
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
                        Modifier
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </TabContent>
           
          </FormWizard>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="this.getOrdreMission()"
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
// import {
//   formatageSomme,
//   formatageSommeSansFCFA,
// } from "../../page/Repositories/Repository";
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
    this.getDocumentation();
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
      "gettersDocumentation",
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
      if (this.modNatureDepense.sous_budget_id == 0 && this.modNatureDepense.activite_id != 0) {
        let objet = this.getterBudgetViseParActivite.filter(
          (item) => item.activite_id == this.modNatureDepense.activite_id && item.actuelle == 1
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
            item.sous_budget_id == this.modNatureDepense.sous_budget_id && item.actuelle == 1
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
     automatiseNumeroOP() {
      return (
        this.gettersOrdreMission.length +
        1 +
        "/" +
        "MIRAH" +
        "/" +
        "" +
        "PAPAN"
      );
    },
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
      modificationSection() {
      var objetDirect1 = {
        id: this.modNatureDepense.id,

        numero_mission: this.modNatureDepense.numero_mission,
        activite_id: this.modNatureDepense.activite_id,
        unite_operationnelle_id: this.modNatureDepense.unite_operationnelle_id,
        sous_budget_id: this.modNatureDepense.sous_budget_id,
        nature_economique_id: this.modNatureDepense.nature_economique_id,
        fonction_id: this.modNatureDepense.fonction_id,
        personnel_id: this.modNatureDepense.personnel_id,
        objet_depense: this.modNatureDepense.objet_depense,
        lieu_ordre_mission: this.modNatureDepense.lieu_ordre_mission,
        moyen_transport: this.modNatureDepense.moyen_transport,
        date_depart: this.modNatureDepense.date_depart,
        date_retour: this.modNatureDepense.date_retour,
        duree: this.modNatureDepense.duree,
        decision: this.modNatureDepense.decision,
        date_signature: this.modNatureDepense.date_signature,
       
      };

      this.ModifierOrdreMission(objetDirect1);
      this.modNatureDepense = {};
    },
 AfficheModalModificationApplique(id1) {
      this.modNatureDepense = this.afficheOrdreMissionEnAttente.find(
        (items) => items.id == id1
      );
     
    },
     AfficheModalModificationAppliqueVise(id1) {
      this.modNatureDepense = this.afficheOrdreMissionVise.find(
        (items) => items.id == id1
      );
     
    },
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
