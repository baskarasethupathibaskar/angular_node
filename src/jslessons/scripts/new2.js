function createGreeting(greeting = '') {
    const myGreet = greeting.toUpperCase () ;
    return function (name) {
    return `${myGreet} ${name}`;
    }
}
// const greeting = createGreeting('hello');
// console.log(greeting("baskar"));

const sayHello = createGreeting('hello');
const sayVanakkam = createGreeting('vanakkam');

// console.log(sayHello("Baskar"));
// console.log(sayVanakkam("Venkat"));
// console.log(sayVanakkam("Baskar"));

//--------------------------------
function createGame(gameName) {
    let score = 0;
    return function win() {
      score++;
      return `Your ${gameName} score is ${score}`;
    }
  }

//   const game = createGame("3DRACE")
//   console.log(game());

const hockeyGame = createGame('Hockey');
const SoccerGame = createGame('Soccer');
hockeyGame();
hockeyGame();
hockeyGame();
SoccerGame();
console.log(hockeyGame());
console.log(SoccerGame());
