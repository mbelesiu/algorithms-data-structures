const numOfPronics = (start, end) => {
  let count = 0;
  let n = Math.floor(Math.sqrt(start));

  while( (n*(n+1) <= end) ){
    let pronic = n*(n+1);
    if(pronic >= start && pronic <= end){
      count++;
    }
    n++;

  }
  return count;
}

