let strArray = ["flower", "fly", "flow"]
let firstStr = strArray[0];

let result = {
    commonStr: ""
}

// 引用传递
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
function getCommonPrefix(firstStr, array, obj) {
    let len = array.length;
    if(len > 0) {
        let _subStr = firstStr.substring(0, firstStr.length - 1);
        for(let i = 1; i < len; i++) {
            let tempStr = array[i];
            if(!tempStr.indexOf(_subStr)) {
                if(_subStr.length > 0) {
                    getCommonPrefix(_subStr, array, obj);
                }else {
                    "";
                }
            }
            obj.commonStr = _subStr
        }
    }else {
        "";
    }
}

function getChangeStr(str) {
    str = "B";
}