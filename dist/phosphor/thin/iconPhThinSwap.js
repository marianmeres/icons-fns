export const iconPhThinSwap = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,48V152a12,12,0,0,1-12,12H89.66l17.17,17.17a4,4,0,0,1-5.66,5.66l-24-24a4,4,0,0,1,0-5.66l24-24a4,4,0,0,1,5.66,5.66L89.66,156H208a4,4,0,0,0,4-4V48a4,4,0,0,0-4-4H96a4,4,0,0,0-4,4v8a4,4,0,0,1-8,0V48A12,12,0,0,1,96,36H208A12,12,0,0,1,220,48ZM168,196a4,4,0,0,0-4,4v8a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V104a4,4,0,0,1,4-4H166.34l-17.17,17.17a4,4,0,0,0,5.66,5.66l24-24a4,4,0,0,0,0-5.66l-24-24a4,4,0,0,0-5.66,5.66L166.34,92H48a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12H160a12,12,0,0,0,12-12v-8A4,4,0,0,0,168,196Z"/></svg>`;
}
