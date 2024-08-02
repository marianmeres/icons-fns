export const iconPhThinCarProfile = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,116H209.66L165.17,71.52A11.9,11.9,0,0,0,156.69,68H44.28a12,12,0,0,0-10,5.34L4.67,117.78A4,4,0,0,0,4,120v48a12,12,0,0,0,12,12H36.29a28,28,0,0,0,55.42,0h72.58a28,28,0,0,0,55.42,0H240a12,12,0,0,0,12-12V128A12,12,0,0,0,240,116ZM41,77.78A4,4,0,0,1,44.28,76H156.69a4,4,0,0,1,2.82,1.17L198.34,116H15.47ZM64,196a20,20,0,1,1,20-20A20,20,0,0,1,64,196Zm128,0a20,20,0,1,1,20-20A20,20,0,0,1,192,196Zm52-28a4,4,0,0,1-4,4H219.71a28,28,0,0,0-55.42,0H91.71a28,28,0,0,0-55.42,0H16a4,4,0,0,1-4-4V124H240a4,4,0,0,1,4,4Z"/></svg>`;
}
