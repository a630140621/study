const xlsx = require('xlsx');
const assert = require('assert');
const fs = require('fs');


/**
 * 
 * @param {Number} lineStart 第一行有数据的行数
 * @param {Number} lineEnd 最后一行的行数
 */
async function main(file, lineStart, lineEnd) {
    // 打开 excel
    const workbook = await xlsx.readFile(file);

    // 获取 第一张 sheet
    let sheetName = workbook.SheetNames[0];
    let worksheet = workbook.Sheets[sheetName];

    // 获取第 H-M 列的数据 zeroPointThreeum, zeroPointFiveum, onePointum, twoPointum, fivePointum, tenPointum
    // let lineStart = 9; // 第一行有数据的行数
    // let lineEnd = 105; // 最后一行的行数

    // lineStart = lineStart - 1;
    lineEnd = lineEnd + 1;

    // 获取所有的数据, 平行数组
    let zeroPointThreeum = [],
        zeroPointFiveum = [],
        onePointum = [],
        twoPointum = [],
        fivePointum = [],
        tenPointum = [],
        control = [];
    for (let i = lineStart; i < lineEnd; i++) {
        zeroPointThreeum.push(worksheet[`H${i}`].v);
        zeroPointFiveum.push(worksheet[`I${i}`].v);
        onePointum.push(worksheet[`J${i}`].v);
        twoPointum.push(worksheet[`K${i}`].v);
        fivePointum.push(worksheet[`L${i}`].v);
        tenPointum.push(worksheet[`M${i}`].v);
        control.push(worksheet[`P${i}`].v);
    }

    // 如果长度不一样, 可能有错误
    console.log(zeroPointThreeum.length, zeroPointFiveum.length, onePointum.length, twoPointum.length, fivePointum.length, tenPointum.length, control.length);

    genreCSVByNumber(zeroPointThreeum, zeroPointFiveum, onePointum, twoPointum, fivePointum, tenPointum, control);
}

// 以实验次数为分界, 生成 .csv 文件
function genreCSVByNumber(zeroPointThreeumAll, zeroPointFiveumAll, onePointumAll, twoPointumAll, fivePointumAll, tenPointumAll, controlAll) {
    let node = [];
    for (let i = 0; i < controlAll.length; i++) {
        if (controlAll[i] == 1) node.push(i);
    }

    console.log('node.length = ' + node.length)
    for (let i = 0; i < node.length - 1; i++) {
        let zeroPointThreeum = getGroupResult(zeroPointThreeumAll.slice(node[i], node[i + 1]));
        let zeroPointFiveum = getGroupResult(zeroPointFiveumAll.slice(node[i], node[i + 1]));
        let onePointum = getGroupResult(onePointumAll.slice(node[i], node[i + 1]));
        let twoPointum = getGroupResult(twoPointumAll.slice(node[i], node[i + 1]));
        let fivePointum = getGroupResult(fivePointumAll.slice(node[i], node[i + 1]));
        let tenPointum = getGroupResult(tenPointumAll.slice(node[i], node[i + 1]));

        console.log(zeroPointThreeum.length, zeroPointFiveum.length, onePointum.length, twoPointum.length, fivePointum.length, tenPointum.length);
        writeCSV(i, zeroPointThreeum, zeroPointFiveum, onePointum, twoPointum, fivePointum, tenPointum);
    }
}

// 获取 剔除异常值 之后的数组
function getGroupResult(array) {
    let average = getAverage(array);
    let stdev = getStdev(array);

    let result = [];
    for (let value of array) {
        if (Math.abs(value - average) > 3 * stdev) {
            result.push("");
        } else {
            result.push(value);
        }
    }

    return result;
}

// 求数组的平均值
function getAverage(array) {
    let sum = 0;
    for (let each of array) {
        sum += each;
    }

    return sum / array.length;
}

assert(getAverage([1, 2, 3]) == 2);
assert(getAverage([1, 2, 3, 6]) == 3);

// 求数组的标准差
function getStdev(array) {
    let mean = array.reduce(sum) / array.length;
    let deviations = array.map(function (x) {
        return x - mean;
    });
    let stddev = Math.sqrt(deviations.map(square).reduce(sum) / (array.length - 1));

    return stddev;
}

assert(Math.ceil(getStdev([2200, 2040, 2220, 1780])) == 204);
assert(Math.ceil(getStdev([2080, 1640, 2020, 1800])) == 203);

//求和函数
function sum(x, y) {
    return x + y;
};　　

//数组中每个元素求它的平方
function square(x) {
    return x ** 2;
};　　

function writeCSV(index, zeroPointThreeum, zeroPointFiveum, onePointum, twoPointum, fivePointum, tenPointum) {
    let len = zeroPointThreeum.length;
    let data = '0.3um, 0.5um, 1.0um, 2.0um, 5.0um, 10.0um \n';
    for (let i = 0; i < len; i++) {
        data += `${zeroPointThreeum[i]}, ${zeroPointFiveum[i]}, ${onePointum[i]}, ${twoPointum[i]}, ${fivePointum[i]}, ${tenPointum[i]} \n`;
    }

    fs.writeFileSync(`./handle-data/0710_${index}.csv`, data);
}



main('D:\\实测数据2018 (1)\\2018-0710-实测数据\\2018-0710-颗粒物数据.xlsx', 9, 3094).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})