import React, { Component } from "react";

class Counter extends Component {
	//  constructor(){
	//  super();
	// this.handleIncrement = this.handleIncrement.bind(this); //returns new instance
	// }

	//  styles = {
	//      fontSize: 50,
	//      fontWeight: "bold"
	//  };

	//dynamic object : state

	componentDidUpdate(preProps, PrevState) {
		console.log('Pre-Props', preProps);
		console.log('Prev-State', PrevState);
		if (preProps.counter.value !== this.props.counter.value) {
			//Ajax call and get new data from the server
		}
	}

	componentWillUnmount() {
		console.log('Umounted');
	}

	render() {
		// console.log('props', this.props);
		return (
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					onClick={() => this.props.onIncrement(this.props.counter)}
					className="btn btn-secondary btn-sm">
					Increment
				</button>
				<button
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className="btn btn-danger btn-sm m-2">
					Delete
				</button>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { value: count } = this.props.counter;
		return count === 0 ? "Zero" : count;
	}
}
//jsx are just like js objects, you can return them as a function, use them as a value, save it as a constant etc.
// div is used as a wrapper to hold and execute multiple tags at once.
// To remove div that doesn't do anything it can be replaced actually React.Fragment
export default Counter;
//jsx doens't have the concept of loops; instead uses map.
// when using map with lists a warning pops up saying that each ele must have a unique key.
// to overcome this warning key is assigned to the eles as key is only required to be specified locally, it doesn't have to be globally declared.
//jsx doesn't have if-else because isn't a templating
