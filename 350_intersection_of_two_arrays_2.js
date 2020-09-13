/* Given two arrays, write a function to compute their intersection. */

var intersect = function (nums1, nums2) {
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        res.push(nums1[i]);
        nums2.splice(i, 1);
        break;
      }
    }
  }
  return res;
};

// second solution

var intersect = function (nums1, nums2) {
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.indexOf(nums1[i]) > -1) {
      res.push(nums1[i]);
      nums2.splice(i, 1);
    }
  }
  return res;
};

// sorted two pointers
var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let res = [];
  let index = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      res[index] = nums1[i];
      i++;
      j++;
      index++;
    }
  }
  return res;
};

// hash map

var intersect = function (nums1, nums2) {
  const map = {};
  const res = [];
  for (const num1 of nums1) {
    if (map[num1]) {
      map[num1]++;
    } else {
      map[num1] = 1;
    }
  }
  for (const num2 of nums2) {
    if (map[num2]) {
      res.push(num2);
      map[num2]--;
    }
  }
  return res;
};
