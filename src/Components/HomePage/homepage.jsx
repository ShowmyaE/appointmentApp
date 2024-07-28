import { Component } from "react";
import Header from '../Header/header'
import Booking from '../AppointmentComponents/Booking/booking'
import bookingForm from '../AppointmentComponents/BookingForm/bookingForm';


class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <Booking />
                <bookingForm></bookingForm>
            </>
        )
    }
}
export default Home