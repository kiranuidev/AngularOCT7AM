/*This program should allow 
1. create the books
2. get all the books
3. get the book by a book id. */

/*
 book should have
 name
 author
 price
 bookId
*/

var books =[];

function createBook(bookName,authorName,price,bookId){
    //code goes here
    var book ={}//
    book.name=bookName;
    book.author=authorName;
    book.price=price;
    book.bookId=bookId;
    //the below code add the book to array.
    //books.push(book);
    books.splice(books.length+1,1,book);
}

function getAllBooks(){
    //code goes here..
    console.log(books);
}

function getBookById(bookId){
   //code goes here 
    //loop through each book in the array
    // check the id of the book
    //if id matches pick that book 
    //quit
    //for(initialize;condition;increment/decremnt){}
    for(var i=0;i<books.length;i++){
        
        if(books[i].bookId==bookId){
            console.log(books[i]);
            console.log("Thank you");
            //break;
        }
    }
    
}

createBook("Angularjs","kiran",1000,1);
createBook("Javascript","kiran",2000,2);
createBook("Nodejs","kiran",1000,3);
getAllBooks();
getBookById(2);



















