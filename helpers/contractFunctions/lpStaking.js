/* eslint-disable */
import { lpStaking } from "@/config/contractConfig";
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
    const address = lpStaking.address[getNetworkId()];
    contractInstance = new web3.eth.Contract(lpStaking.abi, address);
  }
};

export const sendTransaction = async (methodName, args, options) => {
  console.log(methodName, args, options);
  initContractInstance();
  const method = contractInstance.methods[methodName](...args);
  console.log("method", method);
  const trans = await _sendTransaction(method, options);
  console.log(trans);
  // return await _sendTransaction(method, options)
};

export const makeBatchCall = async methods => {
  initContractInstance();
  return await _makeBatchCall(contractInstance, methods);
};

export const getAddress = () => {
  initContractInstance();
  return contractInstance.options.address;
};
