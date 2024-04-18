import "./style.css";
import "./phone.css";
export function Place(){
return(
<div>
	
	<div className="container popular">
		<div className="text-center">
			<h3 className="mb-4">Most popular places</h3>
		</div>
		{/* place cards */}
		<div className="row g-3 pop_places">
			<div className="col-md-4">
				<div className="container d-flex justify-content-center">
					<div className="card">
						<img src="image/place/victoria.jpg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Victoria Memorial</h5>
							<p className="card-text">The Victoria Memorial is a large marble monument on the Maidan in Central Kolkata, having its entrance on the Queen's Way. It was built between 1906 and 1921 by the Government of India. It is dedicated to the memory of Queen Victoria, the Empress of India from 1876 to 1901.</p>
						</div>
						<div className="card-body">
							<a href="#" className="card-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
								<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
								<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
							</svg></a>
							<a href="#" className="card-link">KNOW MORE</a>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="container d-flex justify-content-center">
					<div className="card">
						<img src="image/place/aquatica.jpg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Aquatica Water Park</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
						<div className="card-body">
							<a href="#" className="card-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
								<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
								<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
							</svg></a>
							<a href="#" className="card-link">LEARN MORE</a>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="container d-flex justify-content-center">
					<div className="card">
						<img src="image/place/stpaul.jpeg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Victoria Memorial</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
						<div className="card-body">
							<a href="#" className="card-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
								<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
								<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
							</svg></a>
							<a href="#" className="card-link">LEARN MORE</a>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="container d-flex justify-content-center">
					<div className="card">
						<img src="image/place/belur.jpeg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Victoria Memorial</h5>
							<p className="card-text">Some quick example text to build on the card title</p>
						</div>
						<div className="card-body">
							<a href="#" className="card-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
								<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
								<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
							</svg></a>
							<a href="#" className="card-link">LEARN MORE</a>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="container d-flex justify-content-center">
					<div className="card">
						<img src="image/place/birla.jpeg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Victoria Memorial</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
						<div className="card-body">
							<a href="#" className="card-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
								<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
								<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
							</svg></a>
							<a href="#" className="card-link">LEARN MORE</a>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="container d-flex justify-content-center">
					<div className="card">
						<img src="image/place/science.jpeg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Victoria Memorial</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
						<div className="card-body">
							<a href="#" className="card-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
								<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
								<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
							</svg></a>
							<a href="#" className="card-link">LEARN MORE</a>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="container d-flex justify-content-center">
					<div className="card">
						<img src="image/place/princep.jpg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Victoria Memorial</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
						<div className="card-body">
							<a href="#" className="card-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
								<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
								<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
							</svg></a>
							<a href="#" className="card-link">LEARN MORE</a>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="container d-flex justify-content-center">
					<div className="card">
						<img src="image/place/birla1.jpeg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Victoria Memorial</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
						<div className="card-body">
							<a href="#" className="card-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
								<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
								<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
							</svg></a>
							<a href="#" className="card-link">LEARN MORE</a>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="container d-flex justify-content-center">
					<div className="card">
						<img src="image/place/eco.jpg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Victoria Memorial</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
						<div className="card-body">
							<a href="#" className="card-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
								<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
								<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
							</svg></a>
							<a href="#" className="card-link">LEARN MORE</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
	
</div>
)
}