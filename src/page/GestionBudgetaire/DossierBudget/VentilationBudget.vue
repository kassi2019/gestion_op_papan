<template>
  <div class="container">
   
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="page-header">
            <h6 class="fw-bold mb-3">Eclatement</h6>
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
                <a href="#">Eclatement du budget</a>
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
          <div class="d-flex align-items-center">
            <!-- <h4 class="card-title">Eclatement du budget</h4> -->
          </div>
        </div>

        <div class="card-body">
          <FormWizard @on-complete="onComplete" color="#e67e22">
            <TabContent title="SAISIR BUDGET ( ETAPE 1 )" icon="ti-pencil-alt2">
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
                    <div class="col-3">
                      <label class="form-label">Budget Notifié ( A )</label>

                      <money3
                        class="form-control"
                        v-bind="config"
                        readonly
                        :model-value="MontantNotifie"
                      ></money3>
                    </div>
                    <div class="col-3">
                      <label class="form-label">Budget Réport ( B )</label>
                      <money3
                        class="form-control"
                        v-bind="config"
                        readonly
                        :model-value="MontantReport"
                      ></money3>
                    </div>

                    <div class="col-3">
                      <label class="form-label"
                        >Budget global ( C = A + B)</label
                      >
                      <money3
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-bind="config"
                        readonly
                        :model-value="TotalGlobal"
                      ></money3>
                    </div>
                    <div class="col-3">
                      <label class="form-label"
                        >Montant affecté ( {{ AfficheTauxBudget }} % Budget
                        global)</label
                      >

                      <money3
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-bind="config"
                        readonly
                        :model-value="TauxDuBudgetGlobal"
                      ></money3>
                    </div>
                    <div class="col-3">
                      <label class="form-label"
                        >Nature dépense
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label
                      >
                      <model-list-select
                        :list="getterNatureDepense"
                        v-model="nature_depense_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <span style="color: red" v-if="nature_depense_id == 0"
                        >Ce champs est obligatoire!
                      </span>
                    </div>
                    <div class="col-9">
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
                        :list="getterNatureEconomique"
                        v-model="economique_id"
                        option-value="id"
                        option-text="libelle_code"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <span style="color: red" v-if="economique_id == 0"
                        >Ce champs est obligatoire!
                      </span>
                      <span
                        style="color: red"
                        v-if="verificationBailleurSurNatureEconomique == 1"
                        >Cette Nature économique est déja rattaché à ce bailleur </span
                      ><br />
                      <span
                        style="color: red"
                        v-if="verificationGrandeNatureSurNatureEconomique == 1"
                        >Cette Nature économique est déja rattaché à une Nature
                        dépense
                      </span>
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
                        :list="getterTypeFinancement"
                        v-model="FormDataDossier.type_financement_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <span
                        style="color: red"
                        v-if="FormDataDossier.type_financement_id == 0"
                        >Ce champs est obligatoire!
                      </span>
                    </div>
                    <div class="col-9">
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
                        :list="AfficheBailleurParType"
                        v-model="FormDataDossier.source_financement_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <span
                        style="color: red"
                        v-if="FormDataDossier.source_financement_id == 0"
                        >Ce champs est obligatoire!
                      </span>
                    </div>
                    <div class="col-2">
                      <label class="form-label">Dotation Actuelle ( D )</label>
                      <money3
                        v-model="FormDataDossier.dotation_actuelle"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-bind="config"
                      ></money3>
                    </div>
                    <div class="col-2">
                      <label class="form-label">Dotation réport ( E )</label>

                      <money3
                        v-model="FormDataDossier.dotation_report"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-bind="config"
                      ></money3>
                    </div>
                    <div class="col-3">
                      <label class="form-label"
                        >Dotation Actuelle (F= D+E)</label
                      >

                      <money3
                        :model-value="
                          parseFloat(FormDataDossier.dotation_actuelle) +
                          parseFloat(FormDataDossier.dotation_report)
                        "
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-bind="config"
                        readonly
                      ></money3>
                    </div>
                    <div class="col-3">
                      <label class="form-label">Cumul dotation saisie</label>

                      <money3
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-bind="config"
                        readonly
                        :model-value="MontantSaisir"
                      ></money3>
                      <span
                        style="color: red"
                        v-if="MontantSaisir != MontantRecuParSousBudget"
                        >Cumul dotation saisie est différent Montant affecté
                      </span>
                    </div>
                    <div class="col-2">
                      <br />
                      <button
                        v-if="
                          FormDataDossier.type_financement_id == 0 ||
                          FormDataDossier.source_financement_id == 0 ||
                          MontantSaisir == MontantRecuParSousBudget ||
                          verificationBailleurSurNatureEconomique == 1 ||
                          verificationGrandeNatureSurNatureEconomique == 1
                        "
                        type="button"
                        class="btn btn-primary"
                        @click.prevent="ajouterPartieRequerante()"
                        disabled
                        style="cursor: pointer"
                      >
                        Ajouter
                      </button>
                      <button
                        v-else
                        type="button"
                        class="btn btn-primary"
                        @click.prevent="ajouterPartieRequerante()"
                        style="cursor: pointer"
                      >
                        Ajouter
                      </button>
                    </div>
                  </form>
                  <br />
                  <table class="table table-bordered border-primary">
                    <thead>
                      <tr>
                        <!-- <th scope="col">#</th> -->
                        <!-- <th scope="col">N</th> -->
                        <th scope="col" style="text-align: center">
                          Type financement
                        </th>
                        <th scope="col" style="text-align: center">
                          Source financement
                        </th>
                        <th scope="col" style="text-align: center">
                          Dotation actuelle (FCFA)
                        </th>
                        <th scope="col" style="text-align: center">
                          Autre dotation (FCFA)
                        </th>
                        <th scope="col" style="text-align: center">
                          Total (FCFA)
                        </th>
                        <th scope="col" style="text-align: center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(item1, index) in TableauDossier"
                        :key="item1.id"
                      >
                        <td style="width: 10%">
                          {{
                            afficheTypeFinancement(item1.type_financement_id)
                          }}
                        </td>
                        <td style="width: 45%">
                          {{
                            afficheSourceFinancement(
                              item1.source_financement_id
                            )
                          }}
                        </td>
                        <td style="width: 10%; text-align: right">
                          {{
                            formatageSommeSansFCFA(
                              parseFloat(item1.dotation_actuelle)
                            )
                          }}
                        </td>
                        <td style="width: 10%; text-align: right">
                          {{
                            formatageSommeSansFCFA(
                              parseFloat(item1.dotation_report)
                            )
                          }}
                        </td>
                        <!-- <td style="width: 10%; text-align: right">
                      {{
                        formatageSommeSansFCFA(
                          parseFloat(item1.dotation_report)
                        )
                      }}
                    </td> -->
                        <td style="width: 15%; text-align: right">
                          {{
                            formatageSommeSansFCFA(
                              parseFloat(item1.dotation_report) +
                                parseFloat(item1.dotation_actuelle)
                            )
                          }}
                        </td>
                        <td>
                          <span
                            class="badge bg-danger"
                            style="cursor: pointer"
                            @click.prevent="deletePartieRequerante(index)"
                            >Supprimer</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td colspan="5"></td>
                        <td colspan="">
                          <button
                            v-if="
                              unite_operationnelle_id == 0 ||
                              activite_id == 0 ||
                              nature_depense_id == 0 ||
                              economique_id == 0 ||
                              verificationBailleurSurNatureEconomique == 1 ||
                              verificationGrandeNatureSurNatureEconomique == 1
                            "
                            type="button"
                            class="btn btn-success"
                            @click.prevent="enregistrementSansTypeFiancement2()"
                            style="cursor: pointer"
                            disabled
                          >
                            Enregistrer
                          </button>
                          <button
                            v-else
                            type="button"
                            class="btn btn-success"
                            @click.prevent="enregistrementSansTypeFiancement2()"
                            style="cursor: pointer"
                          >
                            Enregistrer
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabContent>
            <TabContent
              title="VERIFICATION DU BUDGET ( ETAPE 2 )"
              icon="ti-search"
            >
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
                        Dotation Actuelle
                      </th>
                      <th
                        scope="col"
                        style="
                          text-align: center;
                          border: 1px solid #000 !important;
                        "
                      >
                        Report
                      </th>
                      <th
                        scope="col"
                        style="
                          text-align: center;
                          border: 1px solid #000 !important;
                        "
                      >
                        Total
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
                            parseFloat(item1.dotation_actuelle)
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
                            parseFloat(item1.dotation_report)
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
                            parseFloat(item1.dotation_total)
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
                          formatageSommeSansFCFA(parseFloat(sommeBudgetReport))
                        }}
                      </td>
                      <td
                        style="
                          text-align: right;
                          border: 1px solid #000 !important;
                        "
                      >
                        {{
                          formatageSommeSansFCFA(parseFloat(sommeBudgetTotal))
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
                        class="badge bg-dark"
                        style="cursor: pointer"
                        @click.prevent="voirBudgetProjet(item1.id, dossier_id)"
                        >Budget2</span
                      >
                      <span
                        class="badge bg-info"
                        style="cursor: pointer"
                        @click.prevent="voirSousBudget(item1.id, dossier_id)"
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
                  v-model="ModifierBudget.dotation_actuelle"
                  class="form-control"
                  style="border: 1px solid #000 !important"
                  v-bind="config"
                ></money3>
              </div>
              <div class="col-4">
                <label class="form-label">Dotation réport ( E )</label>

                <money3
                  v-model="ModifierBudget.dotation_report"
                  class="form-control"
                  style="border: 1px solid #000 !important"
                  v-bind="config"
                ></money3>
              </div>
              <div class="col-4">
                <label class="form-label">Dotation Actuelle (F= D+E)</label>

                <money3
                  :model-value="
                    parseFloat(ModifierBudget.dotation_actuelle) +
                    parseFloat(ModifierBudget.dotation_report)
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
      FormDataDossier: {
        dotation_report: 0,
        dotation_actuelle: 0,
        type_financement_id: 0,
        source_financement_id: 0,
      },
      economique_id: 0,
      activite_id: 0,
      unite_operationnelle_id: 0,
      nature_depense_id: 0,
      sous_budget_id: 0,
      global: 0,
      autreRessource: 0,
      ressourcePropre: 0,
      decision_cf: 0,
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
    this.getDotationNotifie();
    this.getDotationReport();
    this.getDotationRessourcePropre();
    this.getDotationAutreRessource();
    this.getBudgetEclate();

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
      "getterActivite",
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

    sommeBudgetActuelle() {
      return this.afficheBudgetParActivite

        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_actuelle),
          0
        )
        .toFixed(0);
    },
    sommeBudgetReport() {
      return this.afficheBudgetParActivite

        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_report),
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
    verificationBailleurSurNatureEconomique() {
      if (this.sous_budget_id == 0) {
        const qtereel = this.getterListeBudgetEclate.find(
          (qtreel) =>
            qtreel.activite_id == this.activite_id &&
            qtreel.ligneeconomique_id == this.economique_id &&
            qtreel.source_financement_id ==
              this.FormDataDossier.source_financement_id
        );

        if (qtereel) {
          return 1;
        }
        return 0;
      } else {
        //   return (id) => {
        //     if (id != null && id != "") {
        const qtereel = this.getterListeBudgetEclate.find(
          (qtreel) =>
            qtreel.sous_budget_id == this.sous_budget_id &&
            qtreel.ligneeconomique_id == this.economique_id &&
            qtreel.source_financement_id ==
              this.FormDataDossier.source_financement_id
        );

        if (qtereel) {
          return 1;
        }
        return 0;
        //     }
        //   };
      }
    },
    verificationGrandeNatureSurNatureEconomique() {
      if (this.sous_budget_id == 0) {
        const qtereel = this.getterListeBudgetEclate.find(
          (qtreel) =>
            qtreel.activite_id == this.activite_id &&
            qtreel.ligneeconomique_id == this.economique_id &&
            qtreel.nature_depense_id == this.nature_depense_id
        );

        if (qtereel) {
          return 1;
        }
        return 0;
      } else {
        //   return (id) => {
        //     if (id != null && id != "") {
        const qtereel = this.getterListeBudgetEclate.find(
          (qtreel) =>
            qtreel.sous_budget_id == this.sous_budget_id &&
            qtreel.ligneeconomique_id == this.economique_id &&
            qtreel.nature_depense_id == this.nature_depense_id
        );

        if (qtereel) {
          return 1;
        }
        return 0;
        //     }
        //   };
      }
    },
    MontantRecuParSousBudget() {
      if (this.TauxDuBudgetGlobal != 0) {
        return this.TauxDuBudgetGlobal;
      } else {
        return this.TotalGlobal;
      }
    },

    MontantSaisir() {
      if (this.sous_budget_id == 0) {
        return this.getterListeBudgetEclate
          .filter((item) => item.activite_id == this.activite_id)
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.getterListeBudgetEclate
          .filter(
            (item) =>
              item.activite_id == this.activite_id &&
              item.sous_budget_id == this.sous_budget_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },
    AfficheTauxBudget() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterSousBudget.find(
        (qtreel) => qtreel.id == this.sous_budget_id
      );

      if (qtereel) {
        return qtereel.taux_budget;
      }
      return 0;
      //     }
      //   };
    },
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
    TauxDuBudgetGlobal() {
      return (
        (parseFloat(this.TotalGlobal) * parseFloat(this.AfficheTauxBudget)) /
        100
      ).toFixed(0);
    },

    retourneTauxArrondi() {
      return parseFloat(this.AfficheTauxBudget) / parseFloat(100);
    },
    afficheBudgetParActivite() {
      return this.getterListeBudgetEclate.filter(
        (item) => item.dossier_id == this.dossier_id
      );
    },
    ResultatDotation() {
      if (
        this.FormDataDossier.dotation_actuelle == 0 &&
        this.FormDataDossier.dotation_report == 0
      ) {
        return 0;
      } else {
        return parseFloat(
          parseFloat(this.FormDataDossier.dotation_actuelle) +
            parseFloat(this.FormDataDossier.dotation_report)
        );
      }
    },

    TotalGlobal() {
      return (
        parseFloat(this.MontantNotifie) + parseFloat(this.MontantReport)
        // +
        // parseFloat(this.MontantRessourcePropre) +
        // parseFloat(this.MontantAutreRessource)
      );
    },
    MontantAutreRessource() {
      return this.getterDotationAutreRessource
        .filter((item) => item.activite_id == this.activite_id)
        .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
        .toFixed(0);
    },
    MontantRessourcePropre() {
      return this.getterDotationRessourcePropre
        .filter((item) => item.activite_id == this.activite_id)
        .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
        .toFixed(0);
    },
    MontantReport() {
      return this.getterDotationReport
        .filter(
          (item) =>
            item.activite_id == this.activite_id &&
            item.exercice == this.exerciceBudgetaire - 1
        )
        .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
        .toFixed(0);
    },
    MontantNotifie() {
      return this.getterDotationNotifie
        .filter((item) => item.activite_id == this.activite_id)
        .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
        .toFixed(0);
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
    ]),
    modificationSection() {
      var objetDirect1 = {
        id: this.ModifierBudget.id,
        dotation_report: this.ModifierBudget.dotation_report,

        dotation_actuelle: this.ModifierBudget.dotation_actuelle,
        ligneeconomique_id: this.ModifierBudget.ligneeconomique_id,
        type_financement_id: this.ModifierBudget.type_financement_id,
        source_financement_id: this.ModifierBudget.source_financement_id,
        dotation_total:
          parseFloat(this.ModifierBudget.dotation_actuelle) +
          parseFloat(this.ModifierBudget.dotation_report),
        sous_budget_id: this.ModifierBudget.sous_budget_id,
        nature_depense_id: this.ModifierBudget.nature_depense_id,
      };

      this.modifierBudget(objetDirect1);
    },
    voirBudgetProjet(id, id1) {
      this.$router.push({
        name: "afficherBudgetProjet",
        params: { id: id, id1: id1 },
      });
    },
    voirBudgett(id, id1) {
      this.$router.push({
        name: "VoirBudgetEclate",
        params: { id: id, id1: id1 },
      });
    },

    retour() {
      this.$router.push({
        name: "Budget",
      });
    },
    voirSousBudget(id, id1) {
      this.$router.push({
        name: "AfficheSousBudgetEclate",
        params: { id: id, id1: id1 },
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
    ajouterPartieRequerante() {
      //  console.log(this.partie.motif_partie_id)
      var nouvelObjet12 = {
        ...this.FormDataDossier,
        type_financement_id: this.FormDataDossier.type_financement_id,
        source_financement_id: this.FormDataDossier.source_financement_id,
        ligneeconomique_id: this.economique_id,
        dotation_total: this.ResultatDotation,
      };
      this.TableauDossier.push(nouvelObjet12);

      this.FormDataDossier = {
        dotation_report: 0,
        dotation_actuelle: 0,

        type_financement_id: 0,
        source_financement_id: 0,
      };
    },

    enregistrementSansTypeFiancement2() {
      var nouvelObjettrsor = {
        annebudgetaire: this.exerciceBudgetaire,
        unite_operationnelle_id: this.unite_operationnelle_id,
        activite_id: this.activite_id,

        // section_id: this.activite_id,

        sous_budget_id: this.sous_budget_id,

        nature_depense_id: this.nature_depense_id,
        decision_cf: this.decision_cf,
        dossier_id: this.dossier_id,

        FormDataDossier: this.TableauDossier,
      };

      this.ajouterBudgetEclate(nouvelObjettrsor);

      (this.TableauDossier = []),
        (this.FormDataDossier.type_financement_id = ""),
        (this.FormDataDossier.source_financement_id = ""),
        (this.FormDataDossier.dotation_actuelle = 0),
        (this.FormDataDossier.dotation_report = 0);
    },
  },
  // watch: {
  //   activite_id: function (value) {
  //     let objet = {
  //       id: value
  //     };
  //     this.getAfficherDotation(objet)
  //   }
  // },
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
