function printSquare(size, pattern='#') { 
    const rowArray = Array(size).fill(pattern); 
    for (let i = 0; i < size; i++) { 
        console.log(rowArray.join(' ')); 
    } 
} 

module.exports = { printSquare };