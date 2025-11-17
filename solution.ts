function formatValue (value: string | number | boolean): string | number | boolean
{
    if(typeof value === 'string'){
        return value.toUpperCase()
    } else if (
        typeof value === 'number'){
            return value * 10
        } else{ 
            return !value
        }
};


function getLength (value : string | any[]): number{
    
    if(typeof value === 'string'){
        return value.length;
    } else{
        return value.length;
    };
};

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age
    };
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`
    };
};

interface Items{
    title: string,
    rating: number
}
function filterByRating (items: Items[]){
    return items.filter((item => item.rating >= 4))
}

type user ={
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

function filterActiveUsers (person: user[]): user[]{
    return person.filter((pUser) => pUser.isActive === true)
}

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails (book: Book): void{
    const yes = book.isAvailable;
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${yes ? "Yes" : "No"}`); 
}

function getUniqueValues <T extends string | number>(arr1: T[], arr2: T[]): T[] {
    const result: T[] = [];
    function addUniqueValues(value: T) {
        for (let i = 0; i < result.length; i++) {
            if (result[i] === value) return;
        }
        result.push(value);
    }
    for (let i = 0; i < arr1.length; i++) addUniqueValues(arr1[i]);
    for (let i = 0; i < arr2.length; i++) addUniqueValues(arr2[i]);
    return result;
}

type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};
function calculateTotalPrice(products: Product[]): number {
    const productPrice = products.map((items) => {
        const{name, price, quantity, discount} = items;
        const totalPrice = price * quantity;
        if (discount) {
            return totalPrice - (totalPrice * discount) / 100;
        }
        return totalPrice;
    });
    const totalPrice = productPrice.reduce((sum, product) => sum + product, 0);
    return totalPrice;
}