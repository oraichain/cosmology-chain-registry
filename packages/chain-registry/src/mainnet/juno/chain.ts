import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'juno',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.junonetwork.io/',
  pretty_name: 'Juno',
  chain_id: 'juno-1',
  bech32_prefix: 'juno',
  daemon_name: 'junod',
  node_home: '$HOME/.juno',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ujuno',
        fixed_min_gas_price: 0.075,
        low_gas_price: 0.075,
        average_gas_price: 0.1,
        high_gas_price: 0.125
      },
      {
        denom:
          'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
        fixed_min_gas_price: 0.003,
        low_gas_price: 0.003,
        average_gas_price: 0.0035,
        high_gas_price: 0.004
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ujuno'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: '0.47.5',
    cosmwasm_enabled: true,
    cosmwasm_version: '0.45.0'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
  },
  description:
    'Juno is a completely community owned and operated smart contract platform.',
  apis: {
    rpc: [
      {
        address: 'https://rpc-juno.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://rpc-juno.goldenratiostaking.net',
        provider: 'Golden Ratio Staking'
      },
      {
        address: 'https://rpc-juno.itastakers.com',
        provider: 'itastakers'
      },
      {
        address: 'http://juno.rpc.m.stavr.tech:1067',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-juno.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://juno-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://juno-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-juno.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://rpc-juno.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://rpc-juno-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc.juno.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://juno-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://juno-rpc.icycro.org',
        provider: 'IcyCRO 🧊'
      },
      {
        address: 'https://rpc.juno.bh.rocks',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'https://juno.kingnodes.com',
        provider: 'kingnodes 👑'
      },
      {
        address: 'https://juno-rpc.reece.sh',
        provider: 'Reecepbcups'
      },
      {
        address: 'https://juno-rpc.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'https://rpc-juno.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://rpc-juno-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://rpc-juno.validavia.me',
        provider: 'Validavia'
      },
      {
        address: 'https://juno-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://juno-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://juno-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://rpc-juno.mainnet.validatrium.club:443',
        provider: 'Validatrium'
      },
      {
        address: 'https://juno-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://rpc.juno.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ],
    rest: [
      {
        address: 'https://lcd-juno.itastakers.com',
        provider: 'itastakers'
      },
      {
        address: 'https://rest-juno.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://juno-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://juno.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api-juno.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://api-juno-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://api.juno.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://juno-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://api-juno.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://juno-api.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://api.juno.bh.rocks',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'https://juno.kingnodes.com',
        provider: 'kingnodes 👑'
      },
      {
        address: 'https://juno-api.reece.sh',
        provider: 'Reecepbcups'
      },
      {
        address: 'https://juno-api.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'https://rest-juno.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://rest-juno.goldenratiostaking.net',
        provider: 'Golden Ratio Staking'
      },
      {
        address: 'https://api-juno-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://lcd-juno.validavia.me',
        provider: 'Validavia'
      },
      {
        address: 'https://juno-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://juno-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://juno-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://lcd-juno.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://juno-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://lcd.juno.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ],
    grpc: [
      {
        address: 'grpc-juno-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'juno-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'juno-grpc.polkachu.com:12690',
        provider: 'Polkachu'
      },
      {
        address: 'http://juno.grpc.m.stavr.tech:504',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'grpc-juno.kingnodes.com:443',
        provider: 'kingnodes 👑'
      },
      {
        address: 'grpc-juno.cosmos-spaces.cloud:4830',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'http://juno-grpc.stakeandrelax.net:12690',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'grpc-juno.architectnodes.com:1443',
        provider: 'Architect Nodes'
      },
      {
        address: 'juno-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'http://167.235.211.168:9091',
        provider: 'CommunityStaking'
      },
      {
        address: 'grpc-juno-01.stakeflow.io:2302',
        provider: 'Stakeflow'
      },
      {
        address: 'juno-grpc.w3coins.io:12690',
        provider: 'w3coins'
      },
      {
        address: 'juno-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'juno-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: '138.201.21.121:24990',
        provider: 'Validatrium'
      },
      {
        address: 'juno-grpc.stakeandrelax.net:12690',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://grpc.juno.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ]
  },
  explorers: [
    {
      kind: 'EZ Staking',
      url: 'https://app.ezstaking.io/juno',
      tx_page: 'https://app.ezstaking.io/juno/txs/${txHash}',
      account_page: 'https://app.ezstaking.io/juno/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/juno',
      tx_page: 'https://ping.pub/juno/tx/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://juno.explorers.guru',
      tx_page: 'https://juno.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/juno',
      tx_page: 'https://www.mintscan.io/juno/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/juno/accounts/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/juno',
      tx_page: 'https://atomscan.com/juno/transactions/${txHash}',
      account_page: 'https://atomscan.com/juno/accounts/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/juno',
      tx_page: 'https://explorer.stavr.tech/juno/transactions/${txHash}',
      account_page:
        'https://explorer.stavr.tech/juno/accounts/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/juno',
      tx_page: 'https://explorer.tcnetwork.io/juno/transaction/${txHash}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/juno',
      account_page: 'https://stakeflow.io/juno/accounts/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
    }
  ]
};
export default info;
