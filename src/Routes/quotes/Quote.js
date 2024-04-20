import "./style.css";
import "./phone.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export function Quote(){
var settings = {
// dots: true,
infinite: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 3000,
cssEase: "linear",
};
return(
<div>
	<div className="container text-center">
		<h3>What people say</h3>
		<hr></hr>
	</div>
	<div className="container mt-4">
		<Slider {...settings}>
		<div className="container quotes">
			<div className="d-flex justify-content-center"><img src="image/quote/man1.jpg" alt=""/></div>
			<p><q>Calcutta is the only city I know where you are actively encouraged to stop strangers at random for a quick chat.</q></p>
			<h5 className="text-center mt-4">Tahir Shah</h5>
		</div>
		<div className="container quotes">
			<div className="d-flex justify-content-center"><img src="image/quote/man1.jpg" alt=""/></div>
			<p><q>Calcutta is like another world. People, there are very special and grateful.</q></p>
			<h5 className="text-center mt-4 text-light">Penelope Cruz</h5>
		</div>
		<div className="container quotes">
			<div className="d-flex justify-content-center"><img src="image/quote/man1.jpg" alt=""/></div>
			<p><q>Kolkata always opens its heart to me and I am a sucker for love.</q></p>
			<h5 className="text-center mt-4">Vidya Balan</h5>
		</div>
		<div className="container quotes">
			<div className="d-flex justify-content-center"><img src="image/quote/man1.jpg" alt=""/></div>
			<p><q>Bengalis love to celebrate their language, their culture, their fierce attachment to a city that has been famously dying for more than a century.</q></p>
			<h5 className="text-center mt-4">Bharti Mukherjee</h5>
		</div>
		<div className="container quotes">
			<div className="d-flex justify-content-center"><img src="image/quote/man1.jpg" alt=""/></div>
			<p><q>Calcutta is beautiful Wherever you place a camera, you get a vision.</q></p>
			<h5 className="text-center mt-4">Carlos Ruiz Zafon</h5>
		</div>
		<div className="container quotes">
			<div className="d-flex justify-content-center"><img src="image/quote/man1.jpg" alt=""/></div>
			<p><q>Calcutta has still not recovered from history” people mourn the past, and abhor it deeply.</q></p>
			<h5 className="text-center mt-4">Pradeep Sarkar</h5>
		</div>

		
		</Slider>
	</div>
	
	
</div>
)
}