import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      recipient_arr:[],
      subject:'',
      message:''
    }
    this.handlechange = this.handlechange.bind(this);
    this.handlereceipents = this.handlereceipents.bind(this);
    this.addRecipient = this.addRecipient.bind(this);
    this.removeRecipient = this.removeRecipient.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  addRecipient(){
    var recipient_arr = this.state.recipient_arr;
    recipient_arr.push('');
    this.setState({
      recipient_arr:recipient_arr
    })
  }
  handlereceipents(e,index){
    var recipient_arr = this.state.recipient_arr;
    recipient_arr[index] = e.target.value;
    this.setState({
      recipient_arr:recipient_arr
    });
  }
  handlechange(e){
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  
  removeRecipient(index){
    var recipient_arr = this.state.recipient_arr;
    recipient_arr.splice(index,1);
    this.setState({
      recipient_arr:recipient_arr
    })
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state)
  }
  render() {
    var _this = this;
    var recipient_fields = (this.state.recipient_arr).map(function(recipient,index){
      return(
        <div key={index} className="form-group">
          <label>Recipient</label>
          <div className="input-group">
            <input name="recipient" className="form-control" value={recipient} onChange={(e) => _this.handlereceipents(e,index)}  />
            <a  href="javascript:void(0)" 
                onClick={(e) => _this.removeRecipient(index)} 
                className="btn btn-danger">
              x
            </a>
          </div>  
        </div>  
      )
    })
    return (
      <div className="container">
        <h1 className="text-center">Dynamic Form with React JS</h1>
        <p className="text-center">Full tutorial available <a href="" target="_blank">here</a></p>
        <div className="row justify-content-md-center">
          <div className="col-md-6 col-sm-12">
            <form onSubmit={this.handleSubmit}>
              {recipient_fields}
              <div className="form-group">
                <label>Subject</label>
                <input name="subject" onChange={this.handlechange} className="form-control" />
              </div>   
              <div className="form-group">
                <label>Mail Body</label>
                <textarea name="message" onChange={this.handlechange} className="form-control" />   
              </div> 
              <div className="form-group">
                <a href="javascript:void(0)" onClick={this.addRecipient} className="btn btn-outline-info">Add Recipient</a>
                <button  
                  type="submit" 
                  className={`btn btn-outline-success float-right ${this.state.recipient_arr.length > 0?'':'tooltip disabled'}`} 
                >
                  Save
                  {this.state.recipient_arr.length == 0&&
                    <span className="tooltiptext">Add at least one recipient to continue!</span>
                  } 
                </button> 
              </div>

            </form>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;
