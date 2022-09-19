import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://media.weddingz.in/images/16ab8276a8bfa26550f679e8e6963687/best-wedding-reception-halls-in-patna-you-will-absolutely-fall-in-love-with.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Satara</h1>
          <h2>12 Banquets</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://yannidesignstudio.com/app/uploads/2019/08/unique-mandap-indian-wedding-reception-decor-drake-hotel-hilton-chicago-red-floral-decoration-ideas.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Sangli</h1>
          <h2>8 Banquets</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://bellajbanquethall.com/wp-content/uploads/2016/06/4H5A0635-Edit-5.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Pune</h1>
          <h2>23 Banquets</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
