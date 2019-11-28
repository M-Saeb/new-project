import React from 'react';
import Massage from './Massage'
import './App.css'

function App() {
  return (
      <div>
        <h1>🎉 Happy Birthday Wissam 🎂🎉</h1>
        <Massage text="Happy birthday Wissam🎊🎂
        I wish the happines forever and ♾
        good luck in your life 🌸🌺
        sorry cause I can't come today 🙁
        the gift 🎁 Error 404🙈
        البش مهندسة زهوري" 
        textColor="#404040" backgroundColor='#ffff99'/>

        <Massage text="كل عام و انت بألف خير وسام, هاك ورووود😊💐🌷🌹🌺 سجى"
        textColor="#404040" backgroundColor="#ff99ff"
        />

        <Massage text="----Wish you a nice day best wissam 🌼---- Mursaleen"
        textColor="#404040" backgroundColor="#3399ff"
        />


      </div>
    );
}

export default App;
