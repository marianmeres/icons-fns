export const iconPhThinCardholderThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,52H48A20,20,0,0,0,28,72V184a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V72A20,20,0,0,0,208,52ZM36,92H220v24H160a4,4,0,0,0-4,4,28,28,0,0,1-56,0,4,4,0,0,0-4-4H36ZM48,60H208a12,12,0,0,1,12,12V84H36V72A12,12,0,0,1,48,60ZM208,196H48a12,12,0,0,1-12-12V124H92.22a36,36,0,0,0,71.56,0H220v60A12,12,0,0,1,208,196Z"/></svg>`;
}
