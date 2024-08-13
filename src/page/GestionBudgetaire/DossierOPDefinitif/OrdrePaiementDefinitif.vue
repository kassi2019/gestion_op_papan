<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="page-header">
            <h6 class="fw-bold mb-3">Saisir Ordre Paiement</h6>
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
                <a href="#">OP Définitif</a>
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
          <FormWizard color="#1D702D">
            <TabContent title="SAISIR OP DEFINITIF" icon="icon-note">
              <FormWizard @on-complete="onComplete" color="#e67e22">
                <TabContent title="PROJET" icon="ti-home">
                  <div class="row">
                    <div class="col-lg-12">
                      <form class="row g-3">
                        <div class="col-12">
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
                            v-model="activite_id"
                            option-value="activite_id"
                            option-text="plan_activite"
                            placeholder="select item"
                            style="border: 1px solid #000"
                          >
                          </model-list-select>
                          <span style="color: red" v-if="activite_id == 0"
                            >Ce champs est obligatoire!
                          </span>
                        </div>
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
                            >Sous budget / Composante</label
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
                        </div>

                        <div class="col-12" v-if="ordre_paiement_id != 0">
                          <label class="form-label"
                            >Unité Opérationnelle
                          </label>

                          <input
                            type="text"
                            class="form-control"
                            readonly
                            :value="afficheNomProjet(ordre_paiement_id)"
                            style="border: 1px solid #000 !important"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </TabContent>
                <TabContent title="ORDRE PAIEMENT" icon="ti-write">
                  <div class="row">
                    <div class="col-lg-12">
                      <form class="row g-3">
                        <div class="col-12">
                          <label class="form-label"
                            >Numéro OP Provisoire
                            <span
                              style="
                                color: red !important;
                                font-size: 15px !important;
                              "
                              >*</span
                            ></label
                          >
                          <model-list-select
                            :list="afficheOPProvisoire"
                            v-model="ordre_paiement_id"
                            option-value="id"
                            option-text="numero_ordre_paiement"
                            placeholder="select item"
                            style="border: 1px solid #000"
                          >
                          </model-list-select>
                          <span style="color: red" v-if="ordre_paiement_id == 0"
                            >veuillez sélectionner le numéro de l'OP a
                            régularisé ?
                          </span>
                        </div>
                        <div class="col-12">
                          <label class="form-label">Objet de la depense </label>
                          <input
                            type="text"
                            class="form-control"
                            readonly
                            style="border: 1px solid #000 !important"
                            :value="afficheObjet(ordre_paiement_id)"
                          />
                        </div>
                        <div class="col-6">
                          <label class="form-label"
                            >Numéro de ordre de paiement
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            style="border: 1px solid #000 !important"
                            :value="automatiseNumeroOP"
                            readonly
                          />
                        </div>
                        <div class="col-6">
                          <label class="form-label"
                            >Montant des préstations
                            <span
                              style="
                                color: red !important;
                                font-size: 15px !important;
                              "
                              >*</span
                            ></label
                          >

                          <money3
                            class="form-control"
                            v-bind="config"
                            v-model="montant_prestation"
                          ></money3>
                          <span
                            style="color: red"
                            v-if="montant_prestation == 0"
                            >Ce champs est obligatoire!
                          </span>
                          <span style="color: red" v-if="montant_prestation < 0"
                            >le Montant doit être positif
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </TabContent>
                <TabContent title="FOURNISSEUR" icon="fas fa-money-bill-wave">
                  <div class="row">
                    <div class="col-lg-12">
                      <form class="row g-3">
                        <div class="col-12">
                          <label class="form-label">Nom du Bénéficiaire </label>
                          <input
                            type="text"
                            class="form-control"
                            readonly
                            style="border: 1px solid #000 !important"
                            :value="afficheBeneficiaire(ordre_paiement_id)"
                          />
                        </div>
                        <div class="col-6">
                          <label class="form-label">Compte Bancaire </label>
                          <input
                            type="text"
                            class="form-control"
                            readonly
                            style="border: 1px solid #000 !important"
                            :value="afficheCompteBancaire1(ordre_paiement_id)"
                          />
                        </div>
                        <div class="col-3">
                          <label class="form-label">Adresse</label>
                          <input
                            type="text"
                            class="form-control"
                            readonly
                            style="border: 1px solid #000 !important"
                            :value="afficheAdresse(ordre_paiement_id)"
                          />
                        </div>
                        <div class="col-3">
                          <label class="form-label"
                            >Numéro compte contribuable</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            readonly
                            style="border: 1px solid #000 !important"
                            :value="afficheNumeroCC(ordre_paiement_id)"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </TabContent>
                <TabContent title="BAILLEUR" icon="fas fa-hands-helping">
                  <div class="row">
                    <div class="col-lg-12">
                      <form class="row g-3">
                        <div class="col-9">
                          <label class="form-label"
                            >Nature économique / Imputation
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            readonly
                            style="border: 1px solid #000 !important"
                            :value="afficheNatureEconomique(ordre_paiement_id)"
                          />
                        </div>
                        <div class="col-3">
                          <label class="form-label">Nature de depense</label>
                          <input
                            type="text"
                            class="form-control"
                            style="border: 1px solid #000 !important"
                            :value="afficheNatureDepense(ordre_paiement_id)"
                            readonly
                          />
                        </div>
                        <div class="col-3">
                          <label class="form-label">Type financement </label>

                          <input
                            type="text"
                            class="form-control"
                            readonly
                            style="border: 1px solid #000 !important"
                            :value="afficheTypeFiancement(ordre_paiement_id)"
                          />
                        </div>
                        <div class="col-9">
                          <label class="form-label"
                            >Source de financement
                          </label>

                          <input
                            type="text"
                            class="form-control"
                            readonly
                            style="border: 1px solid #000 !important"
                            :value="afficheSourceFiancement(ordre_paiement_id)"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </TabContent>
                <TabContent title="DOTATION" icon="fas fa-calculator">
                  <div class="row">
                    <div class="col-lg-12">
                      <form class="row g-3">
                        <div class="col-6">
                          <label class="form-label">Dotation ( A )</label>

                          <money3
                            class="form-control"
                            v-bind="config"
                            :model-value="afficheDotaionOPdef"
                            readonly
                          ></money3>
                        </div>
                        <div class="col-3">
                          <label class="form-label"
                            >Cumul Dépense Antérieure ( B )</label
                          >

                          <money3
                            class="form-control"
                            v-bind="config"
                            :model-value="afficheMontantCumul"
                            readonly
                          ></money3>
                        </div>
                        <div class="col-3">
                          <label class="form-label"
                            >Dépense en Cours ( C )</label
                          >

                          <money3
                            class="form-control"
                            v-bind="config"
                            v-model="montant_prestation"
                            readonly
                          ></money3>
                        </div>
                        <div class="col-6">
                          <label class="form-label"
                            >Cumul Dépense en Cours ( D = B + C )</label
                          >

                          <money3
                            class="form-control"
                            v-bind="config"
                            :model-value="CumulDepense"
                            readonly
                          ></money3>
                        </div>
                        <div class="col-6">
                          <label class="form-label"
                            >Disponible ( E = A - D )</label
                          >

                          <money3
                            class="form-control"
                            style="border: 1px solid #000 !important"
                            v-bind="config"
                            :model-value="disponible"
                            readonly
                          ></money3>
                        </div>
                        <div class="col-6">
                          <label for="inputNanme4" class="form-label"
                            >Décision</label
                          >
                          <select
                            class="form-select"
                            style="border: 1px solid #000"
                            v-model="decision_cf"
                          >
                            <option selected></option>
                            <option :value="1">Visé</option>
                            <option :value="2">Visé avec observation</option>
                            <option :value="3">Différé</option>
                            <option :value="4">Réjetté</option>
                          </select>
                        </div>
                        <div class="col-6">
                          <label for="inputNanme4" class="form-label"
                            >Date décision</label
                          >
                          <input
                            type="date"
                            class="form-control"
                            style="border: 1px solid #000"
                            v-model="date_decision"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </TabContent>
                <TabContent title="FACTURE DEFINITIVE" icon="ti-files">
                  <div class="row">
                    <div class="col-lg-12">
                      <form class="row g-3">
                        <div class="col-3">
                          <label class="form-label"
                            >Numéro de la facture
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
                            v-model="numero_facture"
                          />
                          <span style="color: red" v-if="numero_facture == 0"
                            >Ce champs est obligatoire!
                          </span>
                        </div>
                        <div class="col-2">
                          <label class="form-label"
                            >Date de la facture
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
                            v-model="date_facture"
                          />
                          <span
                            style="color: red; font-size: 10px"
                            v-if="date_facture == ''"
                            >Ce champs est obligatoire!
                          </span>
                        </div>
                        <div class="col-3">
                          <label class="form-label">Montant de la OP</label>
                          <money3
                            class="form-control"
                            v-bind="config"
                            v-model="montant_prestation"
                            readonly
                          ></money3>
                        </div>
                        <div class="col-2">
                          <label class="form-label"
                            >Montant facture saisie</label
                          >
                          <money3
                            class="form-control"
                            v-bind="config"
                            readonly
                            :model-value="CumulMontantSaisi"
                          ></money3>
                        </div>
                        <div class="col-2">
                          <label class="form-label">Ecart</label>
                          <money3
                            v-if="
                              parseFloat(montant_prestation) !=
                              parseFloat(CumulMontantSaisi)
                            "
                            class="form-control"
                            v-bind="config"
                            readonly
                            :model-value="
                              parseFloat(montant_prestation) -
                              parseFloat(CumulMontantSaisi)
                            "
                            style="border: 2px solid red !important"
                          ></money3>
                          <money3
                            v-else
                            class="form-control"
                            v-bind="config"
                            readonly
                            :model-value="
                              parseFloat(montant_prestation) -
                              parseFloat(CumulMontantSaisi)
                            "
                          ></money3>
                        </div>
                        <div class="col-12">
                          <label class="form-label"
                            >Désignation
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
                            v-model="FormDataDossier.designation"
                          />
                          <span
                            style="color: red"
                            v-if="FormDataDossier.designation == ''"
                            >Ce champs est obligatoire!
                          </span>
                        </div>
                        <div class="col-3">
                          <label class="form-label"
                            >Quantité ( A )
                            <span
                              style="
                                color: red !important;
                                font-size: 15px !important;
                              "
                              >*</span
                            ></label
                          >
                          <input
                            type="number"
                            class="form-control"
                            v-model="FormDataDossier.quantite"
                          />
                          <span
                            style="color: red"
                            v-if="FormDataDossier.quantite == 0"
                            >Ce champs est obligatoire!
                          </span>
                        </div>
                        <div class="col-3">
                          <label class="form-label"
                            >Prix Unitaire ( B )
                            <span
                              style="
                                color: red !important;
                                font-size: 15px !important;
                              "
                              >*</span
                            ></label
                          >
                          <money3
                            class="form-control"
                            v-bind="config"
                            v-model="FormDataDossier.prix_unitaire"
                          ></money3>
                          <span
                            style="color: red"
                            v-if="FormDataDossier.prix_unitaire == 0"
                            >Ce champs est obligatoire!
                          </span>
                        </div>
                        <div class="col-3">
                          <label class="form-label"
                            >Montant HT (C = A * B)</label
                          >
                          <money3
                            class="form-control"
                            v-bind="config"
                            :model-value="MontantHt"
                            readonly
                          ></money3>
                        </div>
                        <div class="col-3">
                          <label class="form-label"
                            >Exonéré de la TVA {{ AfficheTauxTVA }}% ?</label
                          >
                          <select
                            class="form-select form-control"
                            id="defaultSelect"
                            style="border: 1px solid #000 !important"
                            v-model="FormDataDossier.exonere"
                          >
                            <option></option>
                            <option value="0">Oui</option>
                            <option value="1">Non</option>
                          </select>
                        </div>
                        <div class="col-3">
                          <label class="form-label">Type de Forfait</label>
                          <select
                            class="form-select form-control"
                            id="defaultSelect"
                            style="border: 1px solid #000 !important"
                            v-model="FormDataDossier.type_forfait"
                          >
                            <option value=""></option>
                            <option value="taux">Taux</option>
                            <option value="montant">Montant</option>
                          </select>
                        </div>
                        <div class="col-3">
                          <label class="form-label"
                            >Autre {{ FormDataDossier.type_forfait }}
                            <span v-if="FormDataDossier.type_forfait == 'taux'"
                              >%</span
                            >
                            ( D )</label
                          >
                          <!-- <input
                            type="number"
                            class="form-control"
                            v-model="autre_taux"
                          /> -->
                          <money3
                            class="form-control"
                            v-bind="config"
                            v-model="autre_taux"
                          ></money3>
                        </div>
                        <div class="col-6">
                          <label class="form-label"
                            >Libelle Autre
                            {{ FormDataDossier.type_forfait }}</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            v-model="FormDataDossier.libelle_taux"
                          />
                        </div>
                        <div class="col-2">
                          <label class="form-label">Taux TVA (%) ( F )</label>
                          <input
                            type="text"
                            class="form-control"
                            :value="AfficheTauxTVA"
                            readonly
                          />
                        </div>
                        <div class="col-3">
                          <label
                            class="form-label"
                            v-if="FormDataDossier.type_forfait == 'taux'"
                            >Cumul des autres taxes ( E = C * D)
                          </label>
                          <label
                            class="form-label"
                            v-else-if="
                              FormDataDossier.type_forfait == 'montant'
                            "
                            >Cumul des autres taxes ( E = C + D)
                          </label>
                          <label class="form-label" v-else
                            >Cumul des autres taxes ( E )
                          </label>
                          <money3
                            class="form-control"
                            v-bind="config"
                            :model-value="afficheAutreMontant"
                            readonly
                          ></money3>
                        </div>
                        <div class="col-2">
                          <label class="form-label"
                            >Montant Tva ( G = C * F)</label
                          >
                          <money3
                            class="form-control"
                            v-bind="config"
                            :model-value="montantTva"
                            readonly
                          ></money3>
                        </div>
                        <div class="col-3">
                          <label class="form-label"
                            >Montant TTC ( H = E + G + C )</label
                          >
                          <money3
                            class="form-control"
                            v-bind="config"
                            :model-value="MontantTTC"
                            readonly
                          ></money3>
                        </div>
                        <div class="col-1">
                          <br />
                          <button
                            v-if="
                              numero_facture == 0 ||
                              date_facture == '' ||
                              FormDataDossier.designation == 0 ||
                              FormDataDossier.quantite == 0 ||
                              FormDataDossier.prix_unitaire == 0
                            "
                            disabled
                            type="button"
                            class="btn btn-primary"
                            @click.prevent="ajouterPartieRequerante()"
                          >
                            Ajouter
                          </button>
                          <button
                            v-else
                            type="button"
                            class="btn btn-primary"
                            @click.prevent="ajouterPartieRequerante()"
                          >
                            Ajouter
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <br />
                  <div class="table-responsive">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <!-- <th scope="col">#</th> -->
                          <!-- <th scope="col">N</th> -->
                          <!-- <th scope="col" style="text-align: center">N°</th> -->
                          <th
                            scope="col"
                            style="
                              text-align: center;
                              border: 1px solid #000 !important;
                            "
                          >
                            Désignation
                          </th>
                          <th
                            scope="col"
                            style="
                              text-align: center;
                              border: 1px solid #000 !important;
                            "
                          >
                            Quantité
                          </th>
                          <th
                            scope="col"
                            style="
                              text-align: center;
                              border: 1px solid #000 !important;
                            "
                          >
                            Prix unitaire
                          </th>
                          <th
                            scope="col"
                            style="
                              text-align: center;
                              border: 1px solid #000 !important;
                            "
                          >
                            Montant HT
                          </th>
                          <!-- <th scope="col" style="text-align: center">Rémise</th>
                      <th scope="col" style="text-align: center">Addition</th>-->
                          <th
                            scope="col"
                            style="
                              text-align: center;
                              border: 1px solid #000 !important;
                            "
                          >
                            Cumul des autres taxes HT
                          </th>
                          <th
                            scope="col"
                            style="
                              text-align: center;
                              border: 1px solid #000 !important;
                            "
                          >
                            Taux
                          </th>
                          <th
                            scope="col"
                            style="
                              text-align: center;
                              border: 1px solid #000 !important;
                            "
                          >
                            Montant TVA
                          </th>
                          <th
                            scope="col"
                            style="
                              text-align: center;
                              border: 1px solid #000 !important;
                            "
                          >
                            Montant TTC
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item1, index) in TableauDossier"
                          :key="item1.id"
                        >
                          <td
                            style="
                              width: 45%;
                              border: 1px solid #000 !important;
                            "
                          >
                            {{ item1.designation }}
                          </td>
                          <td
                            style="
                              width: 10%;
                              border: 1px solid #000 !important;
                            "
                          >
                            {{ item1.quantite }}
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
                                parseFloat(item1.prix_unitaire)
                              )
                            }}
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
                                parseFloat(item1.montant_ht)
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
                            {{ formatageSommeSansFCFA(parseFloat(item1.taux)) }}
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
                                parseFloat(item1.autre_montant)
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
                                parseFloat(item1.montant_tva)
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
                                parseFloat(item1.montant_ttc)
                              )
                            }}
                          </td>
                          <td>
                            <!-- <span
                          title="Modifier"
                          class="fas fa-edit"
                          data-bs-toggle="modal"
                          data-bs-target="#largeModal1"
                          style="cursor: pointer; color: blue"
                           @click.prevent="AfficheModalModification(item.id)"
                        ></span> -->
                            <span
                              title="Supprimer"
                              style="
                                cursor: pointer;
                                color: red;
                                border: 1px solid #000 !important;
                              "
                              @click.prevent="deletePartieRequerante(index)"
                              ><i class="fas fa-archive"></i
                            ></span>
                          </td>
                        </tr>
                        <tr>
                          <td
                            colspan="3"
                            style="
                              text-align: center;
                              background-color: #f6e8b1 !important;
                              border: 1px solid #000 !important;
                            "
                          >
                            TOTAL
                          </td>

                          <td
                            style="
                              text-align: right !important;
                              background-color: #f6e8b1 !important;
                              border: 1px solid #000 !important;
                            "
                          >
                            {{
                              formatageSommeSansFCFA(parseFloat(CumulMontantHT))
                            }}
                          </td>
                          <td
                            style="
                              text-align: right !important;
                              background-color: #f6e8b1 !important;
                              border: 1px solid #000 !important;
                            "
                          >
                            {{ formatageSommeSansFCFA(parseFloat(0)) }}
                          </td>
                          <td
                            style="
                              text-align: right !important;
                              background-color: #f6e8b1 !important;
                              border: 1px solid #000 !important;
                            "
                          >
                            {{
                              formatageSommeSansFCFA(
                                parseFloat(CumulMontantAutreMontant)
                              )
                            }}
                          </td>
                          <td
                            style="
                              text-align: right !important;
                              background-color: #f6e8b1 !important;
                              border: 1px solid #000 !important;
                            "
                          >
                            {{
                              formatageSommeSansFCFA(
                                parseFloat(CumulMontanttva)
                              )
                            }}
                          </td>
                          <td
                            style="
                              text-align: right !important;
                              background-color: #f6e8b1 !important;
                              border: 1px solid #000 !important;
                            "
                          >
                            {{
                              formatageSommeSansFCFA(
                                parseFloat(CumulMontantSaisi)
                              )
                            }}
                          </td>
                          <td
                            style="
                              text-align: right !important;
                              background-color: #f6e8b1 !important;
                              border: 1px solid #000 !important;
                            "
                          ></td>
                        </tr>
                        <tr>
                          <td colspan="8"></td>
                          <td colspan="">
                            <button
                              v-if="
                                activite_id == 0 ||
                                montant_prestation == 0 ||
                                ordre_paiement_id == 0 ||
                                montant_prestation < 0
                              "
                              disabled
                              type="button"
                              class="btn btn-success"
                              @click.prevent="enregistrementAvecFacture()"
                            >
                              Enregistrer
                            </button>
                            <button
                              v-else
                              type="button"
                              class="btn btn-success"
                              @click.prevent="enregistrementAvecFacture()"
                            >
                              Enregistrer
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabContent>
                <TabContent title="FACTURE PRO-FORMA" icon="ti-clipboard">
                  <div class="row">
                    <div class="col-lg-12">
                      <form class="row g-3">
                        <div class="col-3">
                          <label class="form-label"
                            >Numéro de la facture Définitive
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
                            v-model="numero_facture_definitve"
                          />
                          <span
                            style="color: red"
                            v-if="numero_facture_definitve == 0"
                            >Ce champs est obligatoire!
                          </span>
                        </div>
                        <div class="col-3">
                          <label class="form-label"
                            >Date de la facture Définitive
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
                            v-model="date_facture_definitve"
                          />
                          <span
                            style="color: red; font-size: 10px"
                            v-if="date_facture_definitve == ''"
                            >Ce champs est obligatoire!
                          </span>
                        </div>
                        <div class="col-2">
                          <label class="form-label">Montant de la OP</label>
                          <money3
                            class="form-control"
                            v-bind="config"
                            v-model="montant_prestation"
                            readonly
                          ></money3>
                        </div>
                        <div class="col-2">
                          <label class="form-label"
                            >Montant facture saisie</label
                          >
                          <money3
                            class="form-control"
                            v-bind="config"
                            readonly
                            :model-value="CumulMontantSaisiDef"
                          ></money3>
                        </div>
                        <div class="col-2">
                          <label class="form-label">Ecart</label>
                          <money3
                            v-if="
                              parseFloat(montant_prestation) !=
                              parseFloat(CumulMontantSaisiDef)
                            "
                            class="form-control"
                            v-bind="config"
                            readonly
                            :model-value="
                              parseFloat(montant_prestation) -
                              parseFloat(CumulMontantSaisiDef)
                            "
                            style="border: 2px solid red !important"
                          ></money3>
                          <money3
                            v-else
                            class="form-control"
                            v-bind="config"
                            readonly
                            :model-value="
                              parseFloat(montant_prestation) -
                              parseFloat(CumulMontantSaisiDef)
                            "
                          ></money3>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <!-- <th scope="col">#</th> -->
                          <!-- <th scope="col">N</th> -->
                          <!-- <th scope="col" style="text-align: center">N°</th> -->
                          <th
                            scope="col"
                            style="
                              text-align: center;
                              border: 1px solid #000 !important;
                            "
                          >
                            Désignation
                          </th>
                          <th
                            scope="col"
                            style="
                              text-align: center;
                              border: 1px solid #000 !important;
                            "
                          >
                            Quantité
                          </th>
                          <th
                            scope="col"
                            style="
                              text-align: center;
                              border: 1px solid #000 !important;
                            "
                          >
                            Prix unitaire
                          </th>
                          <th
                            scope="col"
                            style="
                              text-align: center;
                              border: 1px solid #000 !important;
                            "
                          >
                            Montant HT
                          </th>
                          <!-- <th scope="col" style="text-align: center">Rémise</th>
                      <th scope="col" style="text-align: center">Addition</th>-->
                          <th
                            scope="col"
                            style="
                              text-align: center;
                              border: 1px solid #000 !important;
                            "
                          >
                            Cumul des autres taxes HT
                          </th>
                          <th
                            scope="col"
                            style="
                              text-align: center;
                              border: 1px solid #000 !important;
                            "
                          >
                            Taux
                          </th>
                          <th
                            scope="col"
                            style="
                              text-align: center;
                              border: 1px solid #000 !important;
                            "
                          >
                            Montant TVA
                          </th>
                          <th
                            scope="col"
                            style="
                              text-align: center;
                              border: 1px solid #000 !important;
                            "
                          >
                            Montant TTC
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="item1 in AfficheFactureParOrdrePaiement"
                          :key="item1.id"
                        >
                          <td
                            style="
                              width: 45%;
                              border: 1px solid #000 !important;
                            "
                          >
                            {{ item1.designation }}
                          </td>
                          <td
                            style="
                              width: 10%;
                              border: 1px solid #000 !important;
                            "
                          >
                            {{ item1.quantite }}
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
                                parseFloat(item1.prix_unitaire)
                              )
                            }}
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
                                parseFloat(item1.montant_ht)
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
                            {{ formatageSommeSansFCFA(parseFloat(item1.taux)) }}
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
                                parseFloat(item1.autre_montant)
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
                                parseFloat(item1.montant_tva)
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
                                parseFloat(item1.montant_ttc)
                              )
                            }}
                          </td>
                        </tr>
                        <tr>
                          <td
                            colspan="3"
                            style="
                              text-align: center;
                              background-color: #f6e8b1 !important;
                              border: 1px solid #000 !important;
                            "
                          >
                            TOTAL
                          </td>

                          <td
                            style="
                              text-align: right !important;
                              background-color: #f6e8b1 !important;
                              border: 1px solid #000 !important;
                            "
                          >
                            {{
                              formatageSommeSansFCFA(
                                parseFloat(CumulMontantHTDef)
                              )
                            }}
                          </td>
                          <td
                            style="
                              text-align: right !important;
                              background-color: #f6e8b1 !important;
                              border: 1px solid #000 !important;
                            "
                          >
                            {{ formatageSommeSansFCFA(parseFloat(0)) }}
                          </td>
                          <td
                            style="
                              text-align: right !important;
                              background-color: #f6e8b1 !important;
                              border: 1px solid #000 !important;
                            "
                          >
                            {{
                              formatageSommeSansFCFA(
                                parseFloat(CumulMontantAutreMontantDef)
                              )
                            }}
                          </td>
                          <td
                            style="
                              text-align: right !important;
                              background-color: #f6e8b1 !important;
                              border: 1px solid #000 !important;
                            "
                          >
                            {{
                              formatageSommeSansFCFA(
                                parseFloat(CumulMontanttvaDef)
                              )
                            }}
                          </td>
                          <td
                            style="
                              text-align: right !important;
                              background-color: #f6e8b1 !important;
                              border: 1px solid #000 !important;
                            "
                          >
                            {{
                              formatageSommeSansFCFA(
                                parseFloat(CumulMontantSaisiDef)
                              )
                            }}
                          </td>
                          <td
                            style="
                              text-align: right !important;
                              background-color: #f6e8b1 !important;
                              border: 1px solid #000 !important;
                            "
                          ></td>
                        </tr>
                        <tr>
                          <td colspan="7"></td>
                          <td colspan="">
                            <button
                              v-if="
                                activite_id == 0 ||
                                montant_prestation == 0 ||
                                ordre_paiement_id == 0 ||
                                date_facture_definitve == 0 ||
                                numero_facture_definitve == 0
                              "
                              disabled
                              type="button"
                              class="btn btn-success"
                              @click.prevent="
                                enregistrementSansTypeFiancement2()
                              "
                            >
                              Enregistrer
                            </button>
                            <button
                              v-else
                              type="button"
                              class="btn btn-success"
                              @click.prevent="
                                enregistrementSansTypeFiancement2()
                              "
                            >
                              Enregistrer
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabContent>
              </FormWizard>
            </TabContent>
            <TabContent
              title="LISTE OP DU BORDEREAU"
              icon="icon-list"
              color="#000"
            >
              <div class="table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Numero OP</th>
                      <th>Objet dépense</th>
                      <th>Montant</th>
                      <th>nature économique</th>
                      <th>Bénéficiaire</th>
                      <th>Décision</th>
                      <th>Date Décision</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in afficheListeOPprovisoire" :key="item.id">
                      <td style="border: 1px solid #000">
                        {{ item.numero_ordre_paiement }}
                      </td>
                      <td style="border: 1px solid #000" class="text-break">
                        {{ item.objet_depense }}
                      </td>
                      <td style="border: 1px solid #000; text-align: right">
                        {{
                          formatageSommeSansFCFA(
                            parseFloat(item.montant_prestation)
                          )
                        }}
                      </td>
                      <td style="border: 1px solid #000">
                        {{ item.nature_economique }}
                      </td>
                      <td style="border: 1px solid #000">
                        {{ item.beneficiaire }}
                      </td>
                      <td style="border: 1px solid #000">
                        <span
                          v-if="item.decision == 1"
                          class="badge badge-success"
                          style="cursor: pointer; text-align: center"
                          >{{ afficheDecision(item.decision) }}</span
                        >
                        <span
                          v-if="item.decision == 2"
                          class="badge badge-success"
                          style="cursor: pointer"
                          >{{ afficheDecision(item.decision) }}</span
                        >
                        <span
                          v-if="item.decision == 3"
                          class="badge badge-warning"
                          style="cursor: pointer"
                          >{{ afficheDecision(item.decision) }}</span
                        >
                        <span
                          v-if="item.decision == 4"
                          class="badge badge-danger"
                          style="cursor: pointer"
                          >{{ afficheDecision(item.decision) }}</span
                        >
                      </td>
                      <td style="border: 1px solid #000">
                        {{ formaterDate(item.date_decision) }}
                      </td>
                      <td style="border: 1px solid #000">
                        <div
                          class="btn-group"
                          role="group"
                          aria-label="Basic mixed styles example"
                        >
                          <!-- <span
                            title="Modifier"
                            class="fas fa-edit"
                            data-bs-toggle="modal"
                            data-bs-target="#largeModal1"
                            style="cursor: pointer; color: blue"
                            @click.prevent="AfficheModalModification(item.id)"
                          ></span> -->
                          <!-- <span
                            title="Supprimer"
                            class="fas fa-archive"
                             @click.prevent="supprimerOrdrePaiement(item.id)"
                            style="cursor: pointer; color: red"
                          ></span> -->
                         
                           <!-- <span
                            title="Voir facture"
                            class="fas fa-eye"
                            style="cursor: pointer; color: #006d80"
                            
                           
                          ></span> -->
                          <span
                            title="Imprimer OP"
                            class="fas fa-print"
                            style="cursor: pointer; color: #77abd6"
                            @click.prevent="
                              fonctionImprimer(item.id, bordereau_id)
                            "
                          ></span>
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
      id="largeModal1"
      tabindex="-1"
      data-bs-keyboard="false"
      data-bs-backdrop="static"
      aria-labelledby="staticBackdropLabel"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier Ordre Paiement</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <FormWizard @on-complete="onComplete" color="#e67e22">
              <TabContent title="PROJET" icon="ti-home">
                <div class="row">
                  <div class="col-lg-12">
                    <form class="row g-3">
                      <div class="col-12">
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
                          >Sous budget / Composante</label
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
                      </div>

                      <div
                        class="col-12"
                        v-if="modNatureDepense.parent_id != 0"
                      >
                        <label class="form-label">Unité Opérationnelle </label>

                        <input
                          type="text"
                          class="form-control"
                          readonly
                          :value="afficheNomProjetModifier(modNatureDepense.parent_id)"
                          style="border: 1px solid #000 !important"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </TabContent>
              <TabContent title="ORDRE PAIEMENT" icon="ti-write">
                <div class="row">
                  <div class="col-lg-12">
                    <form class="row g-3">
                      <div class="col-12">
                        <label class="form-label"
                          >Numéro OP Provisoire{{ modNatureDepense.parent_id }}
                          <span
                            style="
                              color: red !important;
                              font-size: 15px !important;
                            "
                            >*</span
                          ></label
                        >
                        <model-list-select
                          :list="afficheOPProvisoireModifier"
                          v-model="modNatureDepense.parent_id"
                          option-value="id"
                          option-text="numero_ordre_paiement"
                          placeholder="select item"
                          style="border: 1px solid #000"
                        >
                        </model-list-select>
                        <span
                          style="color: red"
                          v-if="modNatureDepense.parent_id == 0"
                          >veuillez sélectionner le numéro de l'OP a régularisé
                          ?
                        </span>
                      </div>
                      <div class="col-12">
                        <label class="form-label">Objet de la depense </label>
                        <input
                          type="text"
                          class="form-control"
                          readonly
                          style="border: 1px solid #000 !important"
                          :value="afficheObjet(modNatureDepense.id)"
                        />
                      </div>
                      <div class="col-6">
                        <label class="form-label"
                          >Numéro de ordre de paiement
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          style="border: 1px solid #000 !important"
                          :value="modNatureDepense.numero_ordre_paiement"
                          readonly
                        />
                      </div>
                      <div class="col-6">
                        <label class="form-label"
                          >Montant des préstations
                          <span
                            style="
                              color: red !important;
                              font-size: 15px !important;
                            "
                            >*</span
                          ></label
                        >

                        <money3
                          class="form-control"
                          v-bind="config"
                          v-model="modNatureDepense.montant_prestation"
                        ></money3>
                        <span
                          style="color: red"
                          v-if="modNatureDepense.montant_prestation == 0"
                          >Ce champs est obligatoire!
                        </span>
                        <span
                          style="color: red"
                          v-if="modNatureDepense.montant_prestation < 0"
                          >le Montant doit être positif
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </TabContent>
              <TabContent title="FOURNISSEUR" icon="fas fa-money-bill-wave">
                <div class="row">
                  <div class="col-lg-12">
                    <form class="row g-3">
                      <div class="col-12">
                        <label class="form-label">Nom du Bénéficiaire </label>
                        <input
                          type="text"
                          class="form-control"
                          readonly
                          style="border: 1px solid #000 !important"
                          :value="
                            afficheBeneficiaire(modNatureDepense.parent_id)
                          "
                        />
                      </div>
                      <div class="col-6">
                        <label class="form-label">Compte Bancaire </label>
                        <input
                          type="text"
                          class="form-control"
                          readonly
                          style="border: 1px solid #000 !important"
                          :value="
                            afficheCompteBancaire1(modNatureDepense.parent_id)
                          "
                        />
                      </div>
                      <div class="col-3">
                        <label class="form-label">Adresse</label>
                        <input
                          type="text"
                          class="form-control"
                          readonly
                          style="border: 1px solid #000 !important"
                          :value="afficheAdresse(modNatureDepense.parent_id)"
                        />
                      </div>
                      <div class="col-3">
                        <label class="form-label"
                          >Numéro compte contribuable</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          readonly
                          style="border: 1px solid #000 !important"
                          :value="afficheNumeroCC(modNatureDepense.parent_id)"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </TabContent>
              <TabContent title="BAILLEUR" icon="fas fa-hands-helping">
                <div class="row">
                  <div class="col-lg-12">
                    <form class="row g-3">
                      <div class="col-9">
                        <label class="form-label"
                          >Nature économique / Imputation
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          readonly
                          style="border: 1px solid #000 !important"
                          :value="
                            afficheNatureEconomique(modNatureDepense.parent_id)
                          "
                        />
                      </div>
                      <div class="col-3">
                        <label class="form-label">Nature de depense</label>
                        <input
                          type="text"
                          class="form-control"
                          style="border: 1px solid #000 !important"
                          :value="
                            afficheNatureDepense(modNatureDepense.parent_id)
                          "
                          readonly
                        />
                      </div>
                      <div class="col-3">
                        <label class="form-label">Type financement </label>

                        <input
                          type="text"
                          class="form-control"
                          readonly
                          style="border: 1px solid #000 !important"
                          :value="
                            afficheTypeFiancement(modNatureDepense.parent_id)
                          "
                        />
                      </div>
                      <div class="col-9">
                        <label class="form-label">Source de financement </label>

                        <input
                          type="text"
                          class="form-control"
                          readonly
                          style="border: 1px solid #000 !important"
                          :value="
                            afficheSourceFiancement(modNatureDepense.parent_id)
                          "
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </TabContent>
              <TabContent title="DOTATION" icon="fas fa-calculator">
                <div class="row">
                  <div class="col-lg-12">
                    <form class="row g-3">
                      <div class="col-6">
                        <label class="form-label">Dotation ( A )</label>

                        <money3
                          class="form-control"
                          v-bind="config"
                          :model-value="afficheDotaionOPdefModifier"
                          readonly
                        ></money3>
                      </div>
                      <div class="col-3">
                        <label class="form-label"
                          >Cumul Dépense Antérieure ( B )</label
                        >

                        <money3
                          class="form-control"
                          v-bind="config"
                          :model-value="afficheMontantCumulModifier"
                          readonly
                        ></money3>
                      </div>
                      <div class="col-3">
                        <label class="form-label">Dépense en Cours ( C )</label>

                        <money3
                          class="form-control"
                          v-bind="config"
                          v-model="modNatureDepense.montant_prestation"
                          readonly
                        ></money3>
                      </div>
                      <div class="col-6">
                        <label class="form-label"
                          >Cumul Dépense en Cours ( D = B + C )</label
                        >

                        <money3
                          class="form-control"
                          v-bind="config"
                          :model-value="CumulDepenseModifier"
                          readonly
                        ></money3>
                      </div>
                      <div class="col-6">
                        <label class="form-label"
                          >Disponible ( E = A - D )</label
                        >

                        <money3
                          class="form-control"
                          style="border: 1px solid #000 !important"
                          v-bind="config"
                          :model-value="disponibleModifier"
                          readonly
                        ></money3>
                      </div>
                      <div class="col-6">
                        <label for="inputNanme4" class="form-label"
                          >Décision</label
                        >
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
                        </select>
                      </div>
                      <div class="col-6">
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
                </div>
              </TabContent>
            </FormWizard>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="this.getListeOrdrePaiementGlobal()"
            >
              Fermer
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="modificationOrdrePaiement()"
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
import { Money3Component } from "v-money3";
import { FormWizard, TabContent } from "vue3-form-wizard";

