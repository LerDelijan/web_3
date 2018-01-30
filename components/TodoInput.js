import React, {Component} from 'react';
import { Link } from "react-router-dom";

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ value: e.target.value });
    }

    handleAdd = () => {
        this.props.onSubmit(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        return (
            <div>
                <div className="input-container">
                    <input id="title" type="text" 
                        disabled={this.props.disabled}
                        value={this.state.value} onChange={this.onChange}/>
                    <button 
                        disabled={this.props.disabled}
                        className='donebtn' onClick={this.handleAdd}>Add</button>
                </div>
                <div className='link'>
                    <Link className='nav-link' to="/">Go to list</Link>
                </div>
            </div>
        );
    }
}

export default TodoInput;