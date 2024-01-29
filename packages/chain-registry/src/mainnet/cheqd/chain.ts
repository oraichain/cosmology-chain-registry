import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'cheqd',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.cheqd.io/',
  pretty_name: 'Cheqd',
  chain_id: 'cheqd-mainnet-1',
  bech32_prefix: 'cheqd',
  daemon_name: 'cheqd-noded',
  node_home: '$HOME/.cheqdnode',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ncheq',
        fixed_min_gas_price: 25,
        low_gas_price: 50,
        average_gas_price: 75,
        high_gas_price: 100
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ncheq'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: '0.46.10'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.cheqd.net',
        provider: 'cheqd'
      },
      {
        address: 'https://cheqd-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes'
      },
      {
        address: 'https://rpc-cheqd-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc.cheqd.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://rpc-cheqd.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://cheqd-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc-cheqd.blockval.io',
        provider: 'Blockval'
      }
    ],
    rest: [
      {
        address: 'https://api.cheqd.net',
        provider: 'cheqd'
      },
      {
        address: 'https://cheqd-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes'
      },
      {
        address: 'https://api-cheqd-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://cheqd-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api.cheqd.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://lcd-cheqd.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://api-cheqd.blockval.io',
        provider: 'Blockval'
      }
    ],
    grpc: [
      {
        address: 'grpc.cheqd.net:443',
        provider: 'cheqd'
      },
      {
        address: 'cheqd-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'cheqd-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-cheqd-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'grpc.cheqd.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'grpc-cheqd.blockval.io:9290',
        provider: 'Blockval'
      }
    ]
  },
  explorers: [
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/cheqd',
      tx_page: 'https://bigdipper.live/cheqd/transactions/${txHash}',
      account_page: 'https://bigdipper.live/cheqd/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/cheqd',
      tx_page: 'https://ping.pub/cheqd/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/cheqd',
      tx_page: 'https://atomscan.com/cheqd/transactions/${txHash}',
      account_page: 'https://atomscan.com/cheqd/accounts/${accountAddress}'
    },
    {
      kind: 'EZ Staking',
      url: 'https://app.ezstaking.io/cheqd',
      tx_page: 'https://app.ezstaking.io/cheqd/txs/${txHash}',
      account_page: 'https://app.ezstaking.io/cheqd/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://look.chillvalidation.com/cheqd',
      tx_page: 'https://look.chillvalidation.com/cheqd/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.wildsage.io/cheqd',
      tx_page: 'https://ping.wildsage.io/cheqd/tx/${txHash}'
    }
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
    }
  ]
};
export default info;
