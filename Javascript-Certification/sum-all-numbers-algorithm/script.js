function sumAll(nums) {
  if (!Array.isArray(nums)) {
    throw new Error("Argument should be an array!");
  }
  if (nums.length > 2 || nums.length === 0) {
    throw new Error("Array should have 2 values!");
  }

  let [min, max] = nums;

  if (nums[0] > nums[1]) {
    [max, min] = nums;
  }

  const sum = (max - min + 1) * (max + min) / 2;

  return sum;
}

console.log(sumAll([4, 1])); // 10
console.log(sumAll([5, 10])); // 45
console.log(sumAll([10, 5])); // 45
console.log(sumAll([1, 4])); // 10
