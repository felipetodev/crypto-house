
export const App = {
  web3Provider: null,
  contracts: {},

  init: () => {
    App.loadEthereum()
    App.loadAccount()
    App.loadContracts()
  },

  /*
    loadEthereum: async () => {
      if (window.ethereum) {
        App.web3Provider = window.ethereum
        await window.ethereum.request({ method: 'eth_requestAccounts' })
      } else if (window.web3) {
        let web3 = null
        web3 = new Web3(window.web3.currentProvider)
      } else {
        console.log('No ethereum wallet detected, try again installing metamask')
      }
    },
  */

  loadAccount: async () => {
    const [accounts] = await window.ethereum.request({ method: 'eth_requestAccounts' })
    App.account = accounts
  },

  loadContracts: async () => {
    App.loadAccount()
    const res = await fetch('/api/contracts/house-contracts')
    const data = await res.json()

    import('@truffle/contract')
      .then(async module => {
        const contract = module.default
        App.contracts.houseContract = contract(data)
        // App.web3Provider
        App.contracts.houseContract.setProvider(window.ethereum)
        App.houseContract = await App.contracts.houseContract.deployed()
      })
  },

  createHouse: async (id, title, description, currency, amount) => {
    const result = await App.houseContract?.createHouse(id, title, description, currency, amount, {
      from: App.account
    })
    console.log(result?.logs[0]?.args)
  }
}
