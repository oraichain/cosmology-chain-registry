import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'migaloo',
  assets: [
    {
      description: 'Migaloo is a cosmwasm-powered, permissionless blockchain designed to build decentralized applications with a focus on interchain liquidity solutions.',
      extended_description: 'Migaloo originated as part of the Terra ecosystem but has since transitioned to the Cosmos ecosystem, focusing on creating a decentralized platform that balances and distributes liquidity across various zones. Key features include its permissionless nature and the Alliance module, which facilitates cross-chain staking and enhances blockchain security. Migaloo\'s flagship application is the White Whale Protocol, an interchain liquidity protocol that uses trading and flash loans to generate yield for stakers. The platform emphasizes interoperability, scalability, and community engagement, aiming to be a pivotal player in the Cosmos ecosystem.',
      denom_units: [{
          denom: 'uwhale',
          exponent: 0
        }, {
          denom: 'whale',
          exponent: 6
        }],
      base: 'uwhale',
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
        }]
    },
    {
      description: 'ampWHALE',
      denom_units: [{
          denom: 'factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE',
          exponent: 0
        }, {
          denom: 'ampWHALE',
          exponent: 6
        }],
      base: 'factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE',
      name: 'ampWHALE',
      display: 'ampWHALE',
      symbol: 'ampWHALE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ampwhale.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ampwhale.svg'
        }]
    },
    {
      description: 'BackBone Labs Liquid Staked WHALE',
      denom_units: [{
          denom: 'factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale',
          exponent: 0
        }, {
          denom: 'bWHALE',
          exponent: 6
        }],
      base: 'factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale',
      name: 'BackBone Labs Liquid Staked WHALE',
      display: 'bWHALE',
      symbol: 'bWHALE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.png',
          theme: {
            primary_color_hex: '#d8d8d8'
          }
        }],
      coingecko_id: 'backbone-labs-staked-whale'
    },
    {
      description: 'FABLE',
      denom_units: [{
          denom: 'factory/migaloo18a9m9stu3dyvewwcq9qmp85euxqcvln5mefync/fable',
          exponent: 0
        }, {
          denom: 'fable',
          exponent: 6
        }],
      base: 'factory/migaloo18a9m9stu3dyvewwcq9qmp85euxqcvln5mefync/fable',
      name: 'FABLE',
      display: 'fable',
      symbol: 'FABLE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/fable.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/fable.svg'
        }]
    },
    {
      description: 'boneLUNA are autocompounding LUNA tokens',
      denom_units: [{
          denom: 'ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708',
          exponent: 0
        }, {
          denom: 'bluna',
          exponent: 6
        }],
      base: 'ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708',
      address: 'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
      type_asset: 'ics20',
      name: 'boneLuna',
      display: 'bluna',
      symbol: 'bLUNA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'terra2',
            base_denom: 'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2',
            path: 'transfer/channel-2/cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bLUNA.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bLUNA.png',
          theme: {
            primary_color_hex: '#070707'
          }
        }]
    },
    {
      description: 'RAC',
      denom_units: [{
          denom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac',
          exponent: 0
        }, {
          denom: 'RAC',
          exponent: 6
        }],
      base: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac',
      name: 'Racoon',
      display: 'RAC',
      symbol: 'RAC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg',
          theme: {
            primary_color_hex: '#2b2434'
          }
        }]
    },
    {
      description: 'ASH',
      denom_units: [{
          denom: 'factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash',
          exponent: 0
        }, {
          denom: 'ASH',
          exponent: 6
        }],
      base: 'factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash',
      name: 'ASH',
      display: 'ASH',
      symbol: 'ASH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
        }]
    },
    {
      description: 'Tether USDt on Migaloo',
      denom_units: [{
          denom: 'ibc/86A25A8A327164AE7C68A29B6ED745C7EEDC36E260A6666F33A6407BECEC4737',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/86A25A8A327164AE7C68A29B6ED745C7EEDC36E260A6666F33A6407BECEC4737',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt',
            channel_id: 'channel-120'
          },
          chain: {
            channel_id: 'channel-48',
            path: 'transfer/channel-48/erc20/tether/usdt'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt'
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
      description: 'Auto componded USDC despoited into Ginkou on Migaloo chain',
      denom_units: [{
          denom: 'cw20:migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v',
          exponent: 0
        }, {
          denom: 'mUSDC',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v',
      base: 'cw20:migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v',
      name: 'mUSDC',
      display: 'mUSDC',
      symbol: 'mUSDC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/mUSDC.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/mUSDC.svg'
        }]
    },
    {
      description: 'GUPPY',
      denom_units: [{
          denom: 'factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy',
          exponent: 0
        }, {
          denom: 'GUPPY',
          exponent: 6
        }],
      base: 'factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy',
      name: 'GUPPY',
      display: 'GUPPY',
      symbol: 'GUPPY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png',
          theme: {
            primary_color_hex: '#d9966e'
          }
        }]
    },
    {
      description: 'OPHIR is a Cosmos Treasury DAO established on Migaloo.',
      denom_units: [{
          denom: 'factory/migaloo1t862qdu9mj5hr3j727247acypym3ej47axu22rrapm4tqlcpuseqltxwq5/ophir',
          exponent: 0
        }, {
          denom: 'OPHIR',
          exponent: 6
        }],
      base: 'factory/migaloo1t862qdu9mj5hr3j727247acypym3ej47axu22rrapm4tqlcpuseqltxwq5/ophir',
      name: 'OPHIR',
      display: 'OPHIR',
      symbol: 'OPHIR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ophir.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ophir.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }]
    },
    {
      description: 'SHARK is the apex price prediction market within Cosmos.',
      denom_units: [{
          denom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark',
          exponent: 0
        }, {
          denom: 'SHARK',
          exponent: 6
        }],
      base: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark',
      name: 'SHARK',
      display: 'SHARK',
      symbol: 'SHARK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/shark.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/shark.png',
          theme: {
            primary_color_hex: '#062d54'
          }
        }]
    },
    {
      description: 'lsdSHARK is the liquid staking derivative of SHARK.',
      denom_units: [{
          denom: 'factory/migaloo1p3aj9f09d7c4jxhgue0hpdpw370j6gzc59nxxx6l8d0gc9f9rfwsdwetus/lsdSHARK',
          exponent: 0
        }, {
          denom: 'lsdSHARK',
          exponent: 6
        }],
      base: 'factory/migaloo1p3aj9f09d7c4jxhgue0hpdpw370j6gzc59nxxx6l8d0gc9f9rfwsdwetus/lsdSHARK',
      name: 'lsdSHARK',
      display: 'lsdSHARK',
      symbol: 'lsdSHARK',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'migaloo',
            base_denom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark'
          },
          provider: 'Shark Protocol'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/lsdshark.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/lsdshark.png',
          theme: {
            primary_color_hex: '#0d739c'
          }
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [{
          denom: 'ibc/4627AD2524E3E0523047E35BB76CC90E37D9D57ACF14F0FCBCEB2480705F3CB8',
          exponent: 0
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/4627AD2524E3E0523047E35BB76CC90E37D9D57ACF14F0FCBCEB2480705F3CB8',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'terra2',
            base_denom: 'uluna',
            channel_id: 'channel-86'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/uluna'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      coingecko_id: 'terra-luna-2',
      images: [{
          image_sync: {
            chain_name: 'terra2',
            base_denom: 'uluna'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg',
          theme: {
            primary_color_hex: '#f4de6f'
          }
        }],
      socials: {
        website: 'https://www.terra.money/',
        twitter: 'https://twitter.com/terra_money'
      }
    },
    {
      description: 'Rakoff Token',
      denom_units: [{
          denom: 'ibc/44C29C91F202E20C8E28DFB1FA89B725C54171CD77B8948836C72E7A97E4A018',
          exponent: 0
        }, {
          denom: 'Rakoff',
          exponent: 6
        }],
      base: 'ibc/44C29C91F202E20C8E28DFB1FA89B725C54171CD77B8948836C72E7A97E4A018',
      type_asset: 'ics20',
      name: 'Rakoff',
      display: 'Rakoff',
      symbol: 'RAKOFF',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'terra',
            base_denom: 'cw20:terra1vhgq25vwuhdhn9xjll0rhl2s67jzw78a4g2t78y5kz89q9lsdskq2pxcj2',
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114',
            path: 'transfer/channel-114/cw20:terra1vhgq25vwuhdhn9xjll0rhl2s67jzw78a4g2t78y5kz89q9lsdskq2pxcj2'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/rakoff.png'
      },
      images: [{
          image_sync: {
            chain_name: 'terra',
            base_denom: 'cw20:terra1vhgq25vwuhdhn9xjll0rhl2s67jzw78a4g2t78y5kz89q9lsdskq2pxcj2'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/rakoff.png',
          theme: {
            primary_color_hex: '#191717'
          }
        }]
    },
    {
      description: 'GASH',
      denom_units: [{
          denom: 'factory/migaloo1r9x8fz4alekzr78k42rpmr9unpa7egsldpqeynmwl2nfvzexue9sn8l5rg/gash',
          exponent: 0
        }, {
          denom: 'gash',
          exponent: 6
        }],
      base: 'factory/migaloo1r9x8fz4alekzr78k42rpmr9unpa7egsldpqeynmwl2nfvzexue9sn8l5rg/gash',
      name: 'GASH',
      display: 'gash',
      symbol: 'GASH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/gash.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/gash.png',
          theme: {
            primary_color_hex: '#1d0918'
          }
        }]
    },
    {
      description: 'Restake DAO Token',
      denom_units: [{
          denom: 'factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk',
          exponent: 0
        }, {
          denom: 'rstk',
          exponent: 6
        }],
      base: 'factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk',
      name: 'RESTAKE',
      display: 'rstk',
      symbol: 'RSTK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.svg',
          theme: {
            primary_color_hex: '#3ccc64'
          }
        }]
    },
    {
      description: 'Frogztrik NFT Token',
      denom_units: [{
          denom: 'ibc/B1BD4EF49A2E051EFC85E8C6A932B559CE62F9519E0E83BE29A8F0BDF89BD1D3',
          exponent: 0
        }, {
          denom: 'frog',
          exponent: 6
        }],
      base: 'ibc/B1BD4EF49A2E051EFC85E8C6A932B559CE62F9519E0E83BE29A8F0BDF89BD1D3',
      type_asset: 'ics20',
      name: 'Frogztrik NFT Token',
      display: 'frog',
      symbol: 'FROG',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'terra',
            base_denom: 'cw20:terra1wez9puj43v4s25vrex7cv3ut3w75w4h6j5e537sujyuxj0r5ne2qp9uwl9',
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channel_id: 'channel-87'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-114',
            path: 'transfer/channel-114/cw20:terra1wez9puj43v4s25vrex7cv3ut3w75w4h6j5e537sujyuxj0r5ne2qp9uwl9'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/FROG.png'
      },
      images: [{
          image_sync: {
            chain_name: 'terra',
            base_denom: 'cw20:terra1wez9puj43v4s25vrex7cv3ut3w75w4h6j5e537sujyuxj0r5ne2qp9uwl9'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/FROG.png',
          theme: {
            primary_color_hex: '#182615'
          }
        }]
    },
    {
      description: 'GRAC is the official token of Racoon.Bet\'s gaming platform.',
      denom_units: [{
          denom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/ugrac',
          exponent: 0
        }, {
          denom: 'GRAC',
          exponent: 6
        }],
      base: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/ugrac',
      name: 'Gaming RAC Token',
      display: 'GRAC',
      symbol: 'GRAC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/grac.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/grac.png',
          theme: {
            primary_color_hex: '#f5bf09'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/721B42229246EEDA7A656DB17E494127F91E84AD63E21852737628321892A928',
          exponent: 0,
          aliases: ['factory/juno1h6y8tkceau4d8zyv5aa0fwdj2pa2y0gz2hx0tq/uwind']
        }, {
          denom: 'wind',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/721B42229246EEDA7A656DB17E494127F91E84AD63E21852737628321892A928',
      name: 'Wind Token',
      display: 'wind',
      symbol: 'WIND',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'factory/juno1h6y8tkceau4d8zyv5aa0fwdj2pa2y0gz2hx0tq/uwind',
            channel_id: 'channel-210'
          },
          chain: {
            channel_id: 'channel-1',
            path: 'transfer/channel-1/factory/juno1h6y8tkceau4d8zyv5aa0fwdj2pa2y0gz2hx0tq/uwind'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'factory/juno1h6y8tkceau4d8zyv5aa0fwdj2pa2y0gz2hx0tq/uwind'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wind.png',
          theme: {
            primary_color_hex: '#122b4d'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wind.png'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/0E1B883A15D5FCA533332CBAB1A672934C3936920399F2A3EB4F438E3EBAD0E9',
          exponent: 0,
          aliases: ['factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/shitmos']
        }, {
          denom: 'shitmos',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/0E1B883A15D5FCA533332CBAB1A672934C3936920399F2A3EB4F438E3EBAD0E9',
      name: 'Shitmos',
      display: 'shitmos',
      symbol: 'SHITMOS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/shitmos',
            channel_id: 'channel-642'
          },
          chain: {
            channel_id: 'channel-5',
            path: 'transfer/channel-5/factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/shitmos'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/shitmos'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shitmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shitmos.svg',
          theme: {
            primary_color_hex: '#639BFF',
            circle: true
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shitmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shitmos.svg'
      }
    },
    {
      description: 'ERIS Liquid Alliance Staked GASH',
      denom_units: [{
          denom: 'factory/migaloo1nsskhvvh0msm7d5ke2kfg24a8d4jecsnxd28s27h0uz5kf9ap60shlqmcl/ampGASH',
          exponent: 0
        }, {
          denom: 'ampGASH',
          exponent: 6
        }],
      base: 'factory/migaloo1nsskhvvh0msm7d5ke2kfg24a8d4jecsnxd28s27h0uz5kf9ap60shlqmcl/ampGASH',
      name: 'ampGASH',
      display: 'ampGASH',
      symbol: 'ampGASH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ampgash.png',
          theme: {
            primary_color_hex: '#374455'
          }
        }],
      traces: [{
          type: 'liquid-stake',
          chain: {
            contract: 'migaloo1nsskhvvh0msm7d5ke2kfg24a8d4jecsnxd28s27h0uz5kf9ap60shlqmcl'
          },
          provider: 'ERIS Protocol',
          counterparty: {
            chain_name: 'migaloo',
            base_denom: 'factory/migaloo1r9x8fz4alekzr78k42rpmr9unpa7egsldpqeynmwl2nfvzexue9sn8l5rg/gash',
            contract: 'migaloo1r9x8fz4alekzr78k42rpmr9unpa7egsldpqeynmwl2nfvzexue9sn8l5rg'
          }
        }]
    }
  ]
};
export default info;