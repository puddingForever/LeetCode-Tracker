function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    // find a kid who has most candies 
   let maxKid = Math.max(...candies); 

   // check if a kid can exceed the one with the maximum candies
   return candies.map(candy => candy + extraCandies >= maxKid ); 
}