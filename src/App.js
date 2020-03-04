import React from 'react'

import './App.css';


 


class HelloUser extends React.Component {

  constructor() {
    super()
    this.state = {
      name: 'xxxxx xxx',
      number: '0000000000000000',
      month: '00',
      day: '00/00',
     
    }
  }
   
  //Name of Card Owner
  nameChange = (n) =>{
 
    this.setState({
   
      name: n.target.value
    });
  }
  //Card Number
  numberChange=(c) =>{
    let a =c.target.value
    .replace(/[^a-z0-9]+/gi, '').replace(/(.{4})/g, '$1 ')
    this.setState({
      number: a
    });
  }
  //Expiration
  
  dayChange=(d)=> {
  
    let c=d.target.value.replace(/[^a-z0-9]+/gi, '').replace(/(.{2})/g,'$1/')
    c=c.slice(0,-1)
let a=c[0]+c[1]
let b=c[c.length-2]+c[c.length -1]

{ if (( a>=1 && a<=12) &&(b>=1 && b<=31))
  {  this.setState({
    day: c
   });}}
    
  }


  /*     
  dayChange=(d)=> {
  
    let c=d.target.value
    { if ( c>=1 && c<=31) 
     {  this.setState({
       day:('0'+ c).slice(-2)
      });}}
  }*/
 
   
  
  render() {
    return <div>
<div className="row">
  <div className="small-5 small-offset-1 columns ">
    <div className="callout credit">
      <div className="row">
        <div className="small-6 columns">
          <h1 className="credit__bank">My Bank</h1>
        </div>
        <div className="small-6 columns">
          <img className="credit__mc" src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_master_card-512.png" alt="" />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <p className="credit__card-number" >{this.state.number}</p>
        
        </div>
        <div className="small-9 columns">
          <label>Card Holder
            <p className="credit__name">{this.state.name}</p>
          </label>
        </div>
        <div className="small- columns">
          <label>Expires
            <p className="credit__date">{this.state.day}</p>
          </label>
        </div>
      </div>

    </div>
  </div>
  <div className="small-5 columns end">
    <div className="callout margin-top50">
      <label>NAME
        <input type="text" onChange={this.nameChange}/>
      </label>
      <label>NUMBER
        <input type="number" maxLength="16" onChange={this.numberChange}/>
      </label>
      <div className="row">
        <label className="column">EXPIRATION DATE</label>
       
        <div className="small-4 columns end">
          <input type="number"  maxLength ='4'onChange={this.dayChange}/>
        </div>
      </div>
     
    </div>
  </div>
</div>
      </div>
  }
}



export default HelloUser;
