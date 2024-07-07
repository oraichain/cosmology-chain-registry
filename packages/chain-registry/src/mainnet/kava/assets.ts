import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'kava',
  assets: [
    {
      description: 'Kava is a decentralized finance (DeFi) platform that provides a range of financial services, including lending, borrowing, and stablecoins, leveraging the Cosmos and Ethereum ecosystems.',
      extended_description: 'Kava offers a suite of DeFi services, such as lending, borrowing, and stablecoin issuance, utilizing a cross-chain platform that integrates the Cosmos SDK and Ethereum interoperability. Users can collateralize their assets to borrow Kava\'s stablecoin, USDX, or participate in lending and liquidity pools to earn rewards. Kava\'s native token, KAVA, is used for staking, governance, and securing the network. The platform\'s goal is to provide a decentralized, efficient, and accessible financial ecosystem that bridges multiple blockchain networks.',
      denom_units: [{
          denom: 'ukava',
          exponent: 0
        }, {
          denom: 'kava',
          exponent: 6
        }],
      base: 'ukava',
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
      }
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [{
          denom: 'hard',
          exponent: 0
        }, {
          denom: 'HARD',
          exponent: 6
        }],
      base: 'hard',
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
        }]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [{
          denom: 'swp',
          exponent: 0
        }, {
          denom: 'SWP',
          exponent: 6
        }],
      base: 'swp',
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
        }]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [{
          denom: 'usdx',
          exponent: 0
        }, {
          denom: 'USDX',
          exponent: 6
        }],
      base: 'usdx',
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
        }]
    },
    {
      denom_units: [{
          denom: 'erc20/tether/usdt',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: 'erc20/tether/usdt',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      coingecko_id: 'tether',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Tether'
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
    }
  ]
};
export default info;