import React from 'react';
import "../styles/Home.scss";
// import Banner from '../components/Banner';
// import HomeBox from '../components/HomeBox';
// import ImageBoxHome from '../components/ImageBoxHome';
// import ReviewsHome from '../components/ReviewsHome';
import CrouselSlider from '../components/CrouselSlider';

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-3">
            <h2>Latest News</h2>
            <a href="/user">Apply Online</a>
          </div>
          <div className="col-md-6">
            <CrouselSlider />
          </div>
          <div className="col-md-3">
            <h2>Results</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home