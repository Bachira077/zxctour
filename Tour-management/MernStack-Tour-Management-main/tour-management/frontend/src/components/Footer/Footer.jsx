import React from "react";
import './footer.css';
import { Container, Row, Col, ListGroup,ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/east-kazakhstan.png";

const quick__links=[
    {
        path:'/home',
        display:'Главная'
    },
    {
        path:'/about',
        display:'О нас'
    },
    {
        path:'/tours',
        display:'Туры'
    },

]

const quick__links2=[
    {
        path:'/gallery',
        display:'Галерея'
    },
    {
        path:'/login',
        display:'Вход'
    },
    {
        path:'/register',
        display:'Регистрация'
    },

]

const Footer = () =>{
const year =new Date().getFullYear()

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="3">
                          <div className="logo">
                            <img src={logo} alt=""/>
                            <p>Мы являемся туристическим агентством, которое предлагает уникальные и незабываемые туры по всему миру.</p>
                           <div className="social__links d-flex align-items-center gap-4">
                            <span>
                                <Link to='#'><i class="ri-youtube-line"></i></Link>
                            </span>
                            <span>
                                <Link to='#'><i class="ri-github-fill"></i></Link>
                            </span>
                            <span>
                                <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
                            </span>
                            <span>
                                <Link to='#'><i class="ri-instagram-line"></i></Link>
                            </span>
                            </div>                          
                          </div>
                    </Col>
                    <Col lg='3'>
                        <h5 className="footer__link-title">Обнаружено</h5>

                        <ListGroup className="footer__quick-links">
                            {
                                quick__links.map((item,index)=>(
                                    <ListGroupItem key={index} className="ps-0 border-0">
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>
                    <Col lg='3'>
                    <h5 className="footer__link-title">Быстрые ссылки</h5>

<ListGroup className="footer__quick-links">
    {
        quick__links2.map((item,index)=>(
            <ListGroupItem key={index} className="ps-0 border-0">
                <Link to={item.path}>{item.display}</Link>
            </ListGroupItem>
        ))
    }
</ListGroup>
                    </Col>
                    <Col lg='3'>
                    <h5 className="footer__link-title">Контакты</h5>

<ListGroup className="footer__quick-links">
    
       
            <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span><i class="ri-map-pin-line"></i></span>
                    Адрес:
                </h6>
                <p className="mb-0">ВКО,Катон-Карагайский район,с.Большенарым</p>
               
            </ListGroupItem>

            <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span><i class="ri-mail-line"></i></span>
                    Email:
                </h6>
                <p className="mb-0">erkhat03@gmail.com</p>
               
            </ListGroupItem>

            <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span><i class="ri-phone-fill"></i></span>
                    Номер телефона:
                </h6>
                <p className="mb-0">87713546090</p>
               
            </ListGroupItem>
        
    
</ListGroup>
                    </Col>
                    <Col lg='12' className="text-center pt-5">
                        <p className="copyright">copyright {year},все права защищены</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;