export const iconPhLightInvoiceLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M28,126a6,6,0,0,1,0-12H56a10,10,0,0,0,0-20H40a22,22,0,0,1,0-44h2V48a6,6,0,0,1,12,0v2H64a6,6,0,0,1,0,12H40a10,10,0,0,0,0,20H56a22,22,0,0,1,0,44H54v2a6,6,0,0,1-12,0v-2ZM230,56V192a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V152a6,6,0,0,1,12,0v40a2,2,0,0,0,2,2H162V158H80a6,6,0,0,1,0-12h82V110H104a6,6,0,0,1,0-12H218V62H96a6,6,0,0,1,0-12H224A6,6,0,0,1,230,56Zm-56,90h44V110H174Zm44,46V158H174v36h42A2,2,0,0,0,218,192Z"/></svg>`;
}
