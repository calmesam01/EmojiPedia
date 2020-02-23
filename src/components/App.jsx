import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function CreateCard (emojiTerm) {
    return (
        <Card 
            key = {emojiTerm.id}
            emoji = {emojiTerm.emoji}
            name = {emojiTerm.name}
            meaning = {emojiTerm.meaning}
        />
    );
}

function App(props) {
  return (
    <div>
        <h1>
            <span>emojipedia</span>
        </h1>
        {emojipedia.map(CreateCard)}
        
        {/* <Card 
        emoji = {emojipedia[0].emoji}
        name = {emojipedia[0].name}
        meaning = {emojipedia[0].meaning}
        />
        <Card 
        emoji = {emojipedia[1].emoji}
        name = {emojipedia[1].name}
        meaning = {emojipedia[1].meaning}
        /> */}
    </div>
  );
}

export default App;
