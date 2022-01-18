const sentence = "hello there from lighthouse labs";

const printLikeTypewriter = (string) => {
  let time = 0;
  for (const index in string) {
    setTimeout( () => {
      if (index === (string.length - 1) ){
        console.log(string[index]);
      } else { process.stdout.write(string[index]); }
    }, time)
    time += 75
  }
}

printLikeTypewriter(sentence);