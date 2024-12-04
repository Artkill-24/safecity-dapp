import Web3 from 'web3';

class Web3Service {
  constructor() {
    this.web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
  }

  async connectWallet() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        return true;
      } catch (error) {
        console.error("User denied account access");
        return false;
      }
    }
    return false;
  }

  async getAccounts() {
    return await this.web3.eth.getAccounts();
  }
}

export default new Web3Service();