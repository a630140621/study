const fs = require('fs')

// fs.writeFile('./b.txt', 'this is file b', err => {
//     console.log('err =', err)
// })

// function readFileA(callback) {
//     fs.readFile('./a.txt', (err, data) => {
//         callback(err, data);
//     })
// }

// function readFileB(callback) {
//     fs.readFile('./b.txt', (err, data) => {
//         callback(err, data);
//     })
// }

// function printC() {
//     console.log('c')
// }

// readFileA((err, data) => {
//     console.log('err =', err, 'file A data =', data.toString());
// })

// readFileB((err, data) => {
//     console.log('err =', err, 'file B data =', data.toString());
// })

// printC()

function readFileA() {
    return new Promise((resolve, reject) => {
        fs.readFile('./a.txt', (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

function readFileB() {
    return new Promise((resolve, reject) => {
        fs.readFile('./b.txt', (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

function getC() {
    return 'c';
}

async function asyncFunc() {
    let dataA;
    try {
        dataA = await readFileA();
    } catch (err) {
        console.log(err)
    }
    let dataB = await readFileB();
    let dataC = await getC();

    console.log(dataA.toString(), dataB.toString(), dataC);

    return 'done'
}

asyncFunc().then(value => {
    console.log(value)
}).catch(err => {
    console.log(err);
})