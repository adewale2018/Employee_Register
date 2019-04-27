import React, { Component } from 'react'
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
        <h1 className="Form-title">Employees Register </h1>
        <form className="Form">
        <h2 className="Form-h2">Create/Edit</h2>
          <div className="Form-input-full">
            <input 
              type="text"
              id="name"
              name="name"
              value={this.state.name} 
              placeholder="Name"
              required="required"
              onChange={this.changeHandler}
              className="Form-fullname"
            />
          </div>
          <div>
            <input 
              type="number" 
              id="age"
              name="age"
              value={this.state.age}
              placeholder="Age"
              required="required"
              onChange={this.changeHandler}
              className="Form-num"
            />
            <input 
              type="date" 
              id="dob"
              name="dob"
              value={this.state.dob}
              placeholder="Date of Birth"
              required="required"
              onChange={this.changeHandler}
              className="Form-num"
            />
            <input 
              type="number" 
              id="phoneNum"
              name="phoneNum"
              value={this.state.phoneNum}
              placeholder="Phone number"
              required="required"
              onChange={this.changeHandler}
              className="Form-num"
            />
          </div>
          <div>
            <input 
              type="number" 
              id="cpf"
              name="cpf"
              value={this.state.cpf}
              placeholder="CPF"
              required="required"
              onChange={this.changeHandler}
              className="Form-num"
            />
            <input 
              type="number" 
              id="rg"
              name="RG"
              value={this.state.rg}
              placeholder="RG"
              required="required"
              onChange={this.changeHandler}
              className="Form-num"
            />
          </div>
          <div>
            <input 
              type="text" 
              id="adrs"
              name="adrs"
              value={this.state.adrs}
              placeholder="Address"
              required="required"
              onChange={this.changeHandler}
              className="Form-adrs"
            />
            <input 
              type="number" 
              id="num"
              name="num"
              value={this.state.num}
              placeholder="Number"
              required="required"
              onChange={this.changeHandler}
              className="Form-no"
            />
          </div>
          <div>
            <input 
              type="text" 
              id="city"
              name="city"
              value={this.state.city}
              placeholder="City"
              required="required"
              onChange={this.changeHandler}
              className="Form-city"
              
            />
            <input 
              type="text" 
              id="sta"
              name="sta"
              value={this.state.sta}
              placeholder="State"
              required="required"
              onChange={this.changeHandler}
              className="Form-state"
            />
          </div>
          <div>
            <textarea
              id="msg"
              name="msg" 
              value={this.state.msg}
              rows="5"
              cols="20"
              required="required"
              onChange={this.changeHandler}
              className="Form-msg"
            />
          </div>
          <div className="Btn-div">
            <button className="Btn-save Form-Btn">Save</button>
            <button className="Btn-cancel Form-Btn">Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;