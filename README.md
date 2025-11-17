# TypeScript Blog Post (Bangla)

## Blog: TypeScript Concepts Explained in Bangla

### 1. What are some differences between interfaces and types in TypeScript?
TypeScript-এ `interface` এবং `type` দুটোই অবজেক্টের আকার বা টাইপ ডিফাইন করার জন্য ব্যবহৃত হয়। তবে এদের মধ্যে কিছু মূল পার্থক্য আছে:  

**Interface:**
- নতুন প্রপার্টি বা মেথড যোগ করার জন্য সহজে এক্সটেন্ড বা মর্জ করা যায়।  
- সাধারণত ক্লাসের সাথে ব্যবহার করা হয়।  
- একাধিক interface একত্রিত করা যায়।  

**Type:**
- একবার ডিফাইন করলে তা মডিফাই করা যায় না।  
- ইউনিয়ন, ইন্টারসেকশন এবং প্রিমিটিভ টাইপসহ আরও জটিল টাইপ তৈরি করা যায়।  
- সাধারণত বিভিন্ন ডাটা স্ট্রাকচার, ফাংশন টাইপ বা টুপল ডিফাইন করতে ব্যবহৃত হয়।  

**উদাহরণ:**
```ts
// Interface
interface User {
    name: string;
    age: number;
}

// Type
type Admin = {
    name: string;
    role: string;
};
```






### 2. What is the use of the keyof keyword in TypeScript? Provide an example
`keyof` কিওয়ার্ড ব্যবহার করা হয় একটি অবজেক্ট টাইপের সমস্ত প্রপার্টির নামের ইউনিয়ন টাইপ বের করার জন্য। এটি টাইপ-সেফ ফাংশন তৈরি করতে খুবই উপকারী।  

**উদাহরণ:**
```ts
type Person = {
  name: string;
  age: number;
  city: string;
};

type PersonKeys = keyof Person; 
// ফলাফল: "name" | "age" | "city"

function getProperty(obj: Person, key: keyof Person) {
  return obj[key];
}

const person: Person = { name: "Tarek", age: 25, city: "Dhaka" };

const nameValue = getProperty(person, "name"); //  allowed
// const invalidValue = getProperty(person, "country"); //  Error: 'country' is not a key of Person

```

