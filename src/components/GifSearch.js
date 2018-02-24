
import React from 'react'

class GifSearch extends React.Component {
  state= {
    value: ''
  }

  addInput = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.querySearch(this.state.value)
    this.setState({
      value: ''
    })
  }

  render(){
    return(
      <div style={{float: "right", width: "200px"}}>

      <form onInput={this.addInput} onSubmit={this.onSubmit}>

      <label>Enter a Search Term:
        <input type='text' value={this.state.value}/>
      </label><br/>

      <input type="submit" value="go" />

      </form>

      </div>
    )
  }
}

export default GifSearch
