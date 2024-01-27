/////++++++++++++++++FILTERS++++++++++++++++////////////
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) => num > 5)
// console.log(newNums);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) => {
//     return num > 5
// })
// console.log(newNums);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {
        title: 'Book One', genre: 'History', edition: '2004', publish: '1992'
    },
    {
        title: 'Book Two', genre: 'Science', edition: '2005', publish: '1994'
    },
    {
        title: 'Book Three', genre: 'Non-Fiction', edition: '2006', publish: '1996'
    },
    {
        title: 'Book Four', genre: 'Fiction', edition: '2007', publish: '1998'
    },
    {
        title: 'Book Five', genre: 'History', edition: '2008', publish: '2000'
    },
    {
        title: 'Book Six', genre: 'Science', edition: '2009', publish: '2002'
    },
    {
        title: 'Book Seven', genre: 'Non-Fiction', edition: '2010', publish: '2004'
    },
    {
        title: 'Book Eight', genre: 'Fiction', edition: '2011', publish: '2006'
    }
]
// const myBooks = books.filter((bk) =>
//     bk.genre === 'History'
// )
// console.log(myBooks);

const myBooks1 = books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre === 'History'
})
// console.log(myBooks1);


//////++++++++++++MAPS+++++++++++//////
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.map((num) => num + 10)
// console.log(newNums);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.map((num) => {return num + 10})
// console.log(newNums);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums
//     .map((num) => num * 10)
//     .map((num) => num + 1)
//     .filter((num) => num >= 40)
// console.log(newNums);


///////////////////++++++++++++++++++++Reduce++++++++++++++++++++////////////////////
// const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);


// const myNums = [1, 2, 3]
// const myTotal = myNums.reduce((acc, currval) => {
//     return acc + currval
// }, 0)
// console.log(myTotal);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "py course",
        price: 999
    },
    {
        itemname: "mobile dev course",
        price: 5999
    }, {
        itemname: "data science course",
        price: 12999
    }
]

const ptop=shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(ptop);







