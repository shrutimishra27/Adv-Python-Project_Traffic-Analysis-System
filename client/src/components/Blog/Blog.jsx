import "./Blog.css";

const Blog = () => {
  return (
    <>
    <div className="blog-body">
      <div className="header">
        <h2>Traffic Analysis Blog </h2>
      </div>

      <div className="row">
        <div className="leftcolumn">
          <div className="card">
            <h1>Traffic a headache</h1>
            <h5>Title description, Dec 7, 2022</h5>
            <br />
            <div className="fakeimg" >
              <img src="https://media.istockphoto.com/id/155287967/photo/cars-in-rush-hour-with-traffic-at-dawn.jpg?s=612x612&w=0&k=20&c=tDAaJQMHIh6nFDr0rJlD44tEtmj2srdpoSTKL7C5SGE=" alt="" />
            </div>
            {/* <p>Some text..</p> */}
            <br />
            <p>
            Traffic congestion, a common urban woe, continues to be a perpetual headache for commuters worldwide. Whether you're driving to work, taking public transportation, or even riding a bicycle, the frustration of being stuck in traffic is a shared experience that unites us all. Let's delve into why traffic jams persist and explore some potential solutions.
            </p>
          </div>
          <div className="card">
            <h1>Traffic in India</h1>
            <h5>Title description, Sep 2, 2023</h5>
            <br />
            <div className="fakeimg" >
              <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8qqP0CQzIjU0vTckvCPuyjhNESXe_oE_1Q&usqp=CAU" alt="" />
            </div>
            {/* <p>Some text..</p> */}
            <br />
            <p>
            India, a nation known for its rich cultural heritage and diverse landscapes, also grapples with a unique challenge – chaotic traffic. The bustling streets of Indian cities are a melting pot of vehicles, people, and animals, where navigating the daily commute is nothing short of an adventure. In this brief article, we'll explore the distinctive characteristics of traffic in India.
            </p>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="card">
            <h2>About Me</h2>
            <div className="" >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7i1Skul4mkY6Ia2iThqg8R66Ud4kkW_a5mg&usqp=CAU" alt="" />
            </div>
            <p>
              Latest blogs and updates for traffic
              you have come to right place
            </p>
          </div>
          <div className="card">
            <h3>Popular Post</h3>
            <br />
            <div className="">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Cqlq4wB3cHEqL03X1JXklF184N29Ch7r2A&usqp=CAU" alt="" />
            </div>
            <br />
            <div className="">
                <img src="data:image/jpeg;base64,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" alt="" />
            </div>
            <br />
            
          </div>
        </div>
      </div>

      {/* <div className="footer">
        <h2>Footer</h2>
      </div> */}
    </div>
    </>
  );
};

export default Blog;
