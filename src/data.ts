import { logo } from './components/images'
import { logoBg } from './components/images'

export const Data = [
    {type:'bitcoin',
    title:'Bitcoin (BTC)',
    price:'$31,812.80',
    pl:10,
    tvl:'$60,000',
    popular:[logo.solonaLogo,logo.ethereumLogo, logo.binanceLogo],
    imgSrc:logo.bitcoinLogo,
    bgSrc:logoBg.bitCoinLogoBg
    },
    {type:'solana',
    title:'Solana (SOL)',
    price:'$32.83',
    pl:-12.32,
    tvl:'$60,000',
    popular:[logo.bitcoinLogo,logo.ethereumLogo, logo.binanceLogo],
    imgSrc:logo.solonaLogo,
    bgSrc:logoBg.solananLogoBg
    },
    {type:'ethereum',
    title:'Ethereum (ETH)',
    price:'$1,44.45',
    pl:-11.93,
    tvl:'$60,000',
    popular:[logo.solonaLogo,logo.ethereumLogo, logo.binanceLogo],
    imgSrc:logo.ethereumLogo,
    bgSrc:logoBg.ethereumLogoBg
    },
    {type:'binance',
    title:'Binance USD (BUSD)',
    price:'$1.00',
    pl:0.26,
    tvl:'$60,000',
    popular:[logo.solonaLogo,logo.ethereumLogo, logo.binanceLogo],
    imgSrc:logo.binanceLogo,
    bgSrc:logoBg.binanceLogoBg
    },
    {type:'shiba',
    title:'Shiba Inu (SHIB)',
    price:'$0.00000001948',
    pl:-8.1,
    tvl:'$60,000',
    popular:[logo.solonaLogo,logo.ethereumLogo, logo.binanceLogo],
    imgSrc:logo.shibaLogo,
    bgSrc:logoBg.shibaLogoBg
    }
]