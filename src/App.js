
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        randomIndex: 0
    };

    
    this.getNewQuote = this.getNewQuote.bind(this)
  }

  getNewQuote(){
      let variable = [
          {
            "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
            "author": "Thomas Edison"
          },
          {
            "text": "You can observe a lot just by watching.",
            "author": "Yogi Berra"
          },
          {
            "text": "A house divided against itself cannot stand.",
            "author": "Abraham Lincoln"
          },
          {
            "text": "Difficulties increase the nearer we get to the goal.",
            "author": "Johann Wolfgang von Goethe"
          },
          {
            "text": "Fate is in your hands and no one elses",
            "author": "Byron Pulsifer"
          },
          {
            "text": "Be the chief but never the lord.",
            "author": "Lao Tzu"
          },
          {
            "text": "Nothing happens unless first we dream.",
            "author": "Carl Sandburg"
          },
          {
            "text": "Well begun is half done.",
            "author": "Aristotle"
          },
          {
            "text": "Life is a learning experience, only if you learn.",
            "author": "Yogi Berra"
          }]
      this.setState(function(state){
          
          return {
              randomIndex: Math.floor(Math.random() * variable.length) 
          }
      })
  }

  

  render() {
      

      const quoteList = [
          {
            "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
            "author": "Thomas Edison"
          },
          {
            "text": "You can observe a lot just by watching.",
            "author": "Yogi Berra"
          },
          {
            "text": "A house divided against itself cannot stand.",
            "author": "Abraham Lincoln"
          },
          {
            "text": "Difficulties increase the nearer we get to the goal.",
            "author": "Johann Wolfgang von Goethe"
          },
          {
            "text": "Fate is in your hands and no one elses",
            "author": "Byron Pulsifer"
          },
          {
            "text": "Be the chief but never the lord.",
            "author": "Lao Tzu"
          },
          {
            "text": "Nothing happens unless first we dream.",
            "author": "Carl Sandburg"
          },
          {
            "text": "Well begun is half done.",
            "author": "Aristotle"
          },
          {
            "text": "Life is a learning experience, only if you learn.",
            "author": "Yogi Berra"
          }]


    return (
        <div id = "quote-box" className = "pl-5 pr-5">
            <div className = "jumbotron">
                <h2 className = "text-center" style = {{color: "blue", fontFamily: "Helvetica-bold"}}>Quote Machine</h2>
            <div className = "card">
                <div id = "text" className = "card-header">{quoteList[this.state.randomIndex]["text"]}</div>
                <div id="author" className = "card-body">{quoteList[this.state.randomIndex]["author"]}</div>
                </div>
                <div id = "button-container">
<button id="new-quote" className = "btn btn-primary" onClick = {this.getNewQuote}>New Quote</button>
</div>
<a id = "tweet-quote" href = "twitter.com/intent/tweet" className = "btn btn-primary" target = "_top"><i class="fab fa-twitter"></i> tweet</a>
            </div>
            

        </div>
    )
  }
}
export default App;