import {
  formatageSomme,
  formatageSommeSansFCFA,
} from "../../Repositories/Repository";
export default {
  components: {
    money3: Money3Component,
    ModelListSelect,
    FormWizard,
    TabContent,
  },
  data() {
    return {
      modNatureDepense: {
        id: 0,
        activite_id: 0,
        unite_operationnelle_id: 0,
        sous_budget_id: 0,
        objet_depense: "",
        nature_depense_id: 0,
        date_paiement: "",
        entreprise_id: 0,
        type_financement_id: 0,
        source_financement_id: 0,
        numero_ordre_paiement: "",
        nature_economique_id: 0,
        type_ordre_paiement: 0,
        montant_prestation: 0,
        cumul_anterieure: 0,
        type_depense: 0,
        parent_id: 0,
      },
      TableauDossier: [],
      ModifierBudget: {},
      ordre_paiement_id: 0,
      FormDataDossier: {
        designation: "",
        quantite: 0,
        prix_unitaire: 0,
        exonere: 0,
        type_forfait: "",
        libelle_taux: "",
      },
      FormDataDossierMod: {
        designation: "",
        quantite: 0,
        prix_unitaire: 0,
        exonere: 0,
      },
      decision_cf: 0,
      date_decision: "",
      autre_taux: 0,
      compte_id: "",
      objet_depense: 0,
      activite_id: 0,
      unite_operationnelle_id: 0,
      nature_depense_id: 0,
      entreprise_id: 0,
      sous_budget_id: 0,
      type_financement_id: 0,
      source_financement_id: 0,
      numero_ordre_paiement: "",
      nature_economique_id: 0,
      type_ordre_paiement: 0,
      montant_prestation: 0,
      cumul_anterieure: 0,
      montant_facture: 0,
      date_facture: "",
      numero_facture: 0,
      numero_facture_definitve: 0,
      date_facture_definitve: "",

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
    this.bordereau_id = this.$route.params.id;
    this.getExerciceBudgetaire();
    this.getActivite();
    this.getSousBudget();
    this.getEntreprise();
    this.getBudgetEclateViseGroupeParActivte();
    this.getNatureEconomique();
    // this.getProjet();
    this.getNatureDepense();
    this.getTypeFinancement();
    this.getBailleur();
    this.getTaux();
    this.getActiviteOp();
    this.getCompteBancaire();
    this.getListeOrdrePaiementGlobal();
    this.getBudgetEclateViseGroupeUO();
    if (this.modNatureDepense.activite_id != 0) {
      let objet = {
        id: this.modNatureDepense.activite_id,
      };
      this.getBudgetViseParActvite(objet);
      this.getOpParActvite(objet);
    }
    if (this.modNatureDepense.parent_id != 0) {
      let objet = {
        id: this.modNatureDepense.parent_id,
      };
      this.getInformationOp(objet);
    }

    // this.getDotationNotifie();
    // this.getDotationReport();
    // this.getDotationRessourcePropre();
    // this.getDotationAutreRessource();
    // this.getBudgetEclate();

    //   // this.getDotationNotifie();
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterProjet",
      "getterBudgetViseGroupeUniteOp",
      "getterstateFactureParOp",
      "getterCompteBancaire",
      "getterActiviteSurOP",
      "getterTaux",
      "getterBudgetViseParActivite",
      "getterBudgetViseGroupeParActivite",
      "getterActivite",
      "getterTypeFinancement",
      "getterExerciceBudgetaire",
      "getterDotationNotifie",
      "getterNatureEconomique",
      "getterEntreprise",
      "getterNatureDepense",
      "getterSousBudget",
      "getterBailleur",
      "getterDotationReport",
      "getterDotationRessourcePropre",
      "getterDotationAutreRessource",
      "getterListeBudgetEclate",
      "getterListeOPgloba",
      "getterOpParActivite",
      "getterInfoOrdrePaiement",
    ]),
    disponibleModifier() {
      return (
        parseFloat(this.afficheDotaionOPdefModifier) -
        parseFloat(this.CumulDepenseModifier)
      );
    },
    CumulDepenseModifier() {
      return (
        parseFloat(this.afficheMontantCumulModifier) +
        parseFloat(this.modNatureDepense.montant_prestation)
      );
    },
    afficheMontantCumulModifier() {
      if (
        this.modNatureDepense.sous_budget_id == 0 &&
        this.modNatureDepense.activite_id != 0
      ) {
        // return (id) => {
        //     if (id != null && id != "") {
        return this.getterOpParActivite
          .filter(
            (qtreel) =>
              (qtreel.nature_economique_id ==
                this.afficheNatureEconomique_id(
                  this.modNatureDepense.parent_id
                ) &&
                qtreel.type_financement_id ==
                  this.afficheTypeFiancement_id(
                    this.modNatureDepense.parent_id
                  ) &&
                qtreel.source_financement_id ==
                  this.afficheSourceFiancement_id(
                    this.modNatureDepense.parent_id
                  ) &&
                qtreel.nature_depense_id ==
                  this.afficheNatureDepense_id(
                    this.modNatureDepense.parent_id
                  ) &&
                qtreel.annulation == 0 &&
                qtreel.type_ordre_paiement == 4) ||
              (qtreel.nature_economique_id ==
                this.afficheNatureEconomique_id(
                  this.modNatureDepense.parent_id
                ) &&
                qtreel.type_financement_id ==
                  this.afficheTypeFiancement_id(
                    this.modNatureDepense.parent_id
                  ) &&
                qtreel.source_financement_id ==
                  this.afficheSourceFiancement_id(
                    this.modNatureDepense.parent_id
                  ) &&
                qtreel.nature_depense_id ==
                  this.afficheNatureDepense_id(
                    this.modNatureDepense.parent_id
                  ) &&
                qtreel.annulation == 0 &&
                qtreel.type_ordre_paiement == 2)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_prestation),
            0
          )
          .toFixed(0);
      } else {
        return this.getterOpParActivite
          .filter(
            (qtreel) =>
              (qtreel.nature_economique_id ==
                this.afficheNatureEconomique_id(
                  this.modNatureDepense.parent_id
                ) &&
                qtreel.type_financement_id ==
                  this.afficheTypeFiancement_id(
                    this.modNatureDepense.parent_id
                  ) &&
                qtreel.source_financement_id ==
                  this.afficheSourceFiancement_id(
                    this.modNatureDepense.parent_id
                  ) &&
                qtreel.nature_depense_id ==
                  this.afficheNatureDepense_id(
                    this.modNatureDepense.parent_id
                  ) &&
                qtreel.sous_budget_id == this.sous_budget_id &&
                qtreel.annulation == 0 &&
                qtreel.type_ordre_paiement == 2) ||
              (qtreel.nature_economique_id ==
                this.afficheNatureEconomique_id(
                  this.modNatureDepense.parent_id
                ) &&
                qtreel.type_financement_id ==
                  this.afficheTypeFiancement_id(
                    this.modNatureDepense.parent_id
                  ) &&
                qtreel.source_financement_id ==
                  this.afficheSourceFiancement_id(
                    this.modNatureDepense.parent_id
                  ) &&
                qtreel.nature_depense_id ==
                  this.afficheNatureDepense_id(
                    this.modNatureDepense.parent_id
                  ) &&
                qtreel.sous_budget_id == this.modNatureDepense.sous_budget_id &&
                qtreel.annulation == 0 &&
                qtreel.type_ordre_paiement == 4)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_prestation),
            0
          )
          .toFixed(0);
      }
    },
    afficheDotaionOPdefModifier() {
      if (
        this.modNatureDepense.sous_budget_id == 0 &&
        this.modNatureDepense.activite_id != 0
      ) {
        const qtereel = this.getterInfoOrdrePaiement.find(
          (qtreel) => qtreel.id == this.modNatureDepense.parent_id
        );

        if (qtereel) {
          return qtereel.dotation_sans_sous_budget;
        }
        return 0;
      } else {
        const qtereel = this.getterInfoOrdrePaiement.find(
          (qtreel) =>
            qtreel.id == this.modNatureDepense.parent_id &&
            qtreel.sous_budget_id == this.modNatureDepense.sous_budget_id
        );

        if (qtereel) {
          return qtereel.dotation_avec_sous_budget;
        }
        return 0;
      }
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
    afficheNatureEconomique1() {
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
    LibellenatureDepense() {
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
    AfficheNatureEconomiqueModifier() {
      let collet = [];
      this.GroupeParNatureEconomiqueModifier.filter((item) => {
        // if (item.activite_id == this.activite_id)
        {
          let data = {
            id: item,
            objet: this.afficheNatureEconomique1(item),
          };
          collet.push(data);
        }
      });
      return collet;
    },
    GroupeParNatureEconomiqueModifier() {
      // return (id) => {
      if (
        this.modNatureDepense.sous_budget_id == 0 &&
        this.modNatureDepense.activite_id != 0
      ) {
        let objet = this.getterBudgetViseParActivite.filter(
          (item) =>
            item.activite_id == this.modNatureDepense.activite_id &&
            item.actuelle == 1
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
            item.sous_budget_id == this.modNatureDepense.sous_budget_id &&
            item.actuelle == 1
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
    libelleNatureDepenseModifier() {
      if (
        this.modNatureDepense.sous_budget_id == 0 &&
        this.modNatureDepense.activite_id != 0
      ) {
        // return (id) => {
        //   if (id != null && id != "") {
        const qtereel = this.getterBudgetViseParActivite.find(
          (qtreel) =>
            qtreel.ligneeconomique_id ==
              this.modNatureDepense.nature_economique_id &&
            qtreel.type_financement_id ==
              this.modNatureDepense.type_financement_id &&
            qtreel.source_financement_id ==
              this.modNatureDepense.source_financement_id &&
            qtreel.actuelle == 1
        );

        if (qtereel) {
          return this.LibellenatureDepense(qtereel.nature_depense_id);
        }
        return 0;
        //   }
        // };
      } else {
        // return (id) => {
        //   if (id != null && id != "") {
        const qtereel = this.getterBudgetViseParActivite.find(
          (qtreel) =>
            qtreel.ligneeconomique_id ==
              this.modNatureDepense.nature_economique_id &&
            qtreel.sous_budget_id == this.modNatureDepense.sous_budget_id &&
            qtreel.type_financement_id ==
              this.modNatureDepense.type_financement_id &&
            qtreel.source_financement_id ==
              this.modNatureDepense.source_financement_id &&
            qtreel.actuelle == 1
        );

        if (qtereel) {
          return this.LibellenatureDepense(qtereel.nature_depense_id);
        }
        return 0;
        //   }
        // };
      }
    },
    AfficheTypeFinancementModifier() {
      let collet = [];
      this.GroupeParTypeFinancementModifier.filter((item) => {
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
    GroupeParTypeFinancementModifier() {
      // return (id) => {
      if (
        this.modNatureDepense.sous_budget_id == 0 &&
        this.modNatureDepense.activite_id != 0
      ) {
        let objet = this.getterBudgetViseParActivite.filter(
          (item) =>
            item.activite_id == this.modNatureDepense.activite_id &&
            item.ligneeconomique_id ==
              this.modNatureDepense.nature_economique_id &&
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
        let objet = this.getterBudgetViseParActivite.filter(
          (item) =>
            item.sous_budget_id == this.modNatureDepense.sous_budget_id &&
            item.ligneeconomique_id ==
              this.modNatureDepense.nature_economique_id &&
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
    AfficheSourceFinancementModifier() {
      let collet = [];
      this.GroupeParSourceFinancementModifier.filter((item) => {
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
    GroupeParSourceFinancementModifier() {
      // return (id) => {
      if (
        this.modNatureDepense.sous_budget_id == 0 &&
        this.modNatureDepense.activite_id != 0
      ) {
        let objet = this.getterBudgetViseParActivite.filter(
          (item) =>
            item.activite_id == this.activite_id &&
            item.ligneeconomique_id ==
              this.modNatureDepense.nature_economique_id &&
            item.type_financement_id ==
              this.modNatureDepense.type_financement_id &&
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
        let objet = this.getterBudgetViseParActivite.filter(
          (item) =>
            item.sous_budget_id == this.modNatureDepense.sous_budget_id &&
            item.ligneeconomique_id ==
              this.modNatureDepense.nature_economique_id &&
            item.type_financement_id ==
              this.modNatureDepense.type_financement_id &&
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
    NatureDepenseModifier_id() {
      if (
        this.modNatureDepense.sous_budget_id == 0 &&
        this.modNatureDepense.activite_id != 0
      ) {
        // return (id) => {
        //   if (id != null && id != "") {
        const qtereel = this.getterBudgetViseParActivite.find(
          (qtreel) =>
            qtreel.ligneeconomique_id ==
              this.modNatureDepense.nature_economique_id &&
            qtreel.type_financement_id ==
              this.modNatureDepense.type_financement_id &&
            qtreel.source_financement_id ==
              this.modNatureDepense.source_financement_id &&
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
        const qtereel = this.getterBudgetViseParActivite.find(
          (qtreel) =>
            qtreel.ligneeconomique_id ==
              this.modNatureDepense.nature_economique_id &&
            qtreel.sous_budget_id == this.modNatureDepense.sous_budget_id &&
            qtreel.type_financement_id ==
              this.modNatureDepense.type_financement_id &&
            qtreel.source_financement_id ==
              this.modNatureDepense.source_financement_id &&
            qtreel.actuelle == 1
        );

        if (qtereel) {
          return qtereel.nature_depense_id;
        }
        return 78;
        //   }
        // };
      }
    },

    afficheListeOPprovisoire() {
      return this.getterListeOPgloba.filter(
        (item) =>
          item.bordereau_id == this.bordereau_id &&
          item.type_ordre_paiement == 4
      );
    },
    AfficheFactureParOrdrePaiement() {
      if (this.ordre_paiement_id == 0) {
        return "";
      } else {
        return this.getterstateFactureParOp;
      }
    },
    afficheDotaionOPdef() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        const qtereel = this.getterInfoOrdrePaiement.find(
          (qtreel) => qtreel.id == this.ordre_paiement_id
        );

        if (qtereel) {
          return qtereel.dotation_sans_sous_budget;
        }
        return 0;
      } else {
        const qtereel = this.getterInfoOrdrePaiement.find(
          (qtreel) =>
            qtreel.id == this.ordre_paiement_id &&
            qtreel.sous_budget_id == this.sous_budget_id
        );

        if (qtereel) {
          return qtereel.dotation_avec_sous_budget;
        }
        return 0;
      }
    },
    
     afficheNomProjetModifier() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterOpParActivite.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.nom_projet;
          }
          return 0;
        }
      };
    },
    afficheNomProjet() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterInfoOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.nom_projet;
          }
          return 0;
        }
      };
    },
    afficheNomProjet_id() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterInfoOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.unite_operationnelle_id;
          }
          return 0;
        }
      };
    },
    afficheSousBudget() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterInfoOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.sous_budget;
          }
          return 0;
        }
      };
    },
    afficheSousBudget_id() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterInfoOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.sous_budget_id;
          }
          return 0;
        }
      };
    },

    afficheBeneficiaire() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterInfoOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.beneficiaire;
          }
          return 0;
        }
      };
    },
    afficheBeneficiaire_id() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterInfoOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.entreprise_id;
          }
          return 0;
        }
      };
    },

    afficheCompteBancaire1() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterInfoOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.numero_compte;
          }
          return 0;
        }
      };
    },
    afficheAdresse() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterInfoOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.adresse_entreprise;
          }
          return 0;
        }
      };
    },
    afficheTelephone() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterInfoOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.telephone_entreprise;
          }
          return 0;
        }
      };
    },
    afficheNumeroCC() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterInfoOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.numero_cc_entreprise;
          }
          return 0;
        }
      };
    },
    afficheCompteBancaire_id() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterInfoOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.compte_id;
          }
          return 0;
        }
      };
    },
    afficheObjet() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterInfoOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.objet_depense;
          }
          return 0;
        }
      };
    },
    afficheNatureEconomique() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterInfoOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.nature_economique;
          }
          return 0;
        }
      };
    },
    afficheNatureEconomique_id() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterInfoOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.nature_economique_id;
          }
          return 0;
        }
      };
    },

    afficheNatureDepense() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterInfoOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.nature_depense;
          }
          return 0;
        }
      };
    },
    afficheNatureDepense_id() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterInfoOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.nature_depense_id;
          }
          return 0;
        }
      };
    },
    afficheTypeFiancement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterInfoOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.type_fiancement;
          }
          return 0;
        }
      };
    },
    afficheTypeFiancement_id() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterInfoOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.type_financement_id;
          }
          return 0;
        }
      };
    },

    afficheSourceFiancement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterInfoOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.source_financement;
          }
          return 0;
        }
      };
    },
    afficheSourceFiancement_id() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterInfoOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.source_financement_id;
          }
          return 0;
        }
      };
    },
    afficheOPProvisoireModifier() {
      if (
        this.modNatureDepense.sous_budget_id == 0 &&
        this.modNatureDepense.activite_id != 0
      ) {
        // return (id) => {
        //     if (id != null && id != "") {
        return this.getterOpParActivite.filter(
          (qtreel) =>
            qtreel.type_ordre_paiement == 1 && qtreel.type_depense == 0
        );
      } else {
        return this.getterOpParActivite.filter(
          (qtreel) =>
            qtreel.type_ordre_paiement == 1 &&
            qtreel.sous_budget_id == this.modNatureDepense.sous_budget_id &&
            qtreel.type_depense == 0
        );
      }
    },
    afficheOPProvisoire() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        // return (id) => {
        //     if (id != null && id != "") {
        return this.getterOpParActivite.filter(
          (qtreel) =>
            qtreel.type_ordre_paiement == 1 && qtreel.type_depense == 0
        );
      } else {
        return this.getterOpParActivite.filter(
          (qtreel) =>
            qtreel.type_ordre_paiement == 1 &&
            qtreel.sous_budget_id == this.sous_budget_id &&
            qtreel.type_depense == 0
        );
      }
    },
    taillerTableau() {
      return this.TableauDossier.length;
    },
    CumulMontantAutreMontantDef() {
      if (this.ordre_paiement_id == 0) {
        return 0;
      } else {
        return this.getterstateFactureParOp
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.autre_montant),
            0
          )
          .toFixed(0);
      }
    },
    CumulMontantAutreMontant() {
      return this.TableauDossier.filter(
        (item) => item.numero_ordre_paiement == this.automatiseNumeroOP
      )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.autre_montant),
          0
        )
        .toFixed(0);
    },
    CumulMontanttvaDef() {
      if (this.ordre_paiement_id == 0) {
        return 0;
      } else {
        return this.getterstateFactureParOp
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_tva),
            0
          )
          .toFixed(0);
      }
    },
    CumulMontanttva() {
      return this.TableauDossier.filter(
        (item) => item.numero_ordre_paiement == this.automatiseNumeroOP
      )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_tva),
          0
        )
        .toFixed(0);
    },
    CumulMontantHTDef() {
      if (this.ordre_paiement_id == 0) {
        return 0;
      } else {
        return this.getterstateFactureParOp
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_ht),
            0
          )
          .toFixed(0);
      }
    },

    CumulMontantHT() {
      return this.TableauDossier.filter(
        (item) => item.numero_ordre_paiement == this.automatiseNumeroOP
      )
        .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_ht), 0)
        .toFixed(0);
    },
    CumulMontantSaisiDef() {
      if (this.ordre_paiement_id == 0) {
        return 0;
      } else {
        return this.getterstateFactureParOp
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_ttc),
            0
          )
          .toFixed(0);
      }
    },
    CumulMontantSaisi() {
      if (this.ordre_paiement_id == 0) {
        return 0;
      } else {
        return this.TableauDossier.filter(
          (item) => item.numero_ordre_paiement == this.automatiseNumeroOP
        )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_ttc),
            0
          )
          .toFixed(0);
      }
    },
    MontantTTCMod() {
      return (
        parseFloat(this.afficheAutreMontantMod) +
        parseFloat(this.montantTvaMod) +
        parseFloat(this.MontantHtMod)
      );
    },
    MontantTTC() {
      return (
        parseFloat(this.afficheAutreMontant) +
        parseFloat(this.montantTva) +
        parseFloat(this.MontantHt)
      );
    },
    montantTvaMod() {
      const val = parseFloat(
        (parseFloat(this.MontantHtMod) * parseFloat(this.AfficheTauxTVAMod)) /
          100
      );

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0;
    },

    montantTva() {
      const val = parseFloat(
        (parseFloat(this.MontantHt) * parseFloat(this.AfficheTauxTVA)) / 100
      );

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0;
    },

    afficheAutreMontantMod() {
      return (
        (parseFloat(this.FormDataDossierMod.autre_taux) / 100) *
        parseFloat(this.MontantHtMod)
      );
    },
    afficheAutreMontant() {
      if (this.FormDataDossier.type_forfait == "taux") {
        return (parseFloat(this.autre_taux) / 100) * parseFloat(this.MontantHt);
      } else if (this.FormDataDossier.type_forfait == "montant") {
        return parseFloat(this.MontantHt) + parseFloat(this.autre_taux);
      } else {
        return 0;
      }
    },

    AfficheTauxTVAMod() {
      if (this.FormDataDossierMod.exonere == 1) {
        return 0;
      } else {
        // return (id) => {
        //   if (id != null && id != "") {
        const qtereel = this.getterTaux.find((qtreel) => qtreel.encours == 1);

        if (qtereel) {
          return qtereel.taux;
        }
        return 0;
        //   }
        // };
      }
    },
    AfficheTauxTVA() {
      if (this.FormDataDossier.exonere == 0) {
        return 0;
      } else {
        // return (id) => {
        //   if (id != null && id != "") {
        const qtereel = this.getterTaux.find((qtreel) => qtreel.encours == 1);

        if (qtereel) {
          return qtereel.taux;
        }
        return 0;
        //   }
        // };
      }
    },
    automatiseNumeroOP() {
      return (
        "00" +
        "" +
        (this.getterListeOPgloba.length + 1) +
        "/" +
        "PA" +
        "/" +
        this.exerciceBudgetaire
      );
    },
    afficheMontantCumul() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        // return (id) => {
        //     if (id != null && id != "") {
        return this.getterOpParActivite
          .filter(
            (qtreel) =>
              (qtreel.nature_economique_id ==
                this.afficheNatureEconomique_id(this.ordre_paiement_id) &&
                qtreel.type_financement_id ==
                  this.afficheTypeFiancement_id(this.ordre_paiement_id) &&
                qtreel.source_financement_id ==
                  this.afficheSourceFiancement_id(this.ordre_paiement_id) &&
                qtreel.nature_depense_id ==
                  this.afficheNatureDepense_id(this.ordre_paiement_id) &&
                qtreel.annulation == 0 &&
                qtreel.type_ordre_paiement == 4) ||
              (qtreel.nature_economique_id ==
                this.afficheNatureEconomique_id(this.ordre_paiement_id) &&
                qtreel.type_financement_id ==
                  this.afficheTypeFiancement_id(this.ordre_paiement_id) &&
                qtreel.source_financement_id ==
                  this.afficheSourceFiancement_id(this.ordre_paiement_id) &&
                qtreel.nature_depense_id ==
                  this.afficheNatureDepense_id(this.ordre_paiement_id) &&
                qtreel.annulation == 0 &&
                qtreel.type_ordre_paiement == 2)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_prestation),
            0
          )
          .toFixed(0);
      } else {
        return this.getterOpParActivite
          .filter(
            (qtreel) =>
              (qtreel.nature_economique_id ==
                this.afficheNatureEconomique_id(this.ordre_paiement_id) &&
                qtreel.type_financement_id ==
                  this.afficheTypeFiancement_id(this.ordre_paiement_id) &&
                qtreel.source_financement_id ==
                  this.afficheSourceFiancement_id(this.ordre_paiement_id) &&
                qtreel.nature_depense_id ==
                  this.afficheNatureDepense_id(this.ordre_paiement_id) &&
                qtreel.sous_budget_id == this.sous_budget_id &&
                qtreel.annulation == 0 &&
                qtreel.type_ordre_paiement == 2) ||
              (qtreel.nature_economique_id ==
                this.afficheNatureEconomique_id(this.ordre_paiement_id) &&
                qtreel.type_financement_id ==
                  this.afficheTypeFiancement_id(this.ordre_paiement_id) &&
                qtreel.source_financement_id ==
                  this.afficheSourceFiancement_id(this.ordre_paiement_id) &&
                qtreel.nature_depense_id ==
                  this.afficheNatureDepense_id(this.ordre_paiement_id) &&
                qtreel.sous_budget_id == this.sous_budget_id &&
                qtreel.annulation == 0 &&
                qtreel.type_ordre_paiement == 4)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_prestation),
            0
          )
          .toFixed(0);
      }
    },
    afficheCompteBancaire() {
      let collet = [];
      this.getterCompteBancaire.filter((item) => {
        if (item.entreprise_id == this.entreprise_id) {
          let data = {
            id: item.id,
            numero_compte: item.numero_compte,
          };
          collet.push(data);
        }
      });
      return collet;
    },

    afficheLibelleActivite() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterActiviteSurOP.find(
            (qtreel) => qtreel.activite_id == id
          );

          if (qtereel) {
            return qtereel.activite_libelle;
          }
          return 0;
        }
      };
    },
    GroupeActiviteOPDirect() {
      // return (id) => {

      let objet = this.getterActiviteSurOP.filter(
        (item) => item.type_ordre_paiement == 4
      );
      //  let vm=this
      let array_exercie = [];
      if (objet.length > 0) {
        objet.forEach(function (val) {
          array_exercie.push(val.activite_id);
        });
        let unique = [...new Set(array_exercie)];

        if (unique.length == 0) {
          return [];
        }
        return unique.sort((a, b) => (a.unique > b.unique ? 1 : -1));
      }
      return [];
      // };
    },

    AfficheEnFonctionExenere() {
      if (this.exonere == 0) {
        return this.getterTaux.filter((item) => item.encours != 1);
      } else {
        return this.getterTaux;
      }
    },

    MontantHtMod() {
      return (
        parseFloat(this.FormDataDossierMod.quantite) *
        parseFloat(this.FormDataDossierMod.prix_unitaire)
      );
    },
    MontantHt() {
      return (
        parseFloat(this.FormDataDossier.quantite) *
        parseFloat(this.FormDataDossier.prix_unitaire)
      );
    },
    disponible() {
      return (
        parseFloat(this.afficheDotaionOPdef) - parseFloat(this.CumulDepense)
      );
    },
    CumulDepense() {
      return (
        parseFloat(this.afficheMontantCumul) +
        parseFloat(this.montant_prestation)
      );
    },
    afficheDotaion() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        // return (id) => {
        //     if (id != null && id != "") {
        const qtereel = this.getterBudgetViseParActivite.find(
          (qtreel) =>
            qtreel.ligneeconomique_id == this.nature_economique_id &&
            qtreel.type_financement_id == this.type_financement_id &&
            qtreel.source_financement_id == this.source_financement_id &&
            qtreel.nature_depense_id == this.NatureDepense_id &&
            qtreel.actuelle == 1
        );

        if (qtereel) {
          return qtereel.dotation_total;
        }
        return 0;
        //   }
        // };
      } else {
        const qtereel = this.getterBudgetViseParActivite.find(
          (qtreel) =>
            qtreel.ligneeconomique_id == this.nature_economique_id &&
            qtreel.type_financement_id == this.type_financement_id &&
            qtreel.source_financement_id == this.source_financement_id &&
            qtreel.nature_depense_id == this.NatureDepense_id &&
            qtreel.sous_budget_id == this.sous_budget_id &&
            qtreel.actuelle == 1
        );

        if (qtereel) {
          return qtereel.dotation_total;
        }
        return 0;
      }
    },

    NatureDepense_id() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        // return (id) => {
        //   if (id != null && id != "") {
        const qtereel = this.getterBudgetViseParActivite.find(
          (qtreel) =>
            qtreel.ligneeconomique_id == this.nature_economique_id &&
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
        const qtereel = this.getterBudgetViseParActivite.find(
          (qtreel) =>
            qtreel.ligneeconomique_id == this.nature_economique_id &&
            qtreel.sous_budget_id == this.sous_budget_id &&
            qtreel.type_financement_id == this.type_financement_id &&
            qtreel.source_financement_id == this.source_financement_id &&
            qtreel.actuelle == 1
        );

        if (qtereel) {
          return qtereel.nature_depense_id;
        }
        return 78;
        //   }
        // };
      }
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
        let objet = this.getterBudgetViseParActivite.filter(
          (item) =>
            item.activite_id == this.activite_id &&
            item.ligneeconomique_id == this.nature_economique_id &&
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
        let objet = this.getterBudgetViseParActivite.filter(
          (item) =>
            item.sous_budget_id == this.sous_budget_id &&
            item.ligneeconomique_id == this.nature_economique_id &&
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
    GroupeParTypeFinancement() {
      // return (id) => {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        let objet = this.getterBudgetViseParActivite.filter(
          (item) =>
            item.activite_id == this.activite_id &&
            item.ligneeconomique_id == this.nature_economique_id &&
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
        let objet = this.getterBudgetViseParActivite.filter(
          (item) =>
            item.sous_budget_id == this.sous_budget_id &&
            item.ligneeconomique_id == this.nature_economique_id &&
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
    AdresseEntreprise() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterEntreprise.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.adresse;
          }
          return 0;
        }
      };
    },
    ccEntreprise() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterEntreprise.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.numero_cc;
          }
          return 0;
        }
      };
    },
    AfficheEntreprise() {
      let collet = [];
      this.getterEntreprise.filter((item) => {
        // if (item.activite_id == this.activite_id)
        {
          let data = {
            id: item.id,
            objet: item.numero_cc.concat(" ", item.raison_sociale),
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

    afficheBudgetParActivite() {
      return this.getterListeBudgetEclate.filter(
        (item) => item.activite_id == this.activite_id
      );
    },
    ResultatDotation() {
      if (
        this.FormDataDossier.dotation_actuelle == 0 &&
        this.FormDataDossier.doatation_report == 0
      ) {
        return 0;
      } else {
        return parseFloat(
          parseFloat(this.FormDataDossier.dotation_actuelle) +
            parseFloat(this.FormDataDossier.doatation_report)
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
    ...mapActions("parametrage", [
      "getActivite","supprimerOrdrePaiement",
      "modifierOrdrePaiement",
      "getFactureParOP",
      "getListeOrdrePaiementGlobal",
      "getBudgetEclateViseGroupeUO",
      "getCompteBancaire",
      "getActiviteOp",
      "getTaux",
      "getSousBudget",
      "getBudgetViseParActvite",
      "getBudgetEclateViseGroupeParActivte",
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
      "getEntreprise",
      "ajouterOrdrePaiementDefinitif",
      "getOpParActvite",
      "ajouterOrdrePaiement",
      "getInformationOp",
    ]),
    modificationOrdrePaiement() {
      var objetDirect1 = {
        id: this.modNatureDepense.parent_id,
        exercice: this.modNatureDepense.exercice,
        unite_operationnelle_id: this.modNatureDepense.unite_operationnelle_id,
        activite_id: this.modNatureDepense.activite_id,
        sous_budget_id: this.modNatureDepense.sous_budget_id,
        entreprise_id: this.modNatureDepense.entreprise_id,
        objet_depense: this.modNatureDepense.objet_depense,
        numero_ordre_paiement: this.modNatureDepense.numero_ordre_paiement,
        type_ordre_paiement: this.modNatureDepense.type_ordre_paiement,
        montant_prestation: this.modNatureDepense.montant_prestation,
        nature_economique_id: this.modNatureDepense.nature_economique_id,
        nature_depense_id: this.NatureDepenseModifier_id,
        type_financement_id: this.modNatureDepense.type_financement_id,
        source_financement_id: this.modNatureDepense.source_financement_id,
        cumul_anterieure: this.modNatureDepense.cumul_anterieure,
        date_decision: this.modNatureDepense.date_decision,
        decision_cf: this.modNatureDepense.decision_cf,
        date_paiement: this.modNatureDepense.date_paiement,
        type_depense: this.modNatureDepense.type_depense,
      };

      this.modifierOrdrePaiement(objetDirect1);
      this.modNatureDepense = {};
    },
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    // fonctionImprimer(id) {
    //   this.$router.push({
    //     name: "ImprimerOp",
    //     params: { id: id },
    //   });
    // },
    fonctionImprimer(id, id1) {
      this.$router.push({
        name: "imprimerToutOP",
        params: { id: id, id1: id1 },
      });
    },
    retour() {
      this.$router.push({
        name: "InformationBordereauOPDefinitif",
      });
    },
    AfficheModalModificationFacture(id) {
      this.FormDataDossierMod = this.TableauDossier.find(
        (items) => items.nombre == id
      );
    },
    AfficheVentilationBudget(id) {
      this.$router.push({
        name: "AfficheOPDefinitif",
        params: { id: id },
      });
    },
    voirBudgett(id) {
      this.$router.push({
        name: "VoirBudgetEclate",
        params: { id: id },
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
      this.modNatureDepense = this.afficheListeOPprovisoire.find(
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
    modifierTableau() {
      var nouvelObjet12 = {
        ...this.FormDataDossierMod,
        nombre: this.FormDataDossierMod.nombre,
        designation: this.FormDataDossierMod.designation,
        quantite: this.FormDataDossierMod.quantite,
        prix_unitaire: this.FormDataDossierMod.prix_unitaire,
        montant_ht: this.MontantHtMod,
        taux: this.AfficheTauxTVAMod,
        montant_tva: this.montantTvaMod,
        montant_ttc: this.MontantTTCMod,
        autre_taux: this.FormDataDossierMod.autre_taux,
        autre_montant: this.afficheAutreMontantMod,
      };
      this.TableauDossier.push(nouvelObjet12);

      this.FormDataDossierMod = {
        designation: "",
        quantite: 0,
        prix_unitaire: 0,
        exonere: 0,
        taux: 0,
      };
    },
    ajouterPartieRequerante() {
      var nouvelObjet12 = {
        ...this.FormDataDossier,
        nombre: this.taillerTableau,
        numero_ordre_paiement: this.automatiseNumeroOP,
        designation: this.FormDataDossier.designation,
        quantite: this.FormDataDossier.quantite,
        prix_unitaire: this.FormDataDossier.prix_unitaire,
        montant_ht: this.MontantHt,
        taux: this.AfficheTauxTVA,
        montant_tva: this.montantTva,
        montant_ttc: this.MontantTTC,
        autre_taux: this.autre_taux,
        autre_montant: this.afficheAutreMontant,
      };
      this.TableauDossier.push(nouvelObjet12);

      this.FormDataDossier = {
        designation: "",
        quantite: 0,
        prix_unitaire: 0,
        exonere: 0,
        taux: 0,
      };
    },

    enregistrementSansTypeFiancement2() {
      var nouvelObjettrsor = {
        exercice: this.exerciceBudgetaire,
        unite_operationnelle_id: this.afficheNomProjet_id(
          this.ordre_paiement_id
        ),
        activite_id: this.activite_id,
        sous_budget_id: this.sous_budget_id,
        entreprise_id: this.afficheBeneficiaire_id(this.ordre_paiement_id),
        compte_id: this.afficheCompteBancaire_id(this.ordre_paiement_id),
        objet_depense: this.afficheObjet(this.ordre_paiement_id),
        numero_ordre_paiement: this.automatiseNumeroOP,
        type_ordre_paiement: 4,
        montant_prestation: this.montant_prestation,
        nature_economique_id: this.afficheNatureEconomique_id(
          this.ordre_paiement_id
        ),
        nature_depense_id: this.afficheNatureDepense_id(this.ordre_paiement_id),
        type_financement_id: this.afficheTypeFiancement_id(
          this.ordre_paiement_id
        ),
        source_financement_id: this.afficheSourceFiancement_id(
          this.ordre_paiement_id
        ),
        cumul_anterieure: this.afficheMontantCumul,
        numero_facture_definitve: this.numero_facture_definitve,
        date_facture_definitve: this.date_facture_definitve,
        parent_id: this.ordre_paiement_id,
        decision_cf: this.decision_cf,
        date_decision: this.date_decision,
        bordereau_id: this.bordereau_id,
      };

      this.ajouterOrdrePaiementDefinitif(nouvelObjettrsor);

      (this.objet_depense = ""),
        (this.activite_id = 0),
        (this.unite_operationnelle_id = 0),
        (this.nature_depense_id = 0),
        (this.entreprise_id = 0),
        (this.sous_budget_id = 0),
        (this.type_financement_id = 0),
        (this.source_financement_id = 0),
        (this.numero_ordre_paiement = ""),
        (this.nature_economique_id = 0),
        (this.type_ordre_paiement = 0),
        (this.montant_prestation = 0),
        (this.cumul_anterieure = 0),
        (this.montant_facture = 0),
        (this.date_facture = ""),
        (this.numero_facture = 0);
    },

    enregistrementAvecFacture() {
      var nouvelObjettrsor = {
        exercice: this.exerciceBudgetaire,
        unite_operationnelle_id: this.afficheNomProjet_id(
          this.ordre_paiement_id
        ),
        activite_id: this.activite_id,
        sous_budget_id: this.sous_budget_id,
        entreprise_id: this.afficheBeneficiaire_id(this.ordre_paiement_id),
        compte_id: this.afficheCompteBancaire_id(this.ordre_paiement_id),
        objet_depense: this.afficheObjet(this.ordre_paiement_id),
        numero_ordre_paiement: this.automatiseNumeroOP,
        type_ordre_paiement: 4,
        montant_prestation: this.montant_prestation,
        nature_economique_id: this.afficheNatureEconomique_id(
          this.ordre_paiement_id
        ),
        nature_depense_id: this.afficheNatureDepense_id(this.ordre_paiement_id),
        type_financement_id: this.afficheTypeFiancement_id(
          this.ordre_paiement_id
        ),
        source_financement_id: this.afficheSourceFiancement_id(
          this.ordre_paiement_id
        ),
        cumul_anterieure: this.afficheMontantCumul,

        parent_id: this.ordre_paiement_id,
        numero_facture: this.numero_facture,
        date_facture: this.date_facture,
        decision_cf: this.decision_cf,
        date_decision: this.date_decision,
        bordereau_id: this.bordereau_id,
        FormDataDossier: this.TableauDossier,
      };

      this.ajouterOrdrePaiement(nouvelObjettrsor);
      (this.TableauDossier = []),
        (this.FormDataDossier.designation = ""),
        (this.FormDataDossier.quantite = ""),
        (this.FormDataDossier.prix_unitaire = 0),
        (this.FormDataDossier.exonere = 0);
      this.FormDataDossier.taux = 0;
      (this.objet_depense = ""),
        (this.activite_id = 0),
        (this.unite_operationnelle_id = 0),
        (this.nature_depense_id = 0),
        (this.entreprise_id = 0),
        (this.sous_budget_id = 0),
        (this.type_financement_id = 0),
        (this.source_financement_id = 0),
        (this.numero_ordre_paiement = ""),
        (this.nature_economique_id = 0),
        (this.type_ordre_paiement = 0),
        (this.montant_prestation = 0),
        (this.cumul_anterieure = 0),
        (this.montant_facture = 0),
        (this.date_facture = ""),
        (this.numero_facture = 0);
    },
  },
  watch: {
    activite_id: function (value) {
      let objet = {
        id: value,
      };
      this.getBudgetViseParActvite(objet);
      this.getOpParActvite(objet);
    },

    ordre_paiement_id: function (value) {
      if (value != 0) {
        let objet = {
          id: value,
        };
        this.getInformationOp(objet);
        this.getFactureParOP(objet);
      }
    },
  },
};
</script>
<style scoped>
.form-control {
  border: 1px solid #000 !important;
  color: #000 !important;
  font-weight: 900 !important;
}
</style>
