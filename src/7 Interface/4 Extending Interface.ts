// Interface #5 (Extending Interface)
interface MovieDetails {
    readonly name: string;
    ratings: number;
    printMovieInfo(name: string, price: number, ratings: number): string | number;
  }
  
  interface MovieGenra extends MovieDetails {
    genra: string;
  }  
  // Here this extends means we are taking all the elements from MoviMovieDetails first then appending them to MovieGenra interface and then appending the new required element that is genra so now we can use MovieGenr interface as interface MovieDetails + genra
  
  const movie1: MovieGenra = {
    name: "John Wick",
    ratings: 7,
    printMovieInfo(name: string, price: number, ratings: number) {
      return `Name: ${name}, Price: ${price}, Ratings: ${ratings}`;
    },
    genra: "Action",
  };
  
  const res = movie1.printMovieInfo("John Wick", 100, 8);
  console.log(res);