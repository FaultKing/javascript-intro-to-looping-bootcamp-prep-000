function forLoop(array){
  for(let i = 0; i < 25; i++ ){
    console.log(`I am ${i} strange loop${i === 1 ? '': 's'  }`);
    if(i === 1 ){
      array.push(`I am ${i} strange loop.`)
    } else{
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

  function whileLoop(num){
    var n = num

    while( n > 0){
      --n // n = n - 1
      console.log(n)
    }
    return 'done'
  }

  function doWhileLoop(integer){
    i=0
    function incrementVariable() {
      i = i + 1;
      return i;
    }
    do {
      console.log("I run once regardless.");
    } while (incrementVariable() < integer);
  };
