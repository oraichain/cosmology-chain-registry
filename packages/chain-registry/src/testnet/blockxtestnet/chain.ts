import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'blockxtestnet',
  chain_id: 'blockx_19077-1',
  pretty_name: 'BlockX-Atlantis-Testnet',
  website: 'https://www.blockxnet.com/',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'blockx',
  daemon_name: 'blockxd',
  node_home: '$HOME/.blockxd',
  key_algos: ['ethsecp256k1'],
  staking: {
    staking_tokens: [{
        denom: 'abcx'
      }]
  },
  slip44: 118
};
export default info;