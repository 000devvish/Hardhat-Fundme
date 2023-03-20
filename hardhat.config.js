require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("hardhat-deploy");

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.8" }, { version: "0.6.6" }
    ],
  },
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
     accounts: [PRIVATE_KEY],
     chainId: 5,
    }
    
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    token: "matic",
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },

    }
  
  
};
