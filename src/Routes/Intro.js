import "./style.css";
import "./phone.css";
export function Intro(){
return(
<div>
	<h1 className="text-center">The city of Joy</h1>
	{/* intro */}
	<div className="container p-2 myintro">
		<p className="text-center"><q>Kolkata is not for everyone. You want your city clean and green, stick to Delhi. You want your city rich and impersonal, go to Bombay. You want them hi-tech and full of draught beer, Bangalore’s your place. But if you want a city with a soul, come to Kolkata.</q></p>
		<div className="d-flex flex-column align-items-center position-relative images">
			<img src="./image/intro/birla.jpg" alt="" id="i1"/>
			<img src="./image/intro/princep.jpg" alt="" id="i2"/>
			<img src="./image/intro/eden.jpg" alt="" id="i3"/>
		</div>
	</div>
	{/* history */}
	<div className="container history text-center">
		<h3>History of Kolkata</h3>
		<p id="historyText">Kolkata (formerly Calcutta) was a colonial city. The British East India Company developed Calcutta as a city by establishing an artificial riverine port in the 18th century CE. Kolkata was the capital of the British India until 1911, when the capital was relocated to Delhi. Kolkata grew rapidly in the 19th century to become the second most important city of the British Empire after London and was declared as the financial (commercial) capital of the British India. This was accompanied by the development of a culture that fused Indian philosophies with European tradition.</p>
		<p>Kolkata is also noted for its revolutionary history, ranging from the Indian to the leftist Naxalite and trade-union movements. Labelled the "Cultural Capital of India", "The City of Processions", "The City of Palaces", and the "City of Joy", Kolkata has also been home to prominent statesman and yogis. Problems related to rapid urbanization started to plague Kolkata from the 1930s and the city remains an example of the urbanization challenges of the developing nations.</p>
		
	</div>
	<div className="container g-0 mb-4">
		<img src="./image/joy.jpg" alt="" id="joy"/>
	</div>
	
		
		
	</div>
	)
	}