import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'mythos',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Mythos',
  chain_id: 'mythos_7001-1',
  bech32_prefix: 'mythos',
  daemon_name: 'mythosd',
  node_home: '$HOME/.mythosd',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'aMYT'
      }]
  },
  apis: {
    rpc: [{
        address: 'https://mythos-rpc.provable.dev:443/',
        provider: 'laurel.provable'
      }],
    rest: [{
        address: 'https://mythos.provable.dev/rest/',
        provider: 'laurel.provable'
      }],
    grpc: [{
        address: 'mythos-grpc.provable.dev:443',
        provider: 'laurel.provable'
      }],
    "evm-http-jsonrpc": []
  },
  explorers: [],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.svg'
  },
  codebase: {

  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.svg',
      theme: {
        primary_color_hex: '#848484'
      }
    }]
};
export default info;