let unSortedArray = [4,3,2,5,1,6,9,8,7,10];

for (let i = 0; i < unSortedArray.length - 1; i++) {
  let min = i;
  for (j = i+1 ; j < unSortedArray.length; j++) {
    if (unSortedArray[j] < unSortedArray[min]) {
      min = j;
    }
  }
if(min != i) { 
  let temp = unSortedArray[min];
  unSortedArray[min] = unSortedArray[i];
  unSortedArray[i] = temp;
}
}
console.log(unSortedArray);

