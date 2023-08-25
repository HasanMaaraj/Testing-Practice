const analyzeArray = arr => {
    let min = arr.length ? Math.min(...arr):null;
    let max = arr.length ? Math.max(...arr):null;
    let average = arr.length 
    ? arr.reduce((total, current) =>  total + current, 0) / arr.length
    :null;
    let length = arr.length;
    return  {average, min, max, length};
}

module.exports = analyzeArray;