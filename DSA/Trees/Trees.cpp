#include <iostream>
#include <math.h>
#include <vector>
#include <stack>

using namespace std;

class Node
{
public:
    int data = 0;
    Node *left;
    Node *right;

    Node(int data)
    {
        this->data = data;
        this->left = NULL;
        this->right = NULL;
    }
};

int size(Node *root)
{
    if (root == NULL)
        return 0;
    return 1 + size(root->left) + size(root->right);
}

int sumOfAllNodes(Node *root)
{
    if (root == NULL)
        return 0;
    return root->data + sumOfAllNodes(root->left) + sumOfAllNodes(root->right);
}

int heightOfTree(Node *root)
{
    if (root == NULL)
        return -1;
    return 1 + max(heightOfTree(root->left), heightOfTree(root->right));
}

void inOrderTraversal(Node *root) {
    if (root == NULL)
        return;
    inOrderTraversal(root->left);
    cout << root->data << " ";
    inOrderTraversal(root->right);
}

void IterativeInOrderTraversal(Node *root) {
    stack<Node*> inOrder;
    Node* current = root;
    while (inOrder.size() > 0 || current) {
        if (current) {
            inOrder.push(current);
            current = current->left;
        }
        else {
            current = inOrder.top();
            inOrder.pop();
            cout << current->data << " ";
            current = current->right;

        }
    }
    cout << "\n";
}

void postOrderTraversal(Node *root) {
    if (root == NULL)
        return;
    postOrderTraversal(root->left);
    postOrderTraversal(root->right);
    cout << root->data << " ";
}

void IterativePostOrderTraversal(Node *root) {
    stack<Node*> postOrderStack;
    Node* current = root;
    while(!postOrderStack.empty() || current) {
        if (current) {
            postOrderStack.emplace(current);
            current = current->left;
        }
        else {
            current = current->right;
            current = postOrderStack.top();
            postOrderStack.pop();
            cout << current->data << " ";
        }
    }
    cout << "\n";
}

void preOrderTraversal(Node *root)
{
    if (root == NULL)
        return;
    cout << root->data << " ";
    preOrderTraversal(root->left);
    preOrderTraversal(root->right);
}

int main()
{
    Node *root = new Node(5);
    Node *leftChild = new Node(10);
    Node *rightChild = new Node(15);
    root->left = leftChild;
    root->right = rightChild;
    Node *leftGrandChild = new Node(20);
    Node *rightGrandChild = new Node(25);
    root->left->left = leftGrandChild;
    root->right->right = rightGrandChild;

    int count = size(root);
    cout << "Size of tree is " << count << "\n";

    int sum = sumOfAllNodes(root);
    cout << "Sum of tree is " << sum << "\n";

    int height = heightOfTree(root);
    cout << "Height of tree is " << height << "\n";

    cout << "------------- Pre Order Traversal -----------" << "\n";
    preOrderTraversal(root);
    cout << "\n";

    cout << "------------- In Order Traversal -----------" << "\n";
    inOrderTraversal(root);
    cout << "\n";

    cout << "------------- Iterative In Order Traversal -----------" << "\n";
    IterativeInOrderTraversal(root);
    cout << "\n";

    cout << "------------- Post Order Traversal -----------" << "\n";
    postOrderTraversal(root);
    cout << "\n";


    cout << "------------- Iterative Post Order Traversal -----------" << "\n";
    postOrderTraversal(root);
    cout << "\n";
}