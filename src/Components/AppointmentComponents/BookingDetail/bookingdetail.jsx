import { Component } from "react";
import Cookies from 'js-cookie'
import Header from "../../Header/header";

class bookingDetail extends Component {
    constructor(props) {
        super(props);
        // Initialize state with an empty array
        this.state = {
            bookingData: []
        };
      }
        // state = {
        //     bookingData: ''
        // };

    componentDidMount() {
        this.getbookingdata()
      }
    getbookingdata=async()=>{
        // const {bookingData}=this.state
        const jwtToken = Cookies.get('jwt_token')
        const apiUrl = 'https://appointmentback.onrender.com/getbookingDetail'
        const options = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json"
          },
        }
        const response = await fetch(apiUrl, options)
        const data = await response.json()
        console.log("data",data)
        this.setState({
            bookingData:data
        })
        // this.setState(prevState => ({
        //     bookingData: [...prevState.bookingData, data]
        //   }));
        console.log("data",this.state.bookingData)
    }

    render() {
        const {bookingData} = this.state
        return (
           <div>
            <Header></Header>
            {
            bookingData.map(eachMovieDetails=>(

<div class="d-grid gap-3">
<div class="p-2 bg-light border"><span>Name : <b>{eachMovieDetails.Name}</b></span>
<span>   Email : {eachMovieDetails.EmailId}</span>
<div>
    Booking Date : {eachMovieDetails.BookingDate}
</div>
</div>
</div>
            ))}</div>

        )
    }

}
export default bookingDetail