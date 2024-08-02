export const iconPhBoldRadio = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M160,172a36,36,0,1,0-36-36A36,36,0,0,0,160,172Zm0-48a12,12,0,1,1-12,12A12,12,0,0,1,160,124Zm56-64H113.76l81.69-24.5a12,12,0,0,0-6.9-23l-160,48A12,12,0,0,0,20,72V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V80A20,20,0,0,0,216,60Zm-4,128H44V84H212ZM60,116a12,12,0,0,1,12-12H96a12,12,0,0,1,0,24H72A12,12,0,0,1,60,116Zm0,40a12,12,0,0,1,12-12H96a12,12,0,0,1,0,24H72A12,12,0,0,1,60,156Z"/></svg>`;
}
