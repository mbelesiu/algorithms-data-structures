// given aaaabbccc or any input of that nature, transform it into an encoded version 4a2b3c

const encode = (value) => {
  let encodedResult = '';
  let prev = value[0];
  let count = 1;
  for (let i = 1; i < value.length; i++) {
    if(prev === value[i]){
      count ++;
    } else {
      encodedResult += `${count}${prev}`;
      count = 1;
    }
    prev = value[i];
  }

  if(prev === value[value.length-1]) {
    encodedResult += `${count}${prev}`;
  }

  return encodedResult
}

console.log(encode('abcdaaaabbccca'));