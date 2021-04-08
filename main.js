"use strict";

const resultBox = document.querySelector("#result-box");
let digit = ''
let arrayDigit = ['0']
showResult()

/* 

const length = textBox.innerText.length;
 */

/* 
function eventHandler(event) {
    if (event.type === "click") {
        console.log(event);
    }
}
*/

function getJoin() {
    return arrayDigit.join(' ')
}

function getArrayLength() {
    return arrayDigit.length - 1
}


function getLastString() {
    return arrayDigit.slice(-1)
}


function doAllClear() {
    arrayDigit = ['0']
    digit = ''
    showResult()
}

function doCe() {
    if (digit !== '') {
        digit = digit.slice(0, - 1)
        showResult(digit)
    } else if ('-+*/'.includes(getLastString())) {
        arrayDigit.splice(-1)
        showResult()
    } else if (getLastString()) {
        arrayDigit[getArrayLength()] = getLastString().slice(0, - 1)
        showResult()
    } else if (arrayDigit.length == 0) {
        arrayDigit = ['0']
        showResult()
    } else {
        arrayDigit = arrayDigit.splice(-1)
        showResult()
    }
}

function addNumber(number) {
    number = number !== '.' ? parseInt(number).toString() : '.'
    // console.log(digit)
    if (number === '.' && arrayDigit[getArrayLength()].includes('.')) return
    if (number == 0 || getLastString() == 0) {
        // if (getLastString().includes('0.')) {
        if (number === '.' || getLastString() === '0.') {
            arrayDigit[getArrayLength()] += number
            console.log('xx')
            showResult()
        } else if ('123456789'.includes(number)) {
            arrayDigit[getArrayLength()] = number
            showResult()
            // } else {
            //     // digit = '0'
            //     arrayDigit.push(number)
            //     showResult()
        }
        // } else if (Number.isInteger(+getLastString())) {
        //     console.log('wrr')
    } else if (arrayDigit.length === 0) {
        arrayDigit.push(number)
        showResult()
    } else if (Number.isFinite(+getLastString())) {
        // digit += number
        arrayDigit[getArrayLength()] += number
        console.log('addNumber')
        showResult(digit)
        // } else if (Number.is(+getLastString())) {

    } else {
        arrayDigit.push(number)
        showResult()
    }
}

function showResult(number = '') {
    resultBox.innerText = getJoin() //+ " " + number
    console.log(arrayDigit, '||', digit)

}

function doOperation(operator) {
    // console.log(operator)
    if (arrayDigit.slice(-2, -1)[0] === '*' || arrayDigit.slice(-2, -1)[0] === '/' && getLastString()[0] === '-') return
    if (digit || Number.isFinite(+getLastString())) {
        // arrayDigit.push(digit)
        // digit = ''
        arrayDigit.push(operator)
        // arrayDigit.push('0')
        // console.log(arrayDigit)
    } else if ('*/'.includes(getLastString()) && operator === '-') {
        arrayDigit.push(operator)
    } else {
        // const lastIndex = arrayDigit.length - 1
        console.log(digit)
        arrayDigit[getArrayLength()] = operator
    }
    showResult()
}


function calculate() {
    if (Number.isFinite(+getLastString())) {
        // arrayDigit.push(digit)
        // digit = ''
        let makeResult = `${eval(getJoin())}`
        if (makeResult !== undefined) {
            arrayDigit = [makeResult]
            console.log('calculate', arrayDigit, makeResult)
        }
    } else {
        console.log(`${getLastString()}${digit}`, 'ff')
        arrayDigit[getArrayLength()] = `${getLastString()}${digit}`
        // arrayDigit.push(digit)
        digit = ''
        // console.log(operator, '|', arrayDigit, '|', digit, '|', makeResult, 'xxx')
    }
    showResult()

}
