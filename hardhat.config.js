const path = require('path')
require('@nomiclabs/hardhat-waffle')
require('dotenv').config({ path: path.join(__dirname, '/.env.local') })
require('hardhat-gas-reporter')

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.8.18',
    settings: {
      evmVersion: 'istanbul',
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337
    },
    energiTestnet: {
      url: String(RPC_URL || "https://nodeapi.test.energi.network"),
      accounts: [process.env.ACCOUNT_PRIVATE_KEY, process.env.ACCOUNT2_PRIVATE_KEY],
      gas: 1000000,
      gasPrice: 20000000000, // 20 GWei
      chainId: 49797,
    },
    energiMainnet: {
      url: String(RPC_URL || "https://nodeapi.energi.network"),
      accounts: [process.env.ACCOUNT_PRIVATE_KEY, process.env.ACCOUNT2_PRIVATE_KEY],
      gas: 1000000,
      gasPrice: 20000000000, // 20 GWei
      chainId: 39797,
    },
  },
  etherscan: {
    apiKey: {
      energiTestnet: 'xxxxx-no-api-key-needed-xxxxx',
      energiMainnet: 'xxxxx-no-api-key-needed-xxxxx'
    },
    customChains: [
      {
        network: "energiMainnet",
        chainId: 39797,
        urls: {
          apiURL: "https://explorer.energi.network/api",
          browserURL: "https://explorer.energi.network"
        },
      },
      {
        network: "energiTestnet",
        chainId: 49797,
        urls: {
          apiURL: "https://explorer.test.energi.network/api",
          browserURL: "https://explorer.test.energi.network"
        },
      },
    ]
  }
}
