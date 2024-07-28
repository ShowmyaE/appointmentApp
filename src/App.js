import './App.css';
import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import signIn from './Components/AuthencationComponents/signIn/signIn'
import signUp from './Components/AuthencationComponents/signUp/signUp'
 import Home from './Components/HomePage/homepage'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import NotFound from './Components/NotFound/NotFound';
// import Trending from './components/Trending/Trending'
// import RouteProtected from './components/RouteProtected/RouteProtected';
 import ThemeContext from "./context/ThemeContext" ;
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import bookingForm from './Components/AppointmentComponents/BookingForm/bookingForm';
import bookingDetail from './Components/AppointmentComponents/BookingDetail/bookingdetail';
// import Gaming from './components/Gaming/gaming'

// import NotFound from './components/NotFound/NotFound'
// import VideoItemDetails from './components/VideoItemDetails/VideoItemDetails';

// import SavedVideos from './components/SavedVideos/SavedVideos';
class App extends Component {
   state = {isDarkTheme: false}
 
//   toggleTheme = () => {
//     console.log("APP THEME")
//     this.setState(prevState => ({
//       isDarkTheme: !prevState.isDarkTheme,
//     }))
//   }
//   saveVideoButtonClicked = data => {
//     const {savedVideosList} = this.state
//     this.setState({savedVideosList: [...savedVideosList, data]})
//   }


 render() {
   const { isDarkTheme} = this.state
   return (
     <ThemeContext.Provider
      value={{
                isDarkTheme,
            //  toggleTheme: this.toggleTheme,
//           saveVideoButtonClicked: this.saveVideoButtonClicked,
//           savedVideosList,
    }}
 >


        <Switch>
          <Route exact path="/" component={signIn} />
          <Route exact path="/signUp" component={signUp} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/book" component={bookingForm} />
          <Route exact path="/getbook" component={bookingDetail} />
          
          <ProtectedRoute exact path="/not-found" component={NotFound}/>
          {/* <RouteProtected exact path="/home" component={Home} />
          <RouteProtected exact path="/trending" component={Trending}/>
          <RouteProtected exact path="/Gaming" component={Gaming}/>
          <RouteProtected exact path="/saved-videos" component={SavedVideos}/>
          <RouteProtected exact path="/not-found" component={NotFound}/>
          <RouteProtected
            exact
            path="/videos/:id"
            component={VideoItemDetails} */} 
          
        </Switch>
      </ThemeContext.Provider>


    )
  }
}

export default App;
