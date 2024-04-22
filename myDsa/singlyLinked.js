  class Node{
    constructor(data){
      this.data = data
      this.next = null
    }
  }
  class linkedList{
    constructor(){
      this.head = null
    }
      appendTail(data){

        let newNode = new Node(data)

      if(this.head == null){

        this.head = newNode
      }else{
        
        let tail = this.head
      
        while(tail.next != null){
          tail = tail.next
        
        }
         tail.next = newNode

      }
    }
    appendHead(data){
     let newNode = new Node(data)
     
      newNode.next = this.head
      this.head = newNode

    }
    lenplay(){

      let node = []
let data = this.head
while(data != null){
  node.push(data.data)
  data = data.next
    }
console.log(node);
  }
    deleteHead(){
      if(this.head == null || this.head.next == null){
      return;
      }
    
    else {
        
      this.head = this.head.next

    }
  }
  deleteTail(){
    let delt = this.head
    while(delt.next.next != null){
      delt = delt.next
    }
    delt.next = null
  }
length(){
  let count= 0
   
  let nodeLength = this.head

  while(nodeLength != null){
     
    count++
    nodeLength = nodeLength.next

  }
   console.log(count);
  }


  searchData(data){

    const got = this.head

    while(got != null){

        if(got.data == data){
            return got.data

        }
        return null

  }


}
  }

  let myList = new linkedList()
  myList.appendTail(10)
  myList.appendTail(11)
  myList.appendTail(12)
  myList.appendTail(13)
  myList.appendTail(14)
  myList.appendTail(15)
  myList.appendTail(16)
  myList.appendTail(17)
  myList.appendTail(18)
  myList.appendTail(19)
  myList.appendTail(20)
  myList.appendTail(21)
  myList.appendTail(22)
  myList.appendTail(23)
  myList.deleteHead()
  myList.lenplay()
  myList.appendHead("hi")
  myList.lenplay()
  myList.deleteTail()
  myList.lenplay()
  myList.appendTail(12)
  myList.lenplay()
  myList.length()
  myList.lenplay()
  myList.length()

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }
// class linkedList {
//     constructor(){
//         this.head = null
//     }

//     appendTail(data){

//         var newNode = new Node(data);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
    
//     }

//     appendHead(data){

//         let newNode = new Node(data)

//         newNode.next = this.head
//         this.head =newNode
//     }

//     deleteTail(){

//       let delTail = this.head

//       while(delTail.next.next != null){
//         delTail =delTail.next
//       }
//       delTail.next = null
//     }
//     deleteHead(){
           
//         if(this.head == null || this.head.next == null ){
//             return null

//         } else {

//            this.head = this.head.next

//         }

//     }
//     length(){
//           let len  = this.head
//         let count = 0
//         while(len != null){
//             count++
//             len = len.next
//         }
//         console.log(count);
//     }
//     display(){

//         let dis  = this.head
//         let nodes = []
//         while(dis != null){
//             nodes.push(dis.data)
//             dis = dis.next
//         }
//         console.log(nodes);
//     }
//     searchData(data) {
//         let currentNode = this.head;
    
//         while (currentNode !== null) {
//             if (currentNode.data === data) {
//                 return currentNode; // Return the found node
//             }
//             currentNode = currentNode.next; // Move to the next node
//         }
    
//         return null; // Data not found
//     }
    
    
//      }


// let myList = new linkedList()
// myList.appendHead(1)
// myList.appendHead(2)
// myList.appendHead(3)
// myList.appendHead(4)
// myList.appendHead(5)
// myList.appendHead(6)
// myList.display()
// myList.deleteHead()
// myList.display()
// myList.deleteTail()
// myList.display()
// myList.appendTail(1)
// myList.display()
// myList.length()
// myList.searchData(3)

// let i,j 
// let n =10


//     for(let j = 2; j<=n; j*=2){
//         console.log(j)
    
// }

// function fact(num){
//    let i = 1
// while(num > 1 ){
 
//     i *= num

//     num--
// }
// return i
    
// }
// console.log(fact(5))


// function  fact(num) {
//     if (num ==1){
//         return 1
//     }
//     fact(num --) * num
// }
// console.log(fact(1))


// //write me an algorithm that takes in a string and returns the first non-repeating character in that string
// //if there are no non-repeating characters, return null
// //example: "aabcb" => "c"
// //example: "xxyz" => "y"
// //example: "aabb" => null
// const firstNonRepeatingCharacter = (str) => {

//     let count = {}
//     let char = str.split('')
//     for(let i = 0; i < char.length; i++){
//         if(count[char[i]]){
//             count[char[i]]++
//         }else{
//             count[char[i]] = 1
//         }
//     }
//     for(let i = 0; i < char.length; i++){
//         if(count[char[i]] == 1){
//             return char[i]
//         }
//     }
//     return null
// }
// const str = "aabcb"
// console.log(firstNonRepeatingCharacter(str))


//write me an most complex algorithm that takes in a string and returns the first non-repeating character in that string
//if there are no non-repeating characters, return null
//example: "aabcb" => "c"
//example: "xxyz" => "y"
// const firstNonRepeatingCharacter = (str) => {

// }

//write me an dijkstra algorithm 



  