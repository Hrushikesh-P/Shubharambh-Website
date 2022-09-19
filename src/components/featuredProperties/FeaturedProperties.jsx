import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://th.bing.com/th/id/OIP.83fobRDCCsIUqEG9HXwu-QHaE8?pid=ImgDet&rs=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Paneer Tikka Masala</span>
        <span className="fpCity">Spicy</span>
        <span className="fpPrice">Starting from Rs.120/plate</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://th.bing.com/th/id/R.5985f8fe59d5f372b9a52a56c64ba0a5?rik=muYdi34g4OhhzA&riu=http%3a%2f%2fwww.cakeindustry.in%2fwp-content%2fuploads%2f2015%2f06%2fgulab_jamun.jpg&ehk=u%2bATwePmCumFC7ji%2bUoA82SsSyIVS5yCe8tzb0SCtlg%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Gulaab Jamun</span>
        <span className="fpCity">Sweets</span>
        <span className="fpPrice">Starting from Rs.80/plate</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://th.bing.com/th/id/R.ebf00c0df8d033eb4559c63ea9ef9e81?rik=VvS6gp3VYXWDLQ&riu=http%3a%2f%2frecipes.timesofindia.com%2fphoto%2f53099699.cms&ehk=6a4KDqN4ldnVGme4C5ujN3oarGD%2boXp27I8zyCyux%2b4%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Jalebi</span>
        <span className="fpCity">Sweets</span>
        <span className="fpPrice">Starting from Rs.50/plate</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://geekrobocook.com/wp-content/uploads/2021/01/39_Vegetable-Pulav.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Pulav</span>
        <span className="fpCity">Spicy</span>
        <span className="fpPrice">Starting from Rs.120/plate</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
