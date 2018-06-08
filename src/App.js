import React, {Component} from 'react';
import './App.css';

import NavBar from './components/Navbar';
import SecondNavBar from './components/SecondNavBar';
import ContentOne from './components/ContentOne';
// import CarouselBodyGP from './components/Carousel';
import NewsTitle from './components/NewsTitle';
import Cards from './components/Cards';
import TicketTitle from './components/TicketTitle';
import BuyTickets from './components/BuyTickets';
import FooterTitle from './components/FooterTitle';
import Map from './components/Map';
import FooterForm from './components/FooterForm';
import FooterMap from './components/FooterMap';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App container">

        <div className='bg-1'>
          <NavBar/>
          <SecondNavBar/>
          <ContentOne/>
        </div>
        
        <div className='bg-2'>
          <NewsTitle/>
          <Cards/>
        </div>
        <div className='bg-3'>
          <TicketTitle/>
          <BuyTickets/>
          <FooterTitle/>
        </div>
        <div className='bg-4'>

            <Map />
            <FooterForm/>
            <FooterMap/>

        </div>

        <div className='footer'>
          <Footer />
        </div>
      </div>
  );
  }
}

export default App;
