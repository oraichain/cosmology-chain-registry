import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'passage1',
  chain_id: 'passage-1',
  pretty_name: 'Passage',
  status: 'killed',
  network_type: 'mainnet',
  website: 'https://passage3d.com/',
  bech32_prefix: 'pasg',
  daemon_name: 'passage',
  node_home: '$HOME/.passage',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'upasg',
        fixed_min_gas_price: 0
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'upasg'
      }]
  },
  codebase: {

  },
  explorers: [
    {
      kind: 'aneka',
      url: 'https://passage.aneka.io',
      tx_page: 'https://passage.aneka.io/txs/${txHash}',
      account_page: 'https://passage.aneka.io/accounts/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/passage',
      tx_page: 'https://www.mintscan.io/passage/txs/${txHash}',
      account_page: 'https://www.mintscan.io/passage/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/passage',
      tx_page: 'https://ezstaking.app/passage/txs/${txHash}',
      account_page: 'https://ezstaking.app/passage/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/passage',
      tx_page: 'https://atomscan.com/passage/transactions/${txHash}',
      account_page: 'https://atomscan.com/passage/accounts/${accountAddress}'
    }
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png',
      theme: {
        primary_color_hex: '#05050c'
      }
    }]
};
export default info;