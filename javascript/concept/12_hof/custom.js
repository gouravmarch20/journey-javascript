function createRelationshipChecker(statusToCheck) {
    return function (relationship) {
      return relationship.status === statusToCheck;
    };
  }
  
  const relationships = [
    { name: "Alice", status: "Married" },
    { name: "Bob", status: "Dating" },
    { name: "Charlie", status: "Crushing" },
    { name: "Dave", status: "Married" },
    { name: "Eve", status: "Dating" }
  ];
  
  const isMarried = createRelationshipChecker("Married");
  const isDating = createRelationshipChecker("Dating");
  const isCrushing = createRelationshipChecker("Crushing");
  
  console.log(relationships.filter(isMarried)); // Filters married relationships
  console.log(relationships.filter(isDating)); // Filters dating relationships
  console.log(relationships.filter(isCrushing)); // Filters crushing relationships
  