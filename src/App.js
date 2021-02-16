import React from 'react';
import './App.css';

let displayNum = '';

let numsArr = [];
let ACtype;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            displayNum: ''
        }
    }


    cleanFun() {
        displayNum = '';
        this.setState({ displayNum: '' })
        numsArr = [];
    }
    

    del() {
        if (displayNum === '') {
            this.setState({ displayNum: this.state.displayNum.slice(0, -1) })
        } else {   
            displayNum = this.state.displayNum.slice(0, -1)
            this.setState({ displayNum: this.state.displayNum.slice(0, -1) })
        }
    }


    numFun(num) {
        displayNum += String(num) 
        this.setState({ displayNum: displayNum })
    }


    mathAction(type) {
        if (type !== undefined) { ACtype = type }
        numsArr.push(Number(this.state.displayNum))
        this.setState({displayNum: ''})
        displayNum = '';
    }


    mathActionE() {
        this.mathAction();
        
        let finalNum;

        if (ACtype === 0) {
            for (let i = 0; i < numsArr.length; i++) { finalNum = numsArr[i] + numsArr[++i] }
        }
        if (ACtype === 1) {
            for (let i = 0; i < numsArr.length; i++) { finalNum = numsArr[i] - numsArr[++i] }
        }
        if (ACtype === 2) {
            for (let i = 0; i < numsArr.length; i++) { finalNum = numsArr[i] * numsArr[++i] }
        }
        if (ACtype === 3) {
            for (let i = 0; i < numsArr.length; i++) { finalNum = numsArr[i] / numsArr[++i] }
        }

        this.setState({displayNum: finalNum})
    }


    render() {
        return(
            <div id='caculator'>
                <div id='gridNums'>
                    <div onClick={this.cleanFun.bind(this)} className='num' id='display'>
                        {this.state.displayNum}
                    </div>
                    <button onClick={this.del.bind(this)} className='num'>&#8592;</button>
                    <button onClick={this.numFun.bind(this, 1)} className='num'>1</button>
                    <button onClick={this.numFun.bind(this, 2)} className='num'>2</button>
                    <button onClick={this.numFun.bind(this, 3)} className='num'>3</button>
                    <button onClick={this.mathAction.bind(this, 0)} className='num'>+</button>
                    <button onClick={this.numFun.bind(this, 4)} className='num'>4</button>
                    <button onClick={this.numFun.bind(this, 5)} className='num'>5</button>
                    <button onClick={this.numFun.bind(this, 6)} className='num'>6</button>
                    <button onClick={this.mathAction.bind(this, 1)} className='num'>-</button>
                    <button onClick={this.numFun.bind(this, 7)} className='num'>7</button>
                    <button onClick={this.numFun.bind(this, 8)} className='num'>8</button>
                    <button onClick={this.numFun.bind(this, 9)} className='num'>9</button>
                    <button onClick={this.mathAction.bind(this, 2)} className='num'>*</button>
                    <button onClick={this.mathActionE.bind(this)} className='num'>=</button>
                    <button onClick={this.numFun.bind(this, 0)} className='num'>0</button>
                    <button onClick={this.mathAction.bind(this, 3)} className='num'>/</button>
                </div>
            </div>
        )
    }
}



export default App;