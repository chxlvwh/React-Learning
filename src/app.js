import React, {Component} from 'react';
import ReactDOM from 'react-dom';

require('./common/style/main.less');
require('./common/style/reset.css');

const elyse = require('./common/img/elyse.png');
const molly = require('./common/img/molly.png');
const matthew = require('./common/img/matthew.png');

class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = { showTextarea: false }
		this.changeShowTextarea = this.changeShowTextarea.bind(this)
	}

	changeShowTextarea() {
		if (this.state.showTextarea) {
			this.setState({ showTextarea: false })
		} else {
			this.setState({ showTextarea: true })
		}
	}

	isInner(i) {
		if (i!=undefined) {
			if (!i.length) {
				return null;
			} else {
				let name = Object.values(i[0])[0]
				i.shift()
				return (
					<Comment name={name} inner={i}/>
				)
			}
		}
	}

	showReplyWrapper(arg) {
		if (arg) {
			return (
				<ReplyWrapper />
			)
		} else {
			return null
		}
	}

	render() {
		return (
			<div className="item clear">
				<div className="img">
					<img src={this.props.name}/>
				</div>
				<div className="commentInfo">
					<h4 className="name">Matt</h4>
					<p className="commentContent">
						How artistic!
					</p>
					<p className="reply" onClick={this.changeShowTextarea}>回复</p>
					{this.showReplyWrapper(this.state.showTextarea)}
				</div>
				{this.isInner(this.props.inner)}
			</div>
		)
	}
}

class ReplyWrapper extends Component {
	constructor(props) {
		super(props);
		this.state = { replyContent: '' }
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		this.setState({ replyContent: e.target.value })
	}

	render() {
		return (
			<div>
				<textarea cols="30" rows="10"
					style={{border: '1px solid #eee',marginBottom: '15px'}}
					value={this.state.replyContent}
				 	onChange={this.handleChange}
				/>
			</div>
		)
	}
}

class CommentDate extends Component {
	render() {
		return (
			<div className="commentDate">{this.props.day}</div>
		);
	}
}

ReactDOM.render(
	<div className="comments">
		<header>Comments</header>
		<CommentDate day="今天"></CommentDate>
		<div className="content">
			<Comment name={elyse} inner={[{molly},{matthew},{matthew}]}/>
			{/* <Comment name={elyse} inner={[{matthew}]}/> */}
			<Comment name={molly}/>
			<Comment name={matthew}/>
		</div>
		<CommentDate day="昨天"></CommentDate>
		<div className="content">
			{/* <Comment name={elyse} inner={[{molly}]}/>
			<Comment name={elyse} inner={[{matthew}]}/> */}
			<Comment name={molly}/>
			<Comment name={matthew}/>
		</div>
	</div>,
	document.getElementById('root')
);

// if(module.hot){ 
//     module.hot.accept()
// }
