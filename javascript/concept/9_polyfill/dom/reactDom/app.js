const dom = {
  type: "section",
  props: {
    id: "section-1",
    class: "main-section",
    style: "background-color: lightblue; padding: 20px; border-radius: 5px;",
  },
  children: [
    {
      type: "header",
      children: "Welcome to Soni Frontend Doc",
      props: {
        style: "font-size: 24px; color: darkblue; text-align: center;",
      },
    },
    {
      type: "article",
      children: [
        {
          type: "h2",
          children: "Render DOM",
          props: { style: "color: darkgreen;" },
        },
        {
          type: "p",
          children: "Try yourself first then look for solution",
          props: { style: "font-size: 16px; color: grey;" },
        },
      ],
    },
    {
      type: "footer",
      children: "Thanks you :)",
      props: {
        style: "text-align: center; font-size: 14px; color: black;",
      },
    },
  ],
};

const makeDomUi = (dom, parent = document.body) => {
  const element = document.createElement(dom.type);

  if (dom.props) {
    for (let prop in dom.props) {
      if (prop === "style") {
        element.style.cssText = dom.props[prop];
      } else {
        element.setAttribute(prop, dom.props[prop]);
      }
    }
  }

  if (Array.isArray(dom.children)) {
    dom.children.forEach((child) => makeDomUi(child, element));
  } else if (typeof dom.children === "string") {
    element.textContent = dom.children;
  }

  parent.appendChild(element);
  return element; // Optional return if needed
};

if (document.body) {
  const renderedTree = makeDomUi(dom);
  console.log("Rendered Tree Root:", renderedTree);
}
