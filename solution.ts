function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value == "string") {
    return value.toUpperCase();
  }
  if (typeof value == "number") {
    return value * 10;
  }
  if (typeof value == "boolean") {
    return !value;
  }

  return value;
}




function getLength(value:string|any[]):number{
 if (typeof value == "string") {
    return value.length;
  }

  if(Array.isArray(value)){
    return value.length;
  }
    return 0;
}




class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
getDetails(){
    return `'Name: ${this.name}, Age: ${this.age}'`;
}

}





type Item= {
  title: string;
  rating: number; 
}

function filterByRating(items:Item[]):Item[]{
return items.filter(item=>item.rating>=4);
}








type User= {
  id:number;
  name:string;
  email:string;
  isActive:boolean;
}

function filterActiveUsers(users:User[]):User[]{
return users.filter(user=>user.isActive>=true);
}





interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}


function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);
}





function getUniqueValues(
  arr1: (number | string)[],
  arr2: (number | string)[]
): (number | string)[] {
  const result: (number | string)[] = [];


  function exists(array: (number | string)[], value: number | string): boolean {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) return true;
    }
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const value = arr1[i];
    if (value !== undefined && !exists(result, value)) {
      result[result.length] = value;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const value = arr2[i];
    if (value !== undefined && !exists(result, value)) {
      result[result.length] = value;
    }
  }

  return result;
}






type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number; 
};

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products
    .map((product) => {
      const baseTotal = product.price * product.quantity;

      if (product.discount !== undefined) {
        const discountAmount = baseTotal * (product.discount / 100);
        return baseTotal - discountAmount;
      }

      return baseTotal;
    })
    .reduce((sum, value) => sum + value, 0);
}

