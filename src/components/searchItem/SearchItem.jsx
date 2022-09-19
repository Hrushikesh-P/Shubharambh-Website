import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://images.unsplash.com/photo-1601482441062-b9f13131f33a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZyUyMGhhbGx8ZW58MHx8MHx8&w=1000&q=80"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Wedding Halls</h1>
        <span className="siDistance">500m from Bus Stop</span>
        <span className="siTaxiOp">Free gift from us to bride and groom.</span>
        <span className="siSubtitle">
          Wedding Hall with Air conditioning
        </span>
        <span className="siFeatures">
         Wedding Hall is 150 sq. m 
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice"> ₹ 20,000/-</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
