<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="page-header">
            <h6 class="fw-bold mb-3">Contrat Personnel</h6>
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
                <a href="#">Contrat</a>
              </li>
            </ul>
          </div>
          <div class="d-flex align-items-center">
            <!-- <h4 class="card-title">Eclatement du budget</h4> -->
          </div>
        </div>

        <div class="card-body">
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
                        :value="exerciceBudgetaire"
                        style="border: 1px solid #000 !important"
                      />
                    </div>
                    <div class="col-3">
                    <label class="form-label"
                      >Civilité
                      <span
                        style="
                          color: red !important;
                          font-size: 15px !important;
                        "
                      >*</span
                    ></label>
                    <model-list-select
                      :list="tableauCivilite"
                      v-model="civilite"
                      option-value="libelle"
                      option-text="libelle"
                      placeholder="select item"
                      style="border: 1px solid #000"
                    >
                    </model-list-select>
                    <span
                        style="color: red"
                        v-if="civilite == 0"
                        >Ce champs est obligatoire!
                      </span>
                  </div>
                    <div class="col-6">
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
                        v-model="unite_operationnelle_id"
                        option-value="unite_operationnelle_id"
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
                      <span style="color: red" v-if="sous_budget_id == 0"
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
                        v-model="fonction_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <span style="color: red" v-if="fonction_id == 0"
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
                        v-model="service_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <span style="color: red" v-if="service_id == 0"
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
                        v-model="emploi_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <span style="color: red" v-if="emploi_id == 0"
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
                        v-model="diplome_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <span style="color: red" v-if="diplome_id == 0"
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
                      >Type Personnel
                      <span
                        style="
                          color: red !important;
                          font-size: 15px !important;
                        "
                      ></span
                    ></label>
                    <model-list-select
                      :list="objetTypePersonnel"
                      v-model="type_personnel_id"
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
                      :value="ContratAutomatique"
                      readonly
                    />
                  </div>
                  <div class="col-6">
                    <label class="form-label">Matricule</label>
                    <input
                      type="text"
                      class="form-control"
                      style="border: 1px solid #000 !important"
                      :value="matriculeAutomatique"
                      v-if="type_personnel_id == 1"
                      readonly
                    />
                    <input
                      v-else
                      type="text"
                      class="form-control"
                      style="border: 1px solid #000 !important"
                      v-model="matricule"
                    />
                    <span
                      style="color: red"
                      v-if="matricule == 0 && type_personnel_id != 1"
                      >Ce champs est obligatoire!
                    </span>
                  </div>
                  <div class="col-3">
                    <label class="form-label">Nom</label>
                    <input
                      type="text"
                      class="form-control"
                      style="border: 1px solid #000 !important"
                      v-model="nom"
                    />
                    <span style="color: red" v-if="nom == 0"
                      >Ce champs est obligatoire!
                    </span>
                  </div>
                  <div class="col-9">
                    <label class="form-label">Prénoms</label>
                    <input
                      type="text"
                      class="form-control"
                      style="border: 1px solid #000 !important"
                      v-model="prenom"
                    />
                    <span style="color: red" v-if="prenom == 0"
                      >Ce champs est obligatoire!
                    </span>
                  </div>
                  <div class="col-3">
                    <label class="form-label">Date Naissance</label>
                    <input
                      type="date"
                      class="form-control"
                      style="border: 1px solid #000 !important"
                      v-model="date_naissance"
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
                      v-model="type_piece_id"
                      option-value="id"
                      option-text="libelle"
                      placeholder="select item"
                      style="border: 1px solid #000"
                    >
                    </model-list-select>
                    <span style="color: red" v-if="type_piece_id == 0"
                      >Ce champs est obligatoire!
                    </span>
                  </div>
                  <div class="col-3">
                    <label class="form-label">Lieu de Naissance</label>
                    <input
                      type="text"
                      class="form-control"
                      style="border: 1px solid #000 !important"
                      v-model="lieu_naissance"
                    />
                  </div>
                  <div class="col-3">
                    <label class="form-label">Numéro de la piece</label>
                    <input
                      type="text"
                      class="form-control"
                      style="border: 1px solid #000 !important"
                      v-model="numero_piece"
                    />
                  </div>
                  <div class="col-3">
                    <label class="form-label">N° de télephone</label>
                    <input
                      type="text"
                      class="form-control"
                      style="border: 1px solid #000 !important"
                      v-model="numero_telephone"
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
                      v-model="nature_contrat_id"
                      option-value="id"
                      option-text="libelle"
                      placeholder="select item"
                      style="border: 1px solid #000"
                    >
                    </model-list-select>
                    <span style="color: red" v-if="nature_contrat_id == 0"
                      >Ce champs est obligatoire!
                    </span>
                  </div>
                  <div class="col-2">
                    <label class="form-label">Date début contrat</label>
                    <input
                      type="date"
                      class="form-control"
                      style="border: 1px solid #000 !important"
                      v-model="date_debut"
                    />
                  </div>
                  <div class="col-2" v-if="nature_contrat_id == 1">
                    <label class="form-label">Date fin contrat</label>
                    <input
                      type="date"
                      class="form-control"
                      style="border: 1px solid #000 !important"
                      v-model="date_fin"
                    />
                  </div>
                  <div class="col-2" v-else>
                    <label class="form-label">Date fin contrat</label>
                    <input
                      readonly
                      type="date"
                      class="form-control"
                      style="border: 1px solid #000 !important"
                      v-model="date_fin"
                    />
                  </div>
                  <div class="col-2">
                    <label class="form-label">Durée</label>
                    <input
                      type="text"
                      class="form-control"
                      style="border: 1px solid #000 !important"
                      readonly
                      :value="DureContrat"
                    />
                  </div>
                </form>
              </div>
            </TabContent>
            <TabContent title="SATUT DU PERSONNEL " icon="ti-search">
              <div class="col-lg-12">
                <form class="row g-3">
                  <div class="col-3">
                    <label class="form-label"
                      >Type dépense
                      <span
                        style="
                          color: red !important;
                          font-size: 15px !important;
                        "
                        >*</span
                      ></label
                    >
                    <model-list-select
                      :list="gettersTypeIndemnite"
                      v-model="FormDataDossier.type_indemnite_id"
                      option-value="id"
                      option-text="libelle"
                      placeholder="select item"
                      style="border: 1px solid #000"
                    >
                    </model-list-select>
                    <span
                      style="color: red"
                      v-if="FormDataDossier.type_indemnite_id == 0"
                      >Ce champs est obligatoire!
                    </span>
                  </div>
                  <div class="col-9">
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
                      v-model="FormDataDossier.nature_economique_id"
                      option-value="id"
                      option-text="objet"
                      placeholder="select item"
                      style="border: 1px solid #000"
                    >
                    </model-list-select>
                    <span
                      style="color: red"
                      v-if="FormDataDossier.nature_economique_id == 0"
                      >Ce champs est obligatoire!
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
                      :list="AfficheTypeFinancement"
                      v-model="FormDataDossier.type_financement_id"
                      option-value="id"
                      option-text="objet"
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
                      :list="AfficheSourceFinancement"
                      v-model="FormDataDossier.source_financement_id"
                      option-value="id"
                      option-text="objet"
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
                  <div class="col-3">
                    <label class="form-label"
                      >Montant
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
                      v-model="FormDataDossier.montant"
                    ></money3>
                    <span style="color: red" v-if="FormDataDossier.montant == 0"
                      >Ce champs est obligatoire!
                    </span>
                  </div>
                  <div class="col-3">
                    <label class="form-label">Dotation </label>
                    <money3
                      class="form-control"
                      v-bind="config"
                      readonly
                      :model-value="afficheDotaion"
                    ></money3>
                  </div>
                  <div class="col-3">
                    <label class="form-label">Cumul des montants </label>
                    <money3
                      class="form-control"
                      v-bind="config"
                      readonly
                      :model-value="
                        parseFloat(DotaionCumulerContrat) +
                        parseFloat(FormDataDossier.montant) +
                        parseFloat(TotalTableau)
                      "
                    ></money3>
                  </div>
                  <div class="col-3">
                    <label class="form-label">Disponible </label>
                    <money3
                      class="form-control"
                      v-bind="config"
                      readonly
                      :model-value="
                        parseFloat(afficheDotaion) -
                        parseFloat(
                          parseFloat(DotaionCumulerContrat) +
                            parseFloat(FormDataDossier.montant) +
                            parseFloat(TotalTableau)
                        )
                      "
                    ></money3>
                  </div>

                  <div class="col-9">
                    <span
                      style="color: red"
                      v-if="
                        parseFloat(afficheDotaion) <
                        parseFloat(
                          parseFloat(DotaionCumulerContrat) +
                            parseFloat(FormDataDossier.montant)
                        )
                      "
                      >Cumul des montants est supperieure a la dotation
                    </span>
                  </div>
                  <div class="col-3">
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click.prevent="ajouterPartieRequerante()"
                      style="cursor: pointer"
                    >
                      Ajouter
                    </button>
                  </div>
                </form>
                <div class="table-responsive">
                  <table class="table table-bordered border-primary">
                    <thead>
                      <tr>
                        <!-- <th scope="col">#</th> -->
                        <!-- <th scope="col">N</th> -->
                        <th scope="col" style="text-align: center">
                          Type Indemnité
                        </th>
                        <th scope="col" style="text-align: center">
                          Nature economique
                        </th>
                        <th scope="col" style="text-align: center">
                          montant (FCFA)
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
                          {{ typeIndemnite(item1.type_indemnite_id) }}
                        </td>
                        <td style="width: 45%">
                          {{ NatureEconomique(item1.nature_economique_id) }}
                        </td>
                        <td style="width: 10%; text-align: right">
                          {{
                            formatageSommeSansFCFA(parseFloat(item1.montant))
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
                        <td colspan="3"></td>
                        <td colspan="">
                          <button
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
            <TabContent title="MODIFIER CONTRAT " icon="ti-search">
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
                    <tr
                      v-for="item1 in gettersPersonnelParUtilisateur"
                      :key="item1.id"
                    >
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
            </TabContent>
            <!-- <TabContent title="IMPRIMER BUDGET PRIMITIF" icon="ti-printer">
             888888888888888888888888888888888888888888888
            </TabContent> -->
          </FormWizard>
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

                              <!-- <span
                                class="badge bg-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#largeModal14"
                                style="cursor: pointer"
                                title="Modifier"
                                @click.prevent="AfficheModalDetail(item.id)"
                                ><i class="fas fa-edit"></i
                              ></span> -->
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

    <div
      class="modal fade"
      id="largeModal14"
      tabindex="-1"
      data-bs-target="#staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier Depense Personnel</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12">
                <form class="row g-3">
                  <div class="col-3">
                    <label class="form-label"
                      >Type dépense
                      <span
                        style="
                          color: red !important;
                          font-size: 15px !important;
                        "
                        >*</span
                      ></label
                    >
                    <model-list-select
                      :list="gettersTypeIndemnite"
                      v-model="modDetail.type_indemnite_id"
                      option-value="id"
                      option-text="libelle"
                      placeholder="select item"
                      style="border: 1px solid #000"
                    >
                    </model-list-select>
                    <span
                      style="color: red"
                      v-if="modDetail.type_indemnite_id == 0"
                      >Ce champs est obligatoire!
                    </span>
                  </div>
                  <div class="col-9">
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
                      v-model="modDetail.nature_economique_id"
                      option-value="id"
                      option-text="objet"
                      placeholder="select item"
                      style="border: 1px solid #000"
                    >
                    </model-list-select>
                    <span
                      style="color: red"
                      v-if="modDetail.nature_economique_id == 0"
                      >Ce champs est obligatoire!
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
                      :list="AfficheTypeFinancement"
                      v-model="modDetail.type_financement_id"
                      option-value="id"
                      option-text="objet"
                      placeholder="select item"
                      style="border: 1px solid #000"
                    >
                    </model-list-select>
                    <span
                      style="color: red"
                      v-if="modDetail.type_financement_id == 0"
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
                      :list="AfficheSourceFinancement"
                      v-model="modDetail.source_financement_id"
                      option-value="id"
                      option-text="objet"
                      placeholder="select item"
                      style="border: 1px solid #000"
                    >
                    </model-list-select>
                    <span
                      style="color: red"
                      v-if="modDetail.source_financement_id == 0"
                      >Ce champs est obligatoire!
                    </span>
                  </div>
                  <div class="col-12">
                    <label class="form-label"
                      >Montant
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
                      v-model="modDetail.montant"
                    ></money3>
                    <span style="color: red" v-if="modDetail.montant == 0"
                      >Ce champs est obligatoire!
                    </span>
                  </div>
                  <!-- <div class="col-3">
                    <label class="form-label">Dotation </label>
                    <money3
                      class="form-control"
                      v-bind="config"
                      readonly
                      :model-value="afficheDotaion"
                    ></money3>
                  </div> -->
                </form>
              </div>
            </div>
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
              @click.prevent="EnregistrerSection()"
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
} from "../../page/Repositories/Repository";
export default {
  components: {
    ModelListSelect,
    FormWizard,
    TabContent,
  },
  data() {
    return {
      modNatureDepense: {},
      modDetail: {},
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
        nature_economique_id: 0,
        type_indemnite_id: 0,
        montant: 0,
        source_financement_id: "",
        type_financement_id: "",
      },

      civilite: "",
      date_debut: "",
      date_fin: "",
      type_personnel_id: 1,
      type_piece_id: 0,
      nature_contrat_id: 0,
      diplome_id: 0,
      emploi_id: 0,
      service_id: 0,
      fonction_id: 0,
      activite_id: 0,
      unite_operationnelle_id: 0,
      nature_depense_id: 0,
      sous_budget_id: 0,
      numero_contrat: 0,
      matricule: 0,
      decision_cf: 0,
      nom: "",
      prenom: "",
      date_naissance: 0,
      lieu_naissance: "",
      numero_piece: "",
      numero_telephone: "",

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
tableauCivilite: [
        {
          
          libelle: "Monsieur",
        },
        {
          
          libelle: "Madame",
        },
        {
          
          libelle: "Mademoiselle",
        },
      ],
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
    this.getNatureEconomique();
    this.getTypeFinancement();
    this.getBailleur();
    this.getPersonnelUtilisateur();
    this.getCumulMontantContrat();
    // if (this.modNatureDepense!=0) {

    //   let objet = {
    //     id: this.modNatureDepense.id,
    //   };
    //   this.getDetailDepensePersonnel(objet);
    // }
  },

  computed: {
    ...mapGetters("Personnel", [
      "getterNatureDepense",
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
      "gettersCumulMontant",
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

    TotalTableau() {
      return this.TableauDossier.filter(
        (item) =>
          item.nature_economique_id ==
            this.FormDataDossier.nature_economique_id &&
          item.type_financement_id ==
            this.FormDataDossier.type_financement_id &&
          item.source_financement_id ==
            this.FormDataDossier.source_financement_id
      )

        .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant), 0)
        .toFixed(0);
    },
    total() {
      return this.gettersDetailDepensePerso

        .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant), 0)
        .toFixed(0);
    },

    DotaionCumulerContrat() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        // return (id) => {
        //     if (id != null && id != "") {
        const qtereel = this.gettersCumulMontant.find(
          (qtreel) =>
            qtreel.nature_economique_id ==
              this.FormDataDossier.nature_economique_id &&
            qtreel.type_financement_id ==
              this.FormDataDossier.type_financement_id &&
            qtreel.source_financement_id ==
              this.FormDataDossier.source_financement_id
        );

        if (qtereel) {
          return qtereel.cumul_montant;
        }
        return 0;
        //   }
        // };
      } else {
        const qtereel = this.gettersCumulMontant.find(
          (qtreel) =>
            qtreel.nature_economique_id ==
              this.FormDataDossier.nature_economique_id &&
            qtreel.type_financement_id ==
              this.FormDataDossier.type_financement_id &&
            qtreel.source_financement_id ==
              this.FormDataDossier.source_financement_id &&
            qtreel.sous_budget_id == this.sous_budget_id
        );

        if (qtereel) {
          return qtereel.cumul_montant;
        }
        return 0;
      }
    },
    afficheDotaion() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        // return (id) => {
        //     if (id != null && id != "") {
        const qtereel = this.getterBudgetViseParActivite.find(
          (qtreel) =>
            qtreel.ligneeconomique_id ==
              this.FormDataDossier.nature_economique_id &&
            qtreel.type_financement_id ==
              this.FormDataDossier.type_financement_id &&
            qtreel.source_financement_id ==
              this.FormDataDossier.source_financement_id &&
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
            qtreel.ligneeconomique_id ==
              this.FormDataDossier.nature_economique_id &&
            qtreel.type_financement_id ==
              this.FormDataDossier.type_financement_id &&
            qtreel.source_financement_id ==
              this.FormDataDossier.source_financement_id &&
            qtreel.sous_budget_id == this.sous_budget_id &&
            qtreel.actuelle == 1
        );

        if (qtereel) {
          return qtereel.dotation_total;
        }
        return 0;
      }
    },

    DureContratModifier() {
      if (
        this.modNatureDepense.date_debut == this.modNatureDepense.date_fin &&
        this.modNatureDepense.date_fin !== "" &&
        this.modNatureDepense.date_debut !== ""
      )
        return 1;
      if (
        this.modNatureDepense.date_fin == "" &&
        this.modNatureDepense.date_debut == ""
      )
        return null;
      var dateR = new Date(this.modNatureDepense.date_fin).getTime();
      var dateD = new Date(this.modNatureDepense.date_debut).getTime();
      var diffTime = dateR - dateD;

      var diffJours = diffTime / (1000 * 3600 * 24);
      if (isNaN(diffJours)) return null;

      if (parseFloat(diffJours) < 0) return "durée invalide";

      return diffJours;
    },
    DureContrat() {
      if (
        this.date_debut == this.date_fin &&
        this.date_fin !== "" &&
        this.date_debut !== ""
      )
        return 1;
      if (this.date_fin == "" && this.date_debut == "") return null;
      var dateR = new Date(this.date_fin).getTime();
      var dateD = new Date(this.date_debut).getTime();
      var diffTime = dateR - dateD;

      var diffJours = diffTime / (1000 * 3600 * 24);
      if (isNaN(diffJours)) return null;

      if (parseFloat(diffJours) < 0) return "durée invalide";

      return diffJours;
    },
    enregistreMatricule() {
      if (this.type_personnel_id == 1) {
        return this.matriculeAutomatique;
      } else {
        return this.matricule;
      }
    },

    matriculeAutomatique() {
      return (
        "00" +
        "" +
        (this.gettersPersonnel.length + 1) +
        "/" +
        "PAPAN" +
        "/" +
        "MAT" +
        "/" +
        this.exerciceBudgetaire
      );
    },
    ContratAutomatique() {
      return (
        "00" +
        "" +
        (this.gettersPersonnel.length + 1) +
        "/" +
        "PAPAN" +
        "/" +
        "CT" +
        "/" +
        this.exerciceBudgetaire
      );
    },
    typeIndemnite() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersTypeIndemnite.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    NatureEconomique() {
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
            objet: this.NatureEconomique(item),
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
            item.ligneeconomique_id ==
              this.FormDataDossier.nature_economique_id &&
            item.type_financement_id ==
              this.FormDataDossier.type_financement_id &&
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
            item.ligneeconomique_id ==
              this.FormDataDossier.nature_economique_id &&
            item.type_financement_id ==
              this.FormDataDossier.type_financement_id &&
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
        let objet = this.getterBudgetViseParActivite.filter(
          (item) =>
            item.activite_id == this.activite_id &&
            item.ligneeconomique_id ==
              this.FormDataDossier.nature_economique_id &&
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
            item.ligneeconomique_id ==
              this.FormDataDossier.nature_economique_id &&
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
      "getCumulMontantContrat",
      "getDetailDepensePersonnel",
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

      "AjouterPersonnel",
    ]),
    AfficheModalModification(id1) {
      this.modNatureDepense = this.gettersPersonnelParUtilisateur.find(
        (items) => items.id == id1
      );
      let objet = {
        id: id1,
      };
      this.getDetailDepensePersonnel(objet);
    },
    AfficheModalDetail(id1) {
      this.modDetail = this.gettersDetailDepensePerso.find(
        (items) => items.id == id1
      );
    },
    AfficheVentilationBudget(id) {
      this.$router.push({
        name: "DetailPersonnel",
        params: { id: id },
      });
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
        nature_economique_id: this.FormDataDossier.nature_economique_id,
        montant: this.FormDataDossier.montant,

        type_indemnite_id: this.FormDataDossier.type_indemnite_id,
        type_financement_id: this.FormDataDossier.type_financement_id,
        source_financement_id: this.FormDataDossier.source_financement_id,
      };
      this.TableauDossier.push(nouvelObjet12);

      this.FormDataDossier = {
        nature_economique_id: 0,
        montant: 0,

        type_indemnite_id: 0,
      };
    },
    enregistrementSansTypeFiancement2() {
      var nouvelObjettrsor = {
        exercice: this.exerciceBudgetaire,
        type_piece_id: this.type_piece_id,
        type_personnel_id: this.type_personnel_id,
        nature_contrat_id: this.nature_contrat_id,
        diplome_id: this.diplome_id,
        civilite: this.civilite,
        emploi_id: this.emploi_id,
        service_id: this.service_id,
        fonction_id: this.fonction_id,
        activite_id: this.activite_id,
        unite_operationnelle_id: this.unite_operationnelle_id,
        sous_budget_id: this.sous_budget_id,
        date_debut: this.date_debut,
        date_fin: this.date_fin,
        dure: this.DureContrat,
        numero_contrat: this.ContratAutomatique,
        matricule: this.enregistreMatricule,
        nom: this.nom,
        prenom: this.prenom,
        date_naissance: this.date_naissance,
        lieu_naissance: this.lieu_naissance,
        numero_piece: this.numero_piece,
        numero_telephone: this.numero_telephone,
        decision_cf: this.decision_cf,
        date_decision: this.date_decision,
        FormDataDossier: this.TableauDossier,
      };

      this.AjouterPersonnel(nouvelObjettrsor);

      (this.TableauDossier = []),
        (this.FormDataDossier.nature_economique_id = ""),
        (this.FormDataDossier.type_indemnite_id = ""),
        (this.FormDataDossier.montant = 0),
        (this.type_piece_id = 0),
        (this.civilite = ""),
        (this.type_personnel_id = 0),
        (this.nature_contrat_id = 0),
        (this.diplome_id = ""),
        (this.emploi_id = 0),
        (this.service_id = 0),
        (this.fonction_id = 0),
        (this.date_debut = 0),
        (this.date_fin = 0),
        (this.numero_contrat = ""),
        (this.matricule = "");
      this.nom = "";
      this.prenom = "";
      this.date_naissance = "";
      this.lieu_naissance = "";
      this.numero_piece = "";
      this.numero_telephone = "";
    },
  },
  watch: {
    activite_id: function (value) {
      let objet = {
        id: value,
      };
      this.getBudgetViseParActvite(objet);
      // this.getOpParActvite(objet);
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
