class BST {
    constructor (root){
        this.root = root;
    }
    myArray = [];

    printB(){
        printBSTRecur();
        this.myArray.forEach((arr)=> console.log(indexof(arr))).forEach((a) => console.log(a));
    }

    printBSTRecur(root = this.root, myArray = this.myArray, d = 0){
       if(root === null ){return;}
       if(d == myArray.length){
           myArray.push([]);
       }
       printBSTRecur(root.left,myArray,d+1);
       printBSTRecur(root.right,myArray,d+1);
       myArray[d].push(root.value);
       
    }
}
class Node{
    constructor(value, parent, left, right){
        this.value = value;
        this.parent = parent;
        this.left = left;
        this.right = right;
    }


}