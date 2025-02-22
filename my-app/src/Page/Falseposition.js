// import { render } from "@testing-library/react";
// import React,{ Component } from 'react';
// // import { useState } from 'react';
// // import useState from 'react-hook-use-state';
// const Parser = require('expr-eval').Parser;

// class Falseposition extends Component
// {
//     constructor(props)
//     {
//         super(props)
//         this.state = {XL:'',XR:'',ErrorApox:'',func:''}
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)    
//     }

//     FalsePositionCalcFunction(XL,XR,ErrorApox,Funct)
//     {
//         const parser = new Parser();
//         function fx(x)
//         {
//             let expr = parser.parse(Funct)
//             console.log("fx = "+expr.evaluate({ x: (x) }))//logดู
//             return expr.evaluate({ x: (x) })
//         }

//         var i = 0;
//         var xl = parseFloat(XL);
//         var xr = parseFloat(XR);
//         var xm,xold;
//         var ErrorApox_Answer=10000000; //set as default
//         var inputerrorapox = parseFloat(ErrorApox)
//         if(xl!=null && xr!=null && Funct!=null && inputerrorapox!=null){
//         while(ErrorApox_Answer>inputerrorapox)
//             {
//                 xm=((xl*fx(xr))-(xr*fx(xl)))/(fx(xr)-fx(xl));
//                 if(fx(xm)*fx(xr)<0)
//                 {
//                     xold=xl
//                     xl=xm
//                 }
//                 if(fx(xm)*fx(xr)>0)
//                 {
//                     xold=xr
//                     xr=xm
//                 }
//                 ErrorApox_Answer = Math.abs((xm-xold)/xm)*100
//             i++
//             console.log("XL = "+xl)   //console log for debugging
//             console.log("XM = "+xm)
//             console.log("XR = "+xr)
//             console.log("Errorapox = "+ErrorApox_Answer)
//             render(<div className="ansiter"> XM = {xm.toFixed(6)}  Error = {ErrorApox_Answer.toFixed(6)} at iteration : {i} </div>)
//             //render("XM = "+xm.toFixed(6)+" Error = "+ErrorApox_Answer.toFixed(6)+" at iteration :"+i)//calc wont re-render so i stuck at this
//         }
        
//         return (<div className="ansiter"> XM= {xm}  at Iteration = {i} </div>); //calc wont re-render so i stuck at this
//       }

//       // return "Input XL,XR,ErrorApox and Function first!!"
//       return (<div className="ansFalse"> Input XL,XR,Error and Function first!! </div>)
//     }


//     handleSubmit(event){
//         const {XL,XR,ErrorApox,Funct} = this.state
       
//         const xm = this.FalsePositionCalcFunction(XL,XR,ErrorApox,Funct)
//         event.preventDefault()
//         // console.log("XL = "+XL)   //console log for debugging
//         // console.log("XR = "+XR)
//         // console.log("Function = "+Funct)
//         // console.log("Errorapox = "+ErrorApox)
//         render(xm) //same here at line 53 i literally stuck at re-rendering
       

//     }

//     handleChange(event)
//     {this.setState({
//         [event.target.name] : event.target.value
//         })
//     }

//     render(){
//         return(
//           <form onSubmit={this.handleSubmit}>
//             <div>
//                 <h1>&emsp;False-position Method&emsp;</h1>
//                 <p></p>

//               <div>
//               <label htmlFor='Funct'>&emsp;f(x) :&emsp;</label>
//               <input
//                 name='Funct'
//                 placeholder='Enter Function ( f(x) )'
//                 value={this.state.Funct}
//                 onChange={this.handleChange}
//                 size='80'
//               />

//               <label htmlFor='ErrorApox'>&emsp;Error :&emsp;</label>
//               <input
//                 name='ErrorApox'
//                 placeholder='Error'
//                 value={this.state.ErrorApox}
//                 onChange={this.handleChange}
//                 size='5'
//               />


//             </div>
//             <p></p>
//             <p></p>


//               <label htmlFor='XL'>&emsp;XL :&emsp;</label>
//               <input
//                 name='XL'
//                 placeholder='XL'
//                 value = {this.state.XL}
//                 onChange={this.handleChange}
//                 size='8'
//               />

//               <label htmlFor='XR'>&emsp;XR :&emsp;</label>
//               <input
//                 name='XR'
//                 placeholder='XR'
//                 value={this.state.XR}
//                 onChange={this.handleChange}
//                 size='8'
//               />
              
//               </div>

//               <p></p>

        
//             <p></p>
//             <div className="buttoncal">
//             &emsp;<button> Calculate</button>
//             </div>
//           </form>
//         )
//       }
//     }



// export default Falseposition

import { render } from "@testing-library/react";
import React from 'react';
import { Component } from 'react';
import ApexCharts from 'apexcharts'
const Parser = require('expr-eval').Parser;
const chartsfx  = [];
const chartsxm = [];
const chartserror = []

