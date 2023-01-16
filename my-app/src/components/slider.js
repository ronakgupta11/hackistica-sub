export default function Slider(){
    return(
        <div className = "slider">
            <section className="auto-slider">
  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="3000">
        <img className="auto-slider-img" src="https://miro.medium.com/max/730/1*fDJxac8P20Jmyb4GFYzWKQ.jpeg" alt=""></img>
      </div>
      <div className="carousel-item" data-bs-interval="3000">
        <img  className="auto-slider-img" src="https://www.adgully.com/img/800/202101/nnf.png.jpg" alt=""></img>
      </div>
      <div className="carousel-item" data-bs-interval="3000">
        <img className="auto-slider-img" src="https://i.pinimg.com/originals/e7/62/28/e76228cd65761ae8fbc15522ebcc9686.png" alt=""></img>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</section>
        </div>
    );

}