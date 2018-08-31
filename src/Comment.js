import React from 'react'

export default function Comment({comment}) {
	return (
		<div>
			<h2>{comment.user}</h2>
			<p>{comment.text}</p>
		</div>	
	)
}	