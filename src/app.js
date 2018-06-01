import React, {Component} from 'react';
import ReactDOM from 'react-dom';

require('./common/style/main.less');
require('./common/style/reset.css');

const elyse = require('./common/img/elyse.png');
const molly = require('./common/img/molly.png');
const matthew = require('./common/img/matthew.png');

function isInner(i) {
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
class Comment extends Component {
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
					<p className="reply">回复</p>
				</div>
				{isInner(this.props.inner)}
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
