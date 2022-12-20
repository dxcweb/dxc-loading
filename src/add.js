import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
const _elements = {};

const _createRemoveHandler = (key) => () => {
  if (!_elements[key]) return;
  ReactDom.unmountComponentAtNode(_elements[key]);
  _elements[key].parentNode.removeChild(_elements[key]);
  delete _elements[key];
};

export default function addComponent(callback) {
  const key = Symbol();
  _elements[key] = document.createElement("div");
  const element = callback(_createRemoveHandler(key));
  document.body.appendChild(_elements[key]);
  const root = createRoot(_elements[key]);
  root.render(element);
  console.log(root.unmount);
}
