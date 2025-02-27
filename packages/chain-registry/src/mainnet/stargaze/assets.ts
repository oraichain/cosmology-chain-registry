import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'stargaze',
  assets: [
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      extended_description: 'Stargaze is an innovative platform in the Cosmos ecosystem focused on NFTs. It provides a decentralized space where creators can mint, trade, and manage their NFTs with ease. The platform\'s decentralized nature ensures that creators retain full control over their digital assets, enhancing security and ownership rights. Stargaze\'s user-friendly interface and robust infrastructure make it an ideal choice for artists and collectors looking to engage with NFTs in a decentralized manner.',
      denom_units: [{
          denom: 'ustars',
          exponent: 0
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ustars',
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
      }
    },
    {
      description: 'The native token of ohhNFT.',
      denom_units: [{
          denom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust',
          exponent: 0
        }, {
          denom: 'strdst',
          exponent: 6
        }],
      base: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust',
      name: 'Stardust STRDST',
      display: 'strdst',
      symbol: 'STRDST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg',
          theme: {
            primary_color_hex: '#c9720c'
          }
        }]
    },
    {
      description: 'The native meme token of stargaze.',
      denom_units: [{
          denom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/mGAZE',
          exponent: 0
        }, {
          denom: 'GAZE',
          exponent: 6
        }],
      base: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/mGAZE',
      name: 'Gaze GAZE',
      display: 'GAZE',
      symbol: 'GAZE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.svg',
          theme: {
            primary_color_hex: '#b3a584'
          }
        }]
    },
    {
      description: 'ohhNFT LP token.',
      denom_units: [{
          denom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH',
          exponent: 0
        }, {
          denom: 'BRNCH',
          exponent: 6
        }],
      base: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH',
      name: 'Branch',
      display: 'BRNCH',
      symbol: 'BRNCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg',
          theme: {
            primary_color_hex: '#70372a'
          }
        }]
    },
    {
      description: 'Social token for the ohhVAULT.',
      denom_units: [{
          denom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uOHH',
          exponent: 0
        }, {
          denom: 'OHH',
          exponent: 6
        }],
      base: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uOHH',
      name: 'ohhVAULT ohh',
      display: 'OHH',
      symbol: 'OHH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.svg',
          theme: {
            primary_color_hex: '#dcc0c2'
          }
        }]
    },
    {
      description: 'The native coin of Sneaky Productions.',
      denom_units: [{
          denom: 'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky',
          exponent: 0
        }, {
          denom: 'sneaky',
          exponent: 6
        }],
      base: 'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky',
      name: 'Sneaky Productions',
      display: 'sneaky',
      symbol: 'SNEAKY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg',
          theme: {
            primary_color_hex: '#fbcaca'
          }
        }]
    },
    {
      description: 'LAB - Everything is an Experiment',
      extended_description: 'LAB - Everything is an Experiment\n\nUse 10 $LAB tokens to mint 1 Mad Scientist NFT on Backbone Labs Osmosis Launchpad. You will then be able to trade your NFTs on the marketplace. You can also choose to hold onto your $LAB tokens as unrevealed NFTs and trade it.\n\n Fair Launch: The event was marked by the absence of whitelists (WLs), no bots and no lock, ensuring an equitable opportunity for all interested parties.\n\nPreparation for the Launch: Participants were given a 52.91-hour window to deposit $OSMO into a pool on Streamswap.\n\nThe Swap Process: After the initial deposit period, $OSMO was converted into $LAB tokens over an additional hour, allowing for a smooth transition and fair distribution.',
      denom_units: [{
          denom: 'ibc/93B1AE0AD5E88242745B245064A2A51DDA1319C18176A966D5F8F9E02ED5373E',
          exponent: 0
        }, {
          denom: 'LAB',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/93B1AE0AD5E88242745B245064A2A51DDA1319C18176A966D5F8F9E02ED5373E',
      name: 'LAB',
      display: 'LAB',
      symbol: 'LAB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/LAB.png'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB',
            channel_id: 'channel-75'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/LAB.png',
          image_sync: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB'
          },
          theme: {
            primary_color_hex: '#bcdd76'
          }
        }]
    },
    {
      description: 'CDT - Membrane\'s solvency preserving stablecoin',
      denom_units: [{
          denom: 'ibc/B0263C28B6F44651F4596413B41FDB749EA010BD1220816DAC0ABF9947C1E806',
          exponent: 0
        }, {
          denom: 'CDT',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/B0263C28B6F44651F4596413B41FDB749EA010BD1220816DAC0ABF9947C1E806',
      name: 'CDT',
      display: 'CDT',
      symbol: 'CDT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
            channel_id: 'channel-75'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt'
          }
        }],
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg',
          image_sync: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt'
          }
        }]
    },
    {
      description: 'MBRN - Membrane\'s network token',
      denom_units: [{
          denom: 'ibc/E94BB144B818CB8061F43E202BEA1E9273B87D6326C8C6F4E6AE71C62FD37854',
          exponent: 0
        }, {
          denom: 'MBRN',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/E94BB144B818CB8061F43E202BEA1E9273B87D6326C8C6F4E6AE71C62FD37854',
      name: 'MBRN',
      display: 'MBRN',
      symbol: 'MBRN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
            channel_id: 'channel-75'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn'
          }
        }],
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg',
          image_sync: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn'
          }
        }]
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denom_units: [{
          denom: 'ibc/C9C8D88917374F27F03CBCEAF4F1B85F45A62F9F2316CBAADAAC5FDB3675DD3F',
          exponent: 0,
          aliases: ['uastro']
        }, {
          denom: 'astro',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/C9C8D88917374F27F03CBCEAF4F1B85F45A62F9F2316CBAADAAC5FDB3675DD3F',
      name: 'Astroport token',
      display: 'astro',
      symbol: 'ASTRO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro',
            channel_id: 'channel-18'
          },
          chain: {
            channel_id: 'channel-191',
            path: 'transfer/channel-191/factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg',
          theme: {
            primary_color_hex: '#4056e9'
          }
        }]
    }
  ]
};
export default info;