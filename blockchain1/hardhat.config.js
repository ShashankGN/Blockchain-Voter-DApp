require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config();

module.exports = {
  solidity: '0.8.17',
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/PdSkBeKk42_qpVE9FsoX6lB12nr2S7FR",
      accounts: ["d6c40aeae3c240f3e88c5ace4f48fb5bf7afa1596a5a52a1bffcb0cc0f06dffa"],
    },
  },
};