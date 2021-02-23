import React, { Component } from 'react'
import './App.css'
class App extends Component {
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // "phrase" is the text entered by the user - right now there are some test words hard coded to make the process of testing your code a bit faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: "alpha through yummy squeal queen fry",
      // "phraseTranslated" is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the "submit" button
      phraseTranslated: "This is where your translated sentence will appear."
    }
  }
  // The "myPigLatinCodeHere" function is where you will put your logic to convert the sentence entered by the user to Pig Latin
  myPigLatinCodeHere = () => {
    // the variable "userInput" will contain the text input from the user modified into an array of words
    // no need to change this variable
    let userInput = this.state.phrase.split(" ")
    console.log("userInput:", userInput)
    // now that we have an array of words, we can map over the array and access each word
    let translatedWordsArray = userInput.map(currentWord => {
      // ACTION ITEM: use "currentWord" as a starting point for your code
      console.log("currentWord:", currentWord)
      let vowelsArray = currentWord.split("").filter(vowel => {
        return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"
      })
      console.log("vowelsArray:", vowelsArray)
      let firstVowel = vowelsArray[0]
      let vowelLocator = currentWord.indexOf(firstVowel)
      let startingWord = "piggy"
      if(currentWord.charAt(0).toLowerCase() === "y") {
        return `${currentWord.substring(1)}yay`
      } else if(currentWord.charAt(0).toLowerCase() === "q" && currentWord.charAt(1).toLowerCase() === "u") {
        return `${currentWord.substring(2)}quay`
      } else if(vowelLocator === 0) {
        return `${currentWord}way`
      } else if(vowelLocator !== 0) {
        let firstPart = currentWord.substring(0, vowelLocator) 
        // console.log(firstPart)
        let secondPart = currentWord.substring(vowelLocator)
        // console.log(secondPart)
        return `${secondPart}${firstPart}ay`
      } return currentWord
      // your code here!
      // currentWord = currentWord.toLowerCase()
      // if(typeof currentWord !== "string") {
      //   return ("Only words sir or ma'am")
      // } else if(currentWord[0] === vowelsArray[0]) {
      //   return `${currentWord}way`
      // } else if(currentWord.includes("qu")) {
      //   let uIndex = currentWord.indexOf("u")
      // }
      console.log(currentWord)
      // Remember: console.log is your friend :)
      // ACTION ITEM: change the value of currentWord to the name of whatever variable you made containing your Pig Latin'd word
      return currentWord
    })
    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)
    // the setState method will take your information from "translatedWords" and update the state object that is displayed to the user
    // no need to change this method
    this.setState({ phraseTranslated: translatedWords })
  }
  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: "alpha through yummy squeal queen fry",
      phraseTranslated: "This is where your translated sentence will appear."
    })
  }
  // no need to modify this method
  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    e.preventDefault()
    this.myPigLatinCodeHere()
  }
  // no need to modify this method
  handleInput = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    this.setState({ phrase: e.target.value })
  }
  render() {
    return (
      <>
        <h1>Pig Latin Translator</h1>
        <img
          src="https://lh3.googleusercontent.com/QvvsRY5ShwDNEouVMK8_z7QCwS3grkgd4mzZOlom23Hurralk54ObvsyEMM8ZSNR5pEFBeBMzltzEEcgi2llYJnhXTuXClN3njmMjtw3vgn8Go5jr40fHMNzfI64eYRrnHbZUutxCA=w2400"
          alt="pig with butcher cut names in pig latin"
          id="butcherPig"
        />
        <div id="box">
          <h4>Enter phrase to be translated:</h4>
          {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
          <input
            type="text"
            id="inputPhrase"
            onChange={ this.handleInput }
            value={ this.state.phrase }
          />
          <br />
          {/* button that called the setUpPreventDefault method which calls the myPigLatinCodeHere method */}
          <button onClick={ this.setUpPreventDefault }>Submit</button>
          <button onClick={ this.restartGame }>Clear</button>
        </div>
        <p>{ this.state.phraseTranslated }</p>
        <footer>Coded by ~your name here~</footer>
      </>
    )
  }
}
export default App