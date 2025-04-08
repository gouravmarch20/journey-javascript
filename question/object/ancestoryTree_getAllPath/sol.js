const groupByParent = (relations) => {
  const grouped = {};
  relations.forEach(({ parent, child }) => {
    if (!grouped[parent]) grouped[parent] = [];
    grouped[parent].push(child);
  });
  return grouped;
};

const getAllPaths = (grouped, current, path = [], result = []) => {
  const newPath = [...path, current];
  result.push(newPath);

  const children = grouped[current];
  if (children) {
    children.forEach((child) => {
      getAllPaths(grouped, child, newPath, result);
    });
  }

  return result;
};

const convertToPaths = (relations, root = "A") => {
  const grouped = groupByParent(relations);
  // console.log("grouped" , grouped)
  return getAllPaths(grouped, root);
};

// Example usage
const relations = [
  { parent: "A", child: "B" },
  { parent: "A", child: "C" },
  { parent: "B", child: "D" },
  { parent: "B", child: "E" },
  { parent: "C", child: "F" },
  { parent: "C", child: "G" },
];

const paths = convertToPaths(relations, "A");
console.log(paths);
