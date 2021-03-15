let bucketList = ["toys","games","paper"]

/*
let x = 0
let item = false

while (item == false) {
    bucketList[x] = prompt("Enter new item")
    x++
*/


let newList = prompt("Would you like to add to the Bucket list?")

/*
if (newList == "yes") {
    let newItem = prompt("Enter new item")
    bucketList.push(newItem)
} else {
    console.log(`The items on the Bucket List are ${bucketList}`)
}
//This one works but does not continue allowing the user to add things, which means you can only add things one at a time
*/

while (newList == "yes") {
    let newItem = prompt("Enter new item")
    bucketList.push(newItem)
}
// this one creates a while loop but does not allow the user to stop adding to the list 
//I was trying to find a way to combine the 2nd way and 3rd but could not get them to work together

console.log(`The items on the Bucket List are ${bucketList}`)