// 1-What are the four steps of mergesort?
//  -split the array in 2
//  -merge sort left half
//  -merge sort rigth half
//  -join 2 array
//2-Using JavaScript, generate a random number between 50 and 100.
console.log(Math.random()*50+50);

//3- Using Javascript, generate a random number between -100 and 100.
console.log(Math.random()*200-100);
//4-Write a coin flip function. It should return the string "heads" half the time and the string "tails" the other half function coinFlip(){

//}
function coinFlip(){
    var x=(Math.floor(Math.random()* 2)===0);
    if(x){
        return "heads";
    }else{
        return "tails";
    }
};

console.log(coinFlip());

// 5-Re-state the following expression without using negation: !(10 > x)
//   (10<=0)

// 6-Re-state the following expression without using negation: !(a > 10 && b <= 5)

 //(a<=10)||(b>5)
 //7-Re-state the following expression without using negation: !(!isLegal || !isFelony)
 // !!isLegal&&!!isFelony====>>>isLegal&&isFelony

 //8-What is an Angular directive?
 // Angular directive is a extension of html
 //9-Write a function which, given a 2-d array of strings, returns the concatenation of all the strings. function twodconcat(arr){

//}
 function twodconcat(array){
     var array2=[];
     for (var i=0;i<array.length;i++){
         for(var j=0;j<array[i].length;j++){
              array2.push(array[i][j]);
         }

     }
     return array2;
 }
 console.log(twodconcat([['lily'],['lolo'],['lulu']]));

// 10- Write a function which, given a 2-d array and another value x, returns true if x is present in the two d array, and false otherwise. function containsElement(arr, x){
// }

 function containsElement(array,x){
     var array2=[];
     for (var i=0;i<array.length;i++){
         for(var j=0;j<array[i].length;j++){
             console.log(array[i][j]);
              array2.push(array[i][j]);
         }

     }
     for(var x=0; x<array2.length; x++){
         
     }
    }
    //  for(var i=0;i<array.length;i++){
    //      console.log(array);
    //     for(var j=0;j<array[i].length;j++){
    //         if (array[j][i]=== 3){
    //             console.log(array[i][j]);
    //         }

   //
   //   }
   // }



  //
  // function containsElement2(array,x){
  //
  //     for(var i=0;i<array.length;i++){
  //         for(var j=0;j<array[i].length;j++){
  //
  //           var checkarr=array.find(function(x){ return array[i][j]===x;})
  //
  //     }
  //   }
  //   if(checkarr !=null){
  //       return 'false';
  //   }else{
  //       return 'true';
  //       }
  //
  //   }
  //

  // console.log(containsElement2([[1,2],[3,4]],7));
 // console.log(containsElement([['luluss'],['3'],['l']],"u"));
 console.log(containsElement([1,2],[3,4],1));
  // console.log(containsElement([[1,3],[2,4],[5,6]],3));

// 11-What is the relationship between html, the $scope construct, and angular expressions? (Expressions are the ones that are written like so: {{quote}} ).
// the scope is the binding part between the html and the javaScript (controller)
//  the scope is and object with property and methods that you define in your controller
//  and you  can get access to them when you use expression in the html  like the example {{quote}}
// 12-Given the following edge list, draw the graph.

// 13-Given the following adjacency Matrix, determine whether the graph is directed or undirected and draw it.

// 14-For exercises 9 and 10, if you assume that n is the size of one side of the matrix, what is the time complexity (Big Oh) of the algorithms you wrote?
//  for exercises 9 is O(N2)
// for exercises 10 O(N2)
