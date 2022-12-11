function isHTMLElement<T>(el: T | HTMLElement): el is HTMLElement {
  return el instanceof DocumentFragment;
}

function getExistentElement<T extends HTMLElement>(selector: string, node: Document | HTMLElement = document): T {
  const el = node.querySelector<T>(selector);
  if (el == null) throw new Error(`Element not found!`);
  return el;
}

export { isHTMLElement, getExistentElement };
