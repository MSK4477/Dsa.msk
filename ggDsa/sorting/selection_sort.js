let unSortedArray = [3,2,1,4,6];

for (let i = 0; i < unSortedArray.length - 1; i++) {
  let min = i;
  for (j = i + 1; j < unSortedArray.length; j++) {
    if (unSortedArray[j] < unSortedArray[min]) {
      min = j;
    }
  }
  console.log(unSortedArray);
  
  if (min != i) {
    [unSortedArray[min],unSortedArray[i]] = [unSortedArray[i], unSortedArray[min]];
  }
}
console.log(unSortedArray);

/*
i = 0 
2 < 3 = true; 

 min = 1

 j = 2;

 1 < 2 = true


 un[min] = un[i]

 un[i] = un[min] [1,3,2]

 i = 1;

 min = 1

 2 < 3 = true;

 min = 2;

  un[min] = un[i]

 un[i] = un[min] [1,2,3]


*/