function reverse(n) {
    if (n % 10  == n) return n;
  
    return n % 10 + "" + reverse(Math.floor(n / 10));  
  }
  
  console.log(reverse(4321));

  function rev(n, reversed) { 
    if (n % 10 == n) { 
        reversed = (reversed * 10) + n;
        return reversed;
    }
    reversed = (reversed * 10) + (n % 10);
    return rev(Math.floor(n / 10), reversed);
} 

console.log(rev(99887767868678, 0));