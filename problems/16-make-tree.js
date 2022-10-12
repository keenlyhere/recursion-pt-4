/***********************************************************************
Write a recursive function `makeTree(categories, parent)` that takes an array of
categories objects, each of which have an id property, and a parent property and
returns a nested tree of those objects using the parent properties to construct
the tree.

A parent value of null means you are at the bottom of the tree and the category
has no parent, so the default value parent is be null if no parent is
provided.

Example 1:

Given an array of objects with id properties to create our tree:

const categories1 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' }
];

const tree1 = makeTree(categories1, null);

We should return a tree like this:

{
  animals: {
    mammals: {}
  }
}

Example 2:
Now imagine we have a database that returns a bunch of rows of data:



Then we call the function with the categories:


The call above should return the tree below:

{
    animals: {
        mammals: {
            dogs: {
                chihuahua: {},
                labrador: {}
            },
            cats: {
                persian: {},
                siamese: {}
            }
        }
    }
}

***********************************************************************/

const makeTree = (categories, parent) => {
    let tree = {};
    let filtered = [];

    for (let category of categories) {
        if (category["parent"] === parent) {
            filtered.push(category)
        }
    }

    filtered.forEach((obj) => {
        tree[obj.id] = makeTree(categories, obj.id);
    })

    return tree;

    // for (let category of categories) {
    //     if (category["parent"] === parent) {
    //         tree[category.id] = makeTree(categories, category.parent)
    //     }
    // }
};

const categories2 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' },
    { id: 'cats', 'parent': 'mammals' },
    { id: 'dogs', 'parent': 'mammals' },
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'labrador', 'parent': 'dogs' },
    { id: 'persian', 'parent': 'cats' },
    { id: 'siamese', 'parent': 'cats' }
];

// let iD = Object.values(categories2[0])[0]; // animals
// console.log(iD)

const tree2 = makeTree(categories2, null);
console.log(JSON.stringify(makeTree(categories2, null)));


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = makeTree;

// This problem was inspired by a Fun Fun Function video:
// https://www.youtube.com/watch?v=k7-N8R0-KY4
