export const iconPhThinTelevision = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,68H137.66l41.17-41.17a4,4,0,1,0-5.66-5.66L128,66.34,82.83,21.17a4,4,0,0,0-5.66,5.66L118.34,68H40A12,12,0,0,0,28,80V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V80A12,12,0,0,0,216,68ZM36,200V80a4,4,0,0,1,4-4H148V204H40A4,4,0,0,1,36,200Zm184,0a4,4,0,0,1-4,4H156V76h60a4,4,0,0,1,4,4Zm-24-84a8,8,0,1,1-8-8A8,8,0,0,1,196,116Zm0,48a8,8,0,1,1-8-8A8,8,0,0,1,196,164Z"/></svg>`;
}
