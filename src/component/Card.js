import React from 'react';

const Card = ({name,email,id}) =>{
	return(
		<div className="tc bg-light-green dib br3 pa3 ma3 grow shadow-5">
			<img alt="robot" src={`https://robohash.org/${id}`} className="w-80 h-100"/>
			<div>
				<h3>{name}</h3>
				<h5>{email}</h5>
			</div>
		</div>
		);
}

export default Card;