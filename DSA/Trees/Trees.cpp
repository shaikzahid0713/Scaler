#include <iostream>
#include <math.h>
#include <vector>
#include <stack>
#include <queue>

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

void inOrderTraversal(Node *root)
{
    if (root == NULL)
        return;
    inOrderTraversal(root->left);
    cout << root->data << " ";
    inOrderTraversal(root->right);
}

void IterativeInOrderTraversal(Node *root)
{
    stack<Node *> inOrder;
    Node *current = root;
    while (inOrder.size() > 0 || current)
    {
        if (current)
        {
            inOrder.push(current);
            current = current->left;
        }
        else
        {
            current = inOrder.top();
            inOrder.pop();
            cout << current->data << " ";
            current = current->right;
        }
    }
    cout << "\n";
}

void postOrderTraversal(Node *root)
{
    if (root == NULL)
        return;
    postOrderTraversal(root->left);
    postOrderTraversal(root->right);
    cout << root->data << " ";
}

void IterativePostOrderTraversal(Node *root)
{
    stack<Node *> postOrderStack;
    Node *current = root;
    while (!postOrderStack.empty() || current)
    {
        if (current)
        {
            postOrderStack.emplace(current);
            current = current->left;
        }
        else
        {
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

void levelOrderTraversal(Node *root)
{
    queue<Node *> levelOrderQueue;
    Node *current = root;
    levelOrderQueue.emplace(current);
    while (levelOrderQueue.size() > 0)
    {
        Node *currentNode = levelOrderQueue.front();
        levelOrderQueue.pop();
        if (currentNode->left)
            levelOrderQueue.emplace(currentNode->left);
        if (currentNode->right)
            levelOrderQueue.emplace(currentNode->right);
        cout << currentNode->data << " ";
    }
    cout << "\n";
}

void breadthFirstSearch(Node *root)
{
    queue<Node *> levelOrderQueue;
    Node *current = root;
    levelOrderQueue.emplace(current);
    while (levelOrderQueue.size() > 0)
    {
        int size = levelOrderQueue.size();
        while (size--)
        {
            Node *currentNode = levelOrderQueue.front();
            levelOrderQueue.pop();
            if (currentNode->left)
                levelOrderQueue.emplace(currentNode->left);
            if (currentNode->right)
                levelOrderQueue.emplace(currentNode->right);
            cout << currentNode->data << " ";
        }
        cout << "\n";
    }
    cout << "\n";
}


void rightView(Node *root)
{
    queue<Node *> levelOrderQueue;
    Node *current = root;
    levelOrderQueue.emplace(current);
    while (levelOrderQueue.size() > 0)
    {
        int size = levelOrderQueue.size();
        for (int i = 0; i < size; i++)
        {
            Node *currentNode = levelOrderQueue.front();
            levelOrderQueue.pop();
            if (currentNode->left)
                levelOrderQueue.emplace(currentNode->left);
            if (currentNode->right)
                levelOrderQueue.emplace(currentNode->right);

            if (i == size - 1)
            cout << currentNode->data << " ";
        }
        cout << "\n";
    }
    cout << "\n";
}

void leftView(Node *root)
{
    queue<Node *> levelOrderQueue;
    Node *current = root;
    levelOrderQueue.emplace(current);
    while (levelOrderQueue.size() > 0)
    {
        int size = levelOrderQueue.size();
        for (int i = 0; i < size; i++)
        {
            Node *currentNode = levelOrderQueue.front();
            levelOrderQueue.pop();
            if (currentNode->left)
                levelOrderQueue.emplace(currentNode->left);
            if (currentNode->right)
                levelOrderQueue.emplace(currentNode->right);

            if (i == 0)
            cout << currentNode->data << " ";
        }
        cout << "\n";
    }
    cout << "\n";
}

// Node* invertTree(Node* root) {
//     if (!root) return NULL;
//     return current;
// }

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
    root->left->left->left = new Node(35);
    root->left->left->left->right = new Node(55);
    root->right->right = rightGrandChild;
    root->right->right->right = new Node(45);
    root->right->right->right->left = new Node(75);

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

    cout << "-------------------- Level Order Traversal ----------------------------- \n";
    levelOrderTraversal(root);

    cout << "-------------------- Breadth First Search ----------------------------- \n";
    breadthFirstSearch(root);


    cout << "-------------------- Left View ----------------------------- \n";
    leftView(root);


    cout << "-------------------- Right View ----------------------------- \n";
    rightView(root);
}