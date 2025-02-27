import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'nim',
  assets: [{
      description: 'The native token of Nim Network.',
      extended_description: 'Nim Network is a highly-adoptable AI Gaming chain that will provide the ultimate ecosystem for exploration and development of games at the intersection of Web3 and AI.',
      denom_units: [{
          denom: 'anim',
          exponent: 0
        }, {
          denom: 'nim',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'anim',
      name: 'NIM Network',
      display: 'nim',
      symbol: 'NIM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.svg',
          theme: {
            primary_color_hex: '#519cea'
          }
        }],
      socials: {
        website: 'https://ai.nim.network/',
        twitter: 'https://twitter.com/nim_network'
      },
      keywords: ['gaming', 'AI'],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.svg'
      }
    }]
};
export default info;