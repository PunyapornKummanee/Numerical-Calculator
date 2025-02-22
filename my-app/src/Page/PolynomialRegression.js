import React from "react";
import { Component } from "react";
import { render } from "@testing-library/react";
import regression from 'regression';
import ApexCharts from 'apexcharts';


const chartsx  = [];
const chartsy = [];
const chartfunc  = [];



class Polynomail extends Component{
    constructor(props){
        super(props)
        this.state = {size:'',id:'',setorder:'',setvalue:'',test:[]}
        this.handleChange = this.handleChange.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick  = this.handleClick.bind(this)
    }

    CreateMatrix(size){
        let array = [] ;
        let step = 0;
        for(let i=0 ; i<size ; i++){
            array[i] = [] //render jsx arr
            let temp = []
            
            for(let j=0 ; j<2 ; j++){
                temp.push(
                    <input
                        id = {step}
                        name= 'test'
                        placeholder= {"row"+i+"col"+j}
                        onChange={this.handleChange2}
                        size='30'
                    />
                )
                step++;
            }
            array[i].push(<div>{temp}</div>)
            render  (<div className = 'outPut'>{array[i]}</div>
            ) 
        }
            
                return(
                    <div className="container-fluid">
                    <div className="row1"></div>
                    <label htmlFor='setvalue'>input:&emsp;</label>
                    <input
                        name= 'setvalue'
                        placeholder="input x"
                        onChange={this.handleChange}
                        size='30'
                    />
                    <div className="row1"></div>
                    <label htmlFor='setorder'>order:&emsp;</label>
                    <input
                        name= 'setorder'
                        placeholder="input order"
                        onChange={this.handleChange}
                        size='30'
                    />
                    <div className="row1"></div>
                    &emsp;&emsp;&emsp;&emsp;  
                    <button className = "Numer-button" onClick={this.handleClick}> Cal </button>
                    </div>
                //return(array);
            );
        
    }

    PolynomailCal(size,test,setorder,setvalue){
        const orderset = parseInt(setorder);
        const valueset = parseInt(setvalue);
        console.log(orderset)
        console.log(valueset)
        let array = [];
        let x = [] ;
        let y = [] ;
        for(let i=0;i<size*2;i++){
            if(i % 2 ===0){
                chartsx.push(test[i])
                x.push(test[i])
            }
            else{
                chartsy.push(test[i])
                y.push(test[i])
            }
        }
        console.log(test)
        console.log(x)
        console.log(y)

        for(let i=0;i<size;i++){
            array[i] = [x[i],y[i]]
        }
        let sumx;
        console.log(array)
        const result = regression.polynomial(array,{ order: orderset })
        for(let i=0;i<size;i++){
            sumx = result.predict(x[i]);
            chartfunc.push(sumx[1].toString());
        }
        const sum = result.predict(valueset)
        console.log(sum)
        console.log(result)
        return  (
            <div className="anwer">
                <p id='chart'></p> 
                <h3>f(x) is {result.string}</h3>
                <h3>f({valueset}) = {sum[1]} </h3>
     
            </div>
        )
    }

    handleChange2(event)
    {   const {test} = this.state;
        test[event.target.id] = event.target.value;
        this.setState({
            [event.target.name[event.target.id]] : [test[event.target.id]]
        })
        console.log(event.target.id) ;
        console.log(test[event.target.id]) ;
     }


    handleClick(event)
    {    event.preventDefault()
        const {size,test,setorder,setvalue} = this.state;
        chartsx.splice(0)
        chartfunc.splice(0)
        chartsy.splice(0)
        const anwers = this.PolynomailCal(size,test,setorder,setvalue)
        render(anwers)
        console.log(chartfunc)
        console.log(chartsx)

        var options = {
            series: [{
            name: "Value",
            data: chartfunc
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
            text: 'Polynomail (Graph)',
            align: 'left'
        },
        grid: {
            row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
            },
        },
        xaxis: {
            categories: chartsx
        },
        };
        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render()
        
    }

    handleChange(event)
    {
        this.setState({
        [event.target.name] : event.target.value
        }) 
        console.log(event.target.name) ;
        console.log(event.target.value);
    }

    handleSubmit(event){
        const {size} = this.state;
        const xn = this.CreateMatrix(size)
        render(xn)
        event.preventDefault()
    }


    render(){
        return(
            <div className="container-fluid">
                <h1>POLYNOMIAL REGRESSION</h1><hr/>
                <div>
                <div className="row0"></div>
                <form className="Submit"  onSubmit={this.handleSubmit}>
                    <label htmlFor='size'>&emsp;number:&emsp;</label>
                    <input
                        name='size'
                        placeholder="input number"
                        value= {this.state.size}
                        onChange={this.handleChange}
                        size='30'
                />
                    <div className="row1"></div>
                    &emsp;&emsp;&emsp;&emsp;  
                    <button className = "Numer-button" > 
                        Create
                    </button>
                 </form>
                 {/* <br/><br/> 
                    <p id='chart'></p> */}
                 </div>
            </div>
        );
    }
}


export default Polynomail;
