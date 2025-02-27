import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'pryzm',
  website: 'https://pryzm.zone',
  description: 'Trade Your Future Yield, Today',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Pryzm',
  chain_id: 'pryzm-1',
  bech32_prefix: 'pryzm',
  daemon_name: 'pryzmd',
  node_home: '$HOME/.pryzm',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
        fixed_min_gas_price: 0.0025,
        low_gas_price: 0.0025,
        average_gas_price: 0.003,
        high_gas_price: 0.004
      },
      {
        denom: 'ibc/DE63D8AC34B752FB7D4CAA7594145EDE1C9FC256AC6D4043D0F12310EB8FC255',
        fixed_min_gas_price: 500000000,
        low_gas_price: 500000000,
        average_gas_price: 600000000,
        high_gas_price: 700000000
      },
      {
        denom: 'ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.03,
        high_gas_price: 0.04
      },
      {
        denom: 'ibc/BF28D9C17E0306B194D50F51C3B2590BEAD15E04E03ADD34C3A26E62D85C9676',
        fixed_min_gas_price: 0.002,
        low_gas_price: 0.002,
        average_gas_price: 0.003,
        high_gas_price: 0.004
      },
      {
        denom: 'ibc/B8AF5D92165F35AB31F3FC7C7B444B9D240760FA5D406C49D24862BD0284E395',
        fixed_min_gas_price: 0.015,
        low_gas_price: 0.015,
        average_gas_price: 0.02,
        high_gas_price: 0.03
      },
      {
        denom: 'ibc/BFAAB7870A9AAABF64A7366DAAA0B8E5065EAA1FCE762F45677DC24BE796EF65',
        fixed_min_gas_price: 0.02,
        low_gas_price: 0.02,
        average_gas_price: 0.03,
        high_gas_price: 0.04
      },
      {
        denom: 'factory/pryzm1jnhcsa5ddjsjq2t97v6a82z542rduxvtw6wd9h/uauuu',
        fixed_min_gas_price: 0.01,
        low_gas_price: 0.01,
        average_gas_price: 0.015,
        high_gas_price: 0.02
      }
    ]
  },
  staking: {
    staking_tokens: [{
        denom: 'upryzm'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {
    cosmos_sdk_version: 'v0.47.11',
    cosmwasm_enabled: true,
    cosmwasm_version: 'v0.45.0'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.pryzm.zone',
        provider: 'PRYZM'
      },
      {
        address: 'https://pryzm-rpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://pryzm-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    rest: [
      {
        address: 'https://api.pryzm.zone',
        provider: 'PRYZM'
      },
      {
        address: 'https://pryzm-api.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://pryzm-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.pryzm.zone',
        provider: 'PRYZM'
      },
      {
        address: 'https://pryzm-grpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'pryzm-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm-logo.svg'
  },
  explorers: [{
      kind: 'Chainscope',
      url: 'https://chainsco.pe/pryzm',
      tx_page: 'https://chainsco.pe/pryzm/tx/${txHash}',
      account_page: 'https://chainsco.pe/pryzm/address/${accountAddress}',
      block_page: 'https://chainsco.pe/pryzm/block/${blockHeight}',
      proposal_page: 'https://chainsco.pe/pryzm/governance/proposal/${proposalId}',
      validator_page: 'https://chainsco.pe/pryzm/validator/${validatorAddress}'
    }, {
      kind: 'PingPub',
      url: 'https://cosmosrun.info/pryzm',
      tx_page: 'https://cosmosrun.info/pryzm/tx/${txHash}',
      account_page: 'https://cosmosrun.info/pryzm/account/${accountAddress}',
      block_page: 'https://cosmosrun.info/pryzm/blocks/${blockHeight}',
      proposal_page: 'https://cosmosrun.info/pryzm/gov/${proposalId}',
      validator_page: 'https://cosmosrun.info/pryzm/staking/${validatorAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm-logo.svg',
      theme: {
        primary_color_hex: '#141424'
      }
    }]
};
export default info;