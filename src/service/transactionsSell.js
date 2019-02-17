import axios from 'axios'

const url = 'https://api.zoop.ws/v1/marketplaces/3249465a7753536b62545a6a684b0000/sellers/660cb85b93da41cf938a2b97675fba8b/balances/history'
const headers = {
  'Authorization': 'Basic enBrX3Rlc3Rfb2dtaTNUSm5WMzNVRGxqZE40bjhhUml0Og==',
  'Content-Type': 'application/json',
}

class TransactionSellService {

  async getAll() {
    const { data: transactionSell } = await axios.get(url , { headers })
    return transactionSell
  }
}

export default TransactionSellService
