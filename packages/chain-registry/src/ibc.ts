import { IBCInfo } from '@chain-registry/types';
const ibc: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'akash',
      'client-id': '07-tendermint-53',
      'connection-id': 'connection-29'
    },
    'chain-2': {
      'chain-name': 'cosmoshub',
      'client-id': '07-tendermint-385',
      'connection-id': 'connection-339'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-17',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-184',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'akash',
      'client-id': '07-tendermint-48',
      'connection-id': 'connection-23'
    },
    'chain-2': {
      'chain-name': 'cryptoorgchain',
      'client-id': '07-tendermint-65',
      'connection-id': 'connection-38'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-14',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-21',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'akash',
      'client-id': '07-tendermint-44',
      'connection-id': 'connection-19'
    },
    'chain-2': {
      'chain-name': 'irisnet',
      'client-id': '07-tendermint-23',
      'connection-id': 'connection-16'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-11',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-9',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'akash',
      'client-id': '07-tendermint-84',
      'connection-id': 'connection-58'
    },
    'chain-2': {
      'chain-name': 'juno',
      'client-id': '07-tendermint-80',
      'connection-id': 'connection-47'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-35',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-29',
          'port-id': 'transfer'
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
    'chain-1': {
      'chain-name': 'akash',
      'client-id': '07-tendermint-18',
      'connection-id': 'connection-11'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-0',
      'connection-id': 'connection-2'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-9',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-1',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'akash',
      'client-id': '07-tendermint-15',
      'connection-id': 'connection-8'
    },
    'chain-2': {
      'chain-name': 'persistence',
      'client-id': '07-tendermint-5',
      'connection-id': 'connection-4'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-6',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-5',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'akash',
      'client-id': '07-tendermint-47',
      'connection-id': 'connection-22'
    },
    'chain-2': {
      'chain-name': 'regen',
      'client-id': '07-tendermint-20',
      'connection-id': 'connection-9'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-13',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-7',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'akash',
      'client-id': '07-tendermint-102',
      'connection-id': 'connection-69'
    },
    'chain-2': {
      'chain-name': 'secretnetwork',
      'client-id': '07-tendermint-47',
      'connection-id': 'connection-28'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-43',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-21',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'akash',
      'client-id': '07-tendermint-45',
      'connection-id': 'connection-21'
    },
    'chain-2': {
      'chain-name': 'sentinel',
      'client-id': '07-tendermint-42',
      'connection-id': 'connection-27'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-12',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-6',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'akash',
      'client-id': '07-tendermint-61',
      'connection-id': 'connection-36'
    },
    'chain-2': {
      'chain-name': 'sifchain',
      'client-id': '07-tendermint-11',
      'connection-id': 'connection-2'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-24',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-2',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'akash',
      'client-id': '07-tendermint-59',
      'connection-id': 'connection-35'
    },
    'chain-2': {
      'chain-name': 'starname',
      'client-id': '07-tendermint-29',
      'connection-id': 'connection-18'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-23',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-6',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'assetmantle',
      'client-id': '07-tendermint-22',
      'connection-id': 'connection-4'
    },
    'chain-2': {
      'chain-name': 'juno',
      'client-id': '07-tendermint-167',
      'connection-id': 'connection-113'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-2',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-83',
          'port-id': 'transfer'
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
    'chain-1': {
      'chain-name': 'assetmantle',
      'client-id': '07-tendermint-0',
      'connection-id': 'connection-0'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1923',
      'connection-id': 'connection-1498'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-0',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-232',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'axelar',
      'client-id': '07-tendermint-31',
      'connection-id': 'connection-17'
    },
    'chain-2': {
      'chain-name': 'crescent',
      'client-id': '07-tendermint-6',
      'connection-id': 'connection-4'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-7',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-4',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'axelar',
      'client-id': '07-tendermint-25',
      'connection-id': 'connection-14'
    },
    'chain-2': {
      'chain-name': 'juno',
      'client-id': '07-tendermint-150',
      'connection-id': 'connection-97'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-4',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-71',
          'port-id': 'transfer'
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
    'chain-1': {
      'chain-name': 'axelar',
      'client-id': '07-tendermint-23',
      'connection-id': 'connection-13'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1862',
      'connection-id': 'connection-1453'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-3',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-208',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'axelar',
      'client-id': '07-tendermint-40',
      'connection-id': 'connection-22'
    },
    'chain-2': {
      'chain-name': 'secretnetwork',
      'client-id': '07-tendermint-44',
      'connection-id': 'connection-26'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-12',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-20',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'bandchain',
      'client-id': '07-tendermint-94',
      'connection-id': 'connection-91'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1743',
      'connection-id': 'connection-1345'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-83',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-148',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'bitcanna',
      'client-id': '07-tendermint-12',
      'connection-id': 'connection-11'
    },
    'chain-2': {
      'chain-name': 'juno',
      'client-id': '07-tendermint-110',
      'connection-id': 'connection-70'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-10',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-50',
          'port-id': 'transfer'
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
    'chain-1': {
      'chain-name': 'bitcanna',
      'client-id': '07-tendermint-1',
      'connection-id': 'connection-1'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1499',
      'connection-id': 'connection-1167'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-1',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-51',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'bitsong',
      'client-id': '07-tendermint-9',
      'connection-id': 'connection-9'
    },
    'chain-2': {
      'chain-name': 'juno',
      'client-id': '07-tendermint-33',
      'connection-id': 'connection-26'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-5',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-17',
          'port-id': 'transfer'
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
    'chain-1': {
      'chain-name': 'bitsong',
      'client-id': '07-tendermint-0',
      'connection-id': 'connection-0'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1551',
      'connection-id': 'connection-1216'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-0',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-73',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'bostrom',
      'client-id': '07-tendermint-5',
      'connection-id': 'connection-2'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1597',
      'connection-id': 'connection-1255'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-2',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-95',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'carbon',
      'client-id': '07-tendermint-3',
      'connection-id': 'connection-1'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1808',
      'connection-id': 'connection-1412'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-0',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-188',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'cerberus',
      'client-id': '07-tendermint-1',
      'connection-id': 'connection-1'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1875',
      'connection-id': 'connection-1460'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-1',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-212',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'cheqd',
      'client-id': '07-tendermint-0',
      'connection-id': 'connection-0'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1615',
      'connection-id': 'connection-1268'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-0',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-108',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'chihuahua',
      'client-id': '07-tendermint-54',
      'connection-id': 'connection-30'
    },
    'chain-2': {
      'chain-name': 'juno',
      'client-id': '07-tendermint-79',
      'connection-id': 'connection-46'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-11',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-28',
          'port-id': 'transfer'
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
    'chain-1': {
      'chain-name': 'chihuahua',
      'client-id': '07-tendermint-45',
      'connection-id': 'connection-25'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1666',
      'connection-id': 'connection-1278'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-7',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-113',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'chihuahua',
      'client-id': '07-tendermint-70',
      'connection-id': 'connection-38'
    },
    'chain-2': {
      'chain-name': 'secretnetwork',
      'client-id': '07-tendermint-27',
      'connection-id': 'connection-13'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-16',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-11',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'comdex',
      'client-id': '07-tendermint-30',
      'connection-id': 'connection-19'
    },
    'chain-2': {
      'chain-name': 'juno',
      'client-id': '07-tendermint-92',
      'connection-id': 'connection-55'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-18',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-36',
          'port-id': 'transfer'
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
    'chain-1': {
      'chain-name': 'comdex',
      'client-id': '07-tendermint-1',
      'connection-id': 'connection-1'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1587',
      'connection-id': 'connection-1243'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-1',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-87',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'cosmoshub',
      'client-id': '07-tendermint-724',
      'connection-id': 'connection-538'
    },
    'chain-2': {
      'chain-name': 'crescent',
      'client-id': '07-tendermint-3',
      'connection-id': 'connection-1'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-326',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-1',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'cosmoshub',
      'client-id': '07-tendermint-389',
      'connection-id': 'connection-342'
    },
    'chain-2': {
      'chain-name': 'cryptoorgchain',
      'client-id': '07-tendermint-735',
      'connection-id': 'connection-220'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-187',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-27',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'cosmoshub',
      'client-id': '07-tendermint-432',
      'connection-id': 'connection-365'
    },
    'chain-2': {
      'chain-name': 'emoney',
      'client-id': '07-tendermint-8',
      'connection-id': 'connection-3'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-202',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-1',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'cosmoshub',
      'client-id': '07-tendermint-434',
      'connection-id': 'connection-368'
    },
    'chain-2': {
      'chain-name': 'impacthub',
      'client-id': '07-tendermint-9',
      'connection-id': 'connection-9'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-204',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-1',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'cosmoshub',
      'client-id': '07-tendermint-384',
      'connection-id': 'connection-338'
    },
    'chain-2': {
      'chain-name': 'irisnet',
      'client-id': '07-tendermint-31',
      'connection-id': 'connection-22'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-182',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-12',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'cosmoshub',
      'client-id': '07-tendermint-439',
      'connection-id': 'connection-372'
    },
    'chain-2': {
      'chain-name': 'juno',
      'client-id': '07-tendermint-3',
      'connection-id': 'connection-2'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-207',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-1',
          'port-id': 'transfer'
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
    'chain-1': {
      'chain-name': 'cosmoshub',
      'client-id': '07-tendermint-468',
      'connection-id': 'connection-386'
    },
    'chain-2': {
      'chain-name': 'likecoin',
      'client-id': '07-tendermint-24',
      'connection-id': 'connection-13'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-217',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-5',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'cosmoshub',
      'client-id': '07-tendermint-259',
      'connection-id': 'connection-257'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1',
      'connection-id': 'connection-1'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-141',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-0',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'cosmoshub',
      'client-id': '07-tendermint-391',
      'connection-id': 'connection-344'
    },
    'chain-2': {
      'chain-name': 'persistence',
      'client-id': '07-tendermint-36',
      'connection-id': 'connection-30'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-190',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-24',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'cosmoshub',
      'client-id': '07-tendermint-386',
      'connection-id': 'connection-340'
    },
    'chain-2': {
      'chain-name': 'regen',
      'client-id': '07-tendermint-27',
      'connection-id': 'connection-24'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-185',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-11',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'cosmoshub',
      'client-id': '07-tendermint-492',
      'connection-id': 'connection-401'
    },
    'chain-2': {
      'chain-name': 'secretnetwork',
      'client-id': '07-tendermint-1',
      'connection-id': 'connection-0'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-235',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-0',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'cosmoshub',
      'client-id': '07-tendermint-388',
      'connection-id': 'connection-341'
    },
    'chain-2': {
      'chain-name': 'sentinel',
      'client-id': '07-tendermint-58',
      'connection-id': 'connection-33'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-186',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-12',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'cosmoshub',
      'client-id': '07-tendermint-395',
      'connection-id': 'connection-347'
    },
    'chain-2': {
      'chain-name': 'sifchain',
      'client-id': '07-tendermint-0',
      'connection-id': 'connection-0'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-192',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-0',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'cosmoshub',
      'client-id': '07-tendermint-326',
      'connection-id': 'connection-300'
    },
    'chain-2': {
      'chain-name': 'starname',
      'client-id': '07-tendermint-6',
      'connection-id': 'connection-6'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-158',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-0',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'cosmoshub',
      'client-id': '07-tendermint-611',
      'connection-id': 'connection-473'
    },
    'chain-2': {
      'chain-name': 'umee',
      'client-id': '07-tendermint-9',
      'connection-id': 'connection-1'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-288',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-1',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'crescent',
      'client-id': '07-tendermint-4',
      'connection-id': 'connection-2'
    },
    'chain-2': {
      'chain-name': 'gravitybridge',
      'client-id': '07-tendermint-100',
      'connection-id': 'connection-102'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-2',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-62',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'crescent',
      'client-id': '07-tendermint-17',
      'connection-id': 'connection-12'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-2083',
      'connection-id': 'connection-1624'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-9',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-297',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'crescent',
      'client-id': '07-tendermint-18',
      'connection-id': 'connection-13'
    },
    'chain-2': {
      'chain-name': 'secretnetwork',
      'client-id': '07-tendermint-53',
      'connection-id': 'connection-31'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-10',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-24',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent',
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'cryptoorgchain',
      'client-id': '07-tendermint-650',
      'connection-id': 'connection-197'
    },
    'chain-2': {
      'chain-name': 'irisnet',
      'client-id': '07-tendermint-32',
      'connection-id': 'connection-23'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-23',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-13',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'cryptoorgchain',
      'client-id': '07-tendermint-33',
      'connection-id': 'connection-12'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-4',
      'connection-id': 'connection-5'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-10',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-5',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'cryptoorgchain',
      'client-id': '07-tendermint-61',
      'connection-id': 'connection-34'
    },
    'chain-2': {
      'chain-name': 'persistence',
      'client-id': '07-tendermint-24',
      'connection-id': 'connection-17'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-17',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-11',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'cryptoorgchain',
      'client-id': '07-tendermint-732',
      'connection-id': 'connection-218'
    },
    'chain-2': {
      'chain-name': 'regen',
      'client-id': '07-tendermint-28',
      'connection-id': 'connection-26'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-25',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-12',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'cryptoorgchain',
      'client-id': '07-tendermint-63',
      'connection-id': 'connection-36'
    },
    'chain-2': {
      'chain-name': 'sentinel',
      'client-id': '07-tendermint-43',
      'connection-id': 'connection-28'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-19',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-7',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'cryptoorgchain',
      'client-id': '07-tendermint-1103',
      'connection-id': 'connection-239'
    },
    'chain-2': {
      'chain-name': 'sifchain',
      'client-id': '07-tendermint-20',
      'connection-id': 'connection-10'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-33',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-9',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'cryptoorgchain',
      'client-id': '07-tendermint-66',
      'connection-id': 'connection-39'
    },
    'chain-2': {
      'chain-name': 'starname',
      'client-id': '07-tendermint-16',
      'connection-id': 'connection-11'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-22',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-3',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'decentr',
      'client-id': '07-tendermint-6',
      'connection-id': 'connection-1'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1798',
      'connection-id': 'connection-1403'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-1',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-181',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'desmos',
      'client-id': '07-tendermint-6',
      'connection-id': 'connection-4'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1726',
      'connection-id': 'connection-1315'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-2',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-135',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'dig',
      'client-id': '07-tendermint-17',
      'connection-id': 'connection-10'
    },
    'chain-2': {
      'chain-name': 'juno',
      'client-id': '07-tendermint-100',
      'connection-id': 'connection-62'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-2',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-37',
          'port-id': 'transfer'
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
    'chain-1': {
      'chain-name': 'dig',
      'client-id': '07-tendermint-13',
      'connection-id': 'connection-8'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1714',
      'connection-id': 'connection-1304'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-1',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-128',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'emoney',
      'client-id': '07-tendermint-10',
      'connection-id': 'connection-4'
    },
    'chain-2': {
      'chain-name': 'irisnet',
      'client-id': '07-tendermint-46',
      'connection-id': 'connection-34'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-2',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-23',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'emoney',
      'client-id': '07-tendermint-51',
      'connection-id': 'connection-20'
    },
    'chain-2': {
      'chain-name': 'juno',
      'client-id': '07-tendermint-24',
      'connection-id': 'connection-16'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-15',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-9',
          'port-id': 'transfer'
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
    'chain-1': {
      'chain-name': 'emoney',
      'client-id': '07-tendermint-7',
      'connection-id': 'connection-2'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1447',
      'connection-id': 'connection-1132'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-0',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-37',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'evmos',
      'client-id': '07-tendermint-0',
      'connection-id': 'connection-0'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1840',
      'connection-id': 'connection-1440'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-0',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-204',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'evmos',
      'client-id': '07-tendermint-50',
      'connection-id': 'connection-19'
    },
    'chain-2': {
      'chain-name': 'secretnetwork',
      'client-id': '07-tendermint-42',
      'connection-id': 'connection-24'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-15',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-18',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'fetchhub',
      'client-id': '07-tendermint-10',
      'connection-id': 'connection-10'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1913',
      'connection-id': 'connection-1490'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-10',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-229',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'galaxy',
      'client-id': '07-tendermint-0',
      'connection-id': 'connection-0'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1928',
      'connection-id': 'connection-1500'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-0',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-236',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'genesisl1',
      'client-id': '07-tendermint-1',
      'connection-id': 'connection-1'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1983',
      'connection-id': 'connection-1539'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-1',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-235',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'gravitybridge',
      'client-id': '07-tendermint-13',
      'connection-id': 'connection-13'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1737',
      'connection-id': 'connection-1340'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-10',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-144',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'gravitybridge',
      'client-id': '07-tendermint-140',
      'connection-id': 'connection-139'
    },
    'chain-2': {
      'chain-name': 'secretnetwork',
      'client-id': '07-tendermint-40',
      'connection-id': 'connection-23'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-79',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-17',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'impacthub',
      'client-id': '07-tendermint-12',
      'connection-id': 'connection-12'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1451',
      'connection-id': 'connection-1137'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-4',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-38',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'impacthub',
      'client-id': '07-tendermint-25',
      'connection-id': 'connection-25'
    },
    'chain-2': {
      'chain-name': 'sifchain',
      'client-id': '07-tendermint-39',
      'connection-id': 'connection-18'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-11',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-15',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'injective',
      'client-id': '07-tendermint-19',
      'connection-id': 'connection-14'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1703',
      'connection-id': 'connection-1298'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-8',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-122',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'injective',
      'client-id': '07-tendermint-97',
      'connection-id': 'connection-83'
    },
    'chain-2': {
      'chain-name': 'secretnetwork',
      'client-id': '07-tendermint-22',
      'connection-id': 'connection-8'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-74',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-7',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'irisnet',
      'client-id': '07-tendermint-5',
      'connection-id': 'connection-4'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-5',
      'connection-id': 'connection-6'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-3',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-6',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'irisnet',
      'client-id': '07-tendermint-34',
      'connection-id': 'connection-25'
    },
    'chain-2': {
      'chain-name': 'persistence',
      'client-id': '07-tendermint-31',
      'connection-id': 'connection-25'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-15',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-19',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'irisnet',
      'client-id': '07-tendermint-35',
      'connection-id': 'connection-26'
    },
    'chain-2': {
      'chain-name': 'regen',
      'client-id': '07-tendermint-25',
      'connection-id': 'connection-22'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-16',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-9',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'irisnet',
      'client-id': '07-tendermint-36',
      'connection-id': 'connection-28'
    },
    'chain-2': {
      'chain-name': 'sentinel',
      'client-id': '07-tendermint-54',
      'connection-id': 'connection-30'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-17',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-9',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'irisnet',
      'client-id': '07-tendermint-42',
      'connection-id': 'connection-30'
    },
    'chain-2': {
      'chain-name': 'sifchain',
      'client-id': '07-tendermint-19',
      'connection-id': 'connection-9'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-19',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-8',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'irisnet',
      'client-id': '07-tendermint-44',
      'connection-id': 'connection-32'
    },
    'chain-2': {
      'chain-name': 'starname',
      'client-id': '07-tendermint-41',
      'connection-id': 'connection-27'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-21',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-11',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'juno',
      'client-id': '07-tendermint-0',
      'connection-id': 'connection-0'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1457',
      'connection-id': 'connection-1142'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-0',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-42',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      },
      {
        'chain-1': {
          'channel-id': 'channel-47',
          'port-id':
            'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn'
        },
        'chain-2': {
          'channel-id': 'channel-169',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'juno',
      'client-id': '07-tendermint-89',
      'connection-id': 'connection-51'
    },
    'chain-2': {
      'chain-name': 'persistence',
      'client-id': '07-tendermint-49',
      'connection-id': 'connection-48'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-33',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-37',
          'port-id': 'transfer'
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
    'chain-1': {
      'chain-name': 'juno',
      'client-id': '07-tendermint-108',
      'connection-id': 'connection-68'
    },
    'chain-2': {
      'chain-name': 'secretnetwork',
      'client-id': '07-tendermint-23',
      'connection-id': 'connection-9'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-48',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-8',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'juno',
      'client-id': '07-tendermint-9',
      'connection-id': 'connection-8'
    },
    'chain-2': {
      'chain-name': 'sifchain',
      'client-id': '07-tendermint-37',
      'connection-id': 'connection-17'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-5',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-14',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'juno',
      'client-id': '07-tendermint-44',
      'connection-id': 'connection-30'
    },
    'chain-2': {
      'chain-name': 'stargaze',
      'client-id': '07-tendermint-13',
      'connection-id': 'connection-11'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-20',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-5',
          'port-id': 'transfer'
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
    'chain-1': {
      'chain-name': 'juno',
      'client-id': '07-tendermint-63',
      'connection-id': 'connection-43'
    },
    'chain-2': {
      'chain-name': 'terra',
      'client-id': '07-tendermint-32',
      'connection-id': 'connection-34'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-27',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-20',
          'port-id': 'transfer'
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
    'chain-1': {
      'chain-name': 'kava',
      'client-id': '07-tendermint-2',
      'connection-id': 'connection-1'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1735',
      'connection-id': 'connection-1328'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-1',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-143',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'kichain',
      'client-id': '07-tendermint-4',
      'connection-id': 'connection-0'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1564',
      'connection-id': 'connection-1225'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-0',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-77',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      },
      {
        'chain-1': {
          'channel-id': 'channel-18',
          'port-id':
            'wasm.ki1hzz0s0ucrhdp6tue2lxk3c03nj6f60qy463we7lgx0wudd72ctmsd9kgha'
        },
        'chain-2': {
          'channel-id': 'channel-261',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'konstellation',
      'client-id': '07-tendermint-1',
      'connection-id': 'connection-0'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1778',
      'connection-id': 'connection-1384'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-0',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-171',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'kujira',
      'client-id': '07-tendermint-3',
      'connection-id': 'connection-2'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-2017',
      'connection-id': 'connection-1559'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-3',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-259',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'likecoin',
      'client-id': '07-tendermint-16',
      'connection-id': 'connection-9'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1507',
      'connection-id': 'connection-1173'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-3',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-53',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'lumenx',
      'client-id': '07-tendermint-0',
      'connection-id': 'connection-6'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-2079',
      'connection-id': 'connection-1620'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-3',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-286',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'lumnetwork',
      'client-id': '07-tendermint-7',
      'connection-id': 'connection-5'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1668',
      'connection-id': 'connection-1280'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-3',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-115',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'meme',
      'client-id': '07-tendermint-0',
      'connection-id': 'connection-1'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1931',
      'connection-id': 'connection-1502'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-1',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-238',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'microtick',
      'client-id': '07-tendermint-99',
      'connection-id': 'connection-92'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1453',
      'connection-id': 'connection-1139'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-16',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-39',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'oraichain',
      'client-id': '07-tendermint-49',
      'connection-id': 'connection-21'
    },
    'chain-2': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1882',
      'connection-id': 'connection-1464'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-13',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-216',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1576',
      'connection-id': 'connection-1231'
    },
    'chain-2': {
      'chain-name': 'panacea',
      'client-id': '07-tendermint-6',
      'connection-id': 'connection-1'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-82',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-1',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-3',
      'connection-id': 'connection-4'
    },
    'chain-2': {
      'chain-name': 'persistence',
      'client-id': '07-tendermint-6',
      'connection-id': 'connection-5'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-4',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-6',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1899',
      'connection-id': 'connection-1472'
    },
    'chain-2': {
      'chain-name': 'provenance',
      'client-id': '07-tendermint-31',
      'connection-id': 'connection-9'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-222',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-7',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-6',
      'connection-id': 'connection-7'
    },
    'chain-2': {
      'chain-name': 'regen',
      'client-id': '07-tendermint-1',
      'connection-id': 'connection-1'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-8',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-1',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1898',
      'connection-id': 'connection-1471'
    },
    'chain-2': {
      'chain-name': 'rizon',
      'client-id': '07-tendermint-3',
      'connection-id': 'connection-1'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-221',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-1',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1588',
      'connection-id': 'connection-1244'
    },
    'chain-2': {
      'chain-name': 'secretnetwork',
      'client-id': '07-tendermint-2',
      'connection-id': 'connection-1'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-88',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-1',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis',
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-2',
      'connection-id': 'connection-3'
    },
    'chain-2': {
      'chain-name': 'sentinel',
      'client-id': '07-tendermint-0',
      'connection-id': 'connection-0'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-2',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-0',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1741',
      'connection-id': 'connection-1342'
    },
    'chain-2': {
      'chain-name': 'shentu',
      'client-id': '07-tendermint-9',
      'connection-id': 'connection-8'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-146',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-8',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1484',
      'connection-id': 'connection-1159'
    },
    'chain-2': {
      'chain-name': 'sifchain',
      'client-id': '07-tendermint-41',
      'connection-id': 'connection-20'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-47',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-17',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1745',
      'connection-id': 'connection-1348'
    },
    'chain-2': {
      'chain-name': 'sommelier',
      'client-id': '07-tendermint-0',
      'connection-id': 'connection-0'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-165',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-0',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1562',
      'connection-id': 'connection-1223'
    },
    'chain-2': {
      'chain-name': 'stargaze',
      'client-id': '07-tendermint-0',
      'connection-id': 'connection-0'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-75',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-0',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-71',
      'connection-id': 'connection-42'
    },
    'chain-2': {
      'chain-name': 'starname',
      'client-id': '07-tendermint-9',
      'connection-id': 'connection-9'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-15',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-2',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1215',
      'connection-id': 'connection-1549'
    },
    'chain-2': {
      'chain-name': 'terra',
      'client-id': '07-tendermint-12',
      'connection-id': 'connection-11'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-72',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-1',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-2025',
      'connection-id': 'connection-1565'
    },
    'chain-2': {
      'chain-name': 'tgrade',
      'client-id': '07-tendermint-0',
      'connection-id': 'connection-0'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-263',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-0',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1805',
      'connection-id': 'connection-1410'
    },
    'chain-2': {
      'chain-name': 'umee',
      'client-id': '07-tendermint-6',
      'connection-id': 'connection-0'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-184',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-0',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'osmosis',
      'client-id': '07-tendermint-1705',
      'connection-id': 'connection-1300'
    },
    'chain-2': {
      'chain-name': 'vidulum',
      'client-id': '07-tendermint-0',
      'connection-id': 'connection-0'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-124',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-0',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'persistence',
      'client-id': '07-tendermint-33',
      'connection-id': 'connection-27'
    },
    'chain-2': {
      'chain-name': 'regen',
      'client-id': '07-tendermint-30',
      'connection-id': 'connection-28'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-21',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-14',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'persistence',
      'client-id': '07-tendermint-34',
      'connection-id': 'connection-28'
    },
    'chain-2': {
      'chain-name': 'sentinel',
      'client-id': '07-tendermint-61',
      'connection-id': 'connection-36'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-22',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-15',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'persistence',
      'client-id': '07-tendermint-38',
      'connection-id': 'connection-32'
    },
    'chain-2': {
      'chain-name': 'sifchain',
      'client-id': '07-tendermint-18',
      'connection-id': 'connection-8'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-26',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-7',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'persistence',
      'client-id': '07-tendermint-39',
      'connection-id': 'connection-39'
    },
    'chain-2': {
      'chain-name': 'starname',
      'client-id': '07-tendermint-44',
      'connection-id': 'connection-30'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-27',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-13',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'regen',
      'client-id': '07-tendermint-31',
      'connection-id': 'connection-29'
    },
    'chain-2': {
      'chain-name': 'sentinel',
      'client-id': '07-tendermint-56',
      'connection-id': 'connection-32'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-15',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-11',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'regen',
      'client-id': '07-tendermint-73',
      'connection-id': 'connection-60'
    },
    'chain-2': {
      'chain-name': 'sifchain',
      'client-id': '07-tendermint-31',
      'connection-id': 'connection-13'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-28',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-10',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'regen',
      'client-id': '07-tendermint-74',
      'connection-id': 'connection-61'
    },
    'chain-2': {
      'chain-name': 'starname',
      'client-id': '07-tendermint-45',
      'connection-id': 'connection-31'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-29',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-14',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'secretnetwork',
      'client-id': '07-tendermint-14',
      'connection-id': 'connection-3'
    },
    'chain-2': {
      'chain-name': 'sentinel',
      'client-id': '07-tendermint-96',
      'connection-id': 'connection-75'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-3',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-50',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'secretnetwork',
      'client-id': '07-tendermint-37',
      'connection-id': 'connection-19'
    },
    'chain-2': {
      'chain-name': 'sifchain',
      'client-id': '07-tendermint-171',
      'connection-id': 'connection-98'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-15',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-65',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'secretnetwork',
      'client-id': '07-tendermint-43',
      'connection-id': 'connection-25'
    },
    'chain-2': {
      'chain-name': 'stargaze',
      'client-id': '07-tendermint-177',
      'connection-id': 'connection-110'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-19',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-48',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'secretnetwork',
      'client-id': '07-tendermint-3',
      'connection-id': 'connection-2'
    },
    'chain-2': {
      'chain-name': 'terra',
      'client-id': '07-tendermint-28',
      'connection-id': 'connection-29'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-2',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-16',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'secretnetwork',
      'client-id': '07-tendermint-38',
      'connection-id': 'connection-20'
    },
    'chain-2': {
      'chain-name': 'terra2',
      'client-id': '07-tendermint-4',
      'connection-id': 'connection-7'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-16',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-3',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'sentinel',
      'client-id': '07-tendermint-84',
      'connection-id': 'connection-58'
    },
    'chain-2': {
      'chain-name': 'sifchain',
      'client-id': '07-tendermint-9',
      'connection-id': 'connection-1'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-36',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-1',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    'chain-1': {
      'chain-name': 'sentinel',
      'client-id': '07-tendermint-88',
      'connection-id': 'connection-70'
    },
    'chain-2': {
      'chain-name': 'starname',
      'client-id': '07-tendermint-46',
      'connection-id': 'connection-32'
    },
    channels: [
      {
        'chain-1': {
          'channel-id': 'channel-40',
          'port-id': 'transfer'
        },
        'chain-2': {
          'channel-id': 'channel-15',
          'port-id': 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  }
];
export default ibc;
