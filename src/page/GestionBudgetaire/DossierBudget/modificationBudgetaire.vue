<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="page-header">
            <h6 class="fw-bold mb-3">Mdification</h6>
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
                <a href="#">Gestion budgétaire</a>
              </li>
              <li class="separator">
                <i class="icon-arrow-right"></i>
              </li>
              <li class="nav-item">
                <a href="#">Modification Budgétaire</a>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <li class="nav-item">
                <span
                  class="badge badge-warning"
                  style="cursor: pointer; color: #000"
                  @click.prevent="retour"
                  ><i class="fas fa-arrow-alt-circle-left"></i> Retour</span
                >
              </li>
              &nbsp;&nbsp;&nbsp;

              <li class="nav-item">
                <span
                  style="cursor: pointer; color: #000"
                  class="badge badge-info"
                  data-bs-toggle="modal"
                  data-bs-target="#largeModal13"
                  ><i class="fas fa-plus"></i> Ajouter nouvelle Nature
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-body">
          <FormWizard @on-complete="onComplete" color="#e67e22">
            <TabContent title="MODIFICATION BUDGETAIRE" icon="ti-pencil-alt2">
              <div class="row">
                <div class="col-lg-12">
                  <form class="row g-3">
                    <div class="col-3">
                      <label class="form-label">Exercice</label>
                      <input
                        type="text"
                        class="form-control"
                        readonly
                        :value="exerciceBudgetaire"
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
                        :list="getterProjet"
                        v-model="unite_operationnelle_id"
                        option-value="id"
                        option-text="nom_projet"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <span
                        style="color: red"
                        v-if="unite_operationnelle_id == 0"
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
                        :list="libelleActivite"
                        v-model="activite_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <span style="color: red" v-if="activite_id == 0"
                        >Ce champs est obligatoire!
                      </span>
                    </div>
                    <div class="col-6">
                      <label class="form-label">Sous budget</label>
                      <model-list-select
                        :list="libelleSousBudget"
                        v-model="sous_budget_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                    </div>
                    <div class="col-6">
                      <label class="form-label"
                        >Nature économique
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
                        v-model="economique_id"
                        option-value="id"
                        option-text="objet"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <span style="color: red" v-if="economique_id == 0"
                        >Ce champs est obligatoire!
                      </span>
                    </div>
                    <div class="col-3">
                      <label class="form-label">Nature de depense</label>
                      <input
                        type="text"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        :value="libelleNatureDepense"
                        readonly
                      />
                    </div>
                    <div class="col-3">
                      <label class="form-label"
                        >Type financement
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label
                      >
                      <model-list-select
                        :list="AfficheTypeFinancement"
                        v-model="type_financement_id"
                        option-value="id"
                        option-text="objet"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <span style="color: red" v-if="type_financement_id == 0"
                        >Ce champs est obligatoire!
                      </span>
                    </div>
                    <div class="col-6">
                      <label class="form-label"
                        >Source de financement
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label
                      >
                      <model-list-select
                        :list="AfficheSourceFinancement"
                        v-model="source_financement_id"
                        option-value="id"
                        option-text="objet"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <span style="color: red" v-if="source_financement_id == 0"
                        >Ce champs est obligatoire!
                      </span>
                    </div>
                    <div class="col-2">
                      <label for="inputNanme4" class="form-label"
                        >Dotation Actuelle (A)</label
                      >
                      <money3
                        class="form-control"
                        style=""
                        :model-value="MontantActuel"
                        v-bind="config"
                        readonly
                      ></money3>
                    </div>

                    <div class="col-2">
                      <label for="inputNanme4" class="form-label"
                        >Variation(D)</label
                      >
                      <money3
                        class="form-control"
                        style=""
                        v-bind="config"
                        v-model="dotation_actuelle"
                      ></money3>
                    </div>
                    <div class="col-2">
                      <label for="inputNanme4" class="form-label"
                        >Montant actuel (E=A+B)</label
                      >
                      <money3
                        class="form-control"
                        style=""
                        :model-value="MontantGlobal"
                        v-bind="config"
                        readonly
                      ></money3>
                    </div>
                    <div class="col-10"></div>
                    <div class="col-2">
                      <button
                        type="button"
                        class="btn btn-success"
                        @click.prevent="enregistrementSansTypeFiancement2()"
                      >
                        Enregistrer
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </TabContent>
            <TabContent title="VERIFICATION DU BUDGET" icon="ti-search">
              <div class="col-12">
                <label class="form-label"
                  >Activité
                  <span
                    style="color: red !important; font-size: 15px !important"
                  ></span
                ></label>
                <model-list-select
                  :list="libelleActivite"
                  v-model="activite_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="select item"
                  style="border: 1px solid #000"
                >
                </model-list-select>
              </div>
              <br />
              <div class="table-responsive">
                <table class="table table-bordered border-primary">
                  <thead>
                    <tr style="border: 1px solid #000 !important">
                      <!-- <th scope="col">#</th> -->
                      <!-- <th scope="col">N</th> -->
                      <th
                        scope="col"
                        style="
                          text-align: center;
                          border: 1px solid #000 !important;
                        "
                      >
                        Nature economique
                      </th>
                      <th
                        scope="col"
                        style="
                          text-align: center;
                          border: 1px solid #000 !important;
                        "
                      >
                        type financement
                      </th>
                      <th
                        scope="col"
                        style="
                          text-align: center;
                          border: 1px solid #000 !important;
                        "
                      >
                        Bailleur
                      </th>
                      <th
                        scope="col"
                        style="
                          text-align: center;
                          border: 1px solid #000 !important;
                        "
                      >
                        nature depense
                      </th>
                      <th
                        scope="col"
                        style="
                          text-align: center;
                          border: 1px solid #000 !important;
                        "
                      >
                        Sous budget
                      </th>
                      <th
                        scope="col"
                        style="
                          text-align: center;
                          border: 1px solid #000 !important;
                        "
                      >
                        Dotation Initiale
                      </th>
                      <th
                        scope="col"
                        style="
                          text-align: center;
                          border: 1px solid #000 !important;
                        "
                      >
                        Variation
                      </th>
                      <th
                        scope="col"
                        style="
                          text-align: center;
                          border: 1px solid #000 !important;
                        "
                      >
                        Dotation Actuelle
                      </th>
                      <th
                        scope="col"
                        style="
                          text-align: center;
                          border: 1px solid #000 !important;
                        "
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item1 in afficheBudgetParActivite"
                      :key="item1.id"
                    >
                      <td style="width: 40%; border: 1px solid #000 !important">
                        {{ afficheNatureEconomique(item1.ligneeconomique_id) }}
                      </td>
                      <td style="width: 10%; border: 1px solid #000 !important">
                        {{ afficheTypeFinancement(item1.type_financement_id) }}
                      </td>
                      <td style="width: 20%; border: 1px solid #000 !important">
                        {{
                          afficheSourceFinancement(item1.source_financement_id)
                        }}
                      </td>
                      <td style="width: 10%; border: 1px solid #000 !important">
                        {{ afficheGrandeNature(item1.nature_depense_id) }}
                      </td>
                      <td style="width: 10%; border: 1px solid #000 !important">
                        {{ AfficheSousBudget(item1.sous_budget_id) }}
                      </td>
                      <td
                        style="
                          width: 10%;
                          text-align: right;
                          border: 1px solid #000 !important;
                        "
                      >
                        {{
                          formatageSommeSansFCFA(
                            parseFloat(item1.dotation_actuelle_anterieur)
                          )
                        }}
                      </td>
                      <td
                        style="
                          width: 15%;
                          text-align: right;
                          border: 1px solid #000 !important;
                        "
                      >
                        {{
                          formatageSommeSansFCFA(
                            parseFloat(item1.dotation_variation)
                          )
                        }}
                      </td>
                      <td
                        style="
                          width: 15%;
                          text-align: right;
                          border: 1px solid #000 !important;
                        "
                      >
                        {{
                          formatageSommeSansFCFA(
                            parseFloat(item1.dotation_actuelle_anterieur) +
                              parseFloat(item1.dotation_variation)
                          )
                        }}
                      </td>
                      <td
                        style="
                          width: 15%;
                          text-align: right;
                          border: 1px solid #000 !important;
                        "
                      >
                        <span
                          class="badge rounded-pill bg-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#largeModal1"
                          style="cursor: pointer"
                          @click.prevent="AfficheModalModification(item1.id)"
                          >Modifier</span
                        >
                        <span
                          class="badge bg-danger"
                          style="cursor: pointer"
                          @click.prevent="supprimerBudgetEclate(item1.id)"
                          >Supprimer</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        colspan="5"
                        style="
                          text-align: right;
                          border: 1px solid #000 !important;
                        "
                      >
                        TOTAL
                      </td>
                      <td
                        style="
                          text-align: right;
                          border: 1px solid #000 !important;
                        "
                      >
                        {{
                          formatageSommeSansFCFA(
                            parseFloat(sommeBudgetActuelle)
                          )
                        }}
                      </td>
                      <td
                        style="
                          text-align: right;
                          border: 1px solid #000 !important;
                        "
                      >
                        {{
                          formatageSommeSansFCFA(
                            parseFloat(sommeBudgetModifier)
                          )
                        }}
                      </td>
                      <td
                        style="
                          text-align: right;
                          border: 1px solid #000 !important;
                        "
                      >
                        {{
                          formatageSommeSansFCFA(
                            parseFloat(sommeBudgetActuelle) +
                              parseFloat(sommeBudgetModifier)
                          )
                        }}
                      </td>
                      <td
                        style="
                          text-align: right;
                          border: 1px solid #000 !important;
                        "
                      ></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabContent>
            <TabContent title="IMPRIMER BUDGET PRIMITIF" icon="ti-printer">
              <table class="table table-bordered border-primary">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      style="
                        text-align: center;
                        border: 1px solid #000 !important;
                      "
                    >
                      Numéro
                    </th>
                    <th
                      scope="col"
                      style="
                        text-align: center;
                        border: 1px solid #000 !important;
                      "
                    >
                      Activité
                    </th>

                    <th
                      scope="col"
                      style="
                        text-align: center;
                        border: 1px solid #000 !important;
                      "
                    >
                      Total (FCFA)
                    </th>
                    <th
                      scope="col"
                      style="
                        text-align: center;
                        border: 1px solid #000 !important;
                      "
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item1, index) in getterActivite" :key="item1.id">
                    <td style="border: 1px solid #000 !important">
                      {{ index + 1 }}
                    </td>
                    <td style="width: 55%; border: 1px solid #000 !important">
                      {{ item1.code }}-{{ item1.libelle }}
                    </td>
                    <td
                      style="
                        text-align: right;
                        border: 1px solid #000 !important;
                      "
                    >
                      {{
                        formatageSommeSansFCFA(
                          parseFloat(AfficheMontantBudget(item1.id))
                        )
                      }}
                    </td>
                    <td style="border: 1px solid #000 !important">
                      <span
                        class="badge bg-dark"
                        style="cursor: pointer"
                        @click.prevent="voirBudgett(item1.id, dossier_id)"
                        >Budget</span
                      >
                      <span
                        class="badge bg-info"
                        style="cursor: pointer"
                        @click.prevent="voirSousBudget(item1.id)"
                        >Composante</span
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </TabContent>
          </FormWizard>
        </div>
      </div>
    </div>

    <div class="modal fade" id="largeModal1" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier Budget</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form class="row g-3">
              <div class="col-9">
                <label class="form-label"
                  >Nature économique
                  <span
                    style="color: red !important; font-size: 15px !important"
                    >*</span
                  ></label
                >
                <model-list-select
                  :list="getterNatureEconomique"
                  v-model="ModifierBudget.ligneeconomique_id"
                  option-value="id"
                  option-text="libelle_code"
                  placeholder="select item"
                  style="border: 1px solid #000"
                >
                </model-list-select>
              </div>
              <div class="col-3">
                <label class="form-label"
                  >Nature dépense
                  <span
                    style="color: red !important; font-size: 15px !important"
                    >*</span
                  ></label
                >
                <model-list-select
                  :list="getterNatureDepense"
                  v-model="ModifierBudget.nature_depense_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="select item"
                  style="border: 1px solid #000"
                >
                </model-list-select>
                <span
                  style="color: red"
                  v-if="ModifierBudget.nature_depense_id == 0"
                  >Ce champs est obligatoire!
                </span>
              </div>
              <div class="col-3">
                <label class="form-label"
                  >Type financement
                  <span
                    style="color: red !important; font-size: 15px !important"
                    >*</span
                  ></label
                >
                <model-list-select
                  :list="getterTypeFinancement"
                  v-model="ModifierBudget.type_financement_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="select item"
                  style="border: 1px solid #000"
                >
                </model-list-select>
                <span
                  style="color: red"
                  v-if="ModifierBudget.type_financement_id == 0"
                  >Ce champs est obligatoire!
                </span>
              </div>
              <div class="col-9">
                <label class="form-label"
                  >Source de financement
                  <span
                    style="color: red !important; font-size: 15px !important"
                    >*</span
                  ></label
                >
                <model-list-select
                  :list="AfficheBailleurParTypeModifier"
                  v-model="ModifierBudget.source_financement_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="select item"
                  style="border: 1px solid #000"
                >
                </model-list-select>
                <span
                  style="color: red"
                  v-if="ModifierBudget.source_financement_id == 0"
                  >Ce champs est obligatoire!
                </span>
              </div>
              <div class="col-12">
                <label class="form-label">Sous budget</label>
                <model-list-select
                  :list="libelleSousBudgetModifier"
                  v-model="ModifierBudget.sous_budget_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="select item"
                  style="border: 1px solid #000"
                >
                </model-list-select>
              </div>
              <div class="col-4">
                <label class="form-label">Dotation Actuelle ( D )</label>
                <money3
                  v-model="ModifierBudget.dotation_actuelle_anterieur"
                  class="form-control"
                  style="border: 1px solid #000 !important"
                  v-bind="config"
                  readonly
                ></money3>
              </div>
              <div class="col-4">
                <label class="form-label">Variation ( E )</label>

                <money3
                  v-model="ModifierBudget.dotation_variation"
                  class="form-control"
                  style="border: 1px solid #000 !important"
                  v-bind="config"
                ></money3>
              </div>
              <div class="col-4">
                <label class="form-label">Dotation Actuelle (F= D+E)</label>

                <money3
                  :model-value="
                    parseFloat(ModifierBudget.dotation_actuelle_anterieur) +
                    parseFloat(ModifierBudget.dotation_variation)
                  "
                  class="form-control"
                  style="border: 1px solid #000 !important"
                  v-bind="config"
                  readonly
                ></money3>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="this.getBudgetEclate()"
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

    <div
      class="modal fade"
      id="largeModal13"
      tabindex="-1"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ajouter un nouvelle Ligne</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form class="row g-3">
              <div class="col-3">
                <label class="form-label">Exercice</label>
                <input
                  type="text"
                  class="form-control"
                  readonly
                  :value="exerciceBudgetaire"
                  style="border: 1px solid #000 !important"
                />
              </div>
              <div class="col-9">
                <label class="form-label"
                  >Unité Opérationnelle
                  <span
                    style="color: red !important; font-size: 15px !important"
                    >*</span
                  ></label
                >

                <model-list-select
                  :list="getterProjet"
                  v-model="ajouterNouvelle.unite_operationnelle_id"
                  option-value="id"
                  option-text="nom_projet"
                  placeholder="select item"
                  style="border: 1px solid #000"
                >
                </model-list-select>
                <span
                  style="color: red"
                  v-if="ajouterNouvelle.unite_operationnelle_id == 0"
                  >Ce champs est obligatoire!
                </span>
              </div>
              <div class="col-6">
                <label class="form-label"
                  >Activité
                  <span
                    style="color: red !important; font-size: 15px !important"
                    >*</span
                  ></label
                >
                <model-list-select
                  :list="libelleActivite"
                  v-model="ajouterNouvelle.activite_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="select item"
                  style="border: 1px solid #000"
                >
                </model-list-select>
                <span style="color: red" v-if="ajouterNouvelle.activite_id == 0"
                  >Ce champs est obligatoire!
                </span>
              </div>
              <div class="col-6">
                <label class="form-label">Sous budget</label>
                <model-list-select
                  :list="libelleSousBudgetNouvelleNature"
                  v-model="ajouterNouvelle.sous_budget_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="select item"
                  style="border: 1px solid #000"
                >
                </model-list-select>
              </div>
              <div class="col-9">
                <label class="form-label"
                  >Nature économique
                  <span
                    style="color: red !important; font-size: 15px !important"
                    >*</span
                  ></label
                >
                <model-list-select
                  :list="getterNatureEconomique"
                  v-model="ajouterNouvelle.economique_id"
                  option-value="id"
                  option-text="libelle_code"
                  placeholder="select item"
                  style="border: 1px solid #000"
                >
                </model-list-select>
              </div>
              <div class="col-3">
                <label class="form-label"
                  >Nature dépense
                  <span
                    style="color: red !important; font-size: 15px !important"
                    >*</span
                  ></label
                >
                <model-list-select
                  :list="getterNatureDepense"
                  v-model="ajouterNouvelle.nature_depense_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="select item"
                  style="border: 1px solid #000"
                >
                </model-list-select>
                <span
                  style="color: red"
                  v-if="ajouterNouvelle.nature_depense_id == 0"
                  >Ce champs est obligatoire!
                </span>
              </div>
              <div class="col-3">
                <label class="form-label"
                  >Type financement
                  <span
                    style="color: red !important; font-size: 15px !important"
                    >*</span
                  ></label
                >
                <model-list-select
                  :list="getterTypeFinancement"
                  v-model="ajouterNouvelle.type_financement_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="select item"
                  style="border: 1px solid #000"
                >
                </model-list-select>
                <span
                  style="color: red"
                  v-if="ajouterNouvelle.type_financement_id == 0"
                  >Ce champs est obligatoire!
                </span>
              </div>
              <div class="col-9">
                <label class="form-label"
                  >Source de financement
                  <span
                    style="color: red !important; font-size: 15px !important"
                    >*</span
                  ></label
                >
                <model-list-select
                  :list="AfficheBailleurParTypeNouvelleNature"
                  v-model="ajouterNouvelle.source_financement_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="select item"
                  style="border: 1px solid #000"
                >
                </model-list-select>
                <span
                  style="color: red"
                  v-if="ajouterNouvelle.source_financement_id == 0"
                  >Ce champs est obligatoire!
                </span>
              </div>

              <div class="col-4">
                <label class="form-label">Dotation Actuelle ( D )</label>
                <money3
                  v-model="ajouterNouvelle.dotation_actuelle"
                  class="form-control"
                  style="border: 1px solid #000 !important"
                  v-bind="config"
                ></money3>
              </div>
              <div class="col-4">
                <label class="form-label">Report ( E )</label>

                <money3
                  v-model="ajouterNouvelle.dotation_report"
                  class="form-control"
                  style="border: 1px solid #000 !important"
                  v-bind="config"
                ></money3>
              </div>
              <div class="col-4">
                <label class="form-label">Dotation Actuelle (F= D+E)</label>

                <money3
                  :model-value="
                    parseFloat(ajouterNouvelle.dotation_actuelle) +
                    parseFloat(ajouterNouvelle.dotation_report)
                  "
                  class="form-control"
                  style="border: 1px solid #000 !important"
                  v-bind="config"
                  readonly
                ></money3>
              </div>
            </form>
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
              @click.prevent="EnregistrementNouvelleNature()"
            >
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
// import moment from "moment";
import { ModelListSelect } from "vue-search-select";
import { FormWizard, TabContent } from "vue3-form-wizard";

