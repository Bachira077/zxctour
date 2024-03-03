import React,{useState, useContext} from "react";
import './booking.css';
import {Form,FormGroup,ListGroupItem,Button,ListGroup} from "reactstrap";
import {useNavigate} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Booking = ({tour, avgRating}) => {
const {price,reviews,title} =tour;
const navigate = useNavigate();
const {user} = useContext(AuthContext)

const [booking,setBooking] = useState({
  userId: user && user._id,
  userEmail: user && user.email,
  tourName:title,
  fullName:'',
  phone:'',
  guestSize:1,
  bookAt:''
});

const handleChange = e =>{
  setBooking(prev=>({...prev, [e.target.id]:e.target.value}))
};

const serviceFee = 500
const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee)


const handleClick =  async e=>{
  e.preventDefault();

  console.log(booking);

  try {
    if(!user || user===undefined || user===null){
      return alert('Please sign in')
    }
   const res = await fetch(`${BASE_URL}/booking`,{
    method:'post',
    headers:{
      'content-type':'application/json'
    },
    credentials:'include',
    body:JSON.stringify(booking)
    })

   const result = await res.json()
    if(!res.ok){
      return alert(result.message)
    }
    navigate("/Thank-You");
  } catch (err) {
    alert(err.message);
  }

 
};


    return <div className="booking">
        <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>{price}T<span>/на каждого человека</span></h3>
            <span className="tour__rating d-flex align-items-center">
            <i class="ri-star-s-fill"></i> 
            {avgRating ===0 ? null : avgRating} ({reviews?.length})
            </span>
        </div>
        <div className="booking__form">
            <h5>Информация</h5>
            <Form className="booking__info-form" onSubmit={handleClick}>
              <FormGroup>
                <input type="text" placeholder="Имя" id="fullName" required onChange={handleChange}/>
              </FormGroup>
              <FormGroup>
                <input type="number" placeholder="Номер телефона" id="phone" required onChange={handleChange}/>
              </FormGroup>
              <FormGroup className="d-flex align-items-center gap-3">
                <input type="date" placeholder="" id="bookAt" required onChange={handleChange}/>
                <input type="number" placeholder="Человек" id="guestSize" required onChange={handleChange}/>
              </FormGroup>
            </Form>
        </div>

        <div className="booking__bottom">
          <ListGroup>
            <ListGroupItem className="border-0 px-0">
                  <h5 className="d-flex align-items-center gap-1">{price} т <i class="ri-close-line"></i> 1 Человек </h5>
                  <span>{price} т</span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0">
                  <h5>цена сервиса  </h5>
                  <span>{serviceFee} т</span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0 total">
                  <h5>Всего </h5>
                  <span>{totalAmount} т</span>
            </ListGroupItem>
          </ListGroup>

          <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Забронировать</Button>
        </div>


    </div>
};
export default Booking;