import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isOpen: false
		}

	}
	render() {
		const {article} = this.props
		const {isOpen} = this.state
		const {text} = !isOpen ? {text:"Open comment"} : {text:"Close comment"} 
		return (
			<div>
				
				<button onClick = {this.toggleOpen}>
					{text}
				</button>	
				{this.getBody()}
			</div>	
		)
	}

	getBody() {
		if (!this.state.isOpen) return null
		const {comments} = this.props
		const commentElements = comments.map((comment) => <li key = {comment.id}><Comment comment = {comment}/></li>)
		return (
			<ul>
				{commentElements}
			</ul>
		)
	}

	toggleOpen = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}
