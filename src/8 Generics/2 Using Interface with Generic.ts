function uniqueDataTypeFunc<Type>(item: Type,): Type {
    return item;
  }

interface Dog {
    name: string;
    breed: string;
  }
  
  const dog1 = uniqueDataTypeFunc<Dog>(
    { name: "Buddy", breed: "Labrador" },
  );
  const dog2 = uniqueDataTypeFunc<Dog>(
    { name: "Tom", breed: "Huskey" },
  );
  const dog3 = uniqueDataTypeFunc<Dog>(
    { name: "Jerry", breed: "Bull dog" },
  );
  
  console.log(dog1); // Outputs: [{ name: 'Buddy', breed: 'Labrador' }, { name: 'Default', breed: 'Unknown' }]
  console.log(dog2);
  console.log(dog3);
