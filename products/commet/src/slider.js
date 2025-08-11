import Slider from 'react-slick';

export default function MySlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1
  };

  return (
    <Slider {...settings}>
      <div><img src="slide1.webp" alt="Slide 1" /></div>
      <div><img src="slide2.webp" alt="Slide 2" /></div>
    </Slider>
  );
}