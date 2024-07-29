import { Component } from "react";
import Header from '../Header/header'
import Booking from '../AppointmentComponents/Booking/booking'
import BookingForm from '../AppointmentComponents/BookingForm/bookingForm';
import { HomeContainer,Logo } from "./styledComponents";


class Home extends Component {
    render() {
        return (
            <>
            <Header/>
               
                <HomeContainer>
                    <Logo>
                 <img src="https://www.thoughtframeworks.com/wp-content/uploads/2022/07/Group-19349-1.png"
                 alt="logo"/>
                 </Logo>
{/*                 
                <Booking /> */}
                {/* <BookingForm></BookingForm> */}
                </HomeContainer>
                
            </>
        )
    }
}
export default Home