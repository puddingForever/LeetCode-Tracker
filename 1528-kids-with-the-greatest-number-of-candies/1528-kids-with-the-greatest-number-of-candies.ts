function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
   let maxKid = Math.max(...candies);
   return candies.map(candy => candy + extraCandies >= maxKid );
};