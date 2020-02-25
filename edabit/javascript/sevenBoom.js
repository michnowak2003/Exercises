// Create a function that takes an array of numbers and return "Boom!" if the number
// 7 appears in the array.Otherwise, return "there is no 7 in the array".

// Test.assertEquals(sevenBoom([2, 6, 7, 9, 3]), "Boom!")
// Test.assertEquals(sevenBoom([33, 68, 400, 5]), "there is no 7 in the array")
// Test.assertEquals(sevenBoom([86, 48, 100, 66]), "there is no 7 in the array")
// Test.assertEquals(sevenBoom([76, 55, 44, 32]), "Boom!")
// Test.assertEquals(sevenBoom([35, 4, 9, 37]), "Boom!")


const sevenBoom = arr => arr.toString().includes(7) ? "Boom!" : "there is no 7 in the array"

