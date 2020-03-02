// // Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index for which array[index] == index.
// //     Return - 1 if there is no such index.

// // Your algorithm should be very performant.

// // [input] array of integers( with 0 - based nonnegative indexing )
// // [output] integer

// input: [-8, 0, 2, 5]
// output: 2 # since array[2] == 2

// input: [-1, 0, 3, 6]
// output: -1 # since no index in array satisfies array[index] == index

const indexEqualsValue = a => {
    for (let i = 0; i < a.length; i++) {
        if (i === a[i]) return i
    }
    return -1;
}