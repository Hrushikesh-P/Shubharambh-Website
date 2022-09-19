import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>20 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://th.bing.com/th/id/R.f56d1dea31662561dea5733bd07566eb?rik=uTqnNiGm8%2bOUug&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1587271407850-8d438ca9fdf2%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax%26ixid%3deyJhcHBfaWQiOjEyMDd9&ehk=Qbpz7Pljz4T6Z4s7MlBh%2byYKNp43pmJ%2bjwc5ud2cId4%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Marriage Halls</h1>
          <h2>32 halls</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>23 resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://i.pinimg.com/originals/ef/2e/61/ef2e6163b30e38e190e360316df588fa.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Birthday Halls</h1>
          <h2>5 halls</h2>
        </div>
      </div>
      {/* <div className="pListItem">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>2331 hotels</h2>
        </div>
      </div> */}
    </div>
  );
};

export default PropertyList;
