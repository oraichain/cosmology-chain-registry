import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'injective',
  assets: [
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      extended_description: 'Injective Protocol is a cutting-edge decentralized exchange (DEX) platform facilitating fully decentralized trading of derivatives, futures, and spot markets. Built on the Cosmos SDK, Injective leverages layer-2 scaling solutions for high-speed transactions with low fees, ensuring an efficient trading experience. The platform\'s design eliminates intermediaries, giving users complete control over their assets and trades.\n\nThe Injective ecosystem is powered by its native token, INJ, used for governance, staking, and fee reduction. By staking INJ, users can participate in network governance, influencing key decisions and protocol upgrades. Injective\'s features include cross-chain trading, allowing seamless asset trading across different blockchains, and a decentralized order book for transparency and security. Injective transforms the DeFi space with a comprehensive, decentralized solution for trading various financial instruments.',
      denom_units: [{
          denom: 'inj',
          exponent: 0
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'inj',
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
      }
    },
    {
      description: 'Tether USDt on Injective',
      denom_units: [{
          denom: 'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt',
            channel_id: 'channel-122'
          },
          chain: {
            channel_id: 'channel-143',
            path: 'transfer/channel-143/erc20/tether/usdt'
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
      description: 'ERIS liquid staked INJ',
      denom_units: [{
          denom: 'factory/inj1cdwt8g7nxgtg2k4fn8sj363mh9ahkw2qt0vrnc/ampINJ',
          exponent: 0
        }, {
          denom: 'ampINJ',
          exponent: 6
        }],
      base: 'factory/inj1cdwt8g7nxgtg2k4fn8sj363mh9ahkw2qt0vrnc/ampINJ',
      name: 'ERIS Amplified INJ',
      display: 'ampINJ',
      symbol: 'ampINJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ampinj.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ampinj.png',
          theme: {
            primary_color_hex: '#5480cc'
          }
        }]
    },
    {
      description: '$AUTISM exists to celebrate autism as a superior biological tech stack for a changing world',
      denom_units: [{
          denom: 'factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism',
          exponent: 0
        }, {
          denom: 'autism',
          exponent: 6
        }],
      base: 'factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism',
      name: 'Autism',
      display: 'autism',
      symbol: 'AUTISM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png'
      },
      coingecko_id: 'autism',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }]
    },
    {
      description: 'BackBone Labs Liquid Staked Injective',
      denom_units: [{
          denom: 'factory/inj1dxp690rd86xltejgfq2fa7f2nxtgmm5cer3hvu/bINJ',
          exponent: 0
        }, {
          denom: 'bINJ',
          exponent: 18
        }],
      base: 'factory/inj1dxp690rd86xltejgfq2fa7f2nxtgmm5cer3hvu/bINJ',
      name: 'BackBone Labs Liquid Staked Injective',
      display: 'bINJ',
      symbol: 'bINJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/binj.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/binj.png',
          theme: {
            primary_color_hex: '#04a2fc'
          }
        }]
    },
    {
      description: 'The first meme coin on Injective. It’s a dog, but he has nunchucks',
      extended_description: '$NINJA is the premier meme coin on Injective. There is no formal roadmap and no promises made, but NINJAs are builders and masters of surprise. For all intents and purposes, the coin is completely useless, until it\'s not. And the dog, he has nunchucks.',
      denom_units: [{
          denom: 'factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja',
          exponent: 0
        }, {
          denom: 'NINJA',
          exponent: 6
        }],
      base: 'factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja',
      name: 'Dog wif nunchucks',
      display: 'NINJA',
      symbol: 'NINJA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png'
      },
      coingecko_id: 'dog-wif-nuchucks',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png',
          theme: {
            primary_color_hex: '#00468E',
            background_color_hex: '#00468E',
            circle: true
          }
        }],
      socials: {
        website: 'https://www.dogwifnunchucks.com/',
        twitter: 'https://x.com/dogwifnunchucks'
      }
    },
    {
      description: 'The $WGMI Token - We Gonna Make It. Are you ready?',
      denom_units: [{
          denom: 'factory/inj1rmjzj9fn47kdmfk4f3z39qr6czexxe0yjyc546/WGMI',
          exponent: 0
        }, {
          denom: 'WGMI',
          exponent: 6
        }],
      base: 'factory/inj1rmjzj9fn47kdmfk4f3z39qr6czexxe0yjyc546/WGMI',
      name: 'WGMI',
      display: 'WGMI',
      symbol: 'WGMI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/wgmi.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/wgmi.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }]
    },
    {
      description: 'The first memecoin on osmosis.',
      denom_units: [{
          denom: 'ibc/DD648F5D3CDA56D0D8D8820CF703D246B9FC4007725D8B38D23A21FF1A1477E3',
          exponent: 0
        }, {
          denom: 'WOSMO',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/DD648F5D3CDA56D0D8D8820CF703D246B9FC4007725D8B38D23A21FF1A1477E3',
      name: 'Wosmo',
      display: 'WOSMO',
      symbol: 'WOSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
            channel_id: 'channel-122'
          },
          chain: {
            channel_id: 'channel-8',
            path: 'transfer/channel-8/factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png',
          theme: {
            primary_color_hex: '#edd5ee'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
      }
    },
    {
      description: 'GLTO-ERC20 on injective',
      denom_units: [{
          denom: 'peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2',
          exponent: 0
        }, {
          denom: 'glto',
          exponent: 6
        }],
      base: 'peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2',
      name: 'Gelotto',
      display: 'glto',
      symbol: 'GLTO',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          },
          provider: 'Peggy'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg',
          theme: {
            primary_color_hex: '#501cad'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
      },
      socials: {
        website: 'https://gelotto.io/',
        twitter: 'https://twitter.com/Gelotto2'
      }
    },
    {
      description: 'Hava Coin is the lifeblood of the Cosmos & Injective networks, rewarding builders and welcoming supporters.',
      denom_units: [{
          denom: 'factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava',
          exponent: 0
        }, {
          denom: 'hava',
          exponent: 6
        }],
      base: 'factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava',
      name: 'Hava Coin',
      display: 'hava',
      symbol: 'HAVA',
      coingecko_id: 'hava-coin',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/hava.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/hava.png',
          theme: {
            primary_color_hex: '#eacea5'
          }
        }],
      socials: {
        website: 'https://havacoin.xyz/',
        twitter: 'https://twitter.com/Hava_Coin'
      }
    },
    {
      description: 'A clan of 11y bad kids crafting chaos on the Cosmos eco. One bad memecoin to rule them all  $BADKID. Airdropped to Badkids NFT holders and $STARS stakers. It\'s so bad, your wallet\'s throwing a tantrum for it.',
      denom_units: [{
          denom: 'ibc/A0C5AD197FECAF6636F589071338DC7ECD6B0809CD3A5AB131EAAA5395E7E5E8',
          exponent: 0
        }, {
          denom: 'BADKID',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/A0C5AD197FECAF6636F589071338DC7ECD6B0809CD3A5AB131EAAA5395E7E5E8',
      name: 'Badkid',
      display: 'BADKID',
      symbol: 'BADKID',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID',
            channel_id: 'channel-122'
          },
          chain: {
            channel_id: 'channel-8',
            path: 'transfer/channel-8/factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png',
          theme: {
            primary_color_hex: '#57443f'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png'
      }
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
          exponent: 0
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
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
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
          exponent: 0
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
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
        }]
    },
    {
      description: 'BEAST-ERC20 on injective',
      denom_units: [{
          denom: 'peggy0xA4426666addBE8c4985377d36683D17FB40c31Be',
          exponent: 0
        }, {
          denom: 'beast',
          exponent: 6
        }],
      base: 'peggy0xA4426666addBE8c4985377d36683D17FB40c31Be',
      name: 'Gelotto BEAST',
      display: 'beast',
      symbol: 'BEAST',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xA4426666addBE8c4985377d36683D17FB40c31Be'
          },
          provider: 'Peggy'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xA4426666addBE8c4985377d36683D17FB40c31Be'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/beast.png',
          theme: {
            primary_color_hex: '#21172b'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/beast.png'
      },
      socials: {
        website: 'https://gelotto.io/',
        twitter: 'https://twitter.com/Gelotto2'
      }
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denom_units: [{
          denom: 'ibc/063F4461F7317CFF10F50AB044E44932D22AAD84FA7107082744946E6DB7B7A8',
          exponent: 0,
          aliases: ['uastro']
        }, {
          denom: 'astro',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/063F4461F7317CFF10F50AB044E44932D22AAD84FA7107082744946E6DB7B7A8',
      name: 'Astroport token',
      display: 'astro',
      symbol: 'ASTRO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro',
            channel_id: 'channel-60'
          },
          chain: {
            channel_id: 'channel-177',
            path: 'transfer/channel-177/factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          }
        }],
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
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg'
      }
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
          exponent: 0
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
      name: 'Neptune Receipt INJ',
      display: 'nINJ',
      symbol: 'nINJ',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninj.png',
          theme: {
            primary_color_hex: '#293a6f'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
          exponent: 0
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
      name: 'Neptune Receipt ATOM',
      display: 'nATOM',
      symbol: 'nATOM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/natom.png',
          theme: {
            primary_color_hex: '#272f4b'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
          exponent: 0
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
      name: 'Neptune Receipt WETH',
      display: 'nWETH',
      symbol: 'nWETH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nweth.png',
          theme: {
            primary_color_hex: '#2a303f'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
          exponent: 0
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
      name: 'Neptune Receipt USDT',
      display: 'nUSDT',
      symbol: 'nUSDT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nusdt.png',
          theme: {
            primary_color_hex: '#54ac94'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
          exponent: 0
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
      name: 'Neptune Receipt TIA',
      display: 'nTIA',
      symbol: 'nTIA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ntia.png',
          theme: {
            primary_color_hex: '#7931f9'
          }
        }]
    },
    {
      description: 'Ninja Blaze Token',
      denom_units: [{
          denom: 'ibc/1011E4D6D4800DA9B8F21D7C207C0B0C18E54E614A8576037F066B775210709D',
          exponent: 0,
          aliases: ['uNBZ']
        }, {
          denom: 'NBZ',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/1011E4D6D4800DA9B8F21D7C207C0B0C18E54E614A8576037F066B775210709D',
      name: 'Ninja Blaze Token',
      display: 'NBZ',
      symbol: 'NBZ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1a6ydq8urdj0gkvjw9e9e5y9r5ce2qegm9m4xufpt96kcm60kmuass0mqq4/nbz',
            channel_id: 'channel-60'
          },
          chain: {
            channel_id: 'channel-177',
            path: 'transfer/channel-177/factory/neutron1a6ydq8urdj0gkvjw9e9e5y9r5ce2qegm9m4xufpt96kcm60kmuass0mqq4/nbz'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1a6ydq8urdj0gkvjw9e9e5y9r5ce2qegm9m4xufpt96kcm60kmuass0mqq4/nbz'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/NBZ.png',
          theme: {
            primary_color_hex: '#9890f9'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/NBZ.png'
      }
    },
    {
      description: 'Talis governance token',
      denom_units: [{
          denom: 'factory/inj1maeyvxfamtn8lfyxpjca8kuvauuf2qeu6gtxm3/Talis',
          exponent: 0
        }, {
          denom: 'Talis',
          exponent: 6
        }],
      base: 'factory/inj1maeyvxfamtn8lfyxpjca8kuvauuf2qeu6gtxm3/Talis',
      name: 'Talis Token',
      display: 'Talis',
      symbol: 'TALIS',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/talis.png',
          theme: {
            primary_color_hex: '#0c0f17'
          }
        }],
      socials: {
        website: 'https://talis.art/',
        twitter: 'https://twitter.com/ProtocolTalis'
      }
    },
    {
      description: 'Talis revenue sharing token',
      denom_units: [{
          denom: 'factory/inj1maeyvxfamtn8lfyxpjca8kuvauuf2qeu6gtxm3/xTalis',
          exponent: 0
        }, {
          denom: 'xTalis',
          exponent: 6
        }],
      base: 'factory/inj1maeyvxfamtn8lfyxpjca8kuvauuf2qeu6gtxm3/xTalis',
      name: 'xTalis Token',
      display: 'xTalis',
      symbol: 'XTALIS',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/xtalis.png',
          theme: {
            primary_color_hex: '#eaf0df'
          }
        }],
      socials: {
        website: 'https://talis.art/',
        twitter: 'https://twitter.com/ProtocolTalis'
      }
    }
  ]
};
export default info;