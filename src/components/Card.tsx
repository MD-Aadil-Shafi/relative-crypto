import React from 'react'
import Coin from './Coin'

interface cardInterface{
    type:string,
    title:string,
    price:string,
    pl:number,
    tvl:string,
    popular:string[],
    imgSrc:string,
    bgSrc:string
}

const Card:React.FC<cardInterface> = ({imgSrc, bgSrc, type, title, price, pl, tvl, popular}) => {

    return (
    <div className="flex flex-col p-6 card-bg text-center space-y-1 mx-2 mb-24 hover:scale-110 transform 
    transition duration-500 hover:border-b-4 border-indigo-500">
              <Coin imgSrc={imgSrc} bgSrc={bgSrc}/>
            
                <h6 className='text-lightPurple mt-12 font-bold text-xl'>{title}</h6>
                <div className='text-center items-center bg-darkBlue rounded-full p-3 flex flex-row'>
                <div className="flex-1 text-center">
                <h1 className='font-bold text-white text-xl'>{price}</h1>
                </div>
                <div className="flex-2 text-end">
                <h5 className={`font-bold ${pl > 0 ? 'text-highGreen' : 'text-dangerRed'}`}>{pl}%</h5>  
                </div>
                </div>

                <p className='text-lightGray font-bold text-xl'>Price</p>
                <div className='items-center bg-darkBlue rounded-full p-3 flex flex-row'>
                <h1 className='font-bold text-white text-xl mx-auto'>{tvl}</h1>
                </div>

                <p className='text-lightGray font-bold text-xl'>TVL</p>
                <div className='items-center bg-darkBlue rounded-full p-3 flex flex-row mx-auto'>
                    <Coin popular={popular}/>
                </div>

                <p className='text-lightGray font-bold text-xl'>Popular Pairs</p>
            </div>
  )
}

export default Card