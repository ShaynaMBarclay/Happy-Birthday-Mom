import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; 
import 'swiper/css/autoplay';
import mom1 from './assets/2010.JPG';
import mom2 from './assets/blonde.JPG';
import mom3 from './assets/cody.JPG';
import mom4 from './assets/famplus.JPG';
import mom5 from './assets/gabandmem.JPG';
import mom6 from './assets/gabry.JPG';
import mom7 from './assets/IMG_9776.jpeg';
import mom8 from './assets/IMG_9777.jpeg';
import mom9 from './assets/IMG_9778.jpeg';
import mom10 from './assets/IMG_9780.jpeg';
import mom11 from './assets/IMG_9781.jpeg';
import mom12 from './assets/IMG_9782.jpeg';
import mom13 from './assets/IMG_9783.jpeg';
import mom14 from './assets/IMG_9784.jpeg';
import mom15 from './assets/IMG_9785.jpeg';
import mom16 from './assets/IMG_9786.jpeg';
import mom17 from './assets/IMG_9787.jpeg';
import mom18 from './assets/IMG_9788.jpeg';
import mom19 from './assets/IMG_9789.jpeg';
import mom20 from './assets/IMG_9790.jpeg';
import mom21 from './assets/IMG_9791.jpeg';
import mom22 from './assets/momdad.JPG';
import mom23 from './assets/momfam.JPG';
import mom24 from './assets/momry.JPG';
import mom25 from './assets/rymomyoug.JPG';
import mom26 from './assets/tia.JPG';
import mom27 from './assets/us.JPG';
import mom28 from './assets/us2.JPG';
import confetti from 'canvas-confetti';



function BirthdayScreen() {

    useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); 
  }, []);
  
  useEffect(() => {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
  });
}, []);

  return (
    <div className="birthday-screen mom-bg">
      <h1 className="birthday-title fade-in">🌷 Happy Birthday, Mom!</h1>

      <p className="birthday-message fade-in delay-1">
        Thanks for always being older than me. Happy birthday, You’re not getting older, you’re increasing in value. Like a vintage wine, classy and rare!
      </p>

        {/* 🎠 CAROUSEL */}
      <div className="carousel-container fade-in delay-2">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
        >
          {/* Replace these with your own image URLs */}
           <SwiperSlide><img src={mom1} alt="Mom 1" /></SwiperSlide>
          <SwiperSlide><img src={mom2} alt="Mom 2" /></SwiperSlide>
          <SwiperSlide><img src={mom3} alt="Mom 3" /></SwiperSlide>
           <SwiperSlide><img src={mom4} alt="Mom 4" /></SwiperSlide>
          <SwiperSlide><img src={mom5} alt="Mom 5" /></SwiperSlide>
          <SwiperSlide><img src={mom6} alt="Mom 6" /></SwiperSlide>
          <SwiperSlide><img src={mom7} alt="Mom 7" /></SwiperSlide>
          <SwiperSlide><img src={mom8} alt="Mom 8" /></SwiperSlide>
          <SwiperSlide><img src={mom9} alt="Mom 9" /></SwiperSlide>
           <SwiperSlide><img src={mom10} alt="Mom 10" /></SwiperSlide>
          <SwiperSlide><img src={mom11} alt="Mom 11" /></SwiperSlide>
          <SwiperSlide><img src={mom12} alt="Mom 12" /></SwiperSlide>
          <SwiperSlide><img src={mom13} alt="Mom 13" /></SwiperSlide>
          <SwiperSlide><img src={mom14} alt="Mom 14" /></SwiperSlide>
          <SwiperSlide><img src={mom15} alt="Mom 15" /></SwiperSlide>
           <SwiperSlide><img src={mom16} alt="Mom 16" /></SwiperSlide>
          <SwiperSlide><img src={mom17} alt="Mom 17" /></SwiperSlide>
          <SwiperSlide><img src={mom18} alt="Mom 18" /></SwiperSlide>
          <SwiperSlide><img src={mom19} alt="Mom 19" /></SwiperSlide>
          <SwiperSlide><img src={mom20} alt="Mom 20" /></SwiperSlide>
          <SwiperSlide><img src={mom21} alt="Mom 21" /></SwiperSlide>
          <SwiperSlide><img src={mom22} alt="Mom 22" /></SwiperSlide>
          <SwiperSlide><img src={mom23} alt="Mom 23" /></SwiperSlide>
          <SwiperSlide><img src={mom24} alt="Mom 24" /></SwiperSlide>
           <SwiperSlide><img src={mom25} alt="Mom 25" /></SwiperSlide>
          <SwiperSlide><img src={mom26} alt="Mom 26" /></SwiperSlide>
          <SwiperSlide><img src={mom27} alt="Mom 27" /></SwiperSlide>
           <SwiperSlide><img src={mom28} alt="Mom 28" /></SwiperSlide>
         
       
        </Swiper>
      </div>

      <div className="sign-card fade-in delay-2">
        <h2 className="mom-title">🌺</h2>
        <p>
          Tia, Ji-Ji, Billy, Benny, Oliver, Soshi, Twinkle, Cody, Joshua, Spencer, Casper, Phoebe, Ozzy, Jasper, Bailey, Daisy, Odin, Shayna, Gabrielle, Ryan's Mom
        </p>
      </div>


    </div>
  )
}

export default BirthdayScreen;
