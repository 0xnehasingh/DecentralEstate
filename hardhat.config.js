require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: 'sepolia',
  networks: {
    hardhat: {},
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/hF8R1PJm_Ij2J5_7dOvDHs7ucyukyqHX',
      accounts: ['0x1665c3ae8121d6813e03b0ac59b8c80f9da1fb51e533bb949a786aeee2da0eef']
    }
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
