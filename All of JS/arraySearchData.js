var arr = [1,2,3,4,5,6,7,8,9,10]

var find = 10

var isFound = false

for(var i = 0; i < arr.length; i++){
  if(arr[i] == find){
    console.log('the index of the found array is ' + i)
    isFound = true
    break
  }
  // else{
  //   console.log('not found')
  // }
}

if(!isFound) console.log('not found')
