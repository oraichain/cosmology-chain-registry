import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'qfs',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://qfs.com/',
  pretty_name: 'Quantum Financial Systems',
  chain_id: 'qfs-1',
  bech32_prefix: 'qfs',
  daemon_name: 'qfs',
  node_home: '$HOME/.ssc',
  key_algos: ['secp256k1'],
  slip44: 1179993431,
  staking: {
    staking_tokens: [{
        denom: 'qfs'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  fees: {
    fee_tokens: [{
        denom: 'qfs',
        low_gas_price: 0.000001,
        average_gas_price: 0.000005,
        high_gas_price: 0.0001
      }]
  },
  apis: {
    rpc: [{
        address: 'https://rcp.qfsone.com',
        provider: 'qfs'
      }],
    rest: [{
        address: 'https://lcd.qfsone.com',
        provider: 'qfs'
      }],
    grpc: [{
        address: 'https://grc.qfsone.com:9090',
        provider: 'qfs'
      }]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qfs/images/qfs.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qfs/images/qfs.svg'
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://blockexplorer.qfsone.com/qfs',
      tx_page: 'https://blockexplorer.qfsone.com/qfs/tx/${txHash}',
      account_page: 'https://blockexplorer.qfsone.com/qfs/accounts/${accountAddress}'
    }],
  keywords: [],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qfs/images/qfs.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qfs/images/qfs.svg',
      theme: {
        primary_color_hex: '#2979dc'
      }
    }]
};
export default info;