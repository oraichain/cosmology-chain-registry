import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'mtgbp',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://mtgbp.com/',
  pretty_name: 'mtgbp',
  chain_id: 'mtgbp-1',
  bech32_prefix: 'mtgbp',
  daemon_name: 'mtgbp',
  node_home: '$HOME/.ssc',
  key_algos: ['secp256k1'],
  slip44: 1179993441,
  staking: {
    staking_tokens: [{
        denom: 'mtgbp'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  fees: {
    fee_tokens: [{
        denom: 'mtgbp',
        low_gas_price: 0.000001,
        average_gas_price: 0.000005,
        high_gas_price: 0.0001
      }]
  },
  apis: {
    rpc: [{
        address: 'https://rcp.mtgbp.com',
        provider: 'mtgbp'
      }],
    rest: [{
        address: 'https://lcd.mtgbp.com',
        provider: 'mtgbp'
      }],
    grpc: [{
        address: 'https://grcp.mtgbp.com:4090',
        provider: 'mtgbp'
      }]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mtgbp/images/mtgbp.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mtgbp/images/mtgbp.svg'
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://blockexplorer.mtgbp.com/mtgbp',
      tx_page: 'https://blockexplorer.mtgbp.com/mtgbp/tx/${txHash}',
      account_page: 'https://blockexplorer.mtgbp.com/mtgbp/accounts/${accountAddress}'
    }],
  keywords: [],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mtgbp/images/mtgbp.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mtgbp/images/mtgbp.svg',
      theme: {
        primary_color_hex: '#e8692b'
      }
    }]
};
export default info;