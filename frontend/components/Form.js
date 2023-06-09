import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input:""
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.input);
  }

  handleChange = (e) => {
   this.setState({
    ...this.state,
    input: e.target.value
   });
  }

  render() {
    return (
      <div>
       
        <form>
          
          <input 
          onChange={this.handleChange}
           placeholder='Add your task!'
           type='text'
           name='add todos'
          />
          <button onClick={this.handleSubmit}>Add Todo!</button>
          
        </form>
      </div>
    )
  }
}
