import "./style.css";
import "./phone.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export function Quote(){
var settings = {
dots: true,
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
			<p><q>Where does one go in a tremendous city like Calcutta to find insider information? I recalled India’s golden rule: do the opposite of what would be normal anywhere else.</q></p>
			<h5 className="text-center mt-4">V.S Naipul</h5>
		</div>
		<div className="container quotes">
			<div className="d-flex justify-content-center"><img src="image/quote/man1.jpg" alt=""/></div>
			<p><q>Calcutta is not for everyone. You want your city clean and green, stick to Delhi. You want your city rich and impersonal, go to Bombay. You want them hi-tech and full of draught beer, Bangalore’s your place. But if you want a city with a soul, come to Calcutta.</q></p>
			<h5 className="text-center mt-4">Vir Sanghvi</h5>
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
			<p><q>Those places where sadness and misery abound are favored settings for stories of ghosts and apparitions. Calcutta has countless such stories hidden in its darkness.</q></p>
			<h5 className="text-center mt-4">Carlos Ruiz Zafon</h5>
		</div>
		<div className="container quotes">
			<div className="d-flex justify-content-center"><img src="image/quote/man1.jpg" alt=""/></div>
			<p><q>Bengalis love to celebrate their language, their culture, their politics, their fierce attachment to a city that has been famously dying for more than a century. They resent with equal ferocity the reflex stereotyping that labels any civic dysfunction anywhere in the world ‘another Calcutta.</q></p>
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
		<div className="container quotes">
			<div className="d-flex justify-content-center"><img src="image/quote/man1.jpg" alt=""/></div>
			<p><q>Calcutta is by far the richest city in India even though its various problems have started to turn its richness into a collapsing wealth. It is possible the richest city anywhere between Rome and Tokyo in terms of the money that is accumulated and represented here.</q></p>
			<h5 className="text-center mt-4">Geoffrey Moorhouse</h5>
		</div>

		
		</Slider>
	</div>
	
	
</div>
)
}