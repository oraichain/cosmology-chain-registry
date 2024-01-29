import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      client_id: '07-tendermint-10',
      connection_id: 'connection-6'
    },
    chain_2: {
      chain_name: 'gateway',
      client_id: '07-tendermint-119',
      connection_id: 'connection-77'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-94',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'gateway',
      client_id: '07-tendermint-13',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-153',
      connection_id: 'connection-117'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-113',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'gateway',
      client_id: '07-tendermint-8',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2927',
      connection_id: 'connection-2424'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2186',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  }
];
export default info;
