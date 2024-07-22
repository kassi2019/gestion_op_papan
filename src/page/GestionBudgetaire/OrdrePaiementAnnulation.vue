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
                <a href="#">OP Annulation</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-body">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                style="color: #000 !important"
              >
                SAISIR ORDRE DE PAIEMENT
              </button>
            </li>
            <!-- <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                style="color: #000 !important"
              >
                SAISIR FACTURE
              </button>
            </li> -->

            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
                style="color: #000 !important"
              >
                VERIFICATION ORDRE PAIEMENT
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div class="row">
                <div class="col-lg-12">
                  <form class="row g-3">
                    <legend style="text-decoration: underline">
                      Information sur Ordre de paiement
                    </legend>

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
                      <label class="form-label">Sous budget / Composante</label>
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
                    <div class="col-12">
                      <label class="form-label"
                        >Numéro Ordre paiement
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
                        >Ce champs est obligatoire!
                      </span>
                    </div>
                    <div class="col-12">
                      <label class="form-label">Unité Opérationnelle </label>

                      <input
                        type="text"
                        class="form-control"
                        readonly
                        :value="afficheNomProjet(ordre_paiement_id)"
                        style="border: 1px solid #000 !important"
                      />
                    </div>

                    <!-- <div class="col-6">
                      <label class="form-label">Composante </label>
                      <input
                        type="text"
                        class="form-control"
                        readonly
                        style="border: 1px solid #000 !important"
                         :value="afficheNomProjet(ordre_paiement_id)"
                      />
                    </div> -->
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
                      <span style="color: red" v-if="montant_prestation == 0"
                        >Ce champs est obligatoire!
                      </span>
                       <span style="color: red" v-if="parseFloat(montant_prestation) < 0"
                        >Montant de l'OP doit est négatif!
                      </span>
                    </div>
                    <legend style="text-decoration: underline">
                      Information sur la dotation
                    </legend>
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
                      <label class="form-label">Source de financement </label>

                      <input
                        type="text"
                        class="form-control"
                        readonly
                        style="border: 1px solid #000 !important"
                        :value="afficheSourceFiancement(ordre_paiement_id)"
                      />
                    </div>
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
                      <label class="form-label">Dépense en Cours ( C )</label>

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
                      <label class="form-label">Disponible ( E = A - D )</label>

                      <money3
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-bind="config"
                        :model-value="disponible"
                        readonly
                      ></money3>
                    </div>
                    <div class="col-10"></div>
                    <div class="col-2">
                      <button
                        v-if="
                          activite_id == 0 ||
                          montant_prestation == 0 ||
                          ordre_paiement_id == 0
                        "
                        disabled
                        type="button"
                        class="btn btn-success"
                        @click.prevent="enregistrementSansTypeFiancement2()"
                      >
                        Enregistrer
                      </button>
                      <button
                        v-else
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
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
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
                      <label class="form-label">Montant facture saisie</label>
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
                        type="text"
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
                      <label class="form-label">Montant HT (C = A * B)</label>
                      <money3
                        class="form-control"
                        v-bind="config"
                        :model-value="MontantHt"
                        readonly
                      ></money3>
                    </div>
                    <div class="col-3">
                      <label class="form-label">Exonéré de la TVA 18%</label>
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
                    <div class="col-2">
                      <label class="form-label">Autre taux (%) ( D )</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="autre_taux"
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
                    <div class="col-2">
                      <label class="form-label"
                        >Autre montant ( E = C * D)</label
                      >
                      <money3
                        class="form-control"
                        v-bind="config"
                        :model-value="afficheAutreMontant"
                        readonly
                      ></money3>
                    </div>
                    <div class="col-2">
                      <label class="form-label">Montant Tva ( G = C * F)</label>
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
                        Autre Montant HT
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
                      <td style="width: 45%; border: 1px solid #000 !important">
                        {{ item1.designation }}
                      </td>
                      <td style="width: 10%; border: 1px solid #000 !important">
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
                          formatageSommeSansFCFA(parseFloat(item1.montant_ht))
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
                          formatageSommeSansFCFA(parseFloat(item1.montant_tva))
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
                          formatageSommeSansFCFA(parseFloat(item1.montant_ttc))
                        }}
                      </td>
                      <td>
                        <!-- <span
                          title="Modifier"
                          class="fas fa-edit"
                          data-bs-toggle="modal"
                          data-bs-target="#largeModal1"
                          style="cursor: pointer; color: blue"
                          @click.prevent="
                            AfficheModalModificationFacture(item1.nombre)
                          "
                        ></span> -->
                        <span
                          title="Supprimer"
                          class="fas fa-archive"
                          style="
                            cursor: pointer;
                            color: red;
                            border: 1px solid #000 !important;
                          "
                          @click.prevent="deletePartieRequerante(index)"
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
                        {{ formatageSommeSansFCFA(parseFloat(CumulMontantHT)) }}
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
                          formatageSommeSansFCFA(parseFloat(CumulMontanttva))
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
                          formatageSommeSansFCFA(parseFloat(CumulMontantSaisi))
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
                       
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div class="table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>N°</th>
                      <th>Activite</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in GroupeActiviteOPDirect"
                      :key="item"
                    >
                      <td style="border: 1px solid #000">{{ index + 1 }}</td>
                      <td style="border: 1px solid #000">
                        {{ afficheLibelleActivite(item) }}
                      </td>

                      <td style="border: 1px solid #000">
                        <span
                          class="badge badge-black"
                          style="cursor: pointer"
                          @click.prevent="AfficheVentilationBudget(item)"
                          >Voir OP Annulation</span
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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
            <h5 class="modal-title">Modifier Facture</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="row">
                <div class="col-12">
                  <label for="inputNanme4" class="form-label"
                    >Désignation</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="inputNanme4"
                    v-model="FormDataDossierMod.designation"
                    style="border: 1px solid #000"
                  />
                </div>
                <div class="col-3">
                  <label class="form-label"
                    >Quantité ( A )
                    <span
                      style="color: red !important; font-size: 15px !important"
                      >*</span
                    ></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="FormDataDossierMod.quantite"
                  />
                  <span
                    style="color: red"
                    v-if="FormDataDossierMod.quantite == 0"
                    >Ce champs est obligatoire!
                  </span>
                </div>
                <div class="col-3">
                  <label class="form-label"
                    >Prix Unitaire ( B )
                    <span
                      style="color: red !important; font-size: 15px !important"
                      >*</span
                    ></label
                  >
                  <money3
                    class="form-control"
                    v-bind="config"
                    v-model="FormDataDossierMod.prix_unitaire"
                  ></money3>
                  <span
                    style="color: red"
                    v-if="FormDataDossierMod.prix_unitaire == 0"
                    >Ce champs est obligatoire!
                  </span>
                </div>
                <div class="col-3">
                  <label class="form-label">Montant HT (C = A * B)</label>
                  <money3
                    class="form-control"
                    v-bind="config"
                    :model-value="MontantHtMod"
                    readonly
                  ></money3>
                </div>
                <div class="col-3">
                  <label class="form-label">Exonéré de la TVA 18%</label>
                  <select
                    class="form-select form-control"
                    id="defaultSelect"
                    style="border: 1px solid #000 !important"
                    v-model="FormDataDossierMod.exonere"
                  >
                    <option></option>
                    <option value="0">Oui</option>
                    <option value="1">Non</option>
                  </select>
                </div>
                <div class="col-2">
                  <label class="form-label">Autre taux (%) ( D )</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="FormDataDossierMod.autre_taux"
                  />
                </div>
                <div class="col-2">
                  <label class="form-label">Taux TVA (%) ( F )</label>
                  <input
                    type="text"
                    class="form-control"
                    :value="AfficheTauxTVAMod"
                    readonly
                  />
                </div>
                <div class="col-3">
                  <label class="form-label">Autre montant ( E = C * D)</label>
                  <money3
                    class="form-control"
                    v-bind="config"
                    :model-value="afficheAutreMontantMod"
                    readonly
                  ></money3>
                </div>
                <div class="col-2">
                  <label class="form-label">Montant Tva ( G = C * F)</label>
                  <money3
                    class="form-control"
                    v-bind="config"
                    :model-value="montantTvaMod"
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
                    :model-value="MontantTTCMod"
                    readonly
                  ></money3>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Modifier
            </button>
            <!-- <button
              type="button"
              class="btn btn-primary"
              @click.prevent="modificationSection()"
              data-bs-dismiss="modal"
            >
              Modifier
            </button> -->
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
import { Money3Component } from "v-money3";
import {
  formatageSomme,
  formatageSommeSansFCFA,
} from "../Repositories/Repository";
export default {
  components: { money3: Money3Component, ModelListSelect },
  data() {
    return {
      TableauDossier: [],
      ModifierBudget: {},
      ordre_paiement_id: 0,
      FormDataDossier: {
        designation: "",
        quantite: 0,
        prix_unitaire: 0,
        exonere: 0,
      },
      FormDataDossierMod: {
        designation: "",
        quantite: 0,
        prix_unitaire: 0,
        exonere: 0,
      },
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
    // this.dossier_id = this.$route.params.id;
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

    afficheOPProvisoire() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        // return (id) => {
        //     if (id != null && id != "") {
        return this.getterOpParActivite;
      } else {
        return this.getterOpParActivite.filter(
          (qtreel) => qtreel.sous_budget_id == this.sous_budget_id
        );
      }
    },
    taillerTableau() {
      return this.TableauDossier.length;
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
    CumulMontantHT() {
      return this.TableauDossier.filter(
        (item) => item.numero_ordre_paiement == this.automatiseNumeroOP
      )
        .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_ht), 0)
        .toFixed(0);
    },
    CumulMontantSaisi() {
      return this.TableauDossier.filter(
        (item) => item.numero_ordre_paiement == this.automatiseNumeroOP
      )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_ttc),
          0
        )
        .toFixed(0);
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
      return (parseFloat(this.autre_taux) / 100) * parseFloat(this.MontantHt);
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
      if (this.FormDataDossier.exonere == 1) {
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
        "PAPAN" +
        " /" +
        "OP" +
        "" +
        (this.getterListeOPgloba.length + 1) +
        "/ " +
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
              qtreel.nature_economique_id ==
                this.afficheNatureEconomique_id(this.ordre_paiement_id) &&
              qtreel.type_financement_id ==
                this.afficheTypeFiancement_id(this.ordre_paiement_id) &&
              qtreel.source_financement_id ==
                this.afficheSourceFiancement_id(this.ordre_paiement_id) &&
              qtreel.nature_depense_id ==
                this.afficheNatureDepense_id(this.ordre_paiement_id) && qtreel.annulation == 0
                && qtreel.type_ordre_paiement == 2 || qtreel.nature_economique_id ==
                this.afficheNatureEconomique_id(this.ordre_paiement_id) &&
              qtreel.type_financement_id ==
                this.afficheTypeFiancement_id(this.ordre_paiement_id) &&
              qtreel.source_financement_id ==
                this.afficheSourceFiancement_id(this.ordre_paiement_id) &&
              qtreel.nature_depense_id ==
                this.afficheNatureDepense_id(this.ordre_paiement_id) && qtreel.annulation == 0
                && qtreel.type_ordre_paiement == 4
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
              qtreel.nature_economique_id ==
                this.afficheNatureEconomique_id(this.ordre_paiement_id) &&
              qtreel.type_financement_id ==
                this.afficheTypeFiancement_id(this.ordre_paiement_id) &&
              qtreel.source_financement_id ==
                this.afficheSourceFiancement_id(this.ordre_paiement_id) &&
              qtreel.nature_depense_id ==
                this.afficheNatureDepense_id(this.ordre_paiement_id) &&
              qtreel.sous_budget_id == this.sous_budget_id && qtreel.annulation == 0
                && qtreel.type_ordre_paiement == 4 || qtreel.nature_economique_id ==
                this.afficheNatureEconomique_id(this.ordre_paiement_id) &&
              qtreel.type_financement_id ==
                this.afficheTypeFiancement_id(this.ordre_paiement_id) &&
              qtreel.source_financement_id ==
                this.afficheSourceFiancement_id(this.ordre_paiement_id) &&
              qtreel.nature_depense_id ==
                this.afficheNatureDepense_id(this.ordre_paiement_id) &&
              qtreel.sous_budget_id == this.sous_budget_id && qtreel.annulation == 0
                && qtreel.type_ordre_paiement == 2
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
        (item) => item.type_ordre_paiement == 3
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
      "getActivite",
      "getListeOrdrePaiementGlobal",
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
      "ajouterOrdrePaiementAnnulation",
      "getOpParActvite",
      "getInformationOp",
    ]),
    AfficheModalModificationFacture(id) {
      this.FormDataDossierMod = this.TableauDossier.find(
        (items) => items.nombre == id
      );
    },
    AfficheVentilationBudget(id) {
      this.$router.push({
        name: "AfficheOPAnnulation",
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
      this.ModifierBudget = this.getterListeBudgetEclate.find(
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
        type_ordre_paiement: 3,
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
      };

      this.ajouterOrdrePaiementAnnulation(nouvelObjettrsor);
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
      let objet = {
        id: value,
      };
      this.getInformationOp(objet);
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
