import React from 'react'

const ReviewsHome = () => {
    console.log(review);
  return (
    <div className='reviews'>
        <h1>Reviews</h1>
        {
            review.map((item, ind)=>{
                const {name, paragraph, star} = item;
                return(
                    <div key={ind}>
                        <h4>{name}</h4>
                        <p>{paragraph}</p>
                        <p>{star}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ReviewsHome;

const review = [
    {name: "Mister", paragraph: "ljloijolijli", star: 1},
    {name: "Mwefwef", paragraph: "ljloijolijli", star: 3},
    {name: "Miwefwef", paragraph: "ljloijolijli", star: 5},
    {name: "Mister", paragraph: "ljloijolijli", star: 1},
    {name: "Mwefwef", paragraph: "ljloijolijli", star: 3},
    {name: "Miwefwef", paragraph: "ljloijolijli", star: 5},
];