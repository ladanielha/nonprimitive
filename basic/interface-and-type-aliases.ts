// Type aliases create a new name for a type.

type StringOrNumber = string | number;

let id: StringOrNumber;
id = "12345"; // OK
id = 12345; // OK

// Interfaces
// Interfaces are a powerful way to define contracts within your code.

interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: "Dan",
  age: 24,
};

console.log(person.name); // Outputs: Dan

// Recursive Types
// Recursive types are types that refer to themselves within their own definition.

interface TreeNode {
  value: string;
  left: TreeNode | null;
  right: TreeNode | null;
}

let tree: TreeNode = {
  value: "root",
  left: {
    value: "left",
    left: null,
    right: null,
  },
  right: {
    value: "right",
    left: null,
    right: null,
  },
};
