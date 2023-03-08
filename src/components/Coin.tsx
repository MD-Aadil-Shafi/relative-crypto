import React from 'react'

interface cointInterface{
    bgSrc?:string,
    imgSrc?:string,
    size?:string,
    popular?:string[]
}

const Coin:React.FC<cointInterface> = ({bgSrc,imgSrc, size='w-12', popular}) => {
  return (
    <>
    {popular ?
        <div className='flex items-center justify-items-center mx-auto'>
        {popular?.map((item,idx)=>(
            <img src={item} className='w-6 mx-2'  alt="" key={idx}/>
        ))}
        </div>
    :
    <div className='-mt-20 mb-32'>
    <div className="relative">
    <img src={`${bgSrc}`} className="w-28 absolute m-auto left-0 right-0"  alt=""/>
<img src={`${imgSrc}`} className='w-12 absolute mx-auto my-8 left-0 right-0 z-10'  alt=""/>
    </div>

</div>

}
    </>
  
  )
}

export default Coin