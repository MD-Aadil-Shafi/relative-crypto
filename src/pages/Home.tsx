import React from 'react'
import './home.css'
import Card from '../components/Card'
import { Data } from '../data'


const Home:React.FC = () => {
  return (
    <div className='container-full mx-auto p-4'>
      <div className='flex items-center md:mt-40 mb-20 ml-6'>
      <img src='/assets/activity.png' alt=''/>
      <h3 className='text-white font-bold mx-2'>Trending Assets</h3>
      </div>
        

        <div className="flex flex-col md:flex-row justify-center items-center flex-wrap">
          {Data?.map((item, idx)=>(
            <Card key={idx}  type={item.type} title={item.title} price={item.price} pl={item.pl}
            tvl={item.tvl} popular={item.popular} imgSrc={item.imgSrc} bgSrc={item.bgSrc}
            />
          ))}
          

          {/* <Card imgSrc={logo.bitcoinLogo} bgSrc={logoBg.bitCoinLogoBg} /> */}
        
        </div>
    </div>
  )
}

export default Home