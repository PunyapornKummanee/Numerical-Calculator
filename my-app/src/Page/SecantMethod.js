import { render } from "@testing-library/react";
import React,{ Component } from 'react';
import regression from 'regression';
// import ApexCharts from 'apexcharts';


class GussJodan extends Component{
    constructor(props){
        super(props)
        this.state = {size:'',id:'',test:[],x:''}
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
                      
            for(let j=0 ; j<=size ; j++){
                console.log(step)
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
            console.log(array)
           render (<div className = 'row0'>{array[i]}</div>
            ) 
        }
                
        render(
        <div className="calboxcenter"> 
           
                   
            <div className="calboxcenter">&emsp;&emsp;&emsp;&emsp;  </div>
                    <button className = "row0" onClick={this.handleClick}> Calculate </button>
            </div>
                
            )
        return(array);
    }

    handleChange2(event)
    
    {   const {test} = this.state;
        test[event.target.id] = event.target.value            
        console.log(event.target.id) ;
        this.setState({

            [event.target.name[event.target.id]] : [test[event.target.id]]
            
        })
            console.log(event.target.name) ;
            console.log(test[event.target.id]) ;

    }


    handleClick(event)
    {  
        
        // const {size,test} = this.state;
        // let array = [];
        // let xarray = [] ;
        // let y = [] ;
        // for(let i=0;i<size*2;i++){
        //     if(i % 2 ===0){
        //         xarray.push(test[i])
                
                
        //     }
        //     else{
        //         y.push(test[i])
               
        //     }
        // }
        
        // console.log(test)
        // console.log(xarray)
        // console.log(y)

        // for(let i=0;i<size;i++){
        //     array[i] = [xarray[i],y[i]]
        // }
        // const {x} = this.state;

        // var Xinput = parseInt(x);
        // console.log(array)
        // const result = regression.linear(array,{ order: 1 })

        // let arramoutX ;
        // for(let i=0; i<size;i++){
        //     arramoutX = result.predict(xarray[i])
           
        // }
        // const functPredict = result.predict(Xinput)
        
        // render(
        //     <div className="row0">
        //     <h4>{result.string}</h4>
        //     <h4>{functPredict[1]}</h4>
        //     </div>
        // )

      
        
    }

    handleChange(event)
    {this.setState({
        [event.target.name] : event.target.value
        }) 
        console.log(event.target.name) ;
        console.log(event.target.value) ;
    }

    handleSubmit(event){
        const {size} = this.state;
        this.CreateMatrix(size)
        event.preventDefault()
    }


    render(){
        return(
            <div className="container-fluid">
                <h1>GussJodan</h1><hr/>
                <div className="row0"></div>
                <form className="Submit"  onSubmit={this.handleSubmit}>
                    <label htmlFor='size'>&emsp;size:&emsp;</label>
                    <input
                        name='size'
                        placeholder="input size"
                        value= {this.state.size}
                        onChange={this.handleChange}
                        size='30'
                />
                    <div className="row0"></div>
                    &emsp;&emsp;&emsp;&emsp;  
                    <button className = "Numer-button" > 
                        Create
                    </button>
                 </form>
                <p id='chart'></p>
            </div> 
        );
    }
}

export default GussJodan;




