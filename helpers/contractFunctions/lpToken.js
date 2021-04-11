/* eslint-disable */
import { lp_token } from '@/config/contractConfig'
import { sendTransaction as _sendTransaction, makeBatchCall as _makeBatchCall } from "./base";

let contractInstance

const initContractInstance = () => {
  if (!contractInstance || web3.currentProvider.isMetaMask !== contractInstance.currentProvider.isMetaMask) {
    contractInstance = new web3.eth.Contract(lp_token.abi, lp_token.address[3])
  }
}

export const sendTransaction = async (methodName, args, options) => {
  console.log(methodName, args, options)
  initContractInstance();
  const method = contractInstance.methods[methodName](...args)
  return await _sendTransaction(method, options)
}

export const makeBatchCall = async (methods) => {
  initContractInstance();
  return await _makeBatchCall(contractInstance, methods)
}

export const getAddress = () => {
  initContractInstance();
  return contractInstance.options.address
}
