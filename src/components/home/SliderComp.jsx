import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {
    const settings = {
        //dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div>
        <Slider {...settings}>
          <div className='!flex items-center bg-gradient-to-r from-indigo-400 from-10% via-sky-400 via-30% to-emerald-500 to-90% px-10'>
            <div className=''>
                <div className='text-5xl font-bold'>Most Popular NFTs in 2023</div>
                <div className='text-md italic my-5'>A non-fungible token (NFT) is a unique digital identifier that is recorded on a blockchain, and is used to certify ownership and authenticity. It cannot be copied, substituted, or subdivided. The ownership of an NFT is recorded in the blockchain and can be transferred by the owner, allowing NFTs to be sold and traded. NFTs can be created by anybody, and require few or no coding skills to create. NFTs typically contain references to digital files such as artworks, photos, videos, and audio. Because NFTs are uniquely identifiable, they differ from cryptocurrencies, which are fungible.</div>
                <div className='border border-indigo-500/75 rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gradient-to-l from-cyan-500 to-blue-400 hover:from-pink-500 hover:to-yellow-500'>Review</div>
            </div>
            <img className='w-[500px]' src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />            
          </div>
          <div className='!flex items-center bg-gradient-to-r from-indigo-400 from-10% via-sky-400 via-30% to-emerald-500 to-90% px-10'>
          <div className=''>
                <div className='text-5xl font-bold'>Most Popular NFTs in 2023</div>
                <div className='text-md italic my-5'>A non-fungible token (NFT) is a unique digital identifier that is recorded on a blockchain, and is used to certify ownership and authenticity. It cannot be copied, substituted, or subdivided. The ownership of an NFT is recorded in the blockchain and can be transferred by the owner, allowing NFTs to be sold and traded. NFTs can be created by anybody, and require few or no coding skills to create. NFTs typically contain references to digital files such as artworks, photos, videos, and audio. Because NFTs are uniquely identifiable, they differ from cryptocurrencies, which are fungible.</div>
                <div className='border border-indigo-500/75 rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gradient-to-l from-cyan-500 to-blue-400 hover:from-pink-500 hover:to-yellow-500'>Review</div>
            </div>
            <img className='w-[500px]' src="https://images.unsplash.com/photo-1483972117325-ce4920ff780b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />            
          </div>
        </Slider>
    </div>
  )
}

export default SliderComp