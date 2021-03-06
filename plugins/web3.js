import Web3 from "web3";
import networkConfig from "../config/networkConfig";
import { getAccount, getNetwork, getNetworkOldVersion, isRightNetwork } from "../helpers/web3Provider";

const defaultNetwork = networkConfig.defaultNetwork;
let localStore;

export default async ({ store }) => {
  localStore = store;

  var web3Data = {
    injectedWeb3: false,
    coinbase: null,
    initialized: false,
    networkId: false,
    walletFound: false,
    oldVersion: false
  };

  // Modern dapp browser
  if (window.ethereum) {
    window.ethereum.autoRefreshOnNetworkChange = false;
    web3Data.injectedWeb3 = true;
    web3Data.walletFound = true;
    web3Data.initialized = true;

    web3Data.networkId = await getNetwork();

    if (window.ethereum.isMetaMask) {
      window.ethereum.on('chainChanged', handleChainChanged)
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    if (isRightNetwork(web3Data.networkId)) {
      window.web3 = new Web3(ethereum);
    } else {
      window.web3 = getHttpWeb3Provider();
    }
    let coinbase = window.ethereum.selectedAddress;
    if (coinbase) {
      web3Data.coinbase = coinbase;
    }
  } else if (window.web3) {
    try {
      web3Data.oldVersion = true;
      web3Data.injectedWeb3 = true;
      web3Data.walletFound = true;
      web3Data.initialized = true;
      web3Data.networkId = await getNetworkOldVersion();
      let coinbase = await getAccount();
      accountInterval();
      if (coinbase) {
        web3Data.coinbase = coinbase;
      }
      if (isRightNetwork(web3Data.networkId)) {
        window.web3 = new Web3(web3.currentProvider);
      } else {
        window.web3 = getHttpWeb3Provider();
      }
    } catch (error) {
      console.log('error:', error)
    }
  } // Non-dapp browsers
  else {
    try {
      window.web3 = getHttpWeb3Provider();
      web3Data.initialized = true;
    } catch (error) {
      console.log(error);
    }
  }
  store.dispatch("ethereum/injectWeb3", web3Data)
}

const handleChainChanged = (chainId) => {
  window.location.reload();
  // const previousNetworkId = localStore.state.ethereum.networkId;
  // if (previousNetworkId !== chainId) {
  //     if (isRightNetwork(chainId)) {
  //         window.web3 = new Web3(ethereum);
  //     } else if (!isRightNetwork(previousNetworkId)) {
  //         window.web3 = getHttpWeb3Provider();
  //     }
  //     localStore.dispatch("ethereum/setNetwork", chainId)
  //     web3.eth.defaultChain = chainId;
  // }
}

const handleAccountsChanged = (accounts) => {
  if (accounts.length !== 0 && accounts[0] !== localStore.state.coinbase) {
    localStore.dispatch("ethereum/setCoinbase", accounts[0]);
  }
}

const accountInterval = () =>
  setInterval(() => {
    web3.eth.getAccounts(async (err, accounts) => {
      var account = localStore.state.ethereum.coinbase;
      if (!err) {
        if (accounts[0] !== account) {
          localStore.dispatch("ethereum/setCoinbase", accounts[0])
          let networkId = localStore.state.ethereum.networkId;
          if (networkId === undefined) {
            networkId = await getNetworkOldVersion();
            localStore.dispatch("ethereum/setNetwork", networkId);
          }
        }
      }
    });
  }, 1000);


const getHttpWeb3Provider = () => {
  const httpProvider = networkConfig[defaultNetwork].httpProvider;
  return new Web3(new Web3.providers.HttpProvider(httpProvider));
}
