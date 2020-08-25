import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	render() {
		console.log("Counters rendered");
		const {
			onReset,
			counters,
			onDelete,
			onIncrement,
			onDecrement,
		} = this.props;
		//Object Destructring; Very similar to python to Unpacking of Tuples
		return (
			<div>
				<button onClick={onReset} className="btn btn-primary btn-sm m-2">
					Reset
				</button>
				{counters.map((counter) => (
					<Counter
						key={counter.id}
						onDelete={this.props.onDelete}
						onIncrement={this.props.onIncrement}
						onDecrement={this.props.onDecrement}
						counter={counter}
					/>
				))}
			</div>
		);
	}
}

export default Counters;
