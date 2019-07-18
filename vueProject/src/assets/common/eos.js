import Eos from 'eosjs'
import network from './network'
console.log(Eos)
export default Eos({
  httpEndpoint: `${network.protocol}://${network.host}:${network.port}`,
  chainId: network.chainId
})
