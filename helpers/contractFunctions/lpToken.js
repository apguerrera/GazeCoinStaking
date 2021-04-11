/* eslint-disable */
import { lp_token } from "@/config/contractConfig";
import {
  sendTransaction as _sendTransaction,
  makeBatchCall as _makeBatchCall,
  getNetworkId
} from "./base";

let contractInstance;

const initContractInstance = () => {
  if (
    !contractInstance ||
    web3.currentProvider.isMetaMask !==
      contractInstance.currentProvider.isMetaMask
  ) {
    const address = lp_token.address[getNetworkId()];
    contractInstance = new web3.eth.Contract(lp_token.abi, address);
  }
};

export const sendTransaction = async (methodName, args, options) => {
  console.log(methodName, args, options);
  initContractInstance();
  const method = contractInstance.methods[methodName](...args);
  return await _sendTransaction(method, options);
};

export const makeBatchCall = async methods => {
  initContractInstance();
  return await _makeBatchCall(contractInstance, methods);
};

export const getAddress = () => {
  initContractInstance();
  return contractInstance.options.address;
};
