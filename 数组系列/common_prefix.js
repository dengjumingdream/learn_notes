let strArray = ["fl", "fly", "flow"]
let firstStr = strArray[0];


let result = {
    commonStr: ""
}
getCommonPrefix(firstStr, strArray, result);
console.log(result);

// 值传递
let testStr = "A";
getChangeStr(testStr);
console.log(testStr);

/**
 * 获取字符串数组公共前缀
 * @param array
 */
function getCommonPrefix(firstStr, array, result) {
    let len = array.length;
    if(len > 0) {
        for(let i = 1; i < len; i++) {
            let tempStr = array[i];
            if(tempStr.indexOf(firstStr) == -1) {
                if(firstStr.length > 0) {
                    firstStr = firstStr.substring(0, firstStr.length - 1);
                    getCommonPrefix(firstStr, array, result);
                }else {
                    result.commonStr = "没找到";
                }
            }
        }
        result.commonStr = "找到了：" + firstStr
    }else {
        result.commonStr = "没找到";
    }
}

function getChangeStr(str) {
    str = "B";
}