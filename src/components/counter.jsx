import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        // tags: ['tag1', 'tag2', 'tag3']
     };


    //  constructor(){
        //  super();
        // this.handleIncrement = this.handleIncrement.bind(this); //returns new instance
    // }

    //  styles = {
    //      fontSize: 50,
    //      fontWeight: "bold"
    //  };

    //dynamic object : state
    handleIncrement = () => {
        console.log('Increment Clicked', this);
        this.setState({count: this.state.count + 1});
    }
    render() { 
        return (
        <div> 
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
            onClick={this.handleIncrement}
            className="btn btn-secondary btn-sm">Increment</button>
        </div>
        );
    }


    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
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