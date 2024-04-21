import "./style.css";
import "./phone.css";
export function Intro(){
return(
<div>
	{/* navbar */}
	<nav className="navbar navbar-expand-lg">
		<div className="container-fluid">
			<a className="navbar-brand" href="#"><img src="./image/logo.png" alt=""/></a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<a className="nav-link active" aria-current="page" href="#">Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">About</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Blog</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<h1 className="text-center">Hello! Kolkata</h1>
	{/* intro */}
	<div className="container p-2 myintro">
		<div className="row g-3">
			<div className="col-md-6">
				<div className="container taglines">
					<h3>Planning to visit the beautiful places in Kolkata?</h3>
					<p className="m-0">We are here to serve you the best experience.</p>
					<p>Get in touch.</p>
					<button type="button" className="btn">Contact us</button>
				</div>
			</div>
			<div className="col-md-6">
				<div className="container">
					<div className="d-flex flex-column align-items-center position-relative images">
						<img src="./image/intro/birla.jpg" alt="" id="i1"/>
						<img src="./image/intro/princep.jpg" alt="" id="i2"/>
						<img src="./image/intro/eden.jpg" alt="" id="i3"/>
					</div>
				</div>
			</div>
		</div>
		
		
	</div>
	{/* history */}
	<div className="container history text-center">
		<h3>Short history</h3>
		<hr></hr>
		<p id="historyText">Kolkata (formerly Calcutta) was a colonial city. The British East India Company developed Calcutta as a city by establishing an artificial riverine port in the 18th century CE. Kolkata was the capital of the British India until 1911, when the capital was relocated to Delhi. Kolkata grew rapidly in the 19th century to become the second most important city of the British Empire after London and was declared as the financial (commercial) capital of the British India. This was accompanied by the development of a culture that fused Indian philosophies with European tradition.</p>
		<p>Kolkata is also noted for its revolutionary history, ranging from the Indian to the leftist Naxalite and trade-union movements. Labelled the "Cultural Capital of India", "The City of Processions", "The City of Palaces", and the "City of Joy", Kolkata has also been home to prominent statesman and yogis. Problems related to rapid urbanization started to plague Kolkata from the 1930s and the city remains an example of the urbanization challenges of the developing nations.</p>
		
	</div>
	<div className="container g-0 mb-4">
		<img src="./image/joy.jpg" alt="" id="joy"/>
	</div>
	
	
	
</div>
)
}