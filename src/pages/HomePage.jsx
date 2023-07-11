import React from 'react'
import Carousel from '../components/Carousel'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CardContainer from '../components/CardContainer'


const HomePage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <br />
      <br />
      <CardContainer />
      <Footer />
    </>
  );
}

export default HomePage