//  import { required} from  'vuelidate/lib/validators'

import {
  formatageSomme,
  formatageSommeSansFCFA,
} from "../../Repositories/Repository";
export default {
  components: {
    ModelListSelect,
    FormWizard,
    TabContent,
  },
  data() {
    return {
      TableauDossier: [],
      ModifierBudget: {
        type_financement_id: 0,
        source_financement_id: 0,
        ligneeconomique_id: 0,
        nature_depense_id: 0,
        sous_budget_id: 0,
        dotation_report: 0,
        dotation_actuelle: 0,
      },
      ajouterNouvelle: {
        dotation_report: 0,
        dotation_actuelle: 0,
        type_financement_id: 0,
        source_financement_id: 0,
        economique_id: 0,
        activite_id: 0,
        unite_operationnelle_id: 0,
        nature_depense_id: 0,
        sous_budget_id: 0,
      },
      dotation_report: 0,
      dotation_actuelle: 0,
      type_financement_id: 0,
      source_financement_id: 0,
      economique_id: 0,
      activite_id: 0,
      unite_operationnelle_id: 0,
      nature_depense_id: 0,
      sous_budget_id: 0,

      global: 0,
      autreRessource: 0,
      ressourcePropre: 0,
      report: 0,
      notifie: 0,
      config: {
        prefix: "",
        suffix: "",
        thousands: ",",
        decimal: ".",
        precision: 0,
        disableNegative: false,
        disabled: false,
        min: null,
        max: null,
        allowBlank: false,
        minimumNumberOfCharacters: 0,
        shouldRound: true,
        focusOnRight: false,
      },
    };
  },
  created() {
    this.dossier_id = this.$route.params.id;
    this.getExerciceBudgetaire();
    this.getActivite();
    this.getNatureEconomique();
    this.getSousBudget();
    this.getProjet();
    this.getNatureDepense();
    this.getTypeFinancement();
    this.getBailleur();
    this.getBudgetEclate();
    this.getBudgetModifierEnProjet();
    // this.getDotationNotifie();
    // this.getDotationReport();
    // this.getDotationRessourcePropre();
    // this.getDotationAutreRessource();
    // this.getBudgetEclate();

    //   // this.getDotationNotifie();
  },
  validations: {
    // economique_id: { required },
    // activite_id: { required },
    // unite_operationnelle_id: { required },
    // nature_depense_id: { required },
    // FormDataDossier: {
    //   dotation_report: { required },
    //   dotation_actuelle: { required },
    //   type_financement_id: { required },
    //   source_financement_id: { required },
    // },
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterProjet",
      "gettersBudgetModifierEnProjet",
      "getterActivite",
      "getterAfficheNouvelleNature",
      "getterTypeFinancement",
      "getterExerciceBudgetaire",
      "getterDotationNotifie",
      "getterNatureEconomique",

      "getterNatureDepense",
      "getterSousBudget",
      "getterBailleur",
      "getterDotationReport",
      "getterDotationRessourcePropre",
      "getterDotationAutreRessource",
      "getterListeBudgetEclate",
    ]),
    AfficheSousBudget() {
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
    libelleSousBudgetModifier() {
      let collet = [];
      this.getterSousBudget.filter((item) => {
        if (item.activite_id == this.ModifierBudget.activite_id) {
          let data = {
            id: item.id,
            libelle: item.libelle,
          };
          collet.push(data);
        }
      });
      return collet;
    },
    
    AfficheBailleurParTypeNouvelleNature() {
      if (this.ajouterNouvelle.type_financement_id == 4) {
        let collet = [];
        this.getterBailleur.filter((item) => {
          if (
            item.type_financement_id == this.ajouterNouvelle.type_financement_id
          ) {
            let data = {
              id: item.id,
              libelle: item.libelle,
            };
            collet.push(data);
          }
        });
        return collet;
      } else {
        let collet = [];
        this.getterBailleur.filter((item) => {
          if (item.type_financement_id == 0) {
            let data = {
              id: item.id,
              libelle: item.libelle,
            };
            collet.push(data);
          }
        });
        return collet;
      }
    },
    AfficheBailleurParTypeModifier() {
      if (this.ModifierBudget.type_financement_id == 4) {
        let collet = [];
        this.getterBailleur.filter((item) => {
          if (
            item.type_financement_id == this.ModifierBudget.type_financement_id
          ) {
            let data = {
              id: item.id,
              libelle: item.libelle,
            };
            collet.push(data);
          }
        });
        return collet;
      } else {
        let collet = [];
        this.getterBailleur.filter((item) => {
          if (item.type_financement_id == 0) {
            let data = {
              id: item.id,
              libelle: item.libelle,
            };
            collet.push(data);
          }
        });
        return collet;
      }
    },
    sommeBudgetActuelle() {
      return this.afficheBudgetParActivite

        .reduce(
          (prec, cur) =>
            parseFloat(prec) + parseFloat(cur.dotation_actuelle_anterieur),
          0
        )
        .toFixed(0);
    },
    sommeBudgetModifier() {
      return this.afficheBudgetParActivite

        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_variation),
          0
        )
        .toFixed(0);
    },
    sommeBudgetTotal() {
      return this.afficheBudgetParActivite

        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
          0
        )
        .toFixed(0);
    },
    afficheBudgetParActivite() {
      return this.getterListeBudgetEclate.filter(
        (item) => item.dossier_id == this.dossier_id
      );
    },
    NatureDepense_id() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        // return (id) => {
        //   if (id != null && id != "") {
        const qtereel = this.getterAfficheNouvelleNature.find(
          (qtreel) =>
            qtreel.ligneeconomique_id == this.economique_id &&
            qtreel.type_financement_id == this.type_financement_id &&
            qtreel.source_financement_id == this.source_financement_id &&
            qtreel.actuelle == 1
        );

        if (qtereel) {
          return qtereel.nature_depense_id;
        }
        return 0;
        //   }
        // };
      } else {
        // return (id) => {
        //   if (id != null && id != "") {
        const qtereel = this.getterAfficheNouvelleNature.find(
          (qtreel) =>
            qtreel.ligneeconomique_id == this.economique_id &&
            qtreel.sous_budget_id == this.sous_budget_id &&
            qtreel.type_financement_id == this.type_financement_id &&
            qtreel.source_financement_id == this.source_financement_id &&
            qtreel.actuelle == 1
        );

        if (qtereel) {
          return qtereel.nature_depense_id;
        }
        return 0;
        //   }
        // };
      }
    },
    libelleNatureDepense() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        // return (id) => {
        //   if (id != null && id != "") {
        const qtereel = this.getterAfficheNouvelleNature.find(
          (qtreel) =>
            qtreel.ligneeconomique_id == this.economique_id &&
            qtreel.type_financement_id == this.type_financement_id &&
            qtreel.source_financement_id == this.source_financement_id &&
            qtreel.actuelle == 1
        );

        if (qtereel) {
          return this.afficheNatureDepense(qtereel.nature_depense_id);
        }
        return 0;
        //   }
        // };
      } else {
        // return (id) => {
        //   if (id != null && id != "") {
        const qtereel = this.getterAfficheNouvelleNature.find(
          (qtreel) =>
            qtreel.ligneeconomique_id == this.economique_id &&
            qtreel.sous_budget_id == this.sous_budget_id &&
            qtreel.type_financement_id == this.type_financement_id &&
            qtreel.source_financement_id == this.source_financement_id &&
            qtreel.actuelle == 1
        );

        if (qtereel) {
          return this.afficheNatureDepense(qtereel.nature_depense_id);
        }
        return 0;
        //   }
        // };
      }
    },
    AfficheTypeFinancement() {
      let collet = [];
      this.GroupeParTypeFinancement.filter((item) => {
        // if (item.activite_id == this.activite_id)
        {
          let data = {
            id: item,
            objet: this.libelleTypeFinancement(item),
          };
          collet.push(data);
        }
      });
      return collet;
    },
    libelleTypeFinancement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterTypeFinancement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    libelleSourceFinancement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterBailleur.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    AfficheSourceFinancement() {
      let collet = [];
      this.GroupeParSourceFinancement.filter((item) => {
        // if (item.activite_id == this.activite_id)
        {
          let data = {
            id: item,
            objet: this.libelleSourceFinancement(item),
          };
          collet.push(data);
        }
      });
      return collet;
    },
    GroupeParSourceFinancement() {
      // return (id) => {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        let objet = this.getterAfficheNouvelleNature.filter(
          (item) =>
            item.activite_id == this.activite_id &&
            item.ligneeconomique_id == this.economique_id &&
            item.type_financement_id == this.type_financement_id &&
            item.actuelle == 1
        );
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.source_financement_id);
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
        let objet = this.getterAfficheNouvelleNature.filter(
          (item) =>
            item.sous_budget_id == this.sous_budget_id &&
            item.ligneeconomique_id == this.economique_id &&
            item.type_financement_id == this.type_financement_id &&
            item.actuelle == 1
        );
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.source_financement_id);
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
    GroupeParTypeFinancement() {
      // return (id) => {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        let objet = this.getterAfficheNouvelleNature.filter(
          (item) =>
            item.activite_id == this.activite_id &&
            item.ligneeconomique_id == this.economique_id &&
            item.actuelle == 1
        );
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.type_financement_id);
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
        let objet = this.getterAfficheNouvelleNature.filter(
          (item) =>
            item.sous_budget_id == this.sous_budget_id &&
            item.ligneeconomique_id == this.economique_id &&
            item.actuelle == 1
        );
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.type_financement_id);
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
    afficheNatureDepense() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterNatureDepense.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat(" ", qtereel.libelle);
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
      if (this.sous_budget_id == 0) {
        let objet = this.getterAfficheNouvelleNature.filter(
          (item) => item.actuelle == 1
        );
        console.log(objet);
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
        let objet = this.getterAfficheNouvelleNature.filter(
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
    afficheGrandeNature() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterNatureDepense.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    MontantGlobal() {
      return (
        parseFloat(this.MontantActuel) + parseFloat(this.dotation_actuelle)
      );
    },
    MontantActuel() {
      if (this.sous_budget_id == 0) {
        // return (id) => {
        //   if (id != null && id != "") {
        const qtereel = this.getterAfficheNouvelleNature.find(
          (qtreel) =>
            qtreel.sous_budget_id == this.sous_budget_id &&
            qtreel.nature_depense_id == this.NatureDepense_id &&
            qtreel.ligneeconomique_id == this.economique_id &&
            qtreel.type_financement_id == this.type_financement_id &&
            qtreel.source_financement_id == this.source_financement_id
        );

        if (qtereel) {
          return qtereel.dotation_total;
        }
        return 0;
        //   }
        // };
      } else {
        // return (id) => {
        //   if (id != null && id != "") {
        const qtereel = this.getterAfficheNouvelleNature.find(
          (qtreel) =>
            qtreel.nature_depense_id == this.NatureDepense_id &&
            qtreel.ligneeconomique_id == this.economique_id &&
            qtreel.type_financement_id == this.type_financement_id &&
            qtreel.source_financement_id == this.source_financement_id
        );

        if (qtereel) {
          return qtereel.dotation_total;
        }
        return 0;
        //   }
        // };
      }
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
    afficheSourceFinancement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterBailleur.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    afficheTypeFinancement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterTypeFinancement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    AfficheBailleurParType() {
      if (this.FormDataDossier.type_financement_id == 4) {
        let collet = [];
        this.getterBailleur.filter((item) => {
          if (
            item.type_financement_id == this.FormDataDossier.type_financement_id
          ) {
            let data = {
              id: item.id,
              libelle: item.libelle,
            };
            collet.push(data);
          }
        });
        return collet;
      } else {
        let collet = [];
        this.getterBailleur.filter((item) => {
          if (item.type_financement_id == 0) {
            let data = {
              id: item.id,
              libelle: item.libelle,
            };
            collet.push(data);
          }
        });
        return collet;
      }
    },

    libelleSousBudgetNouvelleNature() {
      let collet = [];
      this.getterSousBudget.filter((item) => {
        if (item.activite_id == this.ajouterNouvelle.activite_id) {
          let data = {
            id: item.id,
            libelle: item.libelle,
          };
          collet.push(data);
        }
      });
      return collet;
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
    libelleActivite() {
      let collet = [];
      this.getterActivite.filter((item) => {
        let data = {
          id: item.id,
          libelle: item.code.concat("  ", item.libelle),
        };
        collet.push(data);
        //}
      });
      return collet;
    },

    libelleNatureEconomique() {
      let collet = [];
      this.getterNatureEconomique.filter((item) => {
        let data = {
          id: item.id,
          libelle: item.code.concat("  ", item.libelle),
        };
        collet.push(data);
        //}
      });
      return collet;
    },
  },
  methods: {
    onComplete() {
      // alert("Yay. Done!");
    },
    ...mapActions("parametrage", [
      "getActivite",
      "getBudgetModifierEnProjet",
      "getBudgetViseModifierParActvite",
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
      "ReamenagementBudgetEclate",
      "modifierBudget",
      "supprimerBudgetEclate",
      "AjouterNouvelleNature",
    ]),
    EnregistrementNouvelleNature() {
      var objetDirect1 = {
        annebudgetaire: this.exerciceBudgetaire,
        dotation_report: this.ajouterNouvelle.dotation_report,
        dotation_actuelle: this.ajouterNouvelle.dotation_actuelle,
        ligneeconomique_id: this.ajouterNouvelle.economique_id,
        type_financement_id: this.ajouterNouvelle.type_financement_id,
        source_financement_id: this.ajouterNouvelle.source_financement_id,
        dotation_total:
          parseFloat(this.ajouterNouvelle.dotation_report) +
          parseFloat(this.ajouterNouvelle.dotation_actuelle),
        sous_budget_id: this.ajouterNouvelle.sous_budget_id,
        nature_depense_id: this.ajouterNouvelle.nature_depense_id,
        dossier_id: this.dossier_id,
        unite_operationnelle_id: this.ajouterNouvelle.unite_operationnelle_id,
        activite_id: this.ajouterNouvelle.activite_id,
      };

      this.AjouterNouvelleNature(objetDirect1);
      this.ajouterNouvelle = {};
      (this.activite_id = 0), (this.sous_budget_id = 0);
    },

    modificationSection() {
      var objetDirect1 = {
        id: this.ModifierBudget.id,
        dotation_variation: this.ModifierBudget.dotation_variation,

        dotation_actuelle_anterieur:
          this.ModifierBudget.dotation_actuelle_anterieur,
        ligneeconomique_id: this.ModifierBudget.ligneeconomique_id,
        type_financement_id: this.ModifierBudget.type_financement_id,
        source_financement_id: this.ModifierBudget.source_financement_id,
        dotation_total:
          parseFloat(this.ModifierBudget.dotation_actuelle_anterieur) +
          parseFloat(this.ModifierBudget.dotation_variation),
        sous_budget_id: this.ModifierBudget.sous_budget_id,
        nature_depense_id: this.ModifierBudget.nature_depense_id,
      };

      this.modifierBudget(objetDirect1);
    },
    retour() {
      this.$router.push({
        name: "InformationBudgetModifier",
      });
    },
    enregistrementSansTypeFiancement2() {
      var nouvelObjettrsor = {
        annebudgetaire: this.exerciceBudgetaire,
        dotation_variation: this.dotation_actuelle,
        ligneeconomique_id: this.economique_id,
        sous_budget_id: this.sous_budget_id,
        type_financement_id: this.type_financement_id,
        dotation_total: this.MontantGlobal,
        source_financement_id: this.source_financement_id,
        activite_id: this.activite_id,
        dossier_id: this.dossier_id,
        unite_operationnelle_id: this.unite_operationnelle_id,
        nature_depense_id: this.NatureDepense_id,
        dotation_actuelle_anterieur: this.MontantActuel,
      };

      this.ReamenagementBudgetEclate(nouvelObjettrsor);
      (this.dotation_actuelle = ""),
        (this.ligneeconomique_id = ""),
        (this.sous_budget_id = ""),
        (this.type_financement_id = ""),
        (this.unite_operationnelle_id = "");
    },
    voirBudgett(id, id1) {
      this.$router.push({
        name: "VoirBudgetModifierEnProjet",
        params: { id: id, id1: id1 },
      });
    },
    voirSousBudget(id) {
      this.$router.push({
        name: "AfficheSousBudgetEclate",
        params: { id: id },
      });
    },
    AfficheMontantBudget($id) {
      return this.getterListeBudgetEclate
        .filter((item) => item.activite_id == $id)
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
          0
        )
        .toFixed(0);
    },
    AfficheModalModification(id) {
      this.ModifierBudget = this.afficheBudgetParActivite.find(
        (items) => items.id == id
      );
    },
    formatageSomme: formatageSomme,
    formatageSommeSansFCFA: formatageSommeSansFCFA,
    deletePartieRequerante(item) {
      if (item > -1) {
        this.TableauDossier.splice(item, 1);
      }
    },
  },
  watch: {
    activite_id: function (value) {
      let objet = {
        id: value,
      };
      this.getBudgetViseModifierParActvite(objet);
      //this.getOpParActvite(objet);
    },
  },
};
</script>
<style scoped>
@import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
.form-control {
  border: 1px solid #000 !important;
  color: #000;
  font-weight: bold;
}
</style>
