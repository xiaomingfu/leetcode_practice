/*
Given two sorted integer arrays nums1 and nums2,
 merge nums2 into nums1 as one sorted array.
*/
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = nums1.length - 1;
  while (k >= 0) {
    if (nums1[i] > nums1[j] && i >= 0) {
      nums1[k] = nums1[i];
      i--;
    } else if (j >= 0) {
      nums1[k] = nums1[j];
      j--;
    }
    k--;
  }
};
