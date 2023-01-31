# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon



### Links

- Solution URL: https://github.com/bahati7/advice-generator-app
- Live Site URL: https://advice-generator-app-sandy.vercel.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript
- API


### What I learned

In this challenge I learnt the use of fetch API in Javascript


```js
let url = "https://api.adviceslip.com/advice";

let getAdvice = () =>{
    fetch(url)
        .then(data => data.json())
        .then((item) => {
            advice_Id.textContent = `ADVICE #${item.slip.id}`;
            advice_Text.textContent = `"${item.slip.advice}"`;
        }).catch(err => alert("fetching error"+err))
}

```

## Author

Website - https://bahatiphilemon.netlify.app/
Frontend Mentor - https://www.frontendmentor.io/profile/bahati7
Twitter - https://twitter.com/PhilemonBahati


## Acknowledgments

Thank you to Frontend Mentor team - https://www.frontendmentor.io/


