// const scoreDisplay = document.querySelector('#scoreDisplay');
player1Score = 0;
player2Score = 0;
p1Display = document.querySelector('#scoreDisplay #player1Score');
p2Display = document.querySelector('#scoreDisplay #player2Score');


const buttonPlayer1 = document.querySelector('#player-one');
const buttonPlayer2 = document.querySelector('#player-two');
const reset = document.querySelector('#reset');
const limitScore = document.querySelector('#score-limit select');

// scoreDisplay.textContent = player1Score + ' to ' + player2Score;


buttonPlayer1.addEventListener('click', function (e) {
    player1Score += 1;
    p1Display.textContent = player1Score;
    checkifScoreExceeded(p1Display, p2Display);
});

buttonPlayer2.addEventListener('click', function (e) {
    player2Score += 1;
    p2Display.textContent = player2Score;
    checkifScoreExceeded(p2Display, p1Display);
});

reset.addEventListener('click', function (e) {
    buttonPlayer1.disabled = false;
    buttonPlayer2.disabled = false;
    player2Score = 0;
    player1Score = 0;
    p1Display.textContent = player1Score;
    p2Display.textContent = player2Score;
    p1Display.style.color = 'black';
    p2Display.style.color = 'black';

})

function checkifScoreExceeded(winner, loser) {
    if (player1Score >= limitScore.value || player2Score >= limitScore.value) {
        buttonPlayer1.disabled = true;
        buttonPlayer2.disabled = true;
        winner.style.color = 'green';
        loser.style.color = 'red';
    }
}
// console.log('Line 1');
// setTimeout(() => { console.log('line 2'); }, 3000);
// console.log('Line 3');

// const changeBackgroundColor = (color,time,donext)=>{
//     setTimeout(()=>{
//         document.body.style.backgroundColor = color;
//         donext();
//     },time);    
// }

// changeBackgroundColor('red',2000,()=>{
//     changeBackgroundColor('orange',2000,()=>{
//         changeBackgroundColor('yellow',2000,()=>{
//             changeBackgroundColor('green',2000,()=>{
//                 changeBackgroundColor('blue',2000,()=>{
//                     changeBackgroundColor('indigo',2000,()=>{
//                         changeBackgroundColor('violet',2000,()=>{
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })


// const fakeRequestCallback = (url, success, failure) => {
//     let delay = Math.floor(Math.random() * 4500) + 500;
//    setTimeout(()=>{
//     if (delay > 4000) {
//         failure('failed to load the site');
//     }
//     else {
//         success('success here is your data of the url:' + url);
//     }
//    },delay)
// }

// fakeRequestCallback('how.com/link1', (successmsg) => {
//     console.log('success');
//     console.log(successmsg);
//     fakeRequestCallback('how.com/link2', (successmsg) => {
//         console.log('success');
//         console.log(successmsg);
//         fakeRequestCallback('how.com/link3', (successmsg) => {
//             console.log('success');
//             console.log(successmsg);
//             fakeRequestCallback('how.com/link4',(successmsg)=>{
//                 console.log('success');
//                 console.log(successmsg);
//             },(failuremsg)=>{
//                 console.log('failed');
//                 console.log(failuremsg);
//             })
//         }, (failuremsg) => {
//             console.log('failed');
//             console.log(failuremsg);
//         })
//     }, (failuremsg) => {
//         console.log('failed');
//         console.log(failuremsg);
//     })
// }, (failuremsg) => {
//     console.log('failed');
//     console.log(failuremsg);
// })


const fakeRequestPromise = (url)=>{
    return new Promise((resolve,reject)=>{
        let delay = Math.floor(Math.random()*4500)+500;
        // console.log(delay);
        setTimeout(()=>{
            if(delay>2000){
                reject('Connection Timeout:  ');
            }
            else{
                resolve('Here is your data from: '+url);
            }
        },delay)
    })
}

// let request = fakeRequestPromise('pornhub.com');

// request
//      .then(()=>{
//          console.log('Promise fulfilled');
//          console.log('it worked!!');
//      })
//      .catch(()=>{
//          console.log('Promise rejected');
//          console.log('Oh no,error!!');
//      })

// const delayedColorChange = (color,delay)=>{
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//            document.body.style.backgroundColor = color;
//            resolve();
//        },delay);
//     })
// }


// delayedColorChange('red',2000)
//     .then(()=> delayedColorChange('red',1000))
//     .then(()=> delayedColorChange('orange',1000))
//     .then(()=> delayedColorChange('yellow',1000))
//     .then(()=> delayedColorChange('green',1000))
//     .then(()=> delayedColorChange('blue',1000))
//     .then(()=> delayedColorChange('indigo',1000))
//     .then(()=> delayedColorChange('violet',1000))

// async function rainbow(delay){
//     await delayedColorChange('red',delay);
//     await delayedColorChange('orange',delay);
//     await delayedColorChange('yellow',delay);
//     await delayedColorChange('green',delay);
//     await delayedColorChange('blue',delay);
//     await delayedColorChange('indigo',delay);
//     await delayedColorChange('violet',delay);
//     return 'All Done';
// }
// rainbow(1000)
// .then((msg)=>{
//     console.log("Promise is resolved because you 'return' not 'Throw' from the async function");
//     console.log(msg);
// })

// async function makeTwoRequest(){
//     try{
//         let data1 = await fakeRequestPromise('/page1');
//         console.log(data1);
//         let data2 = await fakeRequestPromise('/page2');
//         console.log(data2);
//     }
 
//     catch(e){
//         console.log('Caught an error!!');
//         console.log(e);
//     }
// }


// const myReq = new XMLHttpRequest();

// myReq.onload = function(){
//     const data = JSON.parse(this.responseText);
//     console.log(data);
// }
// myReq.onerror = function(err){
//     console.log('Error!',err);
// };
// myReq.open('get','https://icanhazdadjoke.com',true);
// myReq.setRequestHeader('Accept','application/json');
// myReq.send();

// the fetch API

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')

// .then(res=>{
//     console.log('Response waiting to be parsed...',res);
//     return res.json();
// })
// .then(data=>{
//     console.log(data.ticker.price);    
// })
// .catch(e=>{
//     console.log('OH NO! ERROR! ',e);
// })

const fetchBitcoinPrice = async function(url){
    if(!url){
        url = 'https://api.cryptonator.com/api/ticker/btc-usd';
    }
    try{
        const resp = await fetch(url);
        const data = await resp.json();

        bitcoinDisplay.textContent = 'Bitcoin price is: $' + data.ticker.price ;
    }
    catch(e){
        console.log('Something went wrong!!',e);
    }
}

const getDadJoke = async ()=>{
    try{
        const config = {headers: {Accept: 'application/json'}};
        const res = await axios.get('https://icanhazdadjoke.com/',config);
        return res.data.joke;
    }
    catch{
        return 'Error loading joke...sorry!!';
    }
}

const addJoke = async ()=>{
    const joke = await getDadJoke();

    const newList = document.createElement('LI');
    newList.append(joke);
    jokeDisplay.append(newList);
}

const addJokeButton = document.querySelector('#jokes button');
const jokeDisplay = document.querySelector('#jokes ol');
const bitcoinDisplay = document.querySelector('#jokes p');

addJokeButton.addEventListener('click', function(){
    addJoke();  
    fetchBitcoinPrice();  
})

jokeDisplay.addEventListener('click',(e)=>{
    e.target.nodeName==='LI' && e.target.remove();
})
