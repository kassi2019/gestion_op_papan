
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import UtilisateursModule from '../store/modules/auth/index'
import ParametreModule from '../store/modules/gestionParametre/index'
import PersonnelModule from '../store/modules/gestionPersonnel/index'


export default new Vuex.Store({
    plugins: [createPersistedState()],
    modules: {
        Utilisateurs: UtilisateursModule,
        parametrage: ParametreModule,
         Personnel: PersonnelModule,
    }
})

