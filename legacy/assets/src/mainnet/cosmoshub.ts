import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'cosmoshub',
  assets: [
    {
      description: 'The native EVM, governance and staking token of the Acrechain',
      denom_units: [{
          denom: 'ibc/1AA15279AD043C26508AF9FA8AD4A318A5688071397A350EA86807EDA7327720',
          exponent: 0,
          aliases: ['aacre']
        }, {
          denom: 'acre',
          exponent: 18
        }],
      base: 'ibc/1AA15279AD043C26508AF9FA8AD4A318A5688071397A350EA86807EDA7327720',
      name: 'Acre',
      display: 'acre',
      symbol: 'ACRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
      },
      coingecko_id: 'arable-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg',
          theme: {
            primary_color_hex: '#4aa29e'
          }
        }],
      socials: {
        website: 'https://arable.finance/',
        twitter: 'https://twitter.com/ArableProtocol'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'aacre',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-457'
          }
        }]
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denom_units: [{
          denom: 'ibc/7ED89FB7AF5BB5791B424BAB0D17DAA793DD836D79C594DFEC690062D2EFB9E1',
          exponent: 0,
          aliases: ['erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c']
        }, {
          denom: 'arusd',
          exponent: 18
        }],
      base: 'ibc/7ED89FB7AF5BB5791B424BAB0D17DAA793DD836D79C594DFEC690062D2EFB9E1',
      name: 'Arable USD',
      display: 'arusd',
      symbol: 'arUSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
      },
      coingecko_id: 'arable-usd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg',
          theme: {
            primary_color_hex: '#77b64f'
          }
        }],
      socials: {
        website: 'https://arable.finance/',
        twitter: 'https://twitter.com/ArableProtocol'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-457'
          }
        }]
    },
    {
      description: 'Ciento Exchange Token',
      denom_units: [{
          denom: 'ibc/6C0C37FF4AD97EFF12388662B6DCD471319D7733673315905FFC3E08BF5C6912',
          exponent: 0,
          aliases: ['erc20/0xAE6D3334989a22A65228732446731438672418F2']
        }, {
          denom: 'cnto',
          exponent: 18
        }],
      base: 'ibc/6C0C37FF4AD97EFF12388662B6DCD471319D7733673315905FFC3E08BF5C6912',
      name: 'Ciento Token',
      display: 'cnto',
      symbol: 'CNTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg',
          theme: {
            primary_color_hex: '#ecc53b'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-457'
          }
        }]
    },
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/26D5710650B26F38CD59EDDC2E85830BC47BD727F23747EB41F350263F08DCF7',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/26D5710650B26F38CD59EDDC2E85830BC47BD727F23747EB41F350263F08DCF7',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
      },
      coingecko_id: 'agoric',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg',
          theme: {
            primary_color_hex: '#c42b44'
          }
        }],
      socials: {
        website: 'https://agoric.com/',
        twitter: 'https://twitter.com/agoric'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-405'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/9EA9BCC30570DC3198317BB6B5561AB41DDC17AFC342087022C128C57EFE19BA',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/9EA9BCC30570DC3198317BB6B5561AB41DDC17AFC342087022C128C57EFE19BA',
      name: 'Inter Stable Token',
      display: 'ist',
      symbol: 'IST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
      },
      coingecko_id: 'inter-stable-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg',
          theme: {
            primary_color_hex: '#d485e2'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-405'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the AIOZ Network.',
      denom_units: [
        {
          denom: 'ibc/9DFC3B38276E617E802EC8E05C85368D36836368795CE16A2A37B9942E29573C',
          exponent: 0,
          aliases: ['attoaioz']
        },
        {
          denom: 'nanoaioz',
          exponent: 9
        },
        {
          denom: 'aioz',
          exponent: 18
        }
      ],
      base: 'ibc/9DFC3B38276E617E802EC8E05C85368D36836368795CE16A2A37B9942E29573C',
      name: 'AIOZ',
      display: 'aioz',
      symbol: 'AIOZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg'
      },
      coingecko_id: 'aioz-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg',
          theme: {
            primary_color_hex: '#24241c'
          }
        }],
      socials: {
        website: 'https://aioz.network/',
        twitter: 'https://twitter.com/AIOZNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'attoaioz',
            chain_name: 'aioz'
          },
          chain: {
            channel_id: 'channel-567'
          }
        }]
    },
    {
      description: 'Akash Network is a decentralized cloud computing marketplace that connects users with unused computing resources, offering a cost-effective alternative to traditional cloud providers.',
      denom_units: [{
          denom: 'ibc/2181AAB0218EAC24BC9F86BD1364FBBFA3E6E3FCC25E88E3E68C15DC6E752D86',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      base: 'ibc/2181AAB0218EAC24BC9F86BD1364FBBFA3E6E3FCC25E88E3E68C15DC6E752D86',
      name: 'Akash Network',
      display: 'akt',
      symbol: 'AKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      coingecko_id: 'akash-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg',
          theme: {
            primary_color_hex: '#bc342c'
          }
        }],
      socials: {
        website: 'https://akash.network/',
        twitter: 'https://twitter.com/akashnet_'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'uakt',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-184'
          }
        }]
    },
    {
      description: 'Archway is a smart contract platform in the Cosmos ecosystem designed to reward developers by providing them with a share of transaction fees generated by their applications.',
      denom_units: [
        {
          denom: 'ibc/98D08BB74578514C9A97A76A3470A09FCC3698821581621A984110D820FF478A',
          exponent: 0,
          aliases: ['aarch']
        },
        {
          denom: 'uarch',
          exponent: 12
        },
        {
          denom: 'arch',
          exponent: 18
        }
      ],
      base: 'ibc/98D08BB74578514C9A97A76A3470A09FCC3698821581621A984110D820FF478A',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
      },
      coingecko_id: 'archway',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg',
          theme: {
            primary_color_hex: '#fc4c04'
          }
        }],
      socials: {
        website: 'https://archway.io/',
        twitter: 'https://twitter.com/archwayHQ'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-623'
          }
        }]
    },
    {
      description: 'The native token of Aura Network',
      denom_units: [{
          denom: 'ibc/C0BDD2D3A69D64FB569741570890BBC1D2E3EF077A4E77FD23DEBE227B8419A8',
          exponent: 0,
          aliases: ['uaura']
        }, {
          denom: 'aura',
          exponent: 6
        }],
      base: 'ibc/C0BDD2D3A69D64FB569741570890BBC1D2E3EF077A4E77FD23DEBE227B8419A8',
      name: 'Aura',
      display: 'aura',
      symbol: 'AURA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg'
      },
      coingecko_id: 'aura-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg',
          theme: {
            primary_color_hex: '#a7c8d4'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'uaura',
            chain_name: 'aura'
          },
          chain: {
            channel_id: 'channel-646'
          }
        }]
    },
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/6C2BB0FDAE0ABFF0E965BFFCADEB0D9590F4A011A9EE678413B2F2587F05CB8C',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/6C2BB0FDAE0ABFF0E965BFFCADEB0D9590F4A011A9EE678413B2F2587F05CB8C',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingecko_id: 'axelar',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://axelar.network/',
        twitter: 'https://twitter.com/axelarnetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-293'
          }
        }]
    },
    {
      description: 'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denom_units: [{
          denom: 'ibc/ADBEC1A7AC2FEF73E06B066A1C94DAB6C27924EF7EA3F5A43378150009620284',
          exponent: 0,
          aliases: ['ubcna']
        }, {
          denom: 'bcna',
          exponent: 6
        }],
      base: 'ibc/ADBEC1A7AC2FEF73E06B066A1C94DAB6C27924EF7EA3F5A43378150009620284',
      display: 'bcna',
      name: 'BitCanna',
      symbol: 'BCNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
      },
      coingecko_id: 'bitcanna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg',
          theme: {
            primary_color_hex: '#3cc494'
          }
        }],
      socials: {
        website: 'http://www.bitcanna.io/',
        twitter: 'https://twitter.com/BitCannaGlobal'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ubcna',
            chain_name: 'bitcanna'
          },
          chain: {
            channel_id: 'channel-232'
          }
        }]
    },
    {
      description: 'BitSong Native Token',
      denom_units: [{
          denom: 'ibc/E7D5E9D0E9BF8B7354929A817DD28D4D017E745F638954764AA88522A7A409EC',
          exponent: 0,
          aliases: ['ubtsg']
        }, {
          denom: 'btsg',
          exponent: 6
        }],
      base: 'ibc/E7D5E9D0E9BF8B7354929A817DD28D4D017E745F638954764AA88522A7A409EC',
      name: 'BitSong',
      display: 'btsg',
      symbol: 'BTSG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
      },
      type_asset: 'sdk.coin',
      coingecko_id: 'bitsong',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg',
          theme: {
            primary_color_hex: '#c8307f'
          }
        }],
      socials: {
        website: 'https://bitsong.io/',
        twitter: 'https://twitter.com/BitSongOfficial'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ubtsg',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }]
    },
    {
      description: 'The native governance token of Carbon',
      denom_units: [{
          denom: 'ibc/5D266BB6FA1D26B678DFE4D8255BBB6CBD23847FA6464CDC0CC15C2441D847C4',
          exponent: 0,
          aliases: ['swth']
        }, {
          denom: 'dswth',
          exponent: 8,
          aliases: ['SWTH']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/5D266BB6FA1D26B678DFE4D8255BBB6CBD23847FA6464CDC0CC15C2441D847C4',
      name: 'Carbon',
      display: 'dswth',
      symbol: 'SWTH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
      },
      coingecko_id: 'switcheo',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg',
          theme: {
            primary_color_hex: '#a5edf2'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'swth',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-342'
          }
        }]
    },
    {
      description: 'The native stablecoin of Carbon',
      denom_units: [{
          denom: 'ibc/662F0E2BD31A7E120FE8F704211D262CB441DE101B5826D97B70F9FA96F65819',
          exponent: 0,
          aliases: ['usc']
        }, {
          denom: 'dusc',
          exponent: 8,
          aliases: ['USC']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/662F0E2BD31A7E120FE8F704211D262CB441DE101B5826D97B70F9FA96F65819',
      name: 'Carbon USD Coin',
      display: 'dusc',
      symbol: 'USC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg'
      },
      coingecko_id: 'carbon-usd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg',
          theme: {
            primary_color_hex: '#053e4f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'usc',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-342'
          }
        }]
    },
    {
      description: 'Grouped USD on Carbon',
      denom_units: [{
          denom: 'ibc/44CAB1CDACF74FFA6AD06F2559EF99C3A0240461C02075A4F10055011FBCC7BA',
          exponent: 0,
          aliases: ['cgt/1']
        }, {
          denom: 'usd',
          exponent: 18,
          aliases: ['USD']
        }],
      base: 'ibc/44CAB1CDACF74FFA6AD06F2559EF99C3A0240461C02075A4F10055011FBCC7BA',
      name: 'Carbon Grouped USD',
      display: 'usd',
      symbol: 'USD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg',
          theme: {
            primary_color_hex: '#043d4d'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'cgt/1',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-342'
          }
        }]
    },
    {
      description: 'Cifer Blockchain Network Built for Decentralized Machine Learning.',
      denom_units: [{
          denom: 'ibc/C7DE16F5065C5568C2A16C241069D76DA93F056172A40391EB682444AF40F048',
          exponent: 0,
          aliases: ['ucif']
        }, {
          denom: 'cif',
          exponent: 6
        }],
      base: 'ibc/C7DE16F5065C5568C2A16C241069D76DA93F056172A40391EB682444AF40F048',
      name: 'Cifer',
      display: 'cif',
      symbol: 'CIF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg',
          theme: {
            primary_color_hex: '#af49b7'
          }
        }],
      socials: {
        website: 'http://cifer.ai/',
        twitter: 'https://twitter.com/cifer_ai'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ucif',
            chain_name: 'cifer'
          },
          chain: {
            channel_id: 'channel-831'
          }
        }]
    },
    {
      description: 'The native token of Coreum',
      denom_units: [{
          denom: 'ibc/F8215CF2CD97294057DBECAA45E3ABEB6012D25550750DA8EC56BEC73F0E522F',
          exponent: 0,
          aliases: ['ucore']
        }, {
          denom: 'core',
          exponent: 6
        }],
      base: 'ibc/F8215CF2CD97294057DBECAA45E3ABEB6012D25550750DA8EC56BEC73F0E522F',
      name: 'Coreum',
      display: 'core',
      symbol: 'COREUM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
      },
      coingecko_id: 'coreum',
      keywords: [
        'dex',
        'staking',
        'wasm',
        'assets',
        'nft',
        'XRPL'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg',
          theme: {
            primary_color_hex: '#24d494'
          }
        }],
      socials: {
        website: 'https://www.coreum.com/',
        twitter: 'https://twitter.com/CoreumOfficial'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ucore',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-660'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Acrechain',
      denom_units: [{
          denom: 'ibc/1AA15279AD043C26508AF9FA8AD4A318A5688071397A350EA86807EDA7327720',
          exponent: 0,
          aliases: ['aacre']
        }, {
          denom: 'acre',
          exponent: 18
        }],
      base: 'ibc/1AA15279AD043C26508AF9FA8AD4A318A5688071397A350EA86807EDA7327720',
      name: 'Acre',
      display: 'acre',
      symbol: 'ACRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
      },
      coingecko_id: 'arable-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg',
          theme: {
            primary_color_hex: '#4aa29e'
          }
        }],
      socials: {
        website: 'https://arable.finance/',
        twitter: 'https://twitter.com/ArableProtocol'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'aacre',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-457'
          }
        }]
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denom_units: [{
          denom: 'ibc/7ED89FB7AF5BB5791B424BAB0D17DAA793DD836D79C594DFEC690062D2EFB9E1',
          exponent: 0,
          aliases: ['erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c']
        }, {
          denom: 'arusd',
          exponent: 18
        }],
      base: 'ibc/7ED89FB7AF5BB5791B424BAB0D17DAA793DD836D79C594DFEC690062D2EFB9E1',
      name: 'Arable USD',
      display: 'arusd',
      symbol: 'arUSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
      },
      coingecko_id: 'arable-usd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg',
          theme: {
            primary_color_hex: '#77b64f'
          }
        }],
      socials: {
        website: 'https://arable.finance/',
        twitter: 'https://twitter.com/ArableProtocol'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-457'
          }
        }]
    },
    {
      description: 'Ciento Exchange Token',
      denom_units: [{
          denom: 'ibc/6C0C37FF4AD97EFF12388662B6DCD471319D7733673315905FFC3E08BF5C6912',
          exponent: 0,
          aliases: ['erc20/0xAE6D3334989a22A65228732446731438672418F2']
        }, {
          denom: 'cnto',
          exponent: 18
        }],
      base: 'ibc/6C0C37FF4AD97EFF12388662B6DCD471319D7733673315905FFC3E08BF5C6912',
      name: 'Ciento Token',
      display: 'cnto',
      symbol: 'CNTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg',
          theme: {
            primary_color_hex: '#ecc53b'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-457'
          }
        }]
    },
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/26D5710650B26F38CD59EDDC2E85830BC47BD727F23747EB41F350263F08DCF7',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/26D5710650B26F38CD59EDDC2E85830BC47BD727F23747EB41F350263F08DCF7',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
      },
      coingecko_id: 'agoric',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg',
          theme: {
            primary_color_hex: '#c42b44'
          }
        }],
      socials: {
        website: 'https://agoric.com/',
        twitter: 'https://twitter.com/agoric'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-405'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/9EA9BCC30570DC3198317BB6B5561AB41DDC17AFC342087022C128C57EFE19BA',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/9EA9BCC30570DC3198317BB6B5561AB41DDC17AFC342087022C128C57EFE19BA',
      name: 'Inter Stable Token',
      display: 'ist',
      symbol: 'IST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
      },
      coingecko_id: 'inter-stable-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg',
          theme: {
            primary_color_hex: '#d485e2'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-405'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the AIOZ Network.',
      denom_units: [
        {
          denom: 'ibc/9DFC3B38276E617E802EC8E05C85368D36836368795CE16A2A37B9942E29573C',
          exponent: 0,
          aliases: ['attoaioz']
        },
        {
          denom: 'nanoaioz',
          exponent: 9
        },
        {
          denom: 'aioz',
          exponent: 18
        }
      ],
      base: 'ibc/9DFC3B38276E617E802EC8E05C85368D36836368795CE16A2A37B9942E29573C',
      name: 'AIOZ',
      display: 'aioz',
      symbol: 'AIOZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg'
      },
      coingecko_id: 'aioz-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg',
          theme: {
            primary_color_hex: '#24241c'
          }
        }],
      socials: {
        website: 'https://aioz.network/',
        twitter: 'https://twitter.com/AIOZNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'attoaioz',
            chain_name: 'aioz'
          },
          chain: {
            channel_id: 'channel-567'
          }
        }]
    },
    {
      description: 'Akash Network is a decentralized cloud computing marketplace that connects users with unused computing resources, offering a cost-effective alternative to traditional cloud providers.',
      denom_units: [{
          denom: 'ibc/2181AAB0218EAC24BC9F86BD1364FBBFA3E6E3FCC25E88E3E68C15DC6E752D86',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      base: 'ibc/2181AAB0218EAC24BC9F86BD1364FBBFA3E6E3FCC25E88E3E68C15DC6E752D86',
      name: 'Akash Network',
      display: 'akt',
      symbol: 'AKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      coingecko_id: 'akash-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg',
          theme: {
            primary_color_hex: '#bc342c'
          }
        }],
      socials: {
        website: 'https://akash.network/',
        twitter: 'https://twitter.com/akashnet_'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'uakt',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-184'
          }
        }]
    },
    {
      description: 'Archway is a smart contract platform in the Cosmos ecosystem designed to reward developers by providing them with a share of transaction fees generated by their applications.',
      denom_units: [
        {
          denom: 'ibc/98D08BB74578514C9A97A76A3470A09FCC3698821581621A984110D820FF478A',
          exponent: 0,
          aliases: ['aarch']
        },
        {
          denom: 'uarch',
          exponent: 12
        },
        {
          denom: 'arch',
          exponent: 18
        }
      ],
      base: 'ibc/98D08BB74578514C9A97A76A3470A09FCC3698821581621A984110D820FF478A',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
      },
      coingecko_id: 'archway',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg',
          theme: {
            primary_color_hex: '#fc4c04'
          }
        }],
      socials: {
        website: 'https://archway.io/',
        twitter: 'https://twitter.com/archwayHQ'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-623'
          }
        }]
    },
    {
      description: 'The native token of Aura Network',
      denom_units: [{
          denom: 'ibc/C0BDD2D3A69D64FB569741570890BBC1D2E3EF077A4E77FD23DEBE227B8419A8',
          exponent: 0,
          aliases: ['uaura']
        }, {
          denom: 'aura',
          exponent: 6
        }],
      base: 'ibc/C0BDD2D3A69D64FB569741570890BBC1D2E3EF077A4E77FD23DEBE227B8419A8',
      name: 'Aura',
      display: 'aura',
      symbol: 'AURA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg'
      },
      coingecko_id: 'aura-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg',
          theme: {
            primary_color_hex: '#a7c8d4'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'uaura',
            chain_name: 'aura'
          },
          chain: {
            channel_id: 'channel-646'
          }
        }]
    },
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/6C2BB0FDAE0ABFF0E965BFFCADEB0D9590F4A011A9EE678413B2F2587F05CB8C',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/6C2BB0FDAE0ABFF0E965BFFCADEB0D9590F4A011A9EE678413B2F2587F05CB8C',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingecko_id: 'axelar',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://axelar.network/',
        twitter: 'https://twitter.com/axelarnetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-293'
          }
        }]
    },
    {
      description: 'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denom_units: [{
          denom: 'ibc/ADBEC1A7AC2FEF73E06B066A1C94DAB6C27924EF7EA3F5A43378150009620284',
          exponent: 0,
          aliases: ['ubcna']
        }, {
          denom: 'bcna',
          exponent: 6
        }],
      base: 'ibc/ADBEC1A7AC2FEF73E06B066A1C94DAB6C27924EF7EA3F5A43378150009620284',
      display: 'bcna',
      name: 'BitCanna',
      symbol: 'BCNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
      },
      coingecko_id: 'bitcanna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg',
          theme: {
            primary_color_hex: '#3cc494'
          }
        }],
      socials: {
        website: 'http://www.bitcanna.io/',
        twitter: 'https://twitter.com/BitCannaGlobal'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ubcna',
            chain_name: 'bitcanna'
          },
          chain: {
            channel_id: 'channel-232'
          }
        }]
    },
    {
      description: 'BitSong Native Token',
      denom_units: [{
          denom: 'ibc/E7D5E9D0E9BF8B7354929A817DD28D4D017E745F638954764AA88522A7A409EC',
          exponent: 0,
          aliases: ['ubtsg']
        }, {
          denom: 'btsg',
          exponent: 6
        }],
      base: 'ibc/E7D5E9D0E9BF8B7354929A817DD28D4D017E745F638954764AA88522A7A409EC',
      name: 'BitSong',
      display: 'btsg',
      symbol: 'BTSG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
      },
      type_asset: 'sdk.coin',
      coingecko_id: 'bitsong',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg',
          theme: {
            primary_color_hex: '#c8307f'
          }
        }],
      socials: {
        website: 'https://bitsong.io/',
        twitter: 'https://twitter.com/BitSongOfficial'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ubtsg',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }]
    },
    {
      description: 'The native governance token of Carbon',
      denom_units: [{
          denom: 'ibc/5D266BB6FA1D26B678DFE4D8255BBB6CBD23847FA6464CDC0CC15C2441D847C4',
          exponent: 0,
          aliases: ['swth']
        }, {
          denom: 'dswth',
          exponent: 8,
          aliases: ['SWTH']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/5D266BB6FA1D26B678DFE4D8255BBB6CBD23847FA6464CDC0CC15C2441D847C4',
      name: 'Carbon',
      display: 'dswth',
      symbol: 'SWTH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
      },
      coingecko_id: 'switcheo',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg',
          theme: {
            primary_color_hex: '#a5edf2'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'swth',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-342'
          }
        }]
    },
    {
      description: 'The native stablecoin of Carbon',
      denom_units: [{
          denom: 'ibc/662F0E2BD31A7E120FE8F704211D262CB441DE101B5826D97B70F9FA96F65819',
          exponent: 0,
          aliases: ['usc']
        }, {
          denom: 'dusc',
          exponent: 8,
          aliases: ['USC']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/662F0E2BD31A7E120FE8F704211D262CB441DE101B5826D97B70F9FA96F65819',
      name: 'Carbon USD Coin',
      display: 'dusc',
      symbol: 'USC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg'
      },
      coingecko_id: 'carbon-usd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg',
          theme: {
            primary_color_hex: '#053e4f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'usc',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-342'
          }
        }]
    },
    {
      description: 'Grouped USD on Carbon',
      denom_units: [{
          denom: 'ibc/44CAB1CDACF74FFA6AD06F2559EF99C3A0240461C02075A4F10055011FBCC7BA',
          exponent: 0,
          aliases: ['cgt/1']
        }, {
          denom: 'usd',
          exponent: 18,
          aliases: ['USD']
        }],
      base: 'ibc/44CAB1CDACF74FFA6AD06F2559EF99C3A0240461C02075A4F10055011FBCC7BA',
      name: 'Carbon Grouped USD',
      display: 'usd',
      symbol: 'USD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg',
          theme: {
            primary_color_hex: '#043d4d'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'cgt/1',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-342'
          }
        }]
    },
    {
      description: 'Cifer Blockchain Network Built for Decentralized Machine Learning.',
      denom_units: [{
          denom: 'ibc/C7DE16F5065C5568C2A16C241069D76DA93F056172A40391EB682444AF40F048',
          exponent: 0,
          aliases: ['ucif']
        }, {
          denom: 'cif',
          exponent: 6
        }],
      base: 'ibc/C7DE16F5065C5568C2A16C241069D76DA93F056172A40391EB682444AF40F048',
      name: 'Cifer',
      display: 'cif',
      symbol: 'CIF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg',
          theme: {
            primary_color_hex: '#af49b7'
          }
        }],
      socials: {
        website: 'http://cifer.ai/',
        twitter: 'https://twitter.com/cifer_ai'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ucif',
            chain_name: 'cifer'
          },
          chain: {
            channel_id: 'channel-831'
          }
        }]
    },
    {
      description: 'The native token of Coreum',
      denom_units: [{
          denom: 'ibc/F8215CF2CD97294057DBECAA45E3ABEB6012D25550750DA8EC56BEC73F0E522F',
          exponent: 0,
          aliases: ['ucore']
        }, {
          denom: 'core',
          exponent: 6
        }],
      base: 'ibc/F8215CF2CD97294057DBECAA45E3ABEB6012D25550750DA8EC56BEC73F0E522F',
      name: 'Coreum',
      display: 'core',
      symbol: 'COREUM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
      },
      coingecko_id: 'coreum',
      keywords: [
        'dex',
        'staking',
        'wasm',
        'assets',
        'nft',
        'XRPL'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg',
          theme: {
            primary_color_hex: '#24d494'
          }
        }],
      socials: {
        website: 'https://www.coreum.com/',
        twitter: 'https://twitter.com/CoreumOfficial'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ucore',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-660'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/3F18D520CE791A40357D061FAD657CED6B21D023F229EAF131D7FE7CE6F488BD',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/3F18D520CE791A40357D061FAD657CED6B21D023F229EAF131D7FE7CE6F488BD',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      coingecko_id: 'crescent-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg',
          theme: {
            primary_color_hex: '#3c2832'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-326'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/835EE9D00C35D72128F195B50F8A89EB83E5011C43EA0AA00D16348E2208FEBB',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/835EE9D00C35D72128F195B50F8A89EB83E5011C43EA0AA00D16348E2208FEBB',
      name: 'Bonded Crescent',
      display: 'bcre',
      symbol: 'bCRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
      },
      coingecko_id: 'liquid-staking-crescent',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg',
          theme: {
            primary_color_hex: '#df969f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-326'
          }
        }]
    },
    {
      description: 'CRO is the native token of the Crypto.org Chain, referred to as Native CRO.',
      denom_units: [{
          denom: 'ibc/C932ADFE2B4216397A4F17458B6E4468499B86C3BC8116180F85D799D6F5CC1B',
          exponent: 0,
          aliases: ['basecro']
        }, {
          denom: 'cro',
          exponent: 8
        }],
      base: 'ibc/C932ADFE2B4216397A4F17458B6E4468499B86C3BC8116180F85D799D6F5CC1B',
      name: 'Cronos',
      display: 'cro',
      symbol: 'CRO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
      },
      coingecko_id: 'crypto-com-chain',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
          theme: {
            primary_color_hex: '#0c2c71'
          }
        }],
      socials: {
        website: 'https://cronos.org/',
        twitter: 'https://twitter.com/cronos_chain'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-27',
            base_denom: 'basecro',
            chain_name: 'cryptoorgchain'
          },
          chain: {
            channel_id: 'channel-187'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Theta testnet version of the Dora Vota.',
      denom_units: [{
          denom: 'ibc/AB556501A8873E00928AD9A75245D6178747111913D292ABB269D268950CB8B7',
          exponent: 0,
          aliases: ['peaka']
        }, {
          denom: 'DORA',
          exponent: 18
        }],
      base: 'ibc/AB556501A8873E00928AD9A75245D6178747111913D292ABB269D268950CB8B7',
      name: 'Dora Vota',
      display: 'DORA',
      symbol: 'DORA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/doravota.png',
          theme: {
            primary_color_hex: '#fba214'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'peaka',
            chain_name: 'doravota'
          },
          chain: {
            channel_id: 'channel-750'
          }
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/49ACCECDED4A6A2B5DD683FA048235F4F66B65F58CD558C9A441195502191D01',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/49ACCECDED4A6A2B5DD683FA048235F4F66B65F58CD558C9A441195502191D01',
      name: 'Dymension',
      display: 'dym',
      symbol: 'DYM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
      },
      coingecko_id: 'dymension',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg',
          theme: {
            primary_color_hex: '#f4e4d4'
          }
        }],
      socials: {
        website: 'https://portal.dymension.xyz',
        twitter: 'https://twitter.com/dymension'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'adym',
            chain_name: 'dymension'
          },
          chain: {
            channel_id: 'channel-794'
          }
        }]
    },
    {
      description: 'e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.',
      denom_units: [{
          denom: 'ibc/E070CE91CC4BD15AEC9B5788C0826755AAD35052A3037E9AC62BE70B4C9A7DBB',
          exponent: 0,
          aliases: ['ungm']
        }, {
          denom: 'ngm',
          exponent: 6
        }],
      base: 'ibc/E070CE91CC4BD15AEC9B5788C0826755AAD35052A3037E9AC62BE70B4C9A7DBB',
      name: 'e-Money',
      display: 'ngm',
      symbol: 'NGM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
      },
      coingecko_id: 'e-money',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg',
          theme: {
            primary_color_hex: '#caf2ea'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ungm',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/B93F321238F7BB15AB5B882660AAE72286C8E9035DE34E2B30F60E54C623C63C',
          exponent: 0,
          aliases: ['eeur']
        }, {
          denom: 'eur',
          exponent: 6
        }],
      base: 'ibc/B93F321238F7BB15AB5B882660AAE72286C8E9035DE34E2B30F60E54C623C63C',
      name: 'e-Money EUR',
      display: 'eur',
      symbol: 'EEUR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
      },
      coingecko_id: 'e-money-eur',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg',
          theme: {
            primary_color_hex: '#f4c808'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'eeur',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'e-Money CHF stablecoin. Audited and backed by fiat CHF deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/96344D426100A0885D84F1C588E3C2C2A8CB2A82B446FC8F63B91E4B70BF33EB',
          exponent: 0,
          aliases: ['echf']
        }, {
          denom: 'chf',
          exponent: 6
        }],
      base: 'ibc/96344D426100A0885D84F1C588E3C2C2A8CB2A82B446FC8F63B91E4B70BF33EB',
      name: 'e-Money CHF',
      display: 'chf',
      symbol: 'ECHF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.svg',
          theme: {
            primary_color_hex: '#db2b1c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'echf',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'e-Money NOK stablecoin. Audited and backed by fiat NOK deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/F998631ADCB33376AB66126D8BF5212314F15A960C215180D06ECFA9FA7F48E6',
          exponent: 0,
          aliases: ['enok']
        }, {
          denom: 'nok',
          exponent: 6
        }],
      base: 'ibc/F998631ADCB33376AB66126D8BF5212314F15A960C215180D06ECFA9FA7F48E6',
      name: 'e-Money NOK',
      display: 'nok',
      symbol: 'ENOK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.svg',
          theme: {
            primary_color_hex: '#cb142d'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'enok',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'e-Money DKK stablecoin. Audited and backed by fiat DKK deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/6EC3B085692C4507A2365E88E82CBCB32DD58E0099056CBC16824D2EE99C5E00',
          exponent: 0,
          aliases: ['edkk']
        }, {
          denom: 'dkk',
          exponent: 6
        }],
      base: 'ibc/6EC3B085692C4507A2365E88E82CBCB32DD58E0099056CBC16824D2EE99C5E00',
      name: 'e-Money DKK',
      display: 'dkk',
      symbol: 'EDKK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.svg',
          theme: {
            primary_color_hex: '#ac0c34'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'edkk',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'e-Money SEK stablecoin. Audited and backed by fiat SEK deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/178B678FFA6991C1064332FBA0C9A4FC954E3DD66DD5B692761172DB5559F6D2',
          exponent: 0,
          aliases: ['esek']
        }, {
          denom: 'sek',
          exponent: 6
        }],
      base: 'ibc/178B678FFA6991C1064332FBA0C9A4FC954E3DD66DD5B692761172DB5559F6D2',
      name: 'e-Money SEK',
      display: 'sek',
      symbol: 'ESEK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.svg',
          theme: {
            primary_color_hex: '#045493'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'esek',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Empower.',
      denom_units: [{
          denom: 'ibc/F58D58F943FC243D4FE0CFE0A9E01DB420DDF994D18C9A7F2939FF1C4C278C31',
          exponent: 0,
          aliases: ['umpwr']
        }, {
          denom: 'mpwr',
          exponent: 6
        }],
      base: 'ibc/F58D58F943FC243D4FE0CFE0A9E01DB420DDF994D18C9A7F2939FF1C4C278C31',
      name: 'MPWR',
      display: 'mpwr',
      symbol: 'MPWR',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg',
          theme: {
            primary_color_hex: '#00e33a',
            background_color_hex: '#00e33a',
            circle: true
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.png',
          theme: {
            primary_color_hex: '#00e33a',
            background_color_hex: '#00e33a',
            circle: false
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'umpwr',
            chain_name: 'empowerchain'
          },
          chain: {
            channel_id: 'channel-621'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [{
          denom: 'ibc/19DD710119533524061885A6F190B18AF28D9537E2BAE37F32A62C1A25979287',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      base: 'ibc/19DD710119533524061885A6F190B18AF28D9537E2BAE37F32A62C1A25979287',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
      },
      coingecko_id: 'evmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg',
          theme: {
            primary_color_hex: '#ec4c34'
          }
        }],
      socials: {
        website: 'https://evmos.org/',
        twitter: 'https://twitter.com/EvmosOrg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-292'
          }
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [{
          denom: 'ibc/FCB0126B85D91CCBDF17FC273023372D41DE033B6E6B666EA2E0E30EAECFEFFC',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      base: 'ibc/FCB0126B85D91CCBDF17FC273023372D41DE033B6E6B666EA2E0E30EAECFEFFC',
      name: 'Neokingdom DAO',
      display: 'neok',
      symbol: 'NEOK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg',
          theme: {
            primary_color_hex: '#7f0f70'
          }
        }],
      socials: {
        website: 'https://www.neokingdom.org/',
        twitter: 'https://twitter.com/NEOKingdomDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-292'
          }
        }]
    },
    {
      description: 'The legacy token of Teledisko DAO.',
      denom_units: [{
          denom: 'ibc/AE07DE43C4743BA0CE79576B70B280516F395F2F45B905668B150A022DDA4080',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin-legacy',
          exponent: 18
        }],
      base: 'ibc/AE07DE43C4743BA0CE79576B70B280516F395F2F45B905668B150A022DDA4080',
      name: 'Teledisko DAO - Legacy',
      display: 'berlin-legacy',
      symbol: 'BERLIN-legacy',
      type_asset: 'erc20',
      address: '0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg',
          theme: {
            primary_color_hex: '#bbce1a'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-292'
          }
        }]
    },
    {
      description: 'The token of Crowdpunk DAO',
      denom_units: [{
          denom: 'ibc/A47B41DD2A35A8B8EA4350C78745E33000791DAD8E7BFDE767B823912FD62AC4',
          exponent: 0,
          aliases: ['erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'ibc/A47B41DD2A35A8B8EA4350C78745E33000791DAD8E7BFDE767B823912FD62AC4',
      name: 'Crowdpunk DAO',
      display: 'crowdp',
      address: '0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f',
      symbol: 'CROWDP',
      type_asset: 'erc20',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg',
          theme: {
            primary_color_hex: '#04fbfb'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-292'
          }
        }]
    },
    {
      description: 'The native staking token of the Function X',
      denom_units: [{
          denom: 'ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729',
          exponent: 0,
          aliases: ['FX']
        }, {
          denom: 'WFX',
          exponent: 18
        }],
      base: 'ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729',
      name: 'Function X',
      display: 'WFX',
      symbol: 'FX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
      },
      coingecko_id: 'fx-coin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }],
      socials: {
        website: 'https://functionx.io',
        twitter: 'https://x.com/functionx_io'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'FX',
            chain_name: 'fxcore'
          },
          chain: {
            channel_id: 'channel-585'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Haqq Network',
      denom_units: [{
          denom: 'ibc/5CF697413DE79A9340E8B77A278FEBF6ACD17CB22DAAF758841959A8D69A2859',
          exponent: 0,
          aliases: ['aISLM']
        }, {
          denom: 'ISLM',
          exponent: 18
        }],
      base: 'ibc/5CF697413DE79A9340E8B77A278FEBF6ACD17CB22DAAF758841959A8D69A2859',
      name: 'Islamic Coin',
      display: 'ISLM',
      symbol: 'ISLM',
      coingecko_id: 'islamic-coin',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg',
          theme: {
            primary_color_hex: '#04cd80'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'aISLM',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-632'
          }
        }]
    },
    {
      description: 'The native token of IXO Chain',
      denom_units: [{
          denom: 'ibc/B2B5AEE174062FA7804AC95223D8169852F8F58962C51C66391C272C838258B7',
          exponent: 0,
          aliases: ['uixo']
        }, {
          denom: 'ixo',
          exponent: 6
        }],
      base: 'ibc/B2B5AEE174062FA7804AC95223D8169852F8F58962C51C66391C272C838258B7',
      name: 'IXO',
      display: 'ixo',
      symbol: 'IXO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
      },
      coingecko_id: 'ixo',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg',
          theme: {
            primary_color_hex: '#2c4484'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uixo',
            chain_name: 'impacthub'
          },
          chain: {
            channel_id: 'channel-204'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/6469BDA6F62C4F4B8F76629FA1E72A02A3D1DD9E2B22DDB3C3B2296DEAD29AB8',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/6469BDA6F62C4F4B8F76629FA1E72A02A3D1DD9E2B22DDB3C3B2296DEAD29AB8',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      coingecko_id: 'injective-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
          theme: {
            primary_color_hex: '#04a2fc'
          }
        }],
      socials: {
        website: 'https://injective.com/',
        twitter: 'https://twitter.com/Injective_'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/74392C3C1F0A88C62C5FF0C77E444D8BBA11FAE3F7AC337891219BEF76ED0178',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/74392C3C1F0A88C62C5FF0C77E444D8BBA11FAE3F7AC337891219BEF76ED0178',
      name: 'Ninpo',
      display: 'NINPO',
      symbol: 'NINPO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png',
          theme: {
            primary_color_hex: '#31292a'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/723426A05EDCE0BAA4FDC47A022881CDA0F0BE8063BDA625155BA3BB424744E0',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/723426A05EDCE0BAA4FDC47A022881CDA0F0BE8063BDA625155BA3BB424744E0',
      name: 'Judo',
      display: 'JUDO',
      symbol: 'JUDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png',
          theme: {
            primary_color_hex: '#18120f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/CF2927188866FEF274217FA353B726408815DA0851753321DE7E7F11047A2737',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/CF2927188866FEF274217FA353B726408815DA0851753321DE7E7F11047A2737',
      name: 'Neptune Receipt INJ',
      display: 'nINJ',
      symbol: 'nINJ',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninj.png',
          theme: {
            primary_color_hex: '#293a6f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/FEF72C8A43A9A60B15EE7BD44BE87D5C44E9DBD071B7D5517F999B0F6CC2E5EE',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/FEF72C8A43A9A60B15EE7BD44BE87D5C44E9DBD071B7D5517F999B0F6CC2E5EE',
      name: 'Neptune Receipt ATOM',
      display: 'nATOM',
      symbol: 'nATOM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/natom.png',
          theme: {
            primary_color_hex: '#272f4b'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/BB027877671118BE5B1424F303B9D58FB500478B5EB7D16909B72A28029D3520',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/BB027877671118BE5B1424F303B9D58FB500478B5EB7D16909B72A28029D3520',
      name: 'Neptune Receipt WETH',
      display: 'nWETH',
      symbol: 'nWETH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nweth.png',
          theme: {
            primary_color_hex: '#2a303f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/57535F8B5C6B26D4459F48C3622E735DEB1AAB38AE8ABA6F951A782546434AF6',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/57535F8B5C6B26D4459F48C3622E735DEB1AAB38AE8ABA6F951A782546434AF6',
      name: 'Neptune Receipt USDT',
      display: 'nUSDT',
      symbol: 'nUSDT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nusdt.png',
          theme: {
            primary_color_hex: '#54ac94'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/364AF8695E6F89645850CD93737DF602E34317467B8B6302EC6D71C811007314',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/364AF8695E6F89645850CD93737DF602E34317467B8B6302EC6D71C811007314',
      name: 'Neptune Receipt TIA',
      display: 'nTIA',
      symbol: 'nTIA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ntia.png',
          theme: {
            primary_color_hex: '#7931f9'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'The IRIS token is the native governance token for the IrisNet chain.',
      denom_units: [{
          denom: 'ibc/12DA42304EE1CE96071F712AA4D58186AD11C3165C0DCDA71E017A54F3935E66',
          exponent: 0,
          aliases: ['uiris']
        }, {
          denom: 'iris',
          exponent: 6
        }],
      base: 'ibc/12DA42304EE1CE96071F712AA4D58186AD11C3165C0DCDA71E017A54F3935E66',
      name: 'IRISnet',
      display: 'iris',
      symbol: 'IRIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
      },
      coingecko_id: 'iris-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg',
          theme: {
            primary_color_hex: '#5664ad'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'uiris',
            chain_name: 'irisnet'
          },
          chain: {
            channel_id: 'channel-182'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Joltify',
      denom_units: [{
          denom: 'ibc/9B76DFC21CF8F4DF5B8514CE82D2CCE79415C4F8525E04509BB48B487CB213DE',
          exponent: 0,
          aliases: ['ujolt']
        }, {
          denom: 'jolt',
          exponent: 6
        }],
      base: 'ibc/9B76DFC21CF8F4DF5B8514CE82D2CCE79415C4F8525E04509BB48B487CB213DE',
      name: 'Joltify',
      display: 'jolt',
      symbol: 'JOLT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/joltify/images/jolt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/joltify/images/jolt.svg',
          theme: {
            primary_color_hex: '#2dfb71'
          }
        }],
      coingecko_id: 'joltify',
      keywords: ['staking'],
      socials: {
        website: 'https://www.joltify.io/',
        twitter: 'https://twitter.com/joltify_finance'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ujolt',
            chain_name: 'joltify'
          },
          chain: {
            channel_id: 'channel-866'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/CDAB23DA5495290063363BD1C3499E26189036302DC689985A7E23F8DF8D8DB0',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/CDAB23DA5495290063363BD1C3499E26189036302DC689985A7E23F8DF8D8DB0',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      coingecko_id: 'juno-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg',
          theme: {
            primary_color_hex: '#fa7b7b'
          }
        }],
      socials: {
        website: 'https://junonetwork.io/',
        twitter: 'https://twitter.com/JunoNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-207'
          }
        }]
    },
    {
      description: 'Kava is a decentralized finance (DeFi) platform that provides a range of financial services, including lending, borrowing, and stablecoins, leveraging the Cosmos and Ethereum ecosystems.',
      denom_units: [{
          denom: 'ibc/8870C4203CEBF2279BA065E3DE95FC3F8E05A4A93424E7DC707A21514BE353A0',
          exponent: 0,
          aliases: ['ukava']
        }, {
          denom: 'kava',
          exponent: 6
        }],
      base: 'ibc/8870C4203CEBF2279BA065E3DE95FC3F8E05A4A93424E7DC707A21514BE353A0',
      name: 'Kava',
      display: 'kava',
      symbol: 'KAVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
      },
      coingecko_id: 'kava',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg',
          theme: {
            primary_color_hex: '#e64942'
          }
        }],
      socials: {
        website: 'https://www.kava.io/',
        twitter: 'https://twitter.com/KAVA_CHAIN'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ukava',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-277'
          }
        }]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [{
          denom: 'ibc/752AC6B389EB9F16013C07987A3A04203EABABEB811F0026A24A5A29CF014366',
          exponent: 0,
          aliases: ['hard']
        }, {
          denom: 'HARD',
          exponent: 6
        }],
      base: 'ibc/752AC6B389EB9F16013C07987A3A04203EABABEB811F0026A24A5A29CF014366',
      name: 'Kava Hard',
      display: 'HARD',
      symbol: 'HARD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
      },
      coingecko_id: 'kava-lend',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg',
          theme: {
            primary_color_hex: '#7b34ac'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'hard',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-277'
          }
        }]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [{
          denom: 'ibc/58E6660E723E3D6854A1190E2516AF71280F0B20510ABA1A13456F5D204F6D7D',
          exponent: 0,
          aliases: ['swp']
        }, {
          denom: 'SWP',
          exponent: 6
        }],
      base: 'ibc/58E6660E723E3D6854A1190E2516AF71280F0B20510ABA1A13456F5D204F6D7D',
      name: 'Kava Swap',
      display: 'SWP',
      symbol: 'SWP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      coingecko_id: 'kava-swap',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg',
          theme: {
            primary_color_hex: '#544cfc'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'swp',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-277'
          }
        }]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [{
          denom: 'ibc/621EBC891F642B44778FD0E9DACBBC14755280C897DD010AA104889C3FDCED06',
          exponent: 0,
          aliases: ['usdx']
        }, {
          denom: 'USDX',
          exponent: 6
        }],
      base: 'ibc/621EBC891F642B44778FD0E9DACBBC14755280C897DD010AA104889C3FDCED06',
      name: 'Kava USDX',
      display: 'USDX',
      symbol: 'USDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
      },
      coingecko_id: 'usdx',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg',
          theme: {
            primary_color_hex: '#04d4a3'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'usdx',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-277'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0',
          exponent: 0,
          aliases: ['erc20/tether/usdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: 'ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      coingecko_id: 'tether',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'erc20/tether/usdt',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-277'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primary_color_hex: '#009393',
            background_color_hex: '#009393'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'The native token of Ki Chain',
      denom_units: [{
          denom: 'ibc/533E5FFC606FD11B8DCA309C66AFD6A1F046EF784A73F323A332CF6823F0EA87',
          exponent: 0,
          aliases: ['uxki']
        }, {
          denom: 'xki',
          exponent: 6
        }],
      base: 'ibc/533E5FFC606FD11B8DCA309C66AFD6A1F046EF784A73F323A332CF6823F0EA87',
      name: 'Ki',
      display: 'xki',
      symbol: 'XKI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
      },
      coingecko_id: 'ki',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg',
          theme: {
            primary_color_hex: '#1c04fc'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uxki',
            chain_name: 'kichain'
          },
          chain: {
            channel_id: 'channel-223'
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/4CC44260793F84006656DD868E017578F827A492978161DA31D7572BCB3F4289',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/4CC44260793F84006656DD868E017578F827A492978161DA31D7572BCB3F4289',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      coingecko_id: 'kujira',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg',
          theme: {
            primary_color_hex: '#e33b34'
          }
        }],
      socials: {
        website: 'https://kujira.network/',
        twitter: 'https://twitter.com/TeamKujira'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-343'
          }
        }]
    },
    {
      description: 'LIKE is the native staking and governance token of LikeCoin chain, a Decentralized Publishing Infrastructure to empower content ownership, authenticity, and provenance.',
      denom_units: [{
          denom: 'ibc/1D5826F7EDE6E3B13009FEF994DC9CAAF15CC24CA7A9FF436FFB2E56FD72F54F',
          exponent: 0,
          aliases: ['nanolike']
        }, {
          denom: 'like',
          exponent: 9
        }],
      base: 'ibc/1D5826F7EDE6E3B13009FEF994DC9CAAF15CC24CA7A9FF436FFB2E56FD72F54F',
      name: 'LikeCoin',
      display: 'like',
      symbol: 'LIKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
      },
      coingecko_id: 'likecoin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg',
          theme: {
            primary_color_hex: '#2d656c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'nanolike',
            chain_name: 'likecoin'
          },
          chain: {
            channel_id: 'channel-217'
          }
        }]
    },
    {
      description: 'Native token of the Lum Network',
      denom_units: [{
          denom: 'ibc/3B87FAEE2F62BF291AE771D9EC3A8894A4533F3E2872592F96FEDFDB97680EC1',
          exponent: 0,
          aliases: ['ulum']
        }, {
          denom: 'lum',
          exponent: 6
        }],
      base: 'ibc/3B87FAEE2F62BF291AE771D9EC3A8894A4533F3E2872592F96FEDFDB97680EC1',
      name: 'Lum',
      display: 'lum',
      symbol: 'LUM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
      },
      coingecko_id: 'lum-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg',
          theme: {
            primary_color_hex: '#080808'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'ulum',
            chain_name: 'lumnetwork'
          },
          chain: {
            channel_id: 'channel-566'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/0025F8A87464A471E66B234C4F93AEC5B4DA3D42D7986451A059273426290DD5',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/0025F8A87464A471E66B234C4F93AEC5B4DA3D42D7986451A059273426290DD5',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
      },
      coingecko_id: 'neutron-3',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg',
          theme: {
            primary_color_hex: '#040404',
            background_color_hex: '#000000',
            circle: true
          }
        }],
      socials: {
        website: 'https://neutron.org/',
        twitter: 'https://twitter.com/Neutron_org'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-569'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/47D6FC41B4C45A9F47C045755E07C839EB12F4ACCEB39C74E9959C0C0811EF11',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/47D6FC41B4C45A9F47C045755E07C839EB12F4ACCEB39C74E9959C0C0811EF11',
      name: 'Bitcosmos',
      display: 'bitcosmos',
      symbol: 'BTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png',
          theme: {
            primary_color_hex: '#1b0847'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-569'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/ABB481A12EADB23AF90AAADF4F722B86E3A87A0D1E8FEBD1720836AD353E703E',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/ABB481A12EADB23AF90AAADF4F722B86E3A87A0D1E8FEBD1720836AD353E703E',
      name: 'wtf',
      display: 'wtf',
      symbol: 'WTF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png',
          theme: {
            primary_color_hex: '#dcd5ab'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-569'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/BA7024C8DD092F2DDC83D1886BDA94102396C46DF6D7A478CFA0138BAFE811D7',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/BA7024C8DD092F2DDC83D1886BDA94102396C46DF6D7A478CFA0138BAFE811D7',
      name: 'boy',
      display: 'boy',
      symbol: 'BOY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png',
          theme: {
            primary_color_hex: '#333333'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-569'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/7AED338D55DDE4CECFD35253E6349D7571B66897C590F75B6420C854B20DA692',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/7AED338D55DDE4CECFD35253E6349D7571B66897C590F75B6420C854B20DA692',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg',
          theme: {
            primary_color_hex: '#a8bbfb'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-536'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/63B7FB38B505DE63FC5F031B9E4AD6BF9FED63A36655F83E115A86CDEEA66826',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      base: 'ibc/63B7FB38B505DE63FC5F031B9E4AD6BF9FED63A36655F83E115A86CDEEA66826',
      display: 'frienzies',
      name: 'Frienzies',
      symbol: 'FRNZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg',
          theme: {
            primary_color_hex: '#04041c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-536'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/9AD012273BA6B6C2E7B88BFFFA984E58C0447A16877C493C617813634AB833DF',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/9AD012273BA6B6C2E7B88BFFFA984E58C0447A16877C493C617813634AB833DF',
      display: 'usdy',
      name: 'Ondo US Dollar Yield',
      symbol: 'USDY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg',
          theme: {
            primary_color_hex: '#142c5c'
          }
        }],
      socials: {
        website: 'https://ondo.finance/usdy',
        twitter: 'https://x.com/OndoFinance'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-536'
          }
        }]
    },
    {
      description: 'OmniFlix is a decentralized media platform that enables content creators to distribute, monetize, and manage their digital content using blockchain technology.',
      denom_units: [{
          denom: 'ibc/15B4D31D457B80DD46CA46F6B89FD6BB15CB92FE7BBF8763947417537C3A4C2E',
          exponent: 0,
          aliases: ['uflix']
        }, {
          denom: 'flix',
          exponent: 6
        }],
      base: 'ibc/15B4D31D457B80DD46CA46F6B89FD6BB15CB92FE7BBF8763947417537C3A4C2E',
      name: 'Flix',
      display: 'flix',
      symbol: 'FLIX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
      },
      coingecko_id: 'omniflix-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg',
          theme: {
            primary_color_hex: '#c33635'
          }
        }],
      socials: {
        website: 'https://omniflix.network/',
        twitter: 'https://twitter.com/OmniFlixNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'uflix',
            chain_name: 'omniflixhub'
          },
          chain: {
            channel_id: 'channel-306'
          }
        }]
    },
    {
      description: 'The native token of Oraichain',
      denom_units: [{
          denom: 'ibc/4846F4382B7843861B6C5051134397359C8C94B547E8EA43EFAFEF4E5F7B7625',
          exponent: 0,
          aliases: ['orai']
        }, {
          denom: 'ORAI',
          exponent: 6
        }],
      base: 'ibc/4846F4382B7843861B6C5051134397359C8C94B547E8EA43EFAFEF4E5F7B7625',
      name: 'Oraichain',
      display: 'ORAI',
      symbol: 'ORAI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.png'
      },
      coingecko_id: 'oraichain-token',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.png',
          theme: {
            circle: true,
            dark_mode: true,
            primary_color_hex: '#040404'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg',
          theme: {
            circle: true,
            dark_mode: true,
            primary_color_hex: '#FFFFFF'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.svg',
          theme: {
            circle: true,
            dark_mode: false,
            primary_color_hex: '#000000'
          }
        }
      ],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'orai',
            chain_name: 'oraichain'
          },
          chain: {
            channel_id: 'channel-301'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/14F9BC3E44B8A9C1BE1FB08980FAB87034C9905EF17CF2F5008FC085218811CC',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/14F9BC3E44B8A9C1BE1FB08980FAB87034C9905EF17CF2F5008FC085218811CC',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          theme: {
            primary_color_hex: '#760dbb'
          }
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      socials: {
        website: 'https://osmosis.zone',
        twitter: 'https://twitter.com/osmosiszone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-141'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/5BB694D466CCF099EF73F165F88472AF51D9C4991EAA42BD1168C5304712CC0D',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/5BB694D466CCF099EF73F165F88472AF51D9C4991EAA42BD1168C5304712CC0D',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg',
          theme: {
            primary_color_hex: '#4453c7'
          }
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        twitter: 'https://twitter.com/_IONDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-141'
          }
        }]
    },
    {
      description: 'Persistence is a blockchain platform designed to facilitate institutional decentralized finance (DeFi) and real-world asset tokenization, integrating with the Cosmos ecosystem.',
      denom_units: [{
          denom: 'ibc/81D08BC39FB520EBD948CF017910DD69702D34BF5AC160F76D3B5CFC444EBCE0',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/81D08BC39FB520EBD948CF017910DD69702D34BF5AC160F76D3B5CFC444EBCE0',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      coingecko_id: 'persistence',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg',
          theme: {
            primary_color_hex: '#242424'
          }
        }],
      socials: {
        website: 'https://persistence.one/',
        twitter: 'https://twitter.com/PersistenceOne'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-24',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-190'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Planq Network',
      denom_units: [{
          denom: 'ibc/1452F322F7B459CB7EC111AD5BD2404552B011375002C8C85BA615A95B9121CF',
          exponent: 0,
          aliases: ['aplanq']
        }, {
          denom: 'planq',
          exponent: 18
        }],
      base: 'ibc/1452F322F7B459CB7EC111AD5BD2404552B011375002C8C85BA615A95B9121CF',
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
      },
      coingecko_id: 'planq',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg',
          theme: {
            primary_color_hex: '#d4f3fb'
          }
        }],
      socials: {
        website: 'https://planq.network',
        twitter: 'https://twitter.com/planqfoundation'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'aplanq',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-446'
          }
        }]
    },
    {
      description: 'The token of Source Protocol bridged from BSC.',
      denom_units: [{
          denom: 'ibc/E991A98232BC057DF4C466958FC5D4CB89EFC4323525EF791CB53EC597EBF8D1',
          exponent: 0,
          aliases: ['erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09']
        }, {
          denom: 'srcx',
          exponent: 9
        }],
      base: 'ibc/E991A98232BC057DF4C466958FC5D4CB89EFC4323525EF791CB53EC597EBF8D1',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-446'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png',
          theme: {
            primary_color_hex: '#7f22bc'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
      }
    },
    {
      description: 'The native governance and staking token of the Point network',
      denom_units: [{
          denom: 'ibc/72132A48050500C99EDE86468719A5CE729A295F5F785E8E40049ACE6DA4F8B9',
          exponent: 0,
          aliases: ['apoint']
        }, {
          denom: 'point',
          exponent: 18
        }],
      base: 'ibc/72132A48050500C99EDE86468719A5CE729A295F5F785E8E40049ACE6DA4F8B9',
      name: 'Point',
      display: 'point',
      symbol: 'POINT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.svg'
      },
      coingecko_id: 'point-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'apoint',
            chain_name: 'point'
          },
          chain: {
            channel_id: 'channel-404'
          }
        }]
    },
    {
      description: 'The native token of PRYZM',
      denom_units: [{
          denom: 'ibc/6157A428CE89ABB9CD524CFA613862AED49BAC4AE104B2B867C4CB1EA506501F',
          exponent: 0,
          aliases: ['upryzm']
        }, {
          denom: 'pryzm',
          exponent: 6
        }],
      base: 'ibc/6157A428CE89ABB9CD524CFA613862AED49BAC4AE104B2B867C4CB1EA506501F',
      name: 'Pryzm',
      display: 'pryzm',
      symbol: 'PRYZM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.svg',
          theme: {
            primary_color_hex: '#c6ddf5'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
          denom: 'ibc/BBB8E7A221C42270ACBEAC5DBC0B26C1AE69DB7802D528F3163D1443FE86E357',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/BBB8E7A221C42270ACBEAC5DBC0B26C1AE69DB7802D528F3163D1443FE86E357',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      coingecko_id: 'quicksilver',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png',
          theme: {
            primary_color_hex: '#b2b2b2'
          }
        }],
      socials: {
        website: 'https://quicksilver.zone/',
        twitter: 'https://twitter.com/quicksilverzone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uqck',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-467'
          }
        }]
    },
    {
      description: 'The native currency of the Realio Network.',
      denom_units: [{
          denom: 'ibc/5ABA00F76E96432A03EACECC47D40BFE42F60B7809FD89DD691E6F40CC8F7AFF',
          exponent: 0,
          aliases: ['ario']
        }, {
          denom: 'rio',
          exponent: 18
        }],
      base: 'ibc/5ABA00F76E96432A03EACECC47D40BFE42F60B7809FD89DD691E6F40CC8F7AFF',
      name: 'Realio Network',
      display: 'rio',
      symbol: 'RIO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
      },
      coingecko_id: 'realio-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg',
          theme: {
            primary_color_hex: '#000000',
            background_color_hex: '#000000',
            circle: true
          }
        }],
      socials: {
        webiste: 'https://realio.network/',
        twitter: 'https://x.com/realio_network'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ario',
            chain_name: 'realio'
          },
          chain: {
            channel_id: 'channel-645'
          }
        }]
    },
    {
      description: 'A hybrid equity token that represent ownership of the Realio Ecosystem and provides utility functions on the Network.',
      denom_units: [{
          denom: 'ibc/143B32D7DC3D6734660694CC89F323C2CD0BEA98A12A6BBDD25BC06C2710C267',
          exponent: 0,
          aliases: ['arst']
        }, {
          denom: 'rst',
          exponent: 18
        }],
      base: 'ibc/143B32D7DC3D6734660694CC89F323C2CD0BEA98A12A6BBDD25BC06C2710C267',
      name: 'Realio Security Token',
      display: 'rst',
      symbol: 'RST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rst.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rst.png',
          theme: {
            primary_color_hex: '#e0e0e0'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'arst',
            chain_name: 'realio'
          },
          chain: {
            channel_id: 'channel-645'
          }
        }]
    },
    {
      description: 'REGEN coin is the token for the Regen Network Platform',
      denom_units: [{
          denom: 'ibc/1FBDD58D438B4D04D26CBFB2E722C18984A0F1A52468C4F42F37D102F3D3F399',
          exponent: 0,
          aliases: ['uregen']
        }, {
          denom: 'regen',
          exponent: 6
        }],
      base: 'ibc/1FBDD58D438B4D04D26CBFB2E722C18984A0F1A52468C4F42F37D102F3D3F399',
      name: 'Regen Network',
      display: 'regen',
      symbol: 'REGEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
      },
      coingecko_id: 'regen',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg',
          theme: {
            primary_color_hex: '#56b790'
          }
        }],
      socials: {
        website: 'https://www.regen.network/',
        twitter: 'https://twitter.com/regen_network'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'uregen',
            chain_name: 'regen'
          },
          chain: {
            channel_id: 'channel-185'
          }
        }]
    },
    {
      description: 'Nature Carbon Ton (NCT) is a carbon token standard backed 1:1 by carbon credits issued by Verra, a global leader in the voluntary carbon market. NCT credits on Regen Network have been tokenized by Toucan.earth.',
      denom_units: [{
          denom: 'ibc/7854965E064D606B35FC42E7208A2CF97FE63EB2C539D1FFF12DDC85BCFB7621',
          exponent: 0,
          aliases: ['eco.uC.NCT']
        }, {
          denom: 'nct',
          exponent: 6
        }],
      base: 'ibc/7854965E064D606B35FC42E7208A2CF97FE63EB2C539D1FFF12DDC85BCFB7621',
      name: 'Nature Carbon Ton',
      display: 'nct',
      symbol: 'NCT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
      },
      coingecko_id: 'toucan-protocol-nature-carbon-tonne',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg',
          theme: {
            primary_color_hex: '#171c25'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'eco.uC.NCT',
            chain_name: 'regen'
          },
          chain: {
            channel_id: 'channel-185'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/1542F8DC70E7999691E991E1EDEB1B47E65E3A217B1649D347098EE48ACB580F',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/1542F8DC70E7999691E991E1EDEB1B47E65E3A217B1649D347098EE48ACB580F',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      coingecko_id: 'secret',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://scrt.network/',
        twitter: 'https://twitter.com/SecretNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-235'
          }
        }]
    },
    {
      description: 'Sei is a layer-1 blockchain optimized for trading, focusing on providing high throughput, low latency, and efficient execution for decentralized exchanges.',
      denom_units: [{
          denom: 'ibc/261460D72BA2141BC77D439038343CB2B37C87B4148B4D5E30A5168A93E3E1D9',
          exponent: 0,
          aliases: ['usei']
        }, {
          denom: 'sei',
          exponent: 6
        }],
      base: 'ibc/261460D72BA2141BC77D439038343CB2B37C87B4148B4D5E30A5168A93E3E1D9',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
      },
      coingecko_id: 'sei-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg',
          theme: {
            primary_color_hex: '#9c1c1c'
          }
        }],
      socials: {
        website: 'https://www.sei.io/',
        twitter: 'https://twitter.com/SeiNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'usei',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-584'
          }
        }]
    },
    {
      description: 'OOZARU is a meme token on SEI Network inspired by the iconic transformation in the Dragon Ball series',
      denom_units: [{
          denom: 'ibc/582D087820E10FF09C4F98253878701F659AB423C9E195D7FB913F923FA4398E',
          exponent: 0,
          aliases: ['sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda']
        }, {
          denom: 'oozaru',
          exponent: 6
        }],
      base: 'ibc/582D087820E10FF09C4F98253878701F659AB423C9E195D7FB913F923FA4398E',
      name: 'Oozaru',
      display: 'oozaru',
      symbol: 'OOZARU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oozaru.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oozaru.png',
          theme: {
            primary_color_hex: '#2b1619'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-584'
          }
        }]
    },
    {
      description: 'The native staking token of Self Chain.',
      denom_units: [{
          denom: 'ibc/07C1552AD0D5C8FE63F7E9AAD52E0488D5A9C2D2F49C0D9A0EFF940F5034C8FC',
          exponent: 0,
          aliases: ['uslf']
        }, {
          denom: 'slf',
          exponent: 6
        }],
      base: 'ibc/07C1552AD0D5C8FE63F7E9AAD52E0488D5A9C2D2F49C0D9A0EFF940F5034C8FC',
      name: 'Self',
      display: 'slf',
      symbol: 'SLF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/self/images/self.png'
      },
      coingecko_id: 'self-chain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/self/images/self.png',
          theme: {
            primary_color_hex: '#9454f1'
          }
        }],
      socials: {
        website: 'https://selfchain.xyz',
        twitter: 'https://x.com/selfchainxyz'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uslf',
            chain_name: 'self'
          },
          chain: {
            channel_id: 'channel-892'
          }
        }]
    },
    {
      description: 'Sentinel is a decentralized VPN (dVPN) network that provides private and secure internet access by leveraging blockchain technology.',
      denom_units: [{
          denom: 'ibc/42E47A5BA708EBE6E0C227006254F2784E209F4DBD3C6BB77EDC4B29EF875E8E',
          exponent: 0,
          aliases: ['udvpn']
        }, {
          denom: 'dvpn',
          exponent: 6
        }],
      base: 'ibc/42E47A5BA708EBE6E0C227006254F2784E209F4DBD3C6BB77EDC4B29EF875E8E',
      name: 'Sentinel',
      display: 'dvpn',
      symbol: 'DVPN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
      },
      coingecko_id: 'sentinel',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg',
          theme: {
            primary_color_hex: '#10a7ef'
          }
        }],
      socials: {
        website: 'https://www.sentinel.co/',
        twitter: 'https://x.com/SentinelDVPN'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'udvpn',
            chain_name: 'sentinel'
          },
          chain: {
            channel_id: 'channel-186'
          }
        }]
    },
    {
      description: 'Rowan Token (ROWAN) is the Sifchain Network\'s native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denom_units: [{
          denom: 'ibc/F5ED5F3DC6F0EF73FA455337C027FE91ABCB375116BF51A228E44C493E020A09',
          exponent: 0,
          aliases: ['rowan']
        }, {
          denom: 'ROWAN',
          exponent: 18
        }],
      base: 'ibc/F5ED5F3DC6F0EF73FA455337C027FE91ABCB375116BF51A228E44C493E020A09',
      name: 'Sifchain Rowan',
      display: 'ROWAN',
      symbol: 'ROWAN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
      },
      coingecko_id: 'sifchain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg',
          theme: {
            primary_color_hex: '#be9926'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'rowan',
            chain_name: 'sifchain'
          },
          chain: {
            channel_id: 'channel-192'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the StaFi Hub.',
      denom_units: [{
          denom: 'ibc/70406F10D3B62B53729A9DFCC1CADC3F5E32E1767D413D7140C35F75E8476400',
          exponent: 0,
          aliases: ['ufis']
        }, {
          denom: 'fis',
          exponent: 6
        }],
      base: 'ibc/70406F10D3B62B53729A9DFCC1CADC3F5E32E1767D413D7140C35F75E8476400',
      name: 'FIS',
      display: 'fis',
      symbol: 'FIS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
      },
      coingecko_id: 'stafi',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ufis',
            chain_name: 'stafihub'
          },
          chain: {
            channel_id: 'channel-369'
          }
        }]
    },
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      denom_units: [{
          denom: 'ibc/F79A876741A3A49DD66421F63CD68FC43A5F92C381EB1415966277BF66C720A7',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/F79A876741A3A49DD66421F63CD68FC43A5F92C381EB1415966277BF66C720A7',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      coingecko_id: 'stargaze',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
          theme: {
            primary_color_hex: '#db2777'
          }
        }],
      socials: {
        website: 'https://www.stargaze.zone/',
        twitter: 'https://twitter.com/StargazeZone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-239',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-730'
          }
        }]
    },
    {
      description: 'IOV coin is the token for the Starname (IOV) Asset Name Service',
      denom_units: [{
          denom: 'ibc/68A333688E5B07451F95555F8FE510E43EF9D3D44DF0909964F92081EF9BE5A7',
          exponent: 0,
          aliases: ['uiov']
        }, {
          denom: 'iov',
          exponent: 6
        }],
      base: 'ibc/68A333688E5B07451F95555F8FE510E43EF9D3D44DF0909964F92081EF9BE5A7',
      name: 'Starname',
      display: 'iov',
      symbol: 'IOV',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
      },
      coingecko_id: 'starname',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg',
          theme: {
            primary_color_hex: '#5c64b4'
          }
        }],
      socials: {
        website: 'https://app.starname.me/',
        twitter: 'https://twitter.com/starname_me'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uiov',
            chain_name: 'starname'
          },
          chain: {
            channel_id: 'channel-158'
          }
        }]
    },
    {
      description: 'Stride is a liquid staking blockchain in the Cosmos ecosystem that allows users to stake any IBC-compatible tokens and receive stTokens in return, providing liquidity while earning staking rewards.',
      denom_units: [{
          denom: 'ibc/6B8A3F5C2AD51CD6171FA41A7E8C35AD594AB69226438DB94450436EA57B3A89',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/6B8A3F5C2AD51CD6171FA41A7E8C35AD594AB69226438DB94450436EA57B3A89',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      coingecko_id: 'stride',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg',
          theme: {
            primary_color_hex: '#e4047c'
          }
        }],
      socials: {
        website: 'https://stride.zone/',
        twitter: 'https://twitter.com/stride_zone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-391'
          }
        }]
    },
    {
      description: 'The native token of Teritori',
      denom_units: [{
          denom: 'ibc/09334FF8B9AD27E39D37E3B80E73F48474289173AEFBB285BAD4D4B256707C46',
          exponent: 0,
          aliases: ['utori']
        }, {
          denom: 'tori',
          exponent: 6
        }],
      base: 'ibc/09334FF8B9AD27E39D37E3B80E73F48474289173AEFBB285BAD4D4B256707C46',
      name: 'Teritori',
      display: 'tori',
      symbol: 'TORI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
      },
      coingecko_id: 'teritori',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'utori',
            chain_name: 'teritori'
          },
          chain: {
            channel_id: 'channel-431'
          }
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [{
          denom: 'ibc/34CEF8B6A6424C45FE3CCC4A02C9DF9BB38BACC323E08DFFEFE9E4B18BB89AC4',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/34CEF8B6A6424C45FE3CCC4A02C9DF9BB38BACC323E08DFFEFE9E4B18BB89AC4',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      coingecko_id: 'terra-luna-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg',
          theme: {
            primary_color_hex: '#f4de6f'
          }
        }],
      socials: {
        website: 'https://www.terra.money/',
        twitter: 'https://twitter.com/terra_money'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-339'
          }
        }]
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/DEC41A02E47658D40FC71E5A35A9C807111F5A6662A3FB5DA84C4E6F53E616B3',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'ibc/DEC41A02E47658D40FC71E5A35A9C807111F5A6662A3FB5DA84C4E6F53E616B3',
      name: 'Umee',
      display: 'umee',
      symbol: 'UMEE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
      },
      coingecko_id: 'umee',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg',
          theme: {
            primary_color_hex: '#22f2e9'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel_id: 'channel-288'
          }
        }]
    },
    {
      description: 'The native token of Uptick',
      denom_units: [{
          denom: 'ibc/437D75DE90D857540013EB4BFAA57D600CC78A0D6233FF7C8E3204F066CA0C09',
          exponent: 0,
          aliases: ['auptick']
        }, {
          denom: 'uptick',
          exponent: 18
        }],
      base: 'ibc/437D75DE90D857540013EB4BFAA57D600CC78A0D6233FF7C8E3204F066CA0C09',
      name: 'Uptick',
      display: 'uptick',
      symbol: 'UPTICK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg',
          theme: {
            primary_color_hex: '#1f182f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'auptick',
            chain_name: 'uptick'
          },
          chain: {
            channel_id: 'channel-535'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/3F18D520CE791A40357D061FAD657CED6B21D023F229EAF131D7FE7CE6F488BD',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/3F18D520CE791A40357D061FAD657CED6B21D023F229EAF131D7FE7CE6F488BD',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      coingecko_id: 'crescent-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg',
          theme: {
            primary_color_hex: '#3c2832'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-326'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/835EE9D00C35D72128F195B50F8A89EB83E5011C43EA0AA00D16348E2208FEBB',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/835EE9D00C35D72128F195B50F8A89EB83E5011C43EA0AA00D16348E2208FEBB',
      name: 'Bonded Crescent',
      display: 'bcre',
      symbol: 'bCRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
      },
      coingecko_id: 'liquid-staking-crescent',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg',
          theme: {
            primary_color_hex: '#df969f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-326'
          }
        }]
    },
    {
      description: 'CRO is the native token of the Crypto.org Chain, referred to as Native CRO.',
      denom_units: [{
          denom: 'ibc/C932ADFE2B4216397A4F17458B6E4468499B86C3BC8116180F85D799D6F5CC1B',
          exponent: 0,
          aliases: ['basecro']
        }, {
          denom: 'cro',
          exponent: 8
        }],
      base: 'ibc/C932ADFE2B4216397A4F17458B6E4468499B86C3BC8116180F85D799D6F5CC1B',
      name: 'Cronos',
      display: 'cro',
      symbol: 'CRO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
      },
      coingecko_id: 'crypto-com-chain',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
          theme: {
            primary_color_hex: '#0c2c71'
          }
        }],
      socials: {
        website: 'https://cronos.org/',
        twitter: 'https://twitter.com/cronos_chain'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-27',
            base_denom: 'basecro',
            chain_name: 'cryptoorgchain'
          },
          chain: {
            channel_id: 'channel-187'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Theta testnet version of the Dora Vota.',
      denom_units: [{
          denom: 'ibc/AB556501A8873E00928AD9A75245D6178747111913D292ABB269D268950CB8B7',
          exponent: 0,
          aliases: ['peaka']
        }, {
          denom: 'DORA',
          exponent: 18
        }],
      base: 'ibc/AB556501A8873E00928AD9A75245D6178747111913D292ABB269D268950CB8B7',
      name: 'Dora Vota',
      display: 'DORA',
      symbol: 'DORA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/doravota.png',
          theme: {
            primary_color_hex: '#fba214'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'peaka',
            chain_name: 'doravota'
          },
          chain: {
            channel_id: 'channel-750'
          }
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/49ACCECDED4A6A2B5DD683FA048235F4F66B65F58CD558C9A441195502191D01',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/49ACCECDED4A6A2B5DD683FA048235F4F66B65F58CD558C9A441195502191D01',
      name: 'Dymension',
      display: 'dym',
      symbol: 'DYM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
      },
      coingecko_id: 'dymension',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg',
          theme: {
            primary_color_hex: '#f4e4d4'
          }
        }],
      socials: {
        website: 'https://portal.dymension.xyz',
        twitter: 'https://twitter.com/dymension'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'adym',
            chain_name: 'dymension'
          },
          chain: {
            channel_id: 'channel-794'
          }
        }]
    },
    {
      description: 'e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.',
      denom_units: [{
          denom: 'ibc/E070CE91CC4BD15AEC9B5788C0826755AAD35052A3037E9AC62BE70B4C9A7DBB',
          exponent: 0,
          aliases: ['ungm']
        }, {
          denom: 'ngm',
          exponent: 6
        }],
      base: 'ibc/E070CE91CC4BD15AEC9B5788C0826755AAD35052A3037E9AC62BE70B4C9A7DBB',
      name: 'e-Money',
      display: 'ngm',
      symbol: 'NGM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
      },
      coingecko_id: 'e-money',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg',
          theme: {
            primary_color_hex: '#caf2ea'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ungm',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/B93F321238F7BB15AB5B882660AAE72286C8E9035DE34E2B30F60E54C623C63C',
          exponent: 0,
          aliases: ['eeur']
        }, {
          denom: 'eur',
          exponent: 6
        }],
      base: 'ibc/B93F321238F7BB15AB5B882660AAE72286C8E9035DE34E2B30F60E54C623C63C',
      name: 'e-Money EUR',
      display: 'eur',
      symbol: 'EEUR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
      },
      coingecko_id: 'e-money-eur',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg',
          theme: {
            primary_color_hex: '#f4c808'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'eeur',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'e-Money CHF stablecoin. Audited and backed by fiat CHF deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/96344D426100A0885D84F1C588E3C2C2A8CB2A82B446FC8F63B91E4B70BF33EB',
          exponent: 0,
          aliases: ['echf']
        }, {
          denom: 'chf',
          exponent: 6
        }],
      base: 'ibc/96344D426100A0885D84F1C588E3C2C2A8CB2A82B446FC8F63B91E4B70BF33EB',
      name: 'e-Money CHF',
      display: 'chf',
      symbol: 'ECHF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.svg',
          theme: {
            primary_color_hex: '#db2b1c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'echf',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'e-Money NOK stablecoin. Audited and backed by fiat NOK deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/F998631ADCB33376AB66126D8BF5212314F15A960C215180D06ECFA9FA7F48E6',
          exponent: 0,
          aliases: ['enok']
        }, {
          denom: 'nok',
          exponent: 6
        }],
      base: 'ibc/F998631ADCB33376AB66126D8BF5212314F15A960C215180D06ECFA9FA7F48E6',
      name: 'e-Money NOK',
      display: 'nok',
      symbol: 'ENOK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.svg',
          theme: {
            primary_color_hex: '#cb142d'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'enok',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'e-Money DKK stablecoin. Audited and backed by fiat DKK deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/6EC3B085692C4507A2365E88E82CBCB32DD58E0099056CBC16824D2EE99C5E00',
          exponent: 0,
          aliases: ['edkk']
        }, {
          denom: 'dkk',
          exponent: 6
        }],
      base: 'ibc/6EC3B085692C4507A2365E88E82CBCB32DD58E0099056CBC16824D2EE99C5E00',
      name: 'e-Money DKK',
      display: 'dkk',
      symbol: 'EDKK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.svg',
          theme: {
            primary_color_hex: '#ac0c34'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'edkk',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'e-Money SEK stablecoin. Audited and backed by fiat SEK deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/178B678FFA6991C1064332FBA0C9A4FC954E3DD66DD5B692761172DB5559F6D2',
          exponent: 0,
          aliases: ['esek']
        }, {
          denom: 'sek',
          exponent: 6
        }],
      base: 'ibc/178B678FFA6991C1064332FBA0C9A4FC954E3DD66DD5B692761172DB5559F6D2',
      name: 'e-Money SEK',
      display: 'sek',
      symbol: 'ESEK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.svg',
          theme: {
            primary_color_hex: '#045493'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'esek',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Empower.',
      denom_units: [{
          denom: 'ibc/F58D58F943FC243D4FE0CFE0A9E01DB420DDF994D18C9A7F2939FF1C4C278C31',
          exponent: 0,
          aliases: ['umpwr']
        }, {
          denom: 'mpwr',
          exponent: 6
        }],
      base: 'ibc/F58D58F943FC243D4FE0CFE0A9E01DB420DDF994D18C9A7F2939FF1C4C278C31',
      name: 'MPWR',
      display: 'mpwr',
      symbol: 'MPWR',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg',
          theme: {
            primary_color_hex: '#00e33a',
            background_color_hex: '#00e33a',
            circle: true
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.png',
          theme: {
            primary_color_hex: '#00e33a',
            background_color_hex: '#00e33a',
            circle: false
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'umpwr',
            chain_name: 'empowerchain'
          },
          chain: {
            channel_id: 'channel-621'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [{
          denom: 'ibc/19DD710119533524061885A6F190B18AF28D9537E2BAE37F32A62C1A25979287',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      base: 'ibc/19DD710119533524061885A6F190B18AF28D9537E2BAE37F32A62C1A25979287',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
      },
      coingecko_id: 'evmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg',
          theme: {
            primary_color_hex: '#ec4c34'
          }
        }],
      socials: {
        website: 'https://evmos.org/',
        twitter: 'https://twitter.com/EvmosOrg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-292'
          }
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [{
          denom: 'ibc/FCB0126B85D91CCBDF17FC273023372D41DE033B6E6B666EA2E0E30EAECFEFFC',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      base: 'ibc/FCB0126B85D91CCBDF17FC273023372D41DE033B6E6B666EA2E0E30EAECFEFFC',
      name: 'Neokingdom DAO',
      display: 'neok',
      symbol: 'NEOK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg',
          theme: {
            primary_color_hex: '#7f0f70'
          }
        }],
      socials: {
        website: 'https://www.neokingdom.org/',
        twitter: 'https://twitter.com/NEOKingdomDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-292'
          }
        }]
    },
    {
      description: 'The legacy token of Teledisko DAO.',
      denom_units: [{
          denom: 'ibc/AE07DE43C4743BA0CE79576B70B280516F395F2F45B905668B150A022DDA4080',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin-legacy',
          exponent: 18
        }],
      base: 'ibc/AE07DE43C4743BA0CE79576B70B280516F395F2F45B905668B150A022DDA4080',
      name: 'Teledisko DAO - Legacy',
      display: 'berlin-legacy',
      symbol: 'BERLIN-legacy',
      type_asset: 'erc20',
      address: '0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg',
          theme: {
            primary_color_hex: '#bbce1a'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-292'
          }
        }]
    },
    {
      description: 'The token of Crowdpunk DAO',
      denom_units: [{
          denom: 'ibc/A47B41DD2A35A8B8EA4350C78745E33000791DAD8E7BFDE767B823912FD62AC4',
          exponent: 0,
          aliases: ['erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'ibc/A47B41DD2A35A8B8EA4350C78745E33000791DAD8E7BFDE767B823912FD62AC4',
      name: 'Crowdpunk DAO',
      display: 'crowdp',
      address: '0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f',
      symbol: 'CROWDP',
      type_asset: 'erc20',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg',
          theme: {
            primary_color_hex: '#04fbfb'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-292'
          }
        }]
    },
    {
      description: 'The native staking token of the Function X',
      denom_units: [{
          denom: 'ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729',
          exponent: 0,
          aliases: ['FX']
        }, {
          denom: 'WFX',
          exponent: 18
        }],
      base: 'ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729',
      name: 'Function X',
      display: 'WFX',
      symbol: 'FX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
      },
      coingecko_id: 'fx-coin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }],
      socials: {
        website: 'https://functionx.io',
        twitter: 'https://x.com/functionx_io'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'FX',
            chain_name: 'fxcore'
          },
          chain: {
            channel_id: 'channel-585'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Haqq Network',
      denom_units: [{
          denom: 'ibc/5CF697413DE79A9340E8B77A278FEBF6ACD17CB22DAAF758841959A8D69A2859',
          exponent: 0,
          aliases: ['aISLM']
        }, {
          denom: 'ISLM',
          exponent: 18
        }],
      base: 'ibc/5CF697413DE79A9340E8B77A278FEBF6ACD17CB22DAAF758841959A8D69A2859',
      name: 'Islamic Coin',
      display: 'ISLM',
      symbol: 'ISLM',
      coingecko_id: 'islamic-coin',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg',
          theme: {
            primary_color_hex: '#04cd80'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'aISLM',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-632'
          }
        }]
    },
    {
      description: 'The native token of IXO Chain',
      denom_units: [{
          denom: 'ibc/B2B5AEE174062FA7804AC95223D8169852F8F58962C51C66391C272C838258B7',
          exponent: 0,
          aliases: ['uixo']
        }, {
          denom: 'ixo',
          exponent: 6
        }],
      base: 'ibc/B2B5AEE174062FA7804AC95223D8169852F8F58962C51C66391C272C838258B7',
      name: 'IXO',
      display: 'ixo',
      symbol: 'IXO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
      },
      coingecko_id: 'ixo',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg',
          theme: {
            primary_color_hex: '#2c4484'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uixo',
            chain_name: 'impacthub'
          },
          chain: {
            channel_id: 'channel-204'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/6469BDA6F62C4F4B8F76629FA1E72A02A3D1DD9E2B22DDB3C3B2296DEAD29AB8',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/6469BDA6F62C4F4B8F76629FA1E72A02A3D1DD9E2B22DDB3C3B2296DEAD29AB8',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      coingecko_id: 'injective-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
          theme: {
            primary_color_hex: '#04a2fc'
          }
        }],
      socials: {
        website: 'https://injective.com/',
        twitter: 'https://twitter.com/Injective_'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/74392C3C1F0A88C62C5FF0C77E444D8BBA11FAE3F7AC337891219BEF76ED0178',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/74392C3C1F0A88C62C5FF0C77E444D8BBA11FAE3F7AC337891219BEF76ED0178',
      name: 'Ninpo',
      display: 'NINPO',
      symbol: 'NINPO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png',
          theme: {
            primary_color_hex: '#31292a'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/723426A05EDCE0BAA4FDC47A022881CDA0F0BE8063BDA625155BA3BB424744E0',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/723426A05EDCE0BAA4FDC47A022881CDA0F0BE8063BDA625155BA3BB424744E0',
      name: 'Judo',
      display: 'JUDO',
      symbol: 'JUDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png',
          theme: {
            primary_color_hex: '#18120f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/CF2927188866FEF274217FA353B726408815DA0851753321DE7E7F11047A2737',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/CF2927188866FEF274217FA353B726408815DA0851753321DE7E7F11047A2737',
      name: 'Neptune Receipt INJ',
      display: 'nINJ',
      symbol: 'nINJ',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninj.png',
          theme: {
            primary_color_hex: '#293a6f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/FEF72C8A43A9A60B15EE7BD44BE87D5C44E9DBD071B7D5517F999B0F6CC2E5EE',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/FEF72C8A43A9A60B15EE7BD44BE87D5C44E9DBD071B7D5517F999B0F6CC2E5EE',
      name: 'Neptune Receipt ATOM',
      display: 'nATOM',
      symbol: 'nATOM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/natom.png',
          theme: {
            primary_color_hex: '#272f4b'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/BB027877671118BE5B1424F303B9D58FB500478B5EB7D16909B72A28029D3520',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/BB027877671118BE5B1424F303B9D58FB500478B5EB7D16909B72A28029D3520',
      name: 'Neptune Receipt WETH',
      display: 'nWETH',
      symbol: 'nWETH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nweth.png',
          theme: {
            primary_color_hex: '#2a303f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/57535F8B5C6B26D4459F48C3622E735DEB1AAB38AE8ABA6F951A782546434AF6',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/57535F8B5C6B26D4459F48C3622E735DEB1AAB38AE8ABA6F951A782546434AF6',
      name: 'Neptune Receipt USDT',
      display: 'nUSDT',
      symbol: 'nUSDT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nusdt.png',
          theme: {
            primary_color_hex: '#54ac94'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/364AF8695E6F89645850CD93737DF602E34317467B8B6302EC6D71C811007314',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/364AF8695E6F89645850CD93737DF602E34317467B8B6302EC6D71C811007314',
      name: 'Neptune Receipt TIA',
      display: 'nTIA',
      symbol: 'nTIA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ntia.png',
          theme: {
            primary_color_hex: '#7931f9'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'The IRIS token is the native governance token for the IrisNet chain.',
      denom_units: [{
          denom: 'ibc/12DA42304EE1CE96071F712AA4D58186AD11C3165C0DCDA71E017A54F3935E66',
          exponent: 0,
          aliases: ['uiris']
        }, {
          denom: 'iris',
          exponent: 6
        }],
      base: 'ibc/12DA42304EE1CE96071F712AA4D58186AD11C3165C0DCDA71E017A54F3935E66',
      name: 'IRISnet',
      display: 'iris',
      symbol: 'IRIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
      },
      coingecko_id: 'iris-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg',
          theme: {
            primary_color_hex: '#5664ad'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'uiris',
            chain_name: 'irisnet'
          },
          chain: {
            channel_id: 'channel-182'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Joltify',
      denom_units: [{
          denom: 'ibc/9B76DFC21CF8F4DF5B8514CE82D2CCE79415C4F8525E04509BB48B487CB213DE',
          exponent: 0,
          aliases: ['ujolt']
        }, {
          denom: 'jolt',
          exponent: 6
        }],
      base: 'ibc/9B76DFC21CF8F4DF5B8514CE82D2CCE79415C4F8525E04509BB48B487CB213DE',
      name: 'Joltify',
      display: 'jolt',
      symbol: 'JOLT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/joltify/images/jolt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/joltify/images/jolt.svg',
          theme: {
            primary_color_hex: '#2dfb71'
          }
        }],
      coingecko_id: 'joltify',
      keywords: ['staking'],
      socials: {
        website: 'https://www.joltify.io/',
        twitter: 'https://twitter.com/joltify_finance'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ujolt',
            chain_name: 'joltify'
          },
          chain: {
            channel_id: 'channel-866'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/CDAB23DA5495290063363BD1C3499E26189036302DC689985A7E23F8DF8D8DB0',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/CDAB23DA5495290063363BD1C3499E26189036302DC689985A7E23F8DF8D8DB0',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      coingecko_id: 'juno-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg',
          theme: {
            primary_color_hex: '#fa7b7b'
          }
        }],
      socials: {
        website: 'https://junonetwork.io/',
        twitter: 'https://twitter.com/JunoNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-207'
          }
        }]
    },
    {
      description: 'Kava is a decentralized finance (DeFi) platform that provides a range of financial services, including lending, borrowing, and stablecoins, leveraging the Cosmos and Ethereum ecosystems.',
      denom_units: [{
          denom: 'ibc/8870C4203CEBF2279BA065E3DE95FC3F8E05A4A93424E7DC707A21514BE353A0',
          exponent: 0,
          aliases: ['ukava']
        }, {
          denom: 'kava',
          exponent: 6
        }],
      base: 'ibc/8870C4203CEBF2279BA065E3DE95FC3F8E05A4A93424E7DC707A21514BE353A0',
      name: 'Kava',
      display: 'kava',
      symbol: 'KAVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
      },
      coingecko_id: 'kava',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg',
          theme: {
            primary_color_hex: '#e64942'
          }
        }],
      socials: {
        website: 'https://www.kava.io/',
        twitter: 'https://twitter.com/KAVA_CHAIN'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ukava',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-277'
          }
        }]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [{
          denom: 'ibc/752AC6B389EB9F16013C07987A3A04203EABABEB811F0026A24A5A29CF014366',
          exponent: 0,
          aliases: ['hard']
        }, {
          denom: 'HARD',
          exponent: 6
        }],
      base: 'ibc/752AC6B389EB9F16013C07987A3A04203EABABEB811F0026A24A5A29CF014366',
      name: 'Kava Hard',
      display: 'HARD',
      symbol: 'HARD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
      },
      coingecko_id: 'kava-lend',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg',
          theme: {
            primary_color_hex: '#7b34ac'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'hard',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-277'
          }
        }]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [{
          denom: 'ibc/58E6660E723E3D6854A1190E2516AF71280F0B20510ABA1A13456F5D204F6D7D',
          exponent: 0,
          aliases: ['swp']
        }, {
          denom: 'SWP',
          exponent: 6
        }],
      base: 'ibc/58E6660E723E3D6854A1190E2516AF71280F0B20510ABA1A13456F5D204F6D7D',
      name: 'Kava Swap',
      display: 'SWP',
      symbol: 'SWP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      coingecko_id: 'kava-swap',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg',
          theme: {
            primary_color_hex: '#544cfc'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'swp',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-277'
          }
        }]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [{
          denom: 'ibc/621EBC891F642B44778FD0E9DACBBC14755280C897DD010AA104889C3FDCED06',
          exponent: 0,
          aliases: ['usdx']
        }, {
          denom: 'USDX',
          exponent: 6
        }],
      base: 'ibc/621EBC891F642B44778FD0E9DACBBC14755280C897DD010AA104889C3FDCED06',
      name: 'Kava USDX',
      display: 'USDX',
      symbol: 'USDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
      },
      coingecko_id: 'usdx',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg',
          theme: {
            primary_color_hex: '#04d4a3'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'usdx',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-277'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0',
          exponent: 0,
          aliases: ['erc20/tether/usdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: 'ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      coingecko_id: 'tether',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'erc20/tether/usdt',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-277'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primary_color_hex: '#009393',
            background_color_hex: '#009393'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'The native token of Ki Chain',
      denom_units: [{
          denom: 'ibc/533E5FFC606FD11B8DCA309C66AFD6A1F046EF784A73F323A332CF6823F0EA87',
          exponent: 0,
          aliases: ['uxki']
        }, {
          denom: 'xki',
          exponent: 6
        }],
      base: 'ibc/533E5FFC606FD11B8DCA309C66AFD6A1F046EF784A73F323A332CF6823F0EA87',
      name: 'Ki',
      display: 'xki',
      symbol: 'XKI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
      },
      coingecko_id: 'ki',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg',
          theme: {
            primary_color_hex: '#1c04fc'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uxki',
            chain_name: 'kichain'
          },
          chain: {
            channel_id: 'channel-223'
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/4CC44260793F84006656DD868E017578F827A492978161DA31D7572BCB3F4289',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/4CC44260793F84006656DD868E017578F827A492978161DA31D7572BCB3F4289',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      coingecko_id: 'kujira',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg',
          theme: {
            primary_color_hex: '#e33b34'
          }
        }],
      socials: {
        website: 'https://kujira.network/',
        twitter: 'https://twitter.com/TeamKujira'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-343'
          }
        }]
    },
    {
      description: 'LIKE is the native staking and governance token of LikeCoin chain, a Decentralized Publishing Infrastructure to empower content ownership, authenticity, and provenance.',
      denom_units: [{
          denom: 'ibc/1D5826F7EDE6E3B13009FEF994DC9CAAF15CC24CA7A9FF436FFB2E56FD72F54F',
          exponent: 0,
          aliases: ['nanolike']
        }, {
          denom: 'like',
          exponent: 9
        }],
      base: 'ibc/1D5826F7EDE6E3B13009FEF994DC9CAAF15CC24CA7A9FF436FFB2E56FD72F54F',
      name: 'LikeCoin',
      display: 'like',
      symbol: 'LIKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
      },
      coingecko_id: 'likecoin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg',
          theme: {
            primary_color_hex: '#2d656c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'nanolike',
            chain_name: 'likecoin'
          },
          chain: {
            channel_id: 'channel-217'
          }
        }]
    },
    {
      description: 'Native token of the Lum Network',
      denom_units: [{
          denom: 'ibc/3B87FAEE2F62BF291AE771D9EC3A8894A4533F3E2872592F96FEDFDB97680EC1',
          exponent: 0,
          aliases: ['ulum']
        }, {
          denom: 'lum',
          exponent: 6
        }],
      base: 'ibc/3B87FAEE2F62BF291AE771D9EC3A8894A4533F3E2872592F96FEDFDB97680EC1',
      name: 'Lum',
      display: 'lum',
      symbol: 'LUM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
      },
      coingecko_id: 'lum-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg',
          theme: {
            primary_color_hex: '#080808'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'ulum',
            chain_name: 'lumnetwork'
          },
          chain: {
            channel_id: 'channel-566'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/0025F8A87464A471E66B234C4F93AEC5B4DA3D42D7986451A059273426290DD5',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/0025F8A87464A471E66B234C4F93AEC5B4DA3D42D7986451A059273426290DD5',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
      },
      coingecko_id: 'neutron-3',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg',
          theme: {
            primary_color_hex: '#040404',
            background_color_hex: '#000000',
            circle: true
          }
        }],
      socials: {
        website: 'https://neutron.org/',
        twitter: 'https://twitter.com/Neutron_org'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-569'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/47D6FC41B4C45A9F47C045755E07C839EB12F4ACCEB39C74E9959C0C0811EF11',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/47D6FC41B4C45A9F47C045755E07C839EB12F4ACCEB39C74E9959C0C0811EF11',
      name: 'Bitcosmos',
      display: 'bitcosmos',
      symbol: 'BTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png',
          theme: {
            primary_color_hex: '#1b0847'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-569'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/ABB481A12EADB23AF90AAADF4F722B86E3A87A0D1E8FEBD1720836AD353E703E',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/ABB481A12EADB23AF90AAADF4F722B86E3A87A0D1E8FEBD1720836AD353E703E',
      name: 'wtf',
      display: 'wtf',
      symbol: 'WTF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png',
          theme: {
            primary_color_hex: '#dcd5ab'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-569'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/BA7024C8DD092F2DDC83D1886BDA94102396C46DF6D7A478CFA0138BAFE811D7',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/BA7024C8DD092F2DDC83D1886BDA94102396C46DF6D7A478CFA0138BAFE811D7',
      name: 'boy',
      display: 'boy',
      symbol: 'BOY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png',
          theme: {
            primary_color_hex: '#333333'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-569'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/7AED338D55DDE4CECFD35253E6349D7571B66897C590F75B6420C854B20DA692',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/7AED338D55DDE4CECFD35253E6349D7571B66897C590F75B6420C854B20DA692',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg',
          theme: {
            primary_color_hex: '#a8bbfb'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-536'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/63B7FB38B505DE63FC5F031B9E4AD6BF9FED63A36655F83E115A86CDEEA66826',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      base: 'ibc/63B7FB38B505DE63FC5F031B9E4AD6BF9FED63A36655F83E115A86CDEEA66826',
      display: 'frienzies',
      name: 'Frienzies',
      symbol: 'FRNZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg',
          theme: {
            primary_color_hex: '#04041c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-536'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/9AD012273BA6B6C2E7B88BFFFA984E58C0447A16877C493C617813634AB833DF',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/9AD012273BA6B6C2E7B88BFFFA984E58C0447A16877C493C617813634AB833DF',
      display: 'usdy',
      name: 'Ondo US Dollar Yield',
      symbol: 'USDY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg',
          theme: {
            primary_color_hex: '#142c5c'
          }
        }],
      socials: {
        website: 'https://ondo.finance/usdy',
        twitter: 'https://x.com/OndoFinance'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-536'
          }
        }]
    },
    {
      description: 'OmniFlix is a decentralized media platform that enables content creators to distribute, monetize, and manage their digital content using blockchain technology.',
      denom_units: [{
          denom: 'ibc/15B4D31D457B80DD46CA46F6B89FD6BB15CB92FE7BBF8763947417537C3A4C2E',
          exponent: 0,
          aliases: ['uflix']
        }, {
          denom: 'flix',
          exponent: 6
        }],
      base: 'ibc/15B4D31D457B80DD46CA46F6B89FD6BB15CB92FE7BBF8763947417537C3A4C2E',
      name: 'Flix',
      display: 'flix',
      symbol: 'FLIX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
      },
      coingecko_id: 'omniflix-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg',
          theme: {
            primary_color_hex: '#c33635'
          }
        }],
      socials: {
        website: 'https://omniflix.network/',
        twitter: 'https://twitter.com/OmniFlixNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'uflix',
            chain_name: 'omniflixhub'
          },
          chain: {
            channel_id: 'channel-306'
          }
        }]
    },
    {
      description: 'The native token of Oraichain',
      denom_units: [{
          denom: 'ibc/4846F4382B7843861B6C5051134397359C8C94B547E8EA43EFAFEF4E5F7B7625',
          exponent: 0,
          aliases: ['orai']
        }, {
          denom: 'ORAI',
          exponent: 6
        }],
      base: 'ibc/4846F4382B7843861B6C5051134397359C8C94B547E8EA43EFAFEF4E5F7B7625',
      name: 'Oraichain',
      display: 'ORAI',
      symbol: 'ORAI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.png'
      },
      coingecko_id: 'oraichain-token',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.png',
          theme: {
            circle: true,
            dark_mode: true,
            primary_color_hex: '#040404'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg',
          theme: {
            circle: true,
            dark_mode: true,
            primary_color_hex: '#FFFFFF'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.svg',
          theme: {
            circle: true,
            dark_mode: false,
            primary_color_hex: '#000000'
          }
        }
      ],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'orai',
            chain_name: 'oraichain'
          },
          chain: {
            channel_id: 'channel-301'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/14F9BC3E44B8A9C1BE1FB08980FAB87034C9905EF17CF2F5008FC085218811CC',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/14F9BC3E44B8A9C1BE1FB08980FAB87034C9905EF17CF2F5008FC085218811CC',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          theme: {
            primary_color_hex: '#760dbb'
          }
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      socials: {
        website: 'https://osmosis.zone',
        twitter: 'https://twitter.com/osmosiszone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-141'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/5BB694D466CCF099EF73F165F88472AF51D9C4991EAA42BD1168C5304712CC0D',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/5BB694D466CCF099EF73F165F88472AF51D9C4991EAA42BD1168C5304712CC0D',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg',
          theme: {
            primary_color_hex: '#4453c7'
          }
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        twitter: 'https://twitter.com/_IONDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-141'
          }
        }]
    },
    {
      description: 'Persistence is a blockchain platform designed to facilitate institutional decentralized finance (DeFi) and real-world asset tokenization, integrating with the Cosmos ecosystem.',
      denom_units: [{
          denom: 'ibc/81D08BC39FB520EBD948CF017910DD69702D34BF5AC160F76D3B5CFC444EBCE0',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/81D08BC39FB520EBD948CF017910DD69702D34BF5AC160F76D3B5CFC444EBCE0',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      coingecko_id: 'persistence',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg',
          theme: {
            primary_color_hex: '#242424'
          }
        }],
      socials: {
        website: 'https://persistence.one/',
        twitter: 'https://twitter.com/PersistenceOne'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-24',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-190'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Planq Network',
      denom_units: [{
          denom: 'ibc/1452F322F7B459CB7EC111AD5BD2404552B011375002C8C85BA615A95B9121CF',
          exponent: 0,
          aliases: ['aplanq']
        }, {
          denom: 'planq',
          exponent: 18
        }],
      base: 'ibc/1452F322F7B459CB7EC111AD5BD2404552B011375002C8C85BA615A95B9121CF',
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
      },
      coingecko_id: 'planq',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg',
          theme: {
            primary_color_hex: '#d4f3fb'
          }
        }],
      socials: {
        website: 'https://planq.network',
        twitter: 'https://twitter.com/planqfoundation'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'aplanq',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-446'
          }
        }]
    },
    {
      description: 'The token of Source Protocol bridged from BSC.',
      denom_units: [{
          denom: 'ibc/E991A98232BC057DF4C466958FC5D4CB89EFC4323525EF791CB53EC597EBF8D1',
          exponent: 0,
          aliases: ['erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09']
        }, {
          denom: 'srcx',
          exponent: 9
        }],
      base: 'ibc/E991A98232BC057DF4C466958FC5D4CB89EFC4323525EF791CB53EC597EBF8D1',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-446'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png',
          theme: {
            primary_color_hex: '#7f22bc'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
      }
    },
    {
      description: 'The native governance and staking token of the Point network',
      denom_units: [{
          denom: 'ibc/72132A48050500C99EDE86468719A5CE729A295F5F785E8E40049ACE6DA4F8B9',
          exponent: 0,
          aliases: ['apoint']
        }, {
          denom: 'point',
          exponent: 18
        }],
      base: 'ibc/72132A48050500C99EDE86468719A5CE729A295F5F785E8E40049ACE6DA4F8B9',
      name: 'Point',
      display: 'point',
      symbol: 'POINT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.svg'
      },
      coingecko_id: 'point-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'apoint',
            chain_name: 'point'
          },
          chain: {
            channel_id: 'channel-404'
          }
        }]
    },
    {
      description: 'The native token of PRYZM',
      denom_units: [{
          denom: 'ibc/6157A428CE89ABB9CD524CFA613862AED49BAC4AE104B2B867C4CB1EA506501F',
          exponent: 0,
          aliases: ['upryzm']
        }, {
          denom: 'pryzm',
          exponent: 6
        }],
      base: 'ibc/6157A428CE89ABB9CD524CFA613862AED49BAC4AE104B2B867C4CB1EA506501F',
      name: 'Pryzm',
      display: 'pryzm',
      symbol: 'PRYZM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.svg',
          theme: {
            primary_color_hex: '#c6ddf5'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
          denom: 'ibc/BBB8E7A221C42270ACBEAC5DBC0B26C1AE69DB7802D528F3163D1443FE86E357',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/BBB8E7A221C42270ACBEAC5DBC0B26C1AE69DB7802D528F3163D1443FE86E357',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      coingecko_id: 'quicksilver',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png',
          theme: {
            primary_color_hex: '#b2b2b2'
          }
        }],
      socials: {
        website: 'https://quicksilver.zone/',
        twitter: 'https://twitter.com/quicksilverzone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uqck',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-467'
          }
        }]
    },
    {
      description: 'The native currency of the Realio Network.',
      denom_units: [{
          denom: 'ibc/5ABA00F76E96432A03EACECC47D40BFE42F60B7809FD89DD691E6F40CC8F7AFF',
          exponent: 0,
          aliases: ['ario']
        }, {
          denom: 'rio',
          exponent: 18
        }],
      base: 'ibc/5ABA00F76E96432A03EACECC47D40BFE42F60B7809FD89DD691E6F40CC8F7AFF',
      name: 'Realio Network',
      display: 'rio',
      symbol: 'RIO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
      },
      coingecko_id: 'realio-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg',
          theme: {
            primary_color_hex: '#000000',
            background_color_hex: '#000000',
            circle: true
          }
        }],
      socials: {
        webiste: 'https://realio.network/',
        twitter: 'https://x.com/realio_network'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ario',
            chain_name: 'realio'
          },
          chain: {
            channel_id: 'channel-645'
          }
        }]
    },
    {
      description: 'A hybrid equity token that represent ownership of the Realio Ecosystem and provides utility functions on the Network.',
      denom_units: [{
          denom: 'ibc/143B32D7DC3D6734660694CC89F323C2CD0BEA98A12A6BBDD25BC06C2710C267',
          exponent: 0,
          aliases: ['arst']
        }, {
          denom: 'rst',
          exponent: 18
        }],
      base: 'ibc/143B32D7DC3D6734660694CC89F323C2CD0BEA98A12A6BBDD25BC06C2710C267',
      name: 'Realio Security Token',
      display: 'rst',
      symbol: 'RST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rst.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rst.png',
          theme: {
            primary_color_hex: '#e0e0e0'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'arst',
            chain_name: 'realio'
          },
          chain: {
            channel_id: 'channel-645'
          }
        }]
    },
    {
      description: 'REGEN coin is the token for the Regen Network Platform',
      denom_units: [{
          denom: 'ibc/1FBDD58D438B4D04D26CBFB2E722C18984A0F1A52468C4F42F37D102F3D3F399',
          exponent: 0,
          aliases: ['uregen']
        }, {
          denom: 'regen',
          exponent: 6
        }],
      base: 'ibc/1FBDD58D438B4D04D26CBFB2E722C18984A0F1A52468C4F42F37D102F3D3F399',
      name: 'Regen Network',
      display: 'regen',
      symbol: 'REGEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
      },
      coingecko_id: 'regen',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg',
          theme: {
            primary_color_hex: '#56b790'
          }
        }],
      socials: {
        website: 'https://www.regen.network/',
        twitter: 'https://twitter.com/regen_network'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'uregen',
            chain_name: 'regen'
          },
          chain: {
            channel_id: 'channel-185'
          }
        }]
    },
    {
      description: 'Nature Carbon Ton (NCT) is a carbon token standard backed 1:1 by carbon credits issued by Verra, a global leader in the voluntary carbon market. NCT credits on Regen Network have been tokenized by Toucan.earth.',
      denom_units: [{
          denom: 'ibc/7854965E064D606B35FC42E7208A2CF97FE63EB2C539D1FFF12DDC85BCFB7621',
          exponent: 0,
          aliases: ['eco.uC.NCT']
        }, {
          denom: 'nct',
          exponent: 6
        }],
      base: 'ibc/7854965E064D606B35FC42E7208A2CF97FE63EB2C539D1FFF12DDC85BCFB7621',
      name: 'Nature Carbon Ton',
      display: 'nct',
      symbol: 'NCT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
      },
      coingecko_id: 'toucan-protocol-nature-carbon-tonne',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg',
          theme: {
            primary_color_hex: '#171c25'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'eco.uC.NCT',
            chain_name: 'regen'
          },
          chain: {
            channel_id: 'channel-185'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/1542F8DC70E7999691E991E1EDEB1B47E65E3A217B1649D347098EE48ACB580F',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/1542F8DC70E7999691E991E1EDEB1B47E65E3A217B1649D347098EE48ACB580F',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      coingecko_id: 'secret',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://scrt.network/',
        twitter: 'https://twitter.com/SecretNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-235'
          }
        }]
    },
    {
      description: 'Sei is a layer-1 blockchain optimized for trading, focusing on providing high throughput, low latency, and efficient execution for decentralized exchanges.',
      denom_units: [{
          denom: 'ibc/261460D72BA2141BC77D439038343CB2B37C87B4148B4D5E30A5168A93E3E1D9',
          exponent: 0,
          aliases: ['usei']
        }, {
          denom: 'sei',
          exponent: 6
        }],
      base: 'ibc/261460D72BA2141BC77D439038343CB2B37C87B4148B4D5E30A5168A93E3E1D9',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
      },
      coingecko_id: 'sei-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg',
          theme: {
            primary_color_hex: '#9c1c1c'
          }
        }],
      socials: {
        website: 'https://www.sei.io/',
        twitter: 'https://twitter.com/SeiNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'usei',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-584'
          }
        }]
    },
    {
      description: 'OOZARU is a meme token on SEI Network inspired by the iconic transformation in the Dragon Ball series',
      denom_units: [{
          denom: 'ibc/582D087820E10FF09C4F98253878701F659AB423C9E195D7FB913F923FA4398E',
          exponent: 0,
          aliases: ['sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda']
        }, {
          denom: 'oozaru',
          exponent: 6
        }],
      base: 'ibc/582D087820E10FF09C4F98253878701F659AB423C9E195D7FB913F923FA4398E',
      name: 'Oozaru',
      display: 'oozaru',
      symbol: 'OOZARU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oozaru.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oozaru.png',
          theme: {
            primary_color_hex: '#2b1619'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-584'
          }
        }]
    },
    {
      description: 'The native staking token of Self Chain.',
      denom_units: [{
          denom: 'ibc/07C1552AD0D5C8FE63F7E9AAD52E0488D5A9C2D2F49C0D9A0EFF940F5034C8FC',
          exponent: 0,
          aliases: ['uslf']
        }, {
          denom: 'slf',
          exponent: 6
        }],
      base: 'ibc/07C1552AD0D5C8FE63F7E9AAD52E0488D5A9C2D2F49C0D9A0EFF940F5034C8FC',
      name: 'Self',
      display: 'slf',
      symbol: 'SLF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/self/images/self.png'
      },
      coingecko_id: 'self-chain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/self/images/self.png',
          theme: {
            primary_color_hex: '#9454f1'
          }
        }],
      socials: {
        website: 'https://selfchain.xyz',
        twitter: 'https://x.com/selfchainxyz'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uslf',
            chain_name: 'self'
          },
          chain: {
            channel_id: 'channel-892'
          }
        }]
    },
    {
      description: 'Sentinel is a decentralized VPN (dVPN) network that provides private and secure internet access by leveraging blockchain technology.',
      denom_units: [{
          denom: 'ibc/42E47A5BA708EBE6E0C227006254F2784E209F4DBD3C6BB77EDC4B29EF875E8E',
          exponent: 0,
          aliases: ['udvpn']
        }, {
          denom: 'dvpn',
          exponent: 6
        }],
      base: 'ibc/42E47A5BA708EBE6E0C227006254F2784E209F4DBD3C6BB77EDC4B29EF875E8E',
      name: 'Sentinel',
      display: 'dvpn',
      symbol: 'DVPN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
      },
      coingecko_id: 'sentinel',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg',
          theme: {
            primary_color_hex: '#10a7ef'
          }
        }],
      socials: {
        website: 'https://www.sentinel.co/',
        twitter: 'https://x.com/SentinelDVPN'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'udvpn',
            chain_name: 'sentinel'
          },
          chain: {
            channel_id: 'channel-186'
          }
        }]
    },
    {
      description: 'Rowan Token (ROWAN) is the Sifchain Network\'s native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denom_units: [{
          denom: 'ibc/F5ED5F3DC6F0EF73FA455337C027FE91ABCB375116BF51A228E44C493E020A09',
          exponent: 0,
          aliases: ['rowan']
        }, {
          denom: 'ROWAN',
          exponent: 18
        }],
      base: 'ibc/F5ED5F3DC6F0EF73FA455337C027FE91ABCB375116BF51A228E44C493E020A09',
      name: 'Sifchain Rowan',
      display: 'ROWAN',
      symbol: 'ROWAN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
      },
      coingecko_id: 'sifchain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg',
          theme: {
            primary_color_hex: '#be9926'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'rowan',
            chain_name: 'sifchain'
          },
          chain: {
            channel_id: 'channel-192'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the StaFi Hub.',
      denom_units: [{
          denom: 'ibc/70406F10D3B62B53729A9DFCC1CADC3F5E32E1767D413D7140C35F75E8476400',
          exponent: 0,
          aliases: ['ufis']
        }, {
          denom: 'fis',
          exponent: 6
        }],
      base: 'ibc/70406F10D3B62B53729A9DFCC1CADC3F5E32E1767D413D7140C35F75E8476400',
      name: 'FIS',
      display: 'fis',
      symbol: 'FIS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
      },
      coingecko_id: 'stafi',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ufis',
            chain_name: 'stafihub'
          },
          chain: {
            channel_id: 'channel-369'
          }
        }]
    },
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      denom_units: [{
          denom: 'ibc/F79A876741A3A49DD66421F63CD68FC43A5F92C381EB1415966277BF66C720A7',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/F79A876741A3A49DD66421F63CD68FC43A5F92C381EB1415966277BF66C720A7',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      coingecko_id: 'stargaze',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
          theme: {
            primary_color_hex: '#db2777'
          }
        }],
      socials: {
        website: 'https://www.stargaze.zone/',
        twitter: 'https://twitter.com/StargazeZone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-239',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-730'
          }
        }]
    },
    {
      description: 'IOV coin is the token for the Starname (IOV) Asset Name Service',
      denom_units: [{
          denom: 'ibc/68A333688E5B07451F95555F8FE510E43EF9D3D44DF0909964F92081EF9BE5A7',
          exponent: 0,
          aliases: ['uiov']
        }, {
          denom: 'iov',
          exponent: 6
        }],
      base: 'ibc/68A333688E5B07451F95555F8FE510E43EF9D3D44DF0909964F92081EF9BE5A7',
      name: 'Starname',
      display: 'iov',
      symbol: 'IOV',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
      },
      coingecko_id: 'starname',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg',
          theme: {
            primary_color_hex: '#5c64b4'
          }
        }],
      socials: {
        website: 'https://app.starname.me/',
        twitter: 'https://twitter.com/starname_me'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uiov',
            chain_name: 'starname'
          },
          chain: {
            channel_id: 'channel-158'
          }
        }]
    },
    {
      description: 'Stride is a liquid staking blockchain in the Cosmos ecosystem that allows users to stake any IBC-compatible tokens and receive stTokens in return, providing liquidity while earning staking rewards.',
      denom_units: [{
          denom: 'ibc/6B8A3F5C2AD51CD6171FA41A7E8C35AD594AB69226438DB94450436EA57B3A89',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/6B8A3F5C2AD51CD6171FA41A7E8C35AD594AB69226438DB94450436EA57B3A89',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      coingecko_id: 'stride',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg',
          theme: {
            primary_color_hex: '#e4047c'
          }
        }],
      socials: {
        website: 'https://stride.zone/',
        twitter: 'https://twitter.com/stride_zone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-391'
          }
        }]
    },
    {
      description: 'The native token of Teritori',
      denom_units: [{
          denom: 'ibc/09334FF8B9AD27E39D37E3B80E73F48474289173AEFBB285BAD4D4B256707C46',
          exponent: 0,
          aliases: ['utori']
        }, {
          denom: 'tori',
          exponent: 6
        }],
      base: 'ibc/09334FF8B9AD27E39D37E3B80E73F48474289173AEFBB285BAD4D4B256707C46',
      name: 'Teritori',
      display: 'tori',
      symbol: 'TORI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
      },
      coingecko_id: 'teritori',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'utori',
            chain_name: 'teritori'
          },
          chain: {
            channel_id: 'channel-431'
          }
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [{
          denom: 'ibc/34CEF8B6A6424C45FE3CCC4A02C9DF9BB38BACC323E08DFFEFE9E4B18BB89AC4',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/34CEF8B6A6424C45FE3CCC4A02C9DF9BB38BACC323E08DFFEFE9E4B18BB89AC4',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      coingecko_id: 'terra-luna-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg',
          theme: {
            primary_color_hex: '#f4de6f'
          }
        }],
      socials: {
        website: 'https://www.terra.money/',
        twitter: 'https://twitter.com/terra_money'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-339'
          }
        }]
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/DEC41A02E47658D40FC71E5A35A9C807111F5A6662A3FB5DA84C4E6F53E616B3',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'ibc/DEC41A02E47658D40FC71E5A35A9C807111F5A6662A3FB5DA84C4E6F53E616B3',
      name: 'Umee',
      display: 'umee',
      symbol: 'UMEE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
      },
      coingecko_id: 'umee',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg',
          theme: {
            primary_color_hex: '#22f2e9'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel_id: 'channel-288'
          }
        }]
    },
    {
      description: 'The native token of Uptick',
      denom_units: [{
          denom: 'ibc/437D75DE90D857540013EB4BFAA57D600CC78A0D6233FF7C8E3204F066CA0C09',
          exponent: 0,
          aliases: ['auptick']
        }, {
          denom: 'uptick',
          exponent: 18
        }],
      base: 'ibc/437D75DE90D857540013EB4BFAA57D600CC78A0D6233FF7C8E3204F066CA0C09',
      name: 'Uptick',
      display: 'uptick',
      symbol: 'UPTICK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg',
          theme: {
            primary_color_hex: '#1f182f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'auptick',
            chain_name: 'uptick'
          },
          chain: {
            channel_id: 'channel-535'
          }
        }]
    }
  ]
};
export default assets;
    