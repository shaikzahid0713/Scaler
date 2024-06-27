# [Trees](Trees.cpp)
- [Introduction](#introduction)
- [Resources](#resources)

## Introduction

- A tree is a non-linear hierarchical data structure that consists of nodes connected by edges.
- In a tree, Every element is a node
    ![Tree Types](../Assets/tree_types.png)
- Binary Trees
    - Every node must have maximum of 2 children only i.e, 0-2.
    ![Binary Tree](../Assets/binary_tree.png)


### Height of a Tree
- Length of the longest path from the `root` to any of its `descendent leaf node`.
- Height of any leaf node is 0
![Height of a Tree](../Assets/Tree_Height.png)
- Height of a node
    - Length of the longest path from the node to any of its descendent leaf node.
    - 1 + Max(height of its left child, height of its right child)
- Depth of a node
    - Length of the path from `root` to the `node`
    - Depth of Root is 0.
    ![Depth of a Tree](../Assets/Tree_Depth.png)


### Structure of a Tree
```c++
class Node {
    int data;
    Node left;
    Node right;
}
```

## Resources
- [Programmiz](https://www.programiz.com/dsa/trees)
- [W3Schools](https://www.w3schools.com/dsa/dsa_theory_trees.php)