import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'althea',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://althea.net/',
  pretty_name: 'Althea',
  chain_id: 'althea_258432-1',
  bech32_prefix: 'althea',
  daemon_name: 'althea',
  node_home: '$HOME/.althea',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'aalthea',
        fixed_min_gas_price: 100000000000,
        low_gas_price: 100000000000,
        average_gas_price: 100000000000,
        high_gas_price: 300000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'aalthea'
      }]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/althea/images/althea.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/althea/images/althea.png',
      theme: {
        primary_color_hex: '#0474dc'
      }
    }, {
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/althea/images/althea.svg'
    }],
  codebase: {

  },
  apis: {
    rest: [
      {
        address: 'https://nodes.chandrastation.com/api/althea/',
        provider: 'Chandra Station'
      },
      {
        address: 'https://althea.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://althea-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }
    ],
    rpc: [
      {
        address: 'https://nodes.chandrastation.com/rpc/althea/',
        provider: 'Chandra Station'
      },
      {
        address: 'https://althea.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://althea-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }
    ],
    grpc: [{
        address: 'https://althea-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }]
  }
};
export default info;