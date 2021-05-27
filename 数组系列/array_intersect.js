// *** Main-test
let array1 = [1, 3, 3, 5]
let array2 = [1, 3, 3, 5, 7]

let array3 = getIntersect(array1, array2);
printInfo(array3);


// *** 方法区
/**
 * 获取两数组交集
 */
function getIntersect(array1, array2) {
    let map1 = {}
    for(let i = 0, len = array1.length; i <len; i++) {
        let _temp1 = array1[i]
        if(map1[_temp1]) {
            map1[_temp1] += 1
        }else {
            map1[_temp1] = 1
        }
    }

    let resultArray = []
    for(let index in map1) {
        for(let i = 0, len = array2.length; i < len; i++) {
            let _temp2 = array2[i]
            if(index == _temp2 && map1[index] > 0) {
                resultArray.push(index);
                map1[index] -= 1 
            }
        }
    }
    return resultArray;
}

/**
 * 打印信息
 */
function printInfo(array3) {
    console.log("info:" + array3);
}
