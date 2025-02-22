import { render } from "@testing-library/react";
import React,{ Component } from 'react';
//import { derivative,evaluate } from "mathjs";
import { derivative} from "mathjs";
const Parser = require('expr-eval').Parser;

class NewtonRaphson extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {X0:'',Funct:'',ErrorApox:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this) 
  }
  
  NewtonRaphsonFunction(X0,Funct,ErrorApox)
  { 
      const parser = new Parser();
      let funct = parser.parse(Funct)
      let diff = derivative(Funct,'x')
      
      function fx1(x)
      {            
        console.log("fx = "+funct.evaluate({ x: (x) }))
        return funct.evaluate({ x: (x) })
      }

      function fx2(x)
      {   
        console.log("fx = "+diff.evaluate({ x: (x) }))
        return diff.evaluate({ x: (x) })

      }

      let i = 0;
      let x0 = parseFloat(X0);
      let xold = x0;
      let xnew = 0;
      let xkeep =0;
      let ErrorApox_Answer=10000000; //set as default
      let inputerrorapox = parseFloat(ErrorApox)
      if(x0!=null && Funct!=null && inputerrorapox!=null){
        while(ErrorApox_Answer>inputerrorapox)
        {
          xnew = xold-(fx1(xold)/fx2(xold));
          xkeep = xold ;
          
            ErrorApox_Answer = Math.abs((xnew-xkeep)/xnew)*100
            i++

          xold=xnew ; //xold=xi xnew=xi+1
        render  (<div className="ansiter"> Xnew = {xnew.toFixed(6)} Errorapox = {ErrorApox_Answer.toFixed(6)} at iteration :{(i-1)}</div>)
            
        }
      console.log(fx2(xnew)) ;
      console.log(fx1(xnew)) ;
      console.log("f'(x) ="+diff) ;

      return (<div className="ansiter">Xnew= {xnew} at Iteration = {(i-1)}</div>); //calc wont re-render so i stuck at this
    }

    return (<div className="ansFalse"> Input X0,Error and Function first!! </div>)

  }
  

  handleSubmit(event){
    const {X0,Funct,ErrorApox} = this.state;
    const xnew = this.NewtonRaphsonFunction(X0,Funct,ErrorApox)
    event.preventDefault()
    render(xnew)
  }

  handleChange(event)
  {this.setState({
    [event.target.name] : event.target.value
    })
    console.log(event.target.name)
    console.log(event.target.value)
  }
  

  render()
  {
    {
      return (
  
        <form onSubmit={this.handleSubmit}>
        <div>
          <h1>&emsp;NewtonRaphson&emsp;</h1>
            <p></p>
  
          <div className="inputfunc">
          <label htmlFor='Funct'>&emsp;f(x) :&emsp;</label>
          <input
            name='Funct'
            placeholder='Enter Function ( f(x) )'
            value={this.state.Funct}
            onChange={this.handleChange}
            size='80'
          />
          </div>

          <div className="inputError">
          <label htmlFor='ErrorApox'>&emsp;Error :&emsp;</label>
          <input
            name='ErrorApox'
            placeholder='Error'
            value={this.state.ErrorApox}
            onChange={this.handleChange}
            size='20'
          />
          </div>
          
          <div className="inputX">
          <label htmlFor='X0'>&emsp;X :&emsp;</label>
          <input
            name='X0'
            placeholder='X'
            value = {this.state.X0}
            onChange={this.handleChange}
            size='8'
          />
          </div>
         
     
        <div className="buttoncal">&emsp;<button>Calculate</button></div>

        </div>
      </form>

       );
    
     }
  }

}


export default NewtonRaphson;

