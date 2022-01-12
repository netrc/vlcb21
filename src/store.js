

import Vue from 'vue'

const EDITORSTR = 'editor'

const fakeEditor = { // based on clientPrincipal
  identityProvider: 'internalFake',
  userDetails: 'fake user',
  userRoles: [ 'authenticated', EDITORSTR ]
}

const noUser = { 
  identityProvider: 'none',
  userDetails: '',
  userRoles: [ ]
}

const isEditor = cp => cp.userRoles.includes(EDITORSTR)

const state = Vue.observable( noUser )

export const getters = { 
  identityProvider: () => state.identityProvider,
  userDetails: () => `xyz ${state.userDetails} sdf`, 
  userRoles: () => state.userRoles,
  isEditor: () => isEditor(state)
}

export const mutations = { // needs '=' ?
  setProfile: (clientPrincipal) => Object.assign(state, clientPrincipal)
}

export const actions = { 
  login: async function() {  // needs async?
    let clientPrincipal = fakeEditor // assume fake
    const fakeuser = process.env.VUE_APP_ENV_FAKEUSER
console.log(`store login fakeuser: ${fakeuser}`)
//console.log(`store login: env...`)
//console.dir(process.env)
    if (fakeuser != EDITORSTR) { // do real login
console.log(`store login: calling await fetch`)
      const response = await fetch("/.auth/me");
console.log('store login fetch: resp')
console.dir(response)
      const payload = await response.json();
console.log('store login: payload')
console.dir(payload)
      clientPrincipal = payload.clientPrincipal
    }

console.dir('store login clientPrincipal...')
console.dir(clientPrincipal)
    mutations.setProfile(clientPrincipal)
  },
  logout: function() {
    mutations.setProfile(noUser)
  }
}
