import { Component } from "react";
import Header from '../Header/header'
import BookingForm from '../AppointmentComponents/BookingForm/bookingForm';
import { HomeContainer } from "./styledComponents";


class ContactUs extends Component {
    render() {
        return (
            <>
                <Header />
                <HomeContainer>
                    <BookingForm></BookingForm>
                </HomeContainer>
            </>
        )
    }
}
export default ContactUs