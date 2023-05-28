const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "solar virus nothing clump reunion area abuse badge regular decide urge crater",
  "https://sepolia.infura.io/v3/d9dab30341e64603baa3fc7bbeba814b"
);

const web3 = new Web3(provider);
