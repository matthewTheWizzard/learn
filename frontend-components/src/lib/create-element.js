/**
 * Creates an HTML element with the given tag name and attributes.
 *
 * @param {string} tag - The tag name of the element to create.
 * @param {{ class: string, id: string }} props - An object containing key/value pairs of attributes to set on the element.
 * @param {[Element | string]} children - Zero or more child elements to add to the element. Strings are converted to text nodes.
 * @returns {Element} The created element.
 */
export const createElement = (tag, props, ...children) => {
    const element = document.createElement(tag);

    Object.keys(props).forEach((key) => element.setAttribute(key, props[key]));

    children.forEach((child) => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });

    return element;
};
