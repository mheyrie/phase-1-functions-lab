// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; 
    return Math.abs(pickupLocation - hqLocation); 
  }
  
  // Function to calculate distance from headquarters in feet
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock; 
  }
  
  // Function to calculate distance travelled in feet between two block locations
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTraveled = Math.abs(endBlock - startBlock);
    const feetPerBlock = 264;
    return blocksTraveled * feetPerBlock; 
  }
  
  function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distanceInFeet <= 400) {
      return 0; // First 400 feet are free
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      // Price is 2 cents per foot for distance between 400 and 2000 feet
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
      // Flat fare for distance over 2000 feet and under 2500 feet
      return 25;
    } else {
      return 'cannot travel that far'; // Distance over 2500 feet
    }
  }