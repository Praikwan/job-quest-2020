var arr = [23, 21, 34, 34];
var temp_arr = [...new Set(arr)].slice(0); //clone array
var second_largest_value = temp_arr.sort()[temp_arr.length - 2];
var index_of_largest_value = arr.indexOf(second_largest_value);

console.log(second_largest_value);
