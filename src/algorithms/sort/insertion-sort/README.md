# 插入排序（Insertion Sort）

## 定义

插入排序（英语：Insertion Sort）是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。插入排序在实现上，通常采用in-place排序（即只需用到 ![latex](<https://latex.codecogs.com/gif.latex?\dpi{100}\O(1)>) 的额外空间的排序），因而在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。

## 概述

Insertion Sort 和打扑克牌时，从牌桌上逐一拿起扑克牌，在手上排序的过程相同。

举例：

Input: {5 2 4 6 1 3}。

首先拿起第一张牌, 手上有 {5}。

拿起第二张牌 2, 把 2 insert 到手上的牌 {5}, 得到 {2 5}。

拿起第三张牌 4, 把 4 insert 到手上的牌 {2 5}, 得到 {2 4 5}。

以此类推。

## 算法

一般来说，插入排序都采用in-place在数组上实现。具体算法描述如下：

- 从第一个元素开始，该元素可以认为已经被排序
- 取出下一个元素，在已经排序的元素序列中从后向前扫描
- 如果该元素（已排序）大于新元素，将该元素移到下一位置
- 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置
- 将新元素插入到该位置后
- 重复步骤2~5

## 动画
![demo](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Insertion-sort-example-300px.gif/220px-Insertion-sort-example-300px.gif)

## 复杂度

| 平均时间复杂度 | 最坏时间复杂度 | 最优时间复杂度 | 空间复杂度 |
| :- | :- | :- | :- | :- |
| ![latex](<https://latex.codecogs.com/gif.latex?\dpi{100}\O(n^2)>) | ![latex](<https://latex.codecogs.com/gif.latex?\dpi{100}\O(n^2)>) | ![latex](<https://latex.codecogs.com/gif.latex?\dpi{100}\O(n)>) | ![latex](<https://latex.codecogs.com/gif.latex?\dpi{100}\O(n)+O(1)>) |

---

引用自：[wiki](https://zh.wikipedia.org/wiki/%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F)