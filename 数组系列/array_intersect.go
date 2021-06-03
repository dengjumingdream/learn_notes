package main

import (
	"fmt"
)

func main() {
	fmt.Printf("JGO师--gogogo\n")
	var array1 = []int{1, 3, 3, 5, 8}
	var array2 = []int{1, 3, 5}
	var result = []int{}
	result = intersect(array1, array2)
	for index, value := range result {
		fmt.Printf("%v：%v\n", index, value)
	}
}

/*
 两数组交集获取
 @params nums1
 @params nums2
*/
func intersect(nums1 []int, nums2 []int) []int {
	m0 := map[int]int{}
	for _, v := range nums1 {
		//遍历nums1，初始化map
		m0[v] += 1
	}
	k := 0
	for _, v := range nums2 {
		//如果元素相同，将其存入nums2中，并将出现次数减1
		if m0[v] > 0 {
			m0[v] -= 1
			nums2[k] = v
			k++
		}
	}
	return nums2[0:k]
}

/*
数组排序
@param array
*/
func sortArray(array []int) []int {
	var size = len(array)
	for i := 0; i <= size; i++ {

	}
	return array
}
