

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
console.log(`login F: ${process.env.FAKEUSER}`)
console.dir(process.env)
    if (process.env.FAKEUSER != EDITORSTR) { // do real login
console.log(`login F: calling await fetch`)
      const response = await fetch("/.auth/me");
console.log('login store gu: resp')
console.dir(response)
      const payload = await response.json();
console.log('login store gu: payl')
console.dir(payload)
      clientPrincipal = payload.clientPrincipal
    }
console.dir('login clientPrincipal...')
console.dir(clientPrincipal)
    mutations.setProfile(clientPrincipal)
  },
  logout: function() {
    mutations.setProfile(noUser)
  }
}

    // async getUser() {
