export function Card(props){
	return(
		<div className="col-md-4 col-sm-6 col-xs-12">
				<div className="container special_contain">
					<div className="text-center"><img src={props.img} alt=""/></div>
					<h5>{props.h5}</h5>
					<p>{props.p}</p>
				</div>
				</div>
				)}