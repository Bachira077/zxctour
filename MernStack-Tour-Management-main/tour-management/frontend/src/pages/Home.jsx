import React  from "react";
import '../styles/home.css';

import {Container, Row,Col} from 'reactstrap';
import katonkaragai01 from '../assets/images/katonkaragai01.jpg';
import katonkaragai02 from '../assets/images/katonkaragai02.jpg';
import katonkaragaivideo from '../assets/images/katonqaragai03.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';

import Subtitle from './../shared/Subtitle';

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";



const Home = () =>{
    return <>

    <section>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="katon__content">
                    <div className="katon__subtitle d-flex align-items-center">
                        <Subtitle subtitle={'Know Before You Go'}/>
                        <img src={worldImg} alt=""/>
                    </div>
                    <h1>Путешествие открывает дверь к творчеству{" "}<span className="highlight"> воспоминания</span></h1>
                    <p>
                        Планируете поездку в Восточный Казахстан? Изучите все ресурсы необходимые для начала - от размещения и туров до проката снаряжения

                    </p>
                </div>
            </Col>
            <Col lg='2'>
                <div className="katon__img-box">
                    <img src={katonkaragai01} alt=""/>
                </div>
            </Col>
            <Col lg='2'>
                <div className="katon__img-box hero__video-box mt-4">
                    <video src={katonkaragaivideo} alt="" controls/>
                </div>
            </Col>
            <Col lg='2'>
                <div className="katon__img-box mt-5">
                    <img src={katonkaragai02} alt=""/>
                </div>
            </Col>

            <SearchBar/>
        </Row>
    </Container>
    </section>
    <section>
        <Container>
            <Row>
                <Col lg='3'>
                    <h5 className="services__subtitle">Что мы обслуживаем</h5>
                    <h2 className="services__title">Мы предлагаем наши лучшие услуги</h2>
                </Col>
                <ServiceList/>
            </Row>
        </Container>
    </section>
    
    <section>
<Container>
    <Row>
        <Col lg='12' className="mb-5">
            <Subtitle subtitle={'Explore'}/>
            <h2 className="featured__tour-title">Наши рекомендуемые туры</h2>
        </Col>
        <FeaturedTourList />
    </Row>
</Container>
    </section>
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                <div className="experience__content">
                    <Subtitle subtitle={"Опыт"}/>

                    <h2>
                    Со всем нашим опытом <br /> Мы будем служить вам
                    </h2>
                    <p>
                    Мы готовы поделиться нашим богатым опытом и знаниями, чтобы помочь вам сделать каждое путешествие незабываемым и безопасным. Наша команда профессиональных туристических гидов с многолетним опытом работы в индустрии туризма всегда готова ответить на ваши вопросы и помочь вам спланировать маршрут, который соответствует вашим интересам и бюджету. Мы убеждены, что опыт, который мы предоставляем нашим клиентам, является ключом к их удовлетворению и доверию, и мы стремимся обеспечить вас наивысшим уровнем обслуживания и комфорта во время вашего путешествия.
                        <br />
                        Quas ali

                    </p>
                </div>
                <div className="counter__wrapper d-flex align-items-center gap-5">
                    <div className="counter__box">
                        <span>10k+</span>
                        <h6>Успешных поездок</h6>

                    </div>
                    <div className="counter__box">
                        <span>2k+</span>
                        <h6>Постоянных клиентов</h6>

                    </div>
                    <div className="counter__box">
                        <span>5</span>
                        <h6>Лет опыта</h6>
                  </div>
                    
                </div>
                </Col>
                <Col lg='6'>
                <div className="experience__img">
                    <img src={experienceImg} alt=""/>
                </div>
                </Col>
            </Row>
        </Container>
    </section>

    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={"Галерея"}/>
                    <h2 className="gallery__title">
                    Посетите галерею туров наших клиентов
                    </h2>
                </Col>
                <Col lg='12'>
                <MasonryImagesGallery/>
                </Col>
            </Row>
        </Container>
    </section>

    <section>
        <Container>
            <Row>
                <Col lg='12'>
                <Subtitle subtitle={"Фанаты"}/>
                <h2 className="testimonial__title">Что наши фанаты говорят о нас</h2>
                </Col>
                <Col lg='12'>
                    <Testimonials/>
                </Col>
            </Row>
        </Container>
    </section>

    <Newsletter/>
    </>
};
export default Home;