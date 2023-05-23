import React from 'react';

const Gallery = () => {
    const photos = [
     "https://i.ibb.co/Hd0d9Ky/adobestock3.png",
      "https://i.ibb.co/HHzFQjb/adobestock4.png",
      "https://i.ibb.co/khhTCBJ/Adobe-Stock6.png",
      "https://i.ibb.co/T26nNFb/Adobe-Stock7.png",
      "https://i.ibb.co/Cz6gQRx/Adobe-Stock8.png",
      "https://i.ibb.co/J7jnmLS/Adobe-Stock9.png",
      
        // Add more photo URLs as needed
      ];
    
      return (
        <div className='mb-10'>
           <div className='my-14 text-start md:text-center' data-aos="fade-up"
     data-aos-duration="1000">
           <h2 className='mb-5  text-2xl text-black font-semibold'>Shops Gallery</h2>
           <p className='mb-8 text-xl '>Welcome to our Gallery! Here, you'll find a wide array of captivating toy cars that are sure to catch your attention. </p>
           
           </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
        <img
        data-aos="zoom-out"
        data-aos-duration="500"
          key={index}
          src={photo}
          alt={`Photo ${index + 1}`}
          className="object-cover rounded w-full lg:h-[15rem] md:h-[12rem]"
        />
      ))}
        </div>
        </div>
      );
    };

export default Gallery;