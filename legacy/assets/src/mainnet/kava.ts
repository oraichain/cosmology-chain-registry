import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'kava',
  assets: [
    {
      description: 'The native token of Aura Network',
      denom_units: [{
          denom: 'ibc/553F40D865364C80C1B78B6C3080EFC5B8306BE29234DFECF143514FE8DBEC10',
          exponent: 0,
          aliases: ['uaura']
        }, {
          denom: 'aura',
          exponent: 6
        }],
      base: 'ibc/553F40D865364C80C1B78B6C3080EFC5B8306BE29234DFECF143514FE8DBEC10',
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
            channel_id: 'channel-7',
            base_denom: 'uaura',
            chain_name: 'aura'
          },
          chain: {
            channel_id: 'channel-124'
          }
        }]
    },
    {
      description: 'Celestia is a modular blockchain network focused on data availability, allowing developers to deploy their own customizable blockchains with ease.',
      denom_units: [{
          denom: 'ibc/7828FD453E26CA18E7516F4F15C9698A36E92EA058B6A113B1F75CE828BF5398',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/7828FD453E26CA18E7516F4F15C9698A36E92EA058B6A113B1F75CE828BF5398',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      coingecko_id: 'celestia',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
          theme: {
            primary_color_hex: '#7c2cfb'
          }
        }],
      socials: {
        website: 'https://celestia.org/',
        twitter: 'https://twitter.com/CelestiaOrg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'utia',
            chain_name: 'celestia'
          },
          chain: {
            channel_id: 'channel-140'
          }
        }]
    },
    {
      description: 'The native token of Coreum',
      denom_units: [{
          denom: 'ibc/3F3FBD0AAC2E301BF8461A44D4533C4C1EA8883136A9699C2E951FC643B485F9',
          exponent: 0,
          aliases: ['ucore']
        }, {
          denom: 'core',
          exponent: 6
        }],
      base: 'ibc/3F3FBD0AAC2E301BF8461A44D4533C4C1EA8883136A9699C2E951FC643B485F9',
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
            channel_id: 'channel-18',
            base_denom: 'ucore',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-142'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      coingecko_id: 'cosmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
          theme: {
            primary_color_hex: '#272d45'
          }
        }],
      socials: {
        website: 'https://cosmos.network',
        twitter: 'https://twitter.com/cosmoshub'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-277',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'DYDX is a decentralized trading platform focused on derivatives and perpetual contracts, offering a secure and efficient trading experience without intermediaries.',
      denom_units: [{
          denom: 'ibc/504AB5ACDC94480E27C4ECCCFB9E0468A0AF5C0AF6E7CF9BB504DE54C3D8E7DB',
          exponent: 0,
          aliases: ['adydx']
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      base: 'ibc/504AB5ACDC94480E27C4ECCCFB9E0468A0AF5C0AF6E7CF9BB504DE54C3D8E7DB',
      name: 'dYdX',
      display: 'dydx',
      symbol: 'DYDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      },
      coingecko_id: 'dydx-chain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
          theme: {
            primary_color_hex: '#21212f'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://dydx.trade/',
        twitter: 'https://twitter.com/dYdX'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'adydx',
            chain_name: 'dydx'
          },
          chain: {
            channel_id: 'channel-137'
          }
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/9C273C3A2306B8C15EC86E93BC25194CFCCA1B1AE9AEFEF18618AD60F9ECD843',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/9C273C3A2306B8C15EC86E93BC25194CFCCA1B1AE9AEFEF18618AD60F9ECD843',
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
            channel_id: 'channel-3',
            base_denom: 'adym',
            chain_name: 'dymension'
          },
          chain: {
            channel_id: 'channel-144'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [{
          denom: 'ibc/31E579FA24701B39270DF7E9B8640DEF9CC10CB94CE1A8845CD04C2628A7C3A2',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      base: 'ibc/31E579FA24701B39270DF7E9B8640DEF9CC10CB94CE1A8845CD04C2628A7C3A2',
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
            channel_id: 'channel-83',
            base_denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-117'
          }
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [{
          denom: 'ibc/5D9BA743218E2BC0E08B383B2F6DAE27A4EE997785D347E52A4DE1190761825F',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      base: 'ibc/5D9BA743218E2BC0E08B383B2F6DAE27A4EE997785D347E52A4DE1190761825F',
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
            channel_id: 'channel-83',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-117'
          }
        }]
    },
    {
      description: 'The legacy token of Teledisko DAO.',
      denom_units: [{
          denom: 'ibc/15BB287C47C8C1E6AC1E91D73B142FE76E438864B062686C418771C55B973D6E',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin-legacy',
          exponent: 18
        }],
      base: 'ibc/15BB287C47C8C1E6AC1E91D73B142FE76E438864B062686C418771C55B973D6E',
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
            channel_id: 'channel-83',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-117'
          }
        }]
    },
    {
      description: 'The token of Crowdpunk DAO',
      denom_units: [{
          denom: 'ibc/4FFE3D7164D347016BE16649CEB6E6A78C28B8DFFF89A22C701969002FB5529B',
          exponent: 0,
          aliases: ['erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'ibc/4FFE3D7164D347016BE16649CEB6E6A78C28B8DFFF89A22C701969002FB5529B',
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
            channel_id: 'channel-83',
            base_denom: 'erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-117'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Haqq Network',
      denom_units: [{
          denom: 'ibc/DCE437C990E9F798493848E8F086097AAAC21D0CC3C82778BD57BC7FCD1D184E',
          exponent: 0,
          aliases: ['aISLM']
        }, {
          denom: 'ISLM',
          exponent: 18
        }],
      base: 'ibc/DCE437C990E9F798493848E8F086097AAAC21D0CC3C82778BD57BC7FCD1D184E',
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
            channel_id: 'channel-6',
            base_denom: 'aISLM',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-135'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
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
            channel_id: 'channel-143',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-122'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/7295195818D9208637DE141D3E559E9D6FBBCA5E4009CA42BCC949DF5CC0051E',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/7295195818D9208637DE141D3E559E9D6FBBCA5E4009CA42BCC949DF5CC0051E',
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
            channel_id: 'channel-143',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-122'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/69628D9E55DE019D28262C2A5F2229E043FF2D46CCAD1802BBDEEAD338367A4E',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/69628D9E55DE019D28262C2A5F2229E043FF2D46CCAD1802BBDEEAD338367A4E',
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
            channel_id: 'channel-143',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-122'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/79DD486C76A7E3E26209CB43CD7F7D7E63B25B59A76A69F9E44398B8BDBEDA86',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/79DD486C76A7E3E26209CB43CD7F7D7E63B25B59A76A69F9E44398B8BDBEDA86',
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
            channel_id: 'channel-143',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-122'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/D794D795D87B7027F5DCD7970385AB764DD3973AAB1D7872A5DA87B4419E8D88',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/D794D795D87B7027F5DCD7970385AB764DD3973AAB1D7872A5DA87B4419E8D88',
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
            channel_id: 'channel-143',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-122'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/2682393F9FBCA80BA3BB2E2E20429E2BEF742DD4BE871A70D2CB566B3F39CD33',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/2682393F9FBCA80BA3BB2E2E20429E2BEF742DD4BE871A70D2CB566B3F39CD33',
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
            channel_id: 'channel-143',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-122'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/6569248F0ADF74C0751A48AE8D19F28B40565629265956DA4BEBFBFD73F72F0A',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/6569248F0ADF74C0751A48AE8D19F28B40565629265956DA4BEBFBFD73F72F0A',
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
            channel_id: 'channel-143',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-122'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/D2F6AD62E486AC49EA6A3D871589051BBF0C7FA690D1122109228B4DB6F8D7C3',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/D2F6AD62E486AC49EA6A3D871589051BBF0C7FA690D1122109228B4DB6F8D7C3',
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
            channel_id: 'channel-143',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-122'
          }
        }]
    },
    {
      description: 'The native token of Aura Network',
      denom_units: [{
          denom: 'ibc/553F40D865364C80C1B78B6C3080EFC5B8306BE29234DFECF143514FE8DBEC10',
          exponent: 0,
          aliases: ['uaura']
        }, {
          denom: 'aura',
          exponent: 6
        }],
      base: 'ibc/553F40D865364C80C1B78B6C3080EFC5B8306BE29234DFECF143514FE8DBEC10',
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
            channel_id: 'channel-7',
            base_denom: 'uaura',
            chain_name: 'aura'
          },
          chain: {
            channel_id: 'channel-124'
          }
        }]
    },
    {
      description: 'Celestia is a modular blockchain network focused on data availability, allowing developers to deploy their own customizable blockchains with ease.',
      denom_units: [{
          denom: 'ibc/7828FD453E26CA18E7516F4F15C9698A36E92EA058B6A113B1F75CE828BF5398',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/7828FD453E26CA18E7516F4F15C9698A36E92EA058B6A113B1F75CE828BF5398',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      coingecko_id: 'celestia',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
          theme: {
            primary_color_hex: '#7c2cfb'
          }
        }],
      socials: {
        website: 'https://celestia.org/',
        twitter: 'https://twitter.com/CelestiaOrg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'utia',
            chain_name: 'celestia'
          },
          chain: {
            channel_id: 'channel-140'
          }
        }]
    },
    {
      description: 'The native token of Coreum',
      denom_units: [{
          denom: 'ibc/3F3FBD0AAC2E301BF8461A44D4533C4C1EA8883136A9699C2E951FC643B485F9',
          exponent: 0,
          aliases: ['ucore']
        }, {
          denom: 'core',
          exponent: 6
        }],
      base: 'ibc/3F3FBD0AAC2E301BF8461A44D4533C4C1EA8883136A9699C2E951FC643B485F9',
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
            channel_id: 'channel-18',
            base_denom: 'ucore',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-142'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      coingecko_id: 'cosmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
          theme: {
            primary_color_hex: '#272d45'
          }
        }],
      socials: {
        website: 'https://cosmos.network',
        twitter: 'https://twitter.com/cosmoshub'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-277',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'DYDX is a decentralized trading platform focused on derivatives and perpetual contracts, offering a secure and efficient trading experience without intermediaries.',
      denom_units: [{
          denom: 'ibc/504AB5ACDC94480E27C4ECCCFB9E0468A0AF5C0AF6E7CF9BB504DE54C3D8E7DB',
          exponent: 0,
          aliases: ['adydx']
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      base: 'ibc/504AB5ACDC94480E27C4ECCCFB9E0468A0AF5C0AF6E7CF9BB504DE54C3D8E7DB',
      name: 'dYdX',
      display: 'dydx',
      symbol: 'DYDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      },
      coingecko_id: 'dydx-chain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
          theme: {
            primary_color_hex: '#21212f'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://dydx.trade/',
        twitter: 'https://twitter.com/dYdX'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'adydx',
            chain_name: 'dydx'
          },
          chain: {
            channel_id: 'channel-137'
          }
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/9C273C3A2306B8C15EC86E93BC25194CFCCA1B1AE9AEFEF18618AD60F9ECD843',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/9C273C3A2306B8C15EC86E93BC25194CFCCA1B1AE9AEFEF18618AD60F9ECD843',
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
            channel_id: 'channel-3',
            base_denom: 'adym',
            chain_name: 'dymension'
          },
          chain: {
            channel_id: 'channel-144'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [{
          denom: 'ibc/31E579FA24701B39270DF7E9B8640DEF9CC10CB94CE1A8845CD04C2628A7C3A2',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      base: 'ibc/31E579FA24701B39270DF7E9B8640DEF9CC10CB94CE1A8845CD04C2628A7C3A2',
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
            channel_id: 'channel-83',
            base_denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-117'
          }
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [{
          denom: 'ibc/5D9BA743218E2BC0E08B383B2F6DAE27A4EE997785D347E52A4DE1190761825F',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      base: 'ibc/5D9BA743218E2BC0E08B383B2F6DAE27A4EE997785D347E52A4DE1190761825F',
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
            channel_id: 'channel-83',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-117'
          }
        }]
    },
    {
      description: 'The legacy token of Teledisko DAO.',
      denom_units: [{
          denom: 'ibc/15BB287C47C8C1E6AC1E91D73B142FE76E438864B062686C418771C55B973D6E',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin-legacy',
          exponent: 18
        }],
      base: 'ibc/15BB287C47C8C1E6AC1E91D73B142FE76E438864B062686C418771C55B973D6E',
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
            channel_id: 'channel-83',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-117'
          }
        }]
    },
    {
      description: 'The token of Crowdpunk DAO',
      denom_units: [{
          denom: 'ibc/4FFE3D7164D347016BE16649CEB6E6A78C28B8DFFF89A22C701969002FB5529B',
          exponent: 0,
          aliases: ['erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'ibc/4FFE3D7164D347016BE16649CEB6E6A78C28B8DFFF89A22C701969002FB5529B',
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
            channel_id: 'channel-83',
            base_denom: 'erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-117'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Haqq Network',
      denom_units: [{
          denom: 'ibc/DCE437C990E9F798493848E8F086097AAAC21D0CC3C82778BD57BC7FCD1D184E',
          exponent: 0,
          aliases: ['aISLM']
        }, {
          denom: 'ISLM',
          exponent: 18
        }],
      base: 'ibc/DCE437C990E9F798493848E8F086097AAAC21D0CC3C82778BD57BC7FCD1D184E',
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
            channel_id: 'channel-6',
            base_denom: 'aISLM',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-135'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
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
            channel_id: 'channel-143',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-122'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/7295195818D9208637DE141D3E559E9D6FBBCA5E4009CA42BCC949DF5CC0051E',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/7295195818D9208637DE141D3E559E9D6FBBCA5E4009CA42BCC949DF5CC0051E',
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
            channel_id: 'channel-143',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-122'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/69628D9E55DE019D28262C2A5F2229E043FF2D46CCAD1802BBDEEAD338367A4E',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/69628D9E55DE019D28262C2A5F2229E043FF2D46CCAD1802BBDEEAD338367A4E',
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
            channel_id: 'channel-143',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-122'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/79DD486C76A7E3E26209CB43CD7F7D7E63B25B59A76A69F9E44398B8BDBEDA86',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/79DD486C76A7E3E26209CB43CD7F7D7E63B25B59A76A69F9E44398B8BDBEDA86',
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
            channel_id: 'channel-143',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-122'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/D794D795D87B7027F5DCD7970385AB764DD3973AAB1D7872A5DA87B4419E8D88',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/D794D795D87B7027F5DCD7970385AB764DD3973AAB1D7872A5DA87B4419E8D88',
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
            channel_id: 'channel-143',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-122'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/2682393F9FBCA80BA3BB2E2E20429E2BEF742DD4BE871A70D2CB566B3F39CD33',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/2682393F9FBCA80BA3BB2E2E20429E2BEF742DD4BE871A70D2CB566B3F39CD33',
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
            channel_id: 'channel-143',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-122'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/6569248F0ADF74C0751A48AE8D19F28B40565629265956DA4BEBFBFD73F72F0A',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/6569248F0ADF74C0751A48AE8D19F28B40565629265956DA4BEBFBFD73F72F0A',
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
            channel_id: 'channel-143',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-122'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/D2F6AD62E486AC49EA6A3D871589051BBF0C7FA690D1122109228B4DB6F8D7C3',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/D2F6AD62E486AC49EA6A3D871589051BBF0C7FA690D1122109228B4DB6F8D7C3',
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
            channel_id: 'channel-143',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-122'
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/2CA1ED8E0335BADDAE8CC30149583A78A8517FBED0AF3910E04525CCEBB173B1',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/2CA1ED8E0335BADDAE8CC30149583A78A8517FBED0AF3910E04525CCEBB173B1',
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
            channel_id: 'channel-95',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-116'
          }
        }]
    },
    {
      description: 'Migaloo is a cosmwasm-powered, permissionless blockchain designed to build decentralized applications with a focus on interchain liquidity solutions.',
      denom_units: [{
          denom: 'ibc/59C30B8D59BF723D152E0680071A213DED52B22102DE8394A398C97163C49D00',
          exponent: 0,
          aliases: ['uwhale']
        }, {
          denom: 'whale',
          exponent: 6
        }],
      base: 'ibc/59C30B8D59BF723D152E0680071A213DED52B22102DE8394A398C97163C49D00',
      name: 'Whale',
      display: 'whale',
      symbol: 'WHALE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
      },
      coingecko_id: 'white-whale',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-48',
            base_denom: 'uwhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-120'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/88386638D9EE3A4BD2B16E4A7EB239A435E4BA1B1BB450EA46ADB771BAB10A63',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/88386638D9EE3A4BD2B16E4A7EB239A435E4BA1B1BB450EA46ADB771BAB10A63',
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
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://neutron.org/',
        twitter: 'https://twitter.com/Neutron_org'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-36',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-136'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/5338ECB32187F1417530CD66371434D69EDF1DA6F384435B01533E426B45971E',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/5338ECB32187F1417530CD66371434D69EDF1DA6F384435B01533E426B45971E',
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
            channel_id: 'channel-36',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-136'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/95AF5A5D4DF438898DDB71B9D8B769D87AE9B0844929F155C9E4B1238CD06907',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/95AF5A5D4DF438898DDB71B9D8B769D87AE9B0844929F155C9E4B1238CD06907',
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
            channel_id: 'channel-36',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-136'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/142595FF1A1A745BE68E39DBDAD9BDBE1D97EBFCDF123269A186F23072854D11',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/142595FF1A1A745BE68E39DBDAD9BDBE1D97EBFCDF123269A186F23072854D11',
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
            channel_id: 'channel-36',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-136'
          }
        }]
    },
    {
      description: 'The native token of ONEX',
      denom_units: [{
          denom: 'ibc/41586E7A401B83CF7E77A9DC2A5B3327136725E46C14FEEB3C096E4960402438',
          exponent: 0,
          aliases: ['aonex']
        }, {
          denom: 'onex',
          exponent: 18
        }],
      base: 'ibc/41586E7A401B83CF7E77A9DC2A5B3327136725E46C14FEEB3C096E4960402438',
      name: 'ONEX',
      display: 'onex',
      symbol: 'ONEX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.svg'
      },
      keywords: ['dex'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'aonex',
            chain_name: 'onex'
          },
          chain: {
            channel_id: 'channel-145'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
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
            channel_id: 'channel-143',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D',
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
            channel_id: 'channel-143',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'Persistence is a blockchain platform designed to facilitate institutional decentralized finance (DeFi) and real-world asset tokenization, integrating with the Cosmos ecosystem.',
      denom_units: [{
          denom: 'ibc/134CED3DD0201C9A01D9B67DD7FC6BF6DEF8A7F709C22B0ABCEC263002B13207',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/134CED3DD0201C9A01D9B67DD7FC6BF6DEF8A7F709C22B0ABCEC263002B13207',
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
            channel_id: 'channel-129',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-134'
          }
        }]
    },
    {
      description: 'The native staking token of Sei.',
      denom_units: [{
          denom: 'ibc/A3D9BA615C3BC5C8892E86B1D8B792DD139A68ADE97AA7A9C7F26AD25D9E5FD7',
          exponent: 0,
          aliases: ['usei']
        }, {
          denom: 'sei',
          exponent: 6
        }],
      base: 'ibc/A3D9BA615C3BC5C8892E86B1D8B792DD139A68ADE97AA7A9C7F26AD25D9E5FD7',
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
            channel_id: 'channel-18',
            base_denom: 'usei',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-132'
          }
        }]
    },
    {
      description: 'OOZARU is a meme token on SEI Network inspired by the iconic transformation in the Dragon Ball series',
      denom_units: [{
          denom: 'ibc/7ECFD27C3EDD5504846463DCA7F1AA131B258DFD88B4B1CACD410710D28D0722',
          exponent: 0,
          aliases: ['sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda']
        }, {
          denom: 'oozaru',
          exponent: 6
        }],
      base: 'ibc/7ECFD27C3EDD5504846463DCA7F1AA131B258DFD88B4B1CACD410710D28D0722',
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
            channel_id: 'channel-18',
            base_denom: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-132'
          }
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [{
          denom: 'ibc/2CA80AFF9E74A84AC2827A8BB3F09EB6EE7F726C5EEEB980D548D44CCA1EFEE9',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/2CA80AFF9E74A84AC2827A8BB3F09EB6EE7F726C5EEEB980D548D44CCA1EFEE9',
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
            channel_id: 'channel-272',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-138'
          }
        }]
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/0188B2B71988545E491C5AE008562D8C7CE9B43AE2DE4B1C482AFCFB0B44FD30',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'ibc/0188B2B71988545E491C5AE008562D8C7CE9B43AE2DE4B1C482AFCFB0B44FD30',
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
            channel_id: 'channel-98',
            base_denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel_id: 'channel-119'
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/2CA1ED8E0335BADDAE8CC30149583A78A8517FBED0AF3910E04525CCEBB173B1',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/2CA1ED8E0335BADDAE8CC30149583A78A8517FBED0AF3910E04525CCEBB173B1',
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
            channel_id: 'channel-95',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-116'
          }
        }]
    },
    {
      description: 'Migaloo is a cosmwasm-powered, permissionless blockchain designed to build decentralized applications with a focus on interchain liquidity solutions.',
      denom_units: [{
          denom: 'ibc/59C30B8D59BF723D152E0680071A213DED52B22102DE8394A398C97163C49D00',
          exponent: 0,
          aliases: ['uwhale']
        }, {
          denom: 'whale',
          exponent: 6
        }],
      base: 'ibc/59C30B8D59BF723D152E0680071A213DED52B22102DE8394A398C97163C49D00',
      name: 'Whale',
      display: 'whale',
      symbol: 'WHALE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
      },
      coingecko_id: 'white-whale',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-48',
            base_denom: 'uwhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-120'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/88386638D9EE3A4BD2B16E4A7EB239A435E4BA1B1BB450EA46ADB771BAB10A63',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/88386638D9EE3A4BD2B16E4A7EB239A435E4BA1B1BB450EA46ADB771BAB10A63',
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
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://neutron.org/',
        twitter: 'https://twitter.com/Neutron_org'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-36',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-136'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/5338ECB32187F1417530CD66371434D69EDF1DA6F384435B01533E426B45971E',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/5338ECB32187F1417530CD66371434D69EDF1DA6F384435B01533E426B45971E',
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
            channel_id: 'channel-36',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-136'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/95AF5A5D4DF438898DDB71B9D8B769D87AE9B0844929F155C9E4B1238CD06907',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/95AF5A5D4DF438898DDB71B9D8B769D87AE9B0844929F155C9E4B1238CD06907',
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
            channel_id: 'channel-36',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-136'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/142595FF1A1A745BE68E39DBDAD9BDBE1D97EBFCDF123269A186F23072854D11',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/142595FF1A1A745BE68E39DBDAD9BDBE1D97EBFCDF123269A186F23072854D11',
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
            channel_id: 'channel-36',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-136'
          }
        }]
    },
    {
      description: 'The native token of ONEX',
      denom_units: [{
          denom: 'ibc/41586E7A401B83CF7E77A9DC2A5B3327136725E46C14FEEB3C096E4960402438',
          exponent: 0,
          aliases: ['aonex']
        }, {
          denom: 'onex',
          exponent: 18
        }],
      base: 'ibc/41586E7A401B83CF7E77A9DC2A5B3327136725E46C14FEEB3C096E4960402438',
      name: 'ONEX',
      display: 'onex',
      symbol: 'ONEX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.svg'
      },
      keywords: ['dex'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'aonex',
            chain_name: 'onex'
          },
          chain: {
            channel_id: 'channel-145'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
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
            channel_id: 'channel-143',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D',
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
            channel_id: 'channel-143',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'Persistence is a blockchain platform designed to facilitate institutional decentralized finance (DeFi) and real-world asset tokenization, integrating with the Cosmos ecosystem.',
      denom_units: [{
          denom: 'ibc/134CED3DD0201C9A01D9B67DD7FC6BF6DEF8A7F709C22B0ABCEC263002B13207',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/134CED3DD0201C9A01D9B67DD7FC6BF6DEF8A7F709C22B0ABCEC263002B13207',
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
            channel_id: 'channel-129',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-134'
          }
        }]
    },
    {
      description: 'The native staking token of Sei.',
      denom_units: [{
          denom: 'ibc/A3D9BA615C3BC5C8892E86B1D8B792DD139A68ADE97AA7A9C7F26AD25D9E5FD7',
          exponent: 0,
          aliases: ['usei']
        }, {
          denom: 'sei',
          exponent: 6
        }],
      base: 'ibc/A3D9BA615C3BC5C8892E86B1D8B792DD139A68ADE97AA7A9C7F26AD25D9E5FD7',
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
            channel_id: 'channel-18',
            base_denom: 'usei',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-132'
          }
        }]
    },
    {
      description: 'OOZARU is a meme token on SEI Network inspired by the iconic transformation in the Dragon Ball series',
      denom_units: [{
          denom: 'ibc/7ECFD27C3EDD5504846463DCA7F1AA131B258DFD88B4B1CACD410710D28D0722',
          exponent: 0,
          aliases: ['sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda']
        }, {
          denom: 'oozaru',
          exponent: 6
        }],
      base: 'ibc/7ECFD27C3EDD5504846463DCA7F1AA131B258DFD88B4B1CACD410710D28D0722',
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
            channel_id: 'channel-18',
            base_denom: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-132'
          }
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [{
          denom: 'ibc/2CA80AFF9E74A84AC2827A8BB3F09EB6EE7F726C5EEEB980D548D44CCA1EFEE9',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/2CA80AFF9E74A84AC2827A8BB3F09EB6EE7F726C5EEEB980D548D44CCA1EFEE9',
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
            channel_id: 'channel-272',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-138'
          }
        }]
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/0188B2B71988545E491C5AE008562D8C7CE9B43AE2DE4B1C482AFCFB0B44FD30',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'ibc/0188B2B71988545E491C5AE008562D8C7CE9B43AE2DE4B1C482AFCFB0B44FD30',
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
            channel_id: 'channel-98',
            base_denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel_id: 'channel-119'
          }
        }]
    }
  ]
};
export default assets;
    