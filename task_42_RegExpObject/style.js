function countAnimals(animals,count){
    
    return count.map( item => (animals.match( new RegExp(item, "g"))||[]).length);
}


console.log(countAnimals("dog,cat",["dog","cat"]));