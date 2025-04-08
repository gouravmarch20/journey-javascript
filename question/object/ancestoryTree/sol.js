const groupByParent = (relations) => {
  const grouped = {};
  relations.forEach(({ parent, child }) => {
    if (!grouped[parent]) {
      grouped[parent] = [];
    }
    grouped[parent].push(child);
  });
  return grouped;
};

const buildTree = (grouped, parent) => {
  console.log("---", grouped, parent);
  const node = { name: parent, children: [] };
  if (grouped[parent]) {
    node.children = grouped[parent].map((child) => buildTree(grouped, child));
  }
  return node;
};

const convertToTree = (relations, root = "A") => {
  const grouped = groupByParent(relations);
  console.log(grouped);
  return buildTree(grouped, root);
};

// Example relations
const relations = [
  { parent: "A", child: "B" },
  { parent: "A", child: "C" },
  { parent: "B", child: "D" },
  { parent: "B", child: "E" },
  { parent: "C", child: "F" },
  { parent: "C", child: "G" },
];

console.log(JSON.stringify(convertToTree(relations), null, 2));
