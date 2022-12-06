function mostFrequentItemCount(collection) {
    let maxCount = 0;
    for (let i = 0; i < collection.length; i++) {
        let count = 0;
        for (let x = 0; x < collection.length; x++) {
            if (collection[x] === collection[i]) count++;
        }
        if (count > maxCount) maxCount = count;
    }
    return maxCount;
}

console.log(mostFrequentItemCount([-1, 3, -1]));

//   function mostFrequentItemCount(collection) {
//     let res = 0;
//     let resOne = 0;

//     collection.map(x => {
//         resOne = 0;
//         collection.map(y => {
//             if ( x == y ) {
//                 resOne++;
//             }
//         })

//         if ( resOne > res) {
//             res = resOne;
//         }
//     })
//     return res;
// }

function mostFrequentItemCount(collection) {
    const countMap = new Map();


    for (const item of collection) {

        const itemCount = countMap.get(item) || 0;

        countMap.set(item, itemCount + 1);
    }

    const maxCount = Math.max(...countMap.values());


    return maxCount;
}


console.log(mostFrequentItemCount([7, 1, 1]));



function mostFrequentItemCount(collection) {
    let count = 0,
        frequentCount = 0;
    //В начале процесса этот цикл FOR начинается с индекса 0 (let i)   
    for (let i = 0; i < collection.length; i++) {
        //Этот цикл FOR также начинается с индекса 0 (let j)
        for (let j = 0; j < collection.length; j++) {
            //let i остается на индексе 0, пока let j циклически проходит через весь массив, сравнивая каждое число в массиве с первым индексом (let i).
            //если let i и let j когда-либо были одинаковыми, счетчик увеличивается.
            if (collection[i] == collection[j]) {
                count++;
            }
            //Если после циклического просмотра массива будет найдено новое более частое число, это число будет сохранено в frequentCount.
            if (frequentCount < count) {
                frequentCount = count;
            }
        }
        //Счетчик затем сбрасывается. Процесс запускается снова
        count = 0;
    }
    //Окончательный подсчет возвращается из функции
    return frequentCount;
}