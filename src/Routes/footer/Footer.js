import "./style.css";
import "./phone.css";
export function Footer(){
return(
<div>
	
	<div className="container-fluid footer mt-5 g-0">
	<div className="text-center">
	<h3>Bird's-eye view</h3>
	<hr></hr>
	</div>
		<div className="container">
			<iframe src="https://www.youtube.com/embed/HUlO7DXoRSQ?si=Fp3V0O9Y5Ei8uELk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
		</div>
		<div className="container-fluid quicks p-4 g-0">
			<div className="row g-3">
			<div className="col-md-4">
			<div className="container p-3">
				<img src="./image/logo.png" alt=""/>
			</div>
				</div>
				<div className="col-md-4">
					<div className="container p-3">
						<h4>Quick Links</h4>
						<details>
  <summary>Gallery</summary>
  <p className=""><a href="">Victoria Memorial </a></p>
  <p className=""><a href="">Aquatica Water Park </a></p>
  <p className=""><a href="">St. Paul's Cathedral </a></p>
  <p className=""><a href="">Belur Math </a></p>
  <p className=""><a href="">Birla Mandir </a></p>
  <p className=""><a href="">Science City </a></p>
  <p className=""><a href="">Prinsep Ghat </a></p>
  <p className=""><a href="">Birla Planetarium </a></p>
  <p className=""><a href="">Eco Park </a></p>
  <p className=""><a href="">Dakshineswar Kali Temple </a></p>
  <p className=""><a href="">Nicco Park </a></p>
  <p className=""><a href="">Indian Museum </a></p>

</details>
					</div>
				</div>
				<div className="col-md-4">
				</div>
			</div>
		</div>
	</div>
	
</div>
)
}