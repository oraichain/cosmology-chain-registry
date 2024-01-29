import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'kyvetestnet',
  assets: [
    {
      description:
        'The native utility token of the Kaon testnet version of KYVE.',
      denom_units: [
        {
          denom: 'tkyve',
          exponent: 0
        },
        {
          denom: 'kyve',
          exponent: 6
        }
      ],
      base: 'tkyve',
      name: 'KYVE',
      display: 'kyve',
      symbol: 'KYVE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kyvetestnet/images/kyve.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kyvetestnet/images/kyve.svg'
        }
      ]
    }
  ]
};
export default info;
