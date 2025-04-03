function customRender(element, container) {
  /*
    const domElement = document.createElement
    (element.type)
    domElement.innerHTML = element.Children 
    domElement.setAttribute("href", element.props.href)
    domElement.setAttribute('target', element.props.target)

    container.appendChild(domElement) */

  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.children;
  for (const prop in element.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop, element.props[prop]);
  }
  container.appendChild(domElement)
}
const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer);
