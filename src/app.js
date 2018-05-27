import React, {Component} from 'react';
import ReactDOM from 'react-dom';

require('./common/style/main.less');
require('./common/style/reset.css');
ReactDOM.render(
	<div className="comments">
		<header>Comments</header>
		<div className="content">
			<div className="item clear">
				<div className="img">
					<img src={require('./common/img/elyse.png')}/>
				</div>
				<div className="commentInfo">
					<h4 className="name">Matt</h4>
					<p className="commentContent">
						How artistic!
					</p>
					<p className="reply">回复</p>
				</div>
			</div>
			<div className="item clear">
				<div className="img">
					<img src={require('./common/img/molly.png')}/>
				</div>
				<div className="commentInfo">
					<h4 className="name">Matt</h4>
					<p className="commentContent">
						what?
					</p>
					<p className="reply">回复</p>
				</div>
				<div className="item clear">
					<div className="img">
						<img src={require('./common/img/matthew.png')}/>
					</div>
					<div className="commentInfo">
						<h4 className="name">Matt</h4>
						<p className="commentContent">
							it is~~~~~
						</p>
						<p className="reply">回复</p>
					</div>
				</div>
			</div>

			<div className="item clear">
				<div className="img">
					<img src={require('./common/img/molly.png')}/>
				</div>
				<div className="commentInfo">
					<h4 className="name">Matt</h4>
					<p className="commentContent">
						congratulations ! ! !
					</p>
					<p className="reply">回复</p>
				</div>
			</div>
		</div>
	</div>,
	document.getElementById('root')
);

if(module.hot){ 
    module.hot.accept()
}
