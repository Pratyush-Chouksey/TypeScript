// Generic function to filter an array based on a condition
function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
    return array.filter((item) => condition(item));
  }
  
  // Example usage with an array of numbers
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);
  console.log(evenNumbers); // Outputs: [2, 4, 6, 8, 10]
  
  // Example usage with an array of strings
  const stringArray = ["apple", "banana", "cherry", "date"];
  const shortWords = filterArray<string>(stringArray, (word) => word.length < 6);
  console.log(shortWords); // Outputs: ["apple", "date"]
  
  // Example usage with an array of objects
  interface Fruit {
    name: string;
    color: string;
  }
  
  const fruitArray: Fruit[] = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Cherry", color: "Red" },
  ];
  
  const redFruits = filterArray<Fruit>(
    fruitArray,
    (fruit) => fruit.color === "Red"
  );
  console.log(redFruits); // Outputs: [{ name: 'Apple', color: 'Red' }, { name: 'Cherry', color: 'Red' }]
  // ------------------------------------------------