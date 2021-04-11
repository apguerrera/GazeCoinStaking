/* eslint-disable */
import { enableAccount, isRightNetwork } from '@/helpers/web3Provider'
import networkConfig from '@/config/networkConfig'

export const state = () => ({
  loading: true,
  initialized: false,
  networkId: null,
  account: null,
  rightNetworks: networkConfig.rightNetworks,
  defaultNetworkId: networkConfig.defaultNetwork,
  explorer: {
    root: null,
    address: null,
    tx: null
  },
})

export const mutations = {
  INIT_ETH_DATA: (state, payload) => {
    const web3Copy = state
    web3Copy.initialized = payload.initialized
    web3Copy.account = payload.account
    if (payload.networkId) {
      web3Copy.networkId = parseInt(payload.networkId)
    }
    state = web3Copy
  },
  SET_ACCOUNT: (state, account) => {
    state.account = account
  },
  SET_NETWORK: (state, networkId) => {
    state.networkId = parseInt(networkId)
  },
  SET_LOADING: (state, loading) => {
    state.loading = loading
  },
  SET_EXPLORER: (state, payload) => {
    state.explorer = payload
  }
}

export const actions = {
  initialize({ commit, state }, payload) {
    commit('INIT_ETH_DATA', payload)
    commit('SET_LOADING', false)

    if (isRightNetwork(state.networkId)) {
      commit('SET_EXPLORER', networkConfig[state.networkId].explorer)
    } else {
      commit('SET_EXPLORER', networkConfig[state.defaultNetworkId].explorer)
    }
  },

  async connectAccount({ commit, state }) {
    if (!state.account) {
      const account = await enableAccount()
      commit('SET_ACCOUNT', account)
      return true
    } else {
      return false
    }
  },

  setAccount ({ commit }, payload) {
    commit('SET_ACCOUNT', payload)
  },

  setNetwork ({ commit }, networkId) {
    commit('SET_NETWORK', networkId)
  },

  setExplorer ({ commit }, payload) {
    commit('SET_EXPLORER', payload)
  }
}

export const getters = {
  isOk: (state) => {
    return !!(isRightNetwork(state.networkId) && state.account && state.isInjected)
  },

  isRightNetwork: (state) => {
    return isRightNetwork(state.networkId)
    // return state.networkId === 3
  },

  initialized: (state) => {
    return state.initialized
  },

  rightNetwork: (state) => {
    return state.rightNetwork
  },

  networkId: (state) => {
    return state.networkId
  },

  defaultNetworkId: (state) => {
    return state.defaultNetworkId
  },

  currentProvidersNetworkId: (state) => {
    if (isRightNetwork(state.networkId)) {
      return state.networkId
    } else {
      return state.defaultNetworkId
    }
  },

  account: (state) => {
    return state.account
  },

  accountConnected: (state) => {
    return state.account !== '' && state.account !== undefined && state.account !== null;
  },

  explorer: (state) => {
    return state.explorer
  },

  txUrl: (state) => {
    return state.explorer.root + state.explorer.tx
  },

  loading: (state) => {
    return state.loading
  },

}
