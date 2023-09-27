export function getProvider () {
  if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    if (window.ethereum.isMetaMask) return 'Metamask'
    if (window.ethereum.isImToken) return 'imToken'
  }
  return 'Wallet'
}

export const chains = {
  energiTestnet: {
    name: 'Energi Testnet',
    chain: 'Energi',
    rpc: [
      'https://nodeapi.test.energi.network'
    ],
    faucets: [
      'https://faucet.energi.network/'
    ],
    nativeCurrency: {
      name: 'Energi',
      symbol: 'NRG',
      decimals: 18
    },
    infoURL: 'https://energi.world/',
    shortName: 'energi',
    chainId: 49797,
    networkId: 49797,
    explorers: [{
      name: 'Block Explorer',
      url: 'https://explorer.test.energi.network',
      standard: 'EIP3091'
    }]
  }
}
