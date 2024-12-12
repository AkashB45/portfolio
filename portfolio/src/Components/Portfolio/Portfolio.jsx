import React from 'react'
import './Portfolio.css'
import Blog from "../../img/blog.png";
import Currency from "../../img/currency.png";
import TODO from "../../img/todo.png";
import Realty from "../../img/realty.png";
import Grocery from "../../img/grocery.png";
import Aimockup from "../../img/aimockup.png";
import {Swiper,SwiperSlide} from 'swiper/react'
import { useContext } from 'react'
import { Themecontext } from '../../App'
import 'swiper/css'
const Portfolio = () => {
    const {darkmode,setDarkmode} = useContext(Themecontext);

  return (
    <div className="portfolio" id='Projects'>
        <span style={darkmode?{color:'white'}:null}>Recent Project</span>
        <span> Works..</span>
        <Swiper 
        spaceBetween={30}
        grabCursor={true}
        slidesPerView={3}
        className='portfolio-slider'>
            <SwiperSlide>
               <a href='https://aimockinterview-omega.vercel.app/' target='_blank'> <img src={Aimockup} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
               <a href='https://grigo-housing.vercel.app/' target='_blank'> <img src={Realty} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Blog} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Grocery} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Currency} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={TODO} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio