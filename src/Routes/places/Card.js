export function Card(props){
	return(
			<div className="col-md-6 col-sm-6 col-xs-12">
				<div className="container d-flex justify-content-center h-100">
					<div className="card">
						<img src={props.image} className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">{props.h5}</h5>
							<p className="card-text">{props.p}</p>
						</div>
					</div>
				</div>
			</div>
		)
}