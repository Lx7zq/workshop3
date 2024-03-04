class Author {
    name = "";
    email = "";
    gender = '';
    constructor(name,email,gender){
        this.name = name;
        this.email = email;
        this.gender = gender;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    setEmail(){
        this.email = email;
    }
    toString(){
        return `Author [ ${this.name}, Email = ${this.email}]`;
    }
}
class Book {
    name = "";
    author = [];
    price = 0;
    qty = 0;
    // constructor(name,author,price){
    //     this.name = name;
    //     this.author = author;
    //     this.price = price;
    // }
    constructor(name,author,price,qty=0){
        this.name = name;
        this.author = author;
        this.price = price;
        this.qty = qty;
    }
    getName(){
        return this.name;
    }
    getAuthors(){
        return this.author;
    }
    getPrice(){
        return this.price;
    }
    setPrice(price){
        this.price = price;
    }
    getQty(){
        return this.qty
    }
    setQty(qty){
        this.qty = qty;
    }
    toString(){
        let authorName = "";
        for (let i = 0; i < this.authors.length;i++) {
            authorName +=this.author[i].toString();
            if (i < this.authors.length -1){
                authorName += ", ";
            }
        }
        return `Book [name=${this.name}, authors={${authorNames}}, price=${this.price}, qty=${this.qty}]`;
    }
    getAuthorsName(){
        let authorName1 = "";
        for (let i = 0; i < this.authors.length;i++) {
            authorName1 +=this.author[i].getName();
            if (i < this.authors.length -1){
                authorName1 += ", ";
            }
        }
        return `"${authorName1}"`;
    }
 }

const main = () => {
    const author1 = new Author("vick","vick@gmail.com","M")
    const author2 = new Author("mind","mind@gmail.com","F")
    // console.log(author1.toString());
    // console.log(author2.toString());

    const book1 = new Book("กระต่ายกับเต่า", [author1,author2],299,10)
    console.log(book.getAuthorsName());
    console.log(book1.toString());
}
main();