import React from "react";
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-01.png';

const Testimonials = () => {
const settings={
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autoplaySpeed:2000,
    slidesToShow:3,

    responsive:[
        {
            breakpoint:992,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinite:true,
                dots:true,
            },
        },
        {
            breakpoint:576,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            },
        },
    ],
};



    return <Slider {...settings}>
    <div className="testimonial py-4 px-3">
<p>Я прекрасно провел время на этом сайте туристического гида! Очень удобный интерфейс и много полезной информации, которую я не мог найти в других источниках. Рекомендую всем любителям путешествий!
    </p>
    <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava01} className='w-25 h-25 rounded-2'  alt=""/>
        <div>
            <h6 className="mb-0 mt-3">Ерхат</h6>
            <p>Клиент</p>
        </div>
    </div>
    </div>

    <div className="testimonial py-4 px-3">
<p>Восхитительный сайт для путешественников! Я был приятно удивлен количеством информации и впечатлений, которые я нашел на этом сайте. Большое спасибо туристическому гиду за его работу!
    </p>
    <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava01} className='w-25 h-25 rounded-2'  alt=""/>
        <div>
            <h6 className="mb-0 mt-3">Нурдаулет</h6>
            <p>Клиент</p>
        </div>
    </div>
    </div>

    <div className="testimonial py-4 px-3">
<p>Я только что вернулся с путешествия, которое я спланировал с помощью этого сайта туристического гида. Я нашел здесь множество уникальных идей и советов, которые помогли мне сделать мое путешествие по-настоящему незабываемым. Большое спасибо за такой замечательный ресурс!
    </p>
    <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava01} className='w-25 h-25 rounded-2'  alt=""/>
        <div>
            <h6 className="mb-0 mt-3">Алихан</h6>
            <p>Клиент</p>
        </div>
    </div>
    </div>

    <div className="testimonial py-4 px-3">
<p>Прекрасный сайт туристического гида! Я использовал его для планирования своей поездки и получил множество идей и советов, которые помогли мне сделать мое путешествие незабываемым. Очень благодарен за такой отличный ресурс!
    </p>
    <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava01} className='w-25 h-25 rounded-2'  alt=""/>
        <div>
            <h6 className="mb-0 mt-3">Айбар</h6>
            <p>Клиент</p>
        </div>
    </div>
    </div>

    <div className="testimonial py-4 px-3">
<p>Прекрасный сайт туристического гида! Я использовал его для планирования своей поездки и получил множество идей и советов, которые помогли мне сделать мое путешествие незабываемым. Очень благодарен за такой отличный ресурс!
    </p>
    <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava01} className='w-25 h-25 rounded-2'  alt=""/>
        <div>
            <h6 className="mb-0 mt-3">Санжар</h6>
            <p>Клиент</p>
        </div>
    </div>
    </div>

    </Slider>
};

export default Testimonials;