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

        <img src={require("./imgs/Tebrek Gift Card.jpg")} alt="birthday Gift card"/>


        <Massage text="كل عام و انت بألف خير وسام, هاك ورووود😊💐🌷🌹🌺 سجى"
        textColor="#404040" backgroundColor="#ff99ff"
        />

        <Massage text="---Happy birthday wisso wish u all the best and success in life 🎊🎉♥️--- K3BE"
        textColor="#404040" backgroundColor="#ff3333"
        />

        <img id="jawad" src={require("./imgs/Jawad Birthday Card.png")} alt="birthday Gift card"/>

        <Massage text="----Wish you a nice day best wissam 🌼---- Mursaleen"
        textColor="#404040" backgroundColor="#3399ff"
        />

        <Massage text="Happy Birthday 🎂🎂🎉🎉Wisaam, 
        wish you all the best for the rest of your life.  
        And I hope you will be always happy and content. 
        Enjoy your day. 😊✌🏼 --- Sura"
        textColor="#404040" backgroundColor="#aa80ff" 
        />

        <img src={require('./imgs/Qamar Gift Card fixed.jpg')} alt="birthday Gift card"/>

        <Massage text="---Happy birthday Wissam, thank you for being a friends and an awsome teacher--- Mr.right"
        textColor="#404040" backgroundColor="#70db70"
        />

        <Massage text="Happey birthday to the best instructor ever, 
          wish you all the best in your life, thank you for
          everything--- M.Klay"
          textColor="#404040" backgroundColor="#ff8533"
        />



      </div>
    );
}

export default App;
