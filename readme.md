# Summary

Here is a summary of the problem solutions to help you walk through my work.

## Problem 1:

Code just explains everything about this problem.

## Problem 2:

Because I implement it in two methods, with and without React, there are two folders for problem 2, problem2 and problem2_React.  

To see my implementation of the form without React, just open problem2/index.html. I add the input validation using Regular expression and isNaN(). After clicking the Send button, if the inputs are all valid, the page will jump to the successful submission page.

As for the React project, I tried to design my own React components to solve this problem at first. But I just found it is troublesome to let two components communicate with each other and share some information in React. I believe this is where react-redux should work. I will learn react-redux later to solve the problem. You can see my first try using React via [https://github.com/KiwiChen2022/TransferFormReact](https://github.com/KiwiChen2022/TransferFormReact)  

Now, I used formly library in React to solve the problem. It can be seen via [https://github.com/KiwiChen2022/FancyFormReactFormly](https://github.com/KiwiChen2022/FancyFormReactFormly).

## Problem 3:

I failed to connect to the link [https://interview.switcheo.com/test.json](https://interview.switcheo.com/test.json), just copy the json file locally to solve the problem.   

Reason: CORS header 'Access-Control-Allow-Origin' missing.  
My attempt to fetch the data can be seen at the end. After searching and trying, I still cannot solve the above problem.
For now, I just use the local json data to achieve the result.
Open the index.html or `node .\datasource.js` to see the result, the output in console should be the same with the sample output.
Sorry about that. I didn't have much experience about connecting to the data source, but I can learn it later.

## Problem 4:

I solved this problem even I never touch interacting with chain before. I just self-learned some basic ideas about how to interact with chain, do a quick start and solve it luckily. I install ts-node globally, so ts-node may not run on another environment. In that case, you can still `node .\js-retrive-holders.js` after `npm install` in the root directory.

## Problem 5:

Never touched Solidity and contract deployment before, I tried to git clone some examples and watched youtube tutorials [https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=30017s](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=30017s) to get a quick start, but still confused about how to get holder's balance of other tokens. After some tries, I decided to give up this problem for now because of the limit of time. If the related knowledge is needed, I can learn it in a more systematic way later. I learnt the theory of blockchain before but never touched the development. I am willing to learn about the development technology and I believe I could do it well.
