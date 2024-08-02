export const iconPhThinCoffeeBean = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M209,47c-32.36-32.35-95-22.33-139.7,22.34S14.63,176.66,47,209c12.82,12.81,30.38,19,49.71,19,29.46,0,63-14.34,90-41.32C231.35,142,241.37,79.34,209,47ZM75,75c25.47-25.46,57-39.09,84.26-39.09,14.51,0,27.83,3.87,38.43,11.84-25.76,7.05-63,26.4-73.6,79.49-10.5,52.52-49.25,69.26-72.91,74.58C23.77,172.12,34.16,115.81,75,75ZM181,181c-39,39-92.17,50.23-122.71,27.25,25.75-7,63-26.39,73.62-79.48,10.5-52.53,49.25-69.26,72.91-74.59C232.23,83.88,221.84,140.19,181,181Z"/></svg>`;
}
