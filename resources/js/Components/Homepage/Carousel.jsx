const Carousel = () => {

return (
<div className="carousel w-full h-screen">
  <div id="slide1" className="carousel-item relative w-full">
    <div className="flex justify-center">
      <img src="https://image01.wallrgb.com/ao/mj/f3519047e23368ddb0303d6aed2b9764.jpg" className="object-contain rounded-lg shadow-xl"/>    
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <div className="flex justify-center">
      <img src="https://www.plindo.com/wp-content/uploads/2021/04/Cerchi-un-outfit-con-leggings-neri-Ecco-i-look-piu-comodi-e-trendy.jpg" className="object-contain rounded-lg shadow-xl"/>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <div className="flex justify-center">
      <img src="https://i.pinimg.com/originals/17/c0/92/17c0925e21bde127deb72efd83a3d742.jpg" className="object-contain rounded-lg shadow-xl"/>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
)
}

export default Carousel;