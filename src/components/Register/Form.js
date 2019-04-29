import React, { Component } from 'react';
import './Form.css';
class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "", 
      age: "", 
      dob: "", 
      phoneNum: "", 
      cpf: "", 
      rg: "",
      adrs: "",
      num: "",
      city: "",
      sta: "",
      msg: ""
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
  }
  changeHandler(event) {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value})
  }
  saveHandler(event) {
    event.preventDefault();
    this.setState({
      name: "", 
      age: "", 
      dob: "", 
      phoneNum: "", 
      cpf: "", 
      rg: "",
      adrs: "",
      num: "",
      city: "",
      sta: "",
      msg: ""
    })
  }
  render() {
    return(
      <div className="Form-container">
        <form className="Form">
          <div>
            <input 
              type="text"
              id="name"
              name="name"
              value={this.state.name} 
              placeholder="Name"
              required="required"
              onChange={this.changeHandler}
              className="Form-fullname Form-common"
            />
          </div>
          <div className="Form-age-dob-phone">
            <input 
              type="number" 
              id="age"
              name="age"
              value={this.state.age}
              placeholder="Age"
              required="required"
              onChange={this.changeHandler}
              className="Form-num age Form-common"
            />
            <input 
              type="date" 
              id="dob"
              name="dob"
              value={this.state.dob}
              placeholder="Date of Birth"
              required="required"
              onChange={this.changeHandler}
              className="Form-num dob Form-common"
            />
            <input 
              type="number" 
              id="phoneNum"
              name="phoneNum"
              value={this.state.phoneNum}
              placeholder="Phone number"
              required="required"
              onChange={this.changeHandler}
              className="Form-num phone Form-common"
            />
          </div>
          <div className="Form-cpf-rg">
            <input 
              type="number" 
              id="cpf"
              name="cpf"
              value={this.state.cpf}
              placeholder="CPF"
              required="required"
              onChange={this.changeHandler}
              className="Form-num2 cpf Form-common"
            />
            <input 
              type="number" 
              id="rg"
              name="rg"
              value={this.state.rg}
              placeholder="RG"
              required="required"
              onChange={this.changeHandler}
              className="Form-num2 Form-rg Form-common"
            />
          </div>
          <div className="Form-adrs-num">
            <input 
              type="text" 
              id="adrs"
              name="adrs"
              value={this.state.adrs}
              placeholder="Address"
              required="required"
              onChange={this.changeHandler}
              className="Form-adrs Form-common"
            />
            <input 
              type="number" 
              id="num"
              name="num"
              value={this.state.num}
              placeholder="Number"
              required="required"
              onChange={this.changeHandler}
              className="Form-no Form-common"
            />
          </div>
          <div className="Form-city-state">
            <input 
              type="text" 
              id="city"
              name="city"
              value={this.state.city}
              placeholder="City"
              required="required"
              onChange={this.changeHandler}
              className="Form-city Form-common"
              
            />
            <input 
              type="text" 
              id="sta"
              name="sta"
              value={this.state.sta}
              placeholder="State"
              required="required"
              onChange={this.changeHandler}
              className="Form-state Form-common"
            />
          </div>
          <div className="Form-text">
            <textarea
              id="msg"
              name="msg" 
              value={this.state.msg}
              rows="5"
              cols="10"
              placeholder="Message"
              required="required"
              onChange={this.changeHandler}
              className="Form-msg"
            />
          </div>
          <div className="Form-Btn">
            <button className="Btn save">Save</button>
            <button className="Btn cancel">Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;
