<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="page-header">
            <h6 class="fw-bold mb-3">Liste Personnel</h6>
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
                <a href="#">Personnel</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered border-primary">
              <thead>
                <tr>
                  <!-- <th scope="col">#</th> -->
                  <!-- <th scope="col">N</th> -->
                  <th scope="col" style="text-align: center">N°contrat</th>
                  <th scope="col" style="text-align: center">Matricule</th>
                  <th scope="col" style="text-align: center">Nom</th>
                  <th scope="col" style="text-align: center">prénoms</th>
                  <!-- <th scope="col" style="text-align: center">
                        Type dépense
                      </th>
                      <th scope="col" style="text-align: center">Montant</th> -->
                  <th scope="col" style="text-align: center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item1 in gettersPersonnel" :key="item1.id">
                  <td style="width: 10%">
                    {{ item1.numero_contrat }}
                  </td>
                  <td style="width: 10%">
                    {{ item1.matricule }}
                  </td>
                  <td style="width: 10%; text-align: ">
                    {{ item1.nom }}
                  </td>
                  <td style="width: 40%; text-align: ">
                    {{ item1.prenom }}
                  </td>

                  <!-- <td style="width: 15%; text-align: ">
                        {{ typeIndemnite(item1.type_indemnite_id) }}
                      </td>
                      <td style="width: 10%; text-align: right">
                        {{ formatageSommeSansFCFA(parseFloat(item1.montant)) }}
                      </td> -->
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic mixed styles example"
                    >
                      <span
                        class="badge bg-danger"
                        style="cursor: pointer"
                        title="Supprimer"
                        @click.prevent="supprimerPersonnelParUser(item1.id)"
                        ><i class="fas fa-trash"></i
                      ></span>
                      <span
                        class="badge bg-info"
                        style="cursor: pointer"
                        title="Plus détail"
                        @click="AfficheVentilationBudget(item1.id)"
                        ><i class="fas fa-tasks"></i
                      ></span>
                      <span
                        class="badge bg-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#largeModal1"
                        style="cursor: pointer"
                        title="Modifier"
                        @click="AfficheModalModification(item1.id)"
                        ><i class="fas fa-edit"></i
                      ></span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier Personnel</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <FormWizard @on-complete="onComplete" color="#e67e22">
              <TabContent title="INFO SUR CONTRAT" icon="ti-pencil-alt2">
                <div class="row">
                  <div class="col-lg-12">
                    <form class="row g-3">
                      <div class="col-3">
                        <label class="form-label">Exercice</label>
                        <input
                          type="text"
                          class="form-control"
                          readonly
                          v-model="modNatureDepense.exercice"
                          style="border: 1px solid #000 !important"
                        />
                      </div>
                      <div class="col-9">
                        <label class="form-label"
                          >Unité Opérationnelle
                          <span
                            style="
                              color: red !important;
                              font-size: 15px !important;
                            "
                            >*</span
                          ></label
                        >

                        <model-list-select
                          :list="getterBudgetViseGroupeParActivite"
                          v-model="modNatureDepense.unite_operationnelle_id"
                          option-value="unite_operationnelle_id"
                          option-text="nom_projet"
                          placeholder="select item"
                          style="border: 1px solid #000"
                        >
                        </model-list-select>
                        <span
                          style="color: red"
                          v-if="modNatureDepense.unite_operationnelle_id == 0"
                          >Ce champs est obligatoire!
                        </span>
                      </div>
                      <div class="col-6">
                        <label class="form-label"
                          >Activité
                          <span
                            style="
                              color: red !important;
                              font-size: 15px !important;
                            "
                            >*</span
                          ></label
                        >
                        <model-list-select
                          :list="getterBudgetViseGroupeParActivite"
                          v-model="modNatureDepense.activite_id"
                          option-value="activite_id"
                          option-text="plan_activite"
                          placeholder="select item"
                          style="border: 1px solid #000"
                        >
                        </model-list-select>
                        <span
                          style="color: red"
                          v-if="modNatureDepense.activite_id == 0"
                          >Ce champs est obligatoire!
                        </span>
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
                          :list="libelleSousBudgetModifier"
                          v-model="modNatureDepense.sous_budget_id"
                          option-value="id"
                          option-text="libelle"
                          placeholder="select item"
                          style="border: 1px solid #000"
                        >
                        </model-list-select>
                        <span
                          style="color: red"
                          v-if="modNatureDepense.sous_budget_id == 0"
                          >Ce champs est obligatoire!
                        </span>
                      </div>
                      <div class="col-3">
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
                        <span
                          style="color: red"
                          v-if="modNatureDepense.fonction_id == 0"
                          >Ce champs est obligatoire!
                        </span>
                      </div>
                      <div class="col-3">
                        <label class="form-label"
                          >Service
                          <span
                            style="
                              color: red !important;
                              font-size: 15px !important;
                            "
                            >*</span
                          ></label
                        >
                        <model-list-select
                          :list="gettersService"
                          v-model="modNatureDepense.service_id"
                          option-value="id"
                          option-text="libelle"
                          placeholder="select item"
                          style="border: 1px solid #000"
                        >
                        </model-list-select>
                        <span
                          style="color: red"
                          v-if="modNatureDepense.service_id == 0"
                          >Ce champs est obligatoire!
                        </span>
                      </div>
                      <div class="col-3">
                        <label class="form-label"
                          >Emploi
                          <span
                            style="
                              color: red !important;
                              font-size: 15px !important;
                            "
                            >*</span
                          ></label
                        >
                        <model-list-select
                          :list="gettersEmploi"
                          v-model="modNatureDepense.emploi_id"
                          option-value="id"
                          option-text="libelle"
                          placeholder="select item"
                          style="border: 1px solid #000"
                        >
                        </model-list-select>
                        <span
                          style="color: red"
                          v-if="modNatureDepense.emploi_id == 0"
                          >Ce champs est obligatoire!
                        </span>
                      </div>
                      <div class="col-3">
                        <label class="form-label"
                          >Diplôme
                          <span
                            style="
                              color: red !important;
                              font-size: 15px !important;
                            "
                            >*</span
                          ></label
                        >
                        <model-list-select
                          :list="gettersDiplome"
                          v-model="modNatureDepense.diplome_id"
                          option-value="id"
                          option-text="libelle"
                          placeholder="select item"
                          style="border: 1px solid #000"
                        >
                        </model-list-select>
                        <span
                          style="color: red"
                          v-if="modNatureDepense.diplome_id == 0"
                          >Ce champs est obligatoire!
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </TabContent>
              <TabContent title="INFO SUR PERSONNEL" icon="ti-printer">
                <div class="col-lg-12">
                  <form class="row g-3">
                    <div class="col-3">
                      <label class="form-label"
                        >Tyep Personnel
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                        ></span
                      ></label>
                      <model-list-select
                        :list="objetTypePersonnel"
                        v-model="modNatureDepense.type_personnel_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                    </div>
                    <div class="col-3">
                      <label class="form-label">N° du Contrat</label>
                      <input
                        type="text"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-model="modNatureDepense.numero_contrat"
                        readonly
                      />
                    </div>
                    <div class="col-6">
                      <label class="form-label">Matricule</label>
                      <input
                        type="text"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-model="modNatureDepense.matricule"
                        v-if="modNatureDepense.type_personnel_id == 1"
                        readonly
                      />
                      <input
                        v-else
                        type="text"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-model="modNatureDepense.matricule"
                      />
                      <span
                        style="color: red"
                        v-if="
                          modNatureDepense.matricule == 0 &&
                          modNatureDepense.type_personnel_id != 1
                        "
                        >Ce champs est obligatoire!
                      </span>
                    </div>
                    <div class="col-3">
                      <label class="form-label">Nom</label>
                      <input
                        type="text"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-model="modNatureDepense.nom"
                      />
                      <span style="color: red" v-if="modNatureDepense.nom == 0"
                        >Ce champs est obligatoire!
                      </span>
                    </div>
                    <div class="col-9">
                      <label class="form-label">Prénoms</label>
                      <input
                        type="text"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-model="modNatureDepense.prenom"
                      />
                      <span
                        style="color: red"
                        v-if="modNatureDepense.prenom == 0"
                        >Ce champs est obligatoire!
                      </span>
                    </div>
                    <div class="col-3">
                      <label class="form-label">Date Naissance</label>
                      <input
                        type="date"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-model="modNatureDepense.date_naissance"
                      />
                    </div>
                    <div class="col-3">
                      <label class="form-label"
                        >Type de piece
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label
                      >
                      <model-list-select
                        :list="gettersTypePiece"
                        v-model="modNatureDepense.type_piece_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <span
                        style="color: red"
                        v-if="modNatureDepense.type_piece_id == 0"
                        >Ce champs est obligatoire!
                      </span>
                    </div>
                    <div class="col-3">
                      <label class="form-label">Lieu de Naissance</label>
                      <input
                        type="text"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-model="modNatureDepense.lieu_naissance"
                      />
                    </div>
                    <div class="col-3">
                      <label class="form-label">Numéro de la piece</label>
                      <input
                        type="text"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-model="modNatureDepense.numero_piece"
                      />
                    </div>
                    <div class="col-3">
                      <label class="form-label">N° de télephone</label>
                      <input
                        type="text"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-model="modNatureDepense.numero_telephone"
                      />
                    </div>
                    <div class="col-3">
                      <label class="form-label"
                        >Nature contrat
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label
                      >
                      <model-list-select
                        :list="gettersNatureContrat"
                        v-model="modNatureDepense.nature_contrat_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <span
                        style="color: red"
                        v-if="modNatureDepense.nature_contrat_id == 0"
                        >Ce champs est obligatoire!
                      </span>
                    </div>
                    <div class="col-2">
                      <label class="form-label">Date début contrat</label>
                      <input
                        type="date"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-model="modNatureDepense.date_debut"
                      />
                    </div>
                    <div
                      class="col-2"
                      v-if="modNatureDepense.nature_contrat_id == 1"
                    >
                      <label class="form-label">Date fin contrat</label>
                      <input
                        type="date"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-model="modNatureDepense.date_fin"
                      />
                    </div>
                    <div class="col-2" v-else>
                      <label class="form-label">Date fin contrat</label>
                      <input
                        readonly
                        type="date"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-model="modNatureDepense.date_fin"
                      />
                    </div>
                    <div class="col-2">
                      <label class="form-label">Durée</label>
                      <input
                        type="text"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        readonly
                        :value="DureContratModifier"
                      />
                    </div>
                  </form>
                </div>
              </TabContent>
              <TabContent title="SATUT DU PERSONNEL " icon="ti-search">
                <div class="col-lg-12">
                  <div class="table-responsive">
                    <table class="table table-bordered border-primary">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            style="background-color: #eeeec6 !important"
                          >
                            Type dépense
                          </th>
                          <th
                            scope="col"
                            style="background-color: #eeeec6 !important"
                          >
                            Nature économique
                          </th>
                          <th
                            scope="col"
                            style="background-color: #eeeec6 !important"
                          >
                            Type financement
                          </th>
                          <th
                            scope="col"
                            style="background-color: #eeeec6 !important"
                          >
                            Source de financement
                          </th>
                          <th
                            scope="col"
                            style="background-color: #eeeec6 !important"
                          >
                            Montant
                          </th>

                          <th
                            scope="col"
                            style="
                              text-align: center;
                              background-color: #eeeec6 !important;
                            "
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="item in gettersDetailDepensePerso"
                          :key="item.id"
                        >
                          <td>{{ item.type_depense }}</td>
                          <td>{{ item.nature_economique }}</td>
                          <td>{{ item.type_financement }}</td>
                          <td>{{ item.source_finacement }}</td>
                          <td>
                            {{
                              formatageSommeSansFCFA(parseFloat(item.montant))
                            }}
                          </td>
                          <td>
                            <div
                              class="btn-group"
                              role="group"
                              aria-label="Basic mixed styles example"
                            >
                              <span
                                class="badge bg-danger"
                                style="cursor: pointer"
                                title="Supprimer"
                                @click.prevent="
                                  supprimerPersonnelParUser(item.id)
                                "
                                ><i class="fas fa-trash"></i
                              ></span>

                              <span
                                class="badge bg-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#largeModal14"
                                style="cursor: pointer"
                                title="Modifier"
                                @click.prevent="AfficheModalDetail(item.id)"
                                ><i class="fas fa-edit"></i
                              ></span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="4" style="text-align: right">TOTAL</td>
                          <td style="text-align: right">
                            {{ formatageSommeSansFCFA(parseFloat(total)) }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabContent>

              <!-- <TabContent title="IMPRIMER BUDGET PRIMITIF" icon="ti-printer">
             888888888888888888888888888888888888888888888
            </TabContent> -->
            </FormWizard>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="modificationSection()"
              data-bs-dismiss="modal"
            >
              Modifier
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
  components: { ModelListSelect, FormWizard, TabContent },
  data() {
    return {
      ajouterNatureDepense: {
        code: "",
        libelle: "",
      },
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
    this.getPersonnel();
    this.getExerciceBudgetaire();
    this.getBudgetEclateViseGroupeParActivte();
    this.getSousBudget();
    this.getService();
    this.getFonction();
    this.getEmploi();
    this.getNatureContrat();
    this.getSituationMatrimonial();
    this.getDiplome();
    this.getTypeIndemnite();
    this.getTypePiece();
  },
  computed: {
    ...mapGetters("Personnel", [
      "getterNatureDepense",
      "gettersPersonnel",
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
      "getTypeIndemnite",
      "getTypePiece",
      "getBudgetViseParActvite",
      "AjouterPersonnel",
    ]),
    formatageSomme: formatageSomme,
    formatageSommeSansFCFA: formatageSommeSansFCFA,
    AfficheVentilationBudget(id) {
      this.$router.push({
        name: "DetailPersonnel",
        params: { id: id },
      });
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
        libelle: this.ajouterNatureDepense.libelle,
      };

      this.AjouterDiplome(objetDirect1);
      this.ajouterNatureDepense = {
        libelle: "",
      };
    },

    modificationSection() {
      var objetDirect1 = {
        id: this.modNatureDepense.id,

        libelle: this.modNatureDepense.libelle,
      };

      this.ModifierDiplome(objetDirect1);
      this.modNatureDepense = {};
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
