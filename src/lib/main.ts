// For a good TypeScript and Javascript tutorial: use these:
// JavaScript: https://www.w3schools.com/js/DEFAULT.asp
// TypeScript: https://learnxinyminutes.com/typescript/

//Example: function that generates a random number;
export const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
