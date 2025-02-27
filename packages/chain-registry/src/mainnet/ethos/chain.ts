import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'ethos',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Ethos',
  chain_id: 'ethos_7003-1',
  bech32_prefix: 'ethos',
  daemon_name: 'ethosd',
  node_home: '$HOME/.ethos',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'aRYT'
      }]
  },
  apis: {
    rpc: [{
        address: 'https://ethos-rpc.provable.dev:443/',
        provider: 'laurel.provable'
      }],
    rest: [{
        address: 'https://ethos.provable.dev/rest/',
        provider: 'laurel.provable'
      }],
    grpc: [{
        address: 'ethos-grpc.provable.dev:443',
        provider: 'laurel.provable'
      }],
    "evm-http-jsonrpc": [{
        address: 'https://ethos-evm.provable.dev/',
        provider: 'laurel.provable'
      }]
  },
  explorers: [],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.svg'
  },
  codebase: {

  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.svg',
      theme: {
        primary_color_hex: '#848484'
      }
    }]
};
export default info;