class Falseposition extends Component{
  constructor(props)
  {
      super(props)
      this.state = {XL:'',XR:'',ErrorApox:'',func:''}
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)    
  }

  BisectionCalcFunction(XL,XR,ErrorApox,Funct)
  {
      const parser = new Parser();
      function fx(x)
      {
          let expr = parser.parse(Funct)
          console.log("fx = "+expr.evaluate({ x: (x) }))//logดู
          return expr.evaluate({ x: (x) })
      }

      var i = 0;
      var xl = parseFloat(XL);
      var xr = parseFloat(XR);
      var xm,xold;
      var ErrorApox_Answer=10000000; //set as default
      var inputerrorapox = parseFloat(ErrorApox)
      if(xl!=null && xr!=null && Funct!=null && inputerrorapox!=null){
      while(ErrorApox_Answer>inputerrorapox)
          {
              xm=((xl*fx(xr))-(xr*fx(xl)))/(fx(xr)-fx(xl));
              chartsfx.push(fx(xm).toFixed(6));
              chartsxm.push(xm.toFixed(6));
              chartserror.push(ErrorApox_Answer.toFixed(6))

              if(fx(xm)*fx(xr)<0)
              {
                  xold=xl
                  xl=xm
              }
              if(fx(xm)*fx(xr)>0)
              {
                  xold=xr
                  xr=xm
              }
              ErrorApox_Answer = Math.abs((xm-xold)/xm)*100
          i++
          console.log("XL = "+xl)   //console log for debugging
          console.log("XM = "+xm)
          console.log("XR = "+xr)
          console.log("Errorapox = "+ErrorApox_Answer)
          //render("XM = "+xm.toFixed(6)+" Error = "+ErrorApox_Answer.toFixed(6)+" at iteration :"+i)//calc wont re-render so i stuck at this
          
          render(<div className="ansiter"> XM = {xm.toFixed(6)}  Error = {ErrorApox_Answer.toFixed(6)} at iteration : {i} </div>)//calc wont re-render so i stuck at this
      }
      // return "XM="+xm+" at Iteration = "+i; //calc wont re-render so i stuck at this
      return (<div className="ansiter"> XM= {xm}  at Iteration = {i} </div>);
    }
    // return "Input XL,XR,ErrorApox and Function first!!"
    return (<div className="ansFalse"> Input XL,XR,ErrorApox and Function first!! </div>)
  }


  handleSubmit(event){
    event.preventDefault()
    const {XL,XR,ErrorApox,Funct} = this.state
    chartsfx.splice(0)
    chartsxm.splice(0)
    chartserror.splice(0)
    const xm = this.BisectionCalcFunction(XL,XR,ErrorApox,Funct)
    console.log(chartsfx)
    console.log(chartsxm)
    console.log(chartserror)
    render(xm) 
    //MATH Graph
    var options = {
        series: [{
        name: "Value",
        data: chartsxm
    }],
        chart: {
        height: 350,
        type: 'line',
        zoom: {
        enabled: false
        }
    },
    dataLabels: {
        enabled: true
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: 'Xm (Graph)',
        align: 'left'
    },
    grid: {
        row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
        },
    },
    xaxis: {
        categories: chartserror
    }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render()
}

  handleChange(event)
  {this.setState({
      [event.target.name] : event.target.value
      })
  }


render()
 {
  return (
    <div className="container-fluid">
      <form onSubmit={this.handleSubmit}>
      <div>
        <h1>&emsp;False-position Method&emsp;</h1>
          <p></p>

        <div>
        <label htmlFor='Funct'>&emsp;f(x) :&emsp;</label>
        <input
          name='Funct'
          placeholder='Enter Function ( f(x) )'
          value={this.state.Funct}
          onChange={this.handleChange}
          size='80'
        />

        <label htmlFor='ErrorApox'>&emsp;Error :&emsp;</label>
        <input
          name='ErrorApox'
          placeholder='Error'
          value={this.state.ErrorApox}
          onChange={this.handleChange}
          size='5'
        />


      </div>
      <p></p>
      <p></p>


        <label htmlFor='XL'>&emsp;XL :&emsp;</label>
        <input
          name='XL'
          placeholder='XL'
          value = {this.state.XL}
          onChange={this.handleChange}
          size='8'
        />

        <label htmlFor='XR'>&emsp;XR :&emsp;</label>
        <input
          name='XR'
          placeholder='XR'
          value={this.state.XR}
          onChange={this.handleChange}
          size='8'
        />
        
        </div>

        <p></p>

      <p></p>
      <div>
      &emsp;<button>Calculate</button>
      </div>
    </form><br/><br/> 
        <p id='ans'></p>
        <p id='chart'></p>

    </div>
    
    );
    }

}

export default Falseposition;