function verifyLive(input) {
   
    // live cell with fewer than two live neighbours dies as if by under population
    if(input.neighbours < 2){
        return false;
    } 
    
    // live cell with more than three live neighbours dies, as if by overcrowding
    if(input.neighbours > 3){
        return false;
    }
    
    // live cell with two or three live neighbours lives on to the next generation
    if(input.neighbours === 2 ){
        return true;
    }   

    // dead cell with exactly three live neighbours becomes a live cell
    if(input.neighbours === 3 && input.status === true){
        return true;
    } 
}
  
  export { verifyLive };