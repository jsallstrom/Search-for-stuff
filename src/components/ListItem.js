import React from 'react';

export default class ListItem extends React.Component {
	// simple listitem that react when you click it
	state = {
		opacity: false
	};

	onItemPressed = (e) => {
		this.setState(() => ({ opacity: !this.state.opacity }));

		console.log('Pressed =' + this.state.pressed);
	};

	render() {
		return (
			<div onClick={this.onItemPressed} style={{ opacity: this.state.opacity ? 0.5 : 1 }}>
				<h3>{this.props.itemText}</h3>
				<div className="card" style={{ width: '18rem' }}>
					<img
						src={this.props.coverImageUrl}
						className="card-img-top"
						style={{ height: '10em' }}
						alt="cover"
					/>
					<div>
						<h5>{this.props.title}</h5>
						<p>{this.props.description}</p>
					</div>
				</div>
			</div>
		);
	}
}
