import React, {useState, useEffect} from 'react';
import {  FormControl, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

function App() {
	const [input, setInput] = useState('');
	const [messages, setMessages] = useState([]);
	const [username, setUsername] = useState('');
useEffect (()=> {
//this runs when the app components load
db.collection('messages')
.orderBy('timestamp', 'desc')
.onSnapshot(snapshot => {
	setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
});
}, [])

useEffect (()=>{
	setUsername(prompt('Please enter your good name'))
},[])
	const sendMessage = (event) => {
		db.collection('messages').add({
			message: input,
			username: username,
			timestamp:firebase.firestore.FieldValue.serverTimestamp()
		})
		//event.preventDafault();
		setInput('');
	}
  return (
    <div className="App">
<img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"/>
		<h1>🦸 CHAT BABA 🦸</h1>
  	<span>	<h3> 👽 SUSWAGATAM  {username}  👽 </h3> </span>
	  <form className="app__form">
	  <FormControl className="form__control">
		  <Input className="app__input" 
		  placeholder="Enter a message..." 
		  value={input} 
		  onChange={event =>
		  setInput(event.target.value)}
		   /> 
		  <IconButton className="app__iconButton" 
		  disabled={!input} 
		  variant="contained"
		  color="primary"
		  type='submit' 
		  onClick={sendMessage} >
			  <SendIcon/>
		  </IconButton>
		</FormControl>
	  </form>
   <FlipMove>
   {
		messages.map(({id, message}) => (
			<Message key={id}  username={username} message={message} />
		))
	}
   </FlipMove>
	</div>  
  );
}
export default App;
