"use strict";

//Motivational Quotes Objects
const adviceObjs = {
  1: "1% better everyday",
  2: "Fail early, Fail Often, but always fail forward",
  3: "Comparing your shortcomings against the strengths of others is a silly thing to do",
  4: "Take charge of your thoughts",
  5: "You have to think about your past to remind you about what you want for your future",
  6: "Dreams, without goals are just dreams",
  7: "Only when you identify and accept your weaknesses will you finally stop running from your past",
  8: "Distance yourself, for yourself",
  9: "Who checked up on you? Exactly. No one.",
  10: "Your focus is in your control. You lose focus only if you allow it",
  11: "Never put yourself in a situation where you could lose yourself",
  12: `It's on you. Are you going to make today count?`,
  13: `Don't be afraid to grind alone, the sun is always alone and still shines`,
  14: `Sometimes it's good to be alone, gives you time to reflect where you've been`,
  15: `Remember, you didn't come this far just to give up`,
  16: `Sometimes it takes certain things falling apart, for better things to fall into place`,
  17: `Sometimes it takes losing what you're settling for, to remind you of what you truly deserve`,
  18: `Sometimes it takes the most uncomfortable paths to lead your life to the most beautiful place`,
  19: `Your current situation is not your final destination`,
  20: `Choose growth over company`,
  21: `You have to understand that there's a process to everthing and you've got to trust it`,
};

const btnClick = function () {
  let RandQuoteNumber = Math.floor(
    Math.random() * Object.keys(adviceObjs).length + 1
  );
  //   let quoteNumer = "Advice #" + RandQuoteNumber;
  let quoteNumer = RandQuoteNumber;
  document.querySelector("#advNum").textContent = quoteNumer;
  // console.log(adviceObjs[`${RandQuoteNumber}`]);
  let quote = adviceObjs[`${RandQuoteNumber}`];
  document.querySelector("#advText").textContent = quote;
  //console.log(x);
};
//this.onload = btnClick;
//console.log(adviceObjs);
//console.log(Object.keys(adviceObjs).length); //gets length of objects

document.querySelector(".main__cardCircle").addEventListener("click", btnClick);
