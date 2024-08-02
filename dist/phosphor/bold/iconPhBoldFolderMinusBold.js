export const iconPhBoldFolderMinusBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M92,144a12,12,0,0,1,12-12h48a12,12,0,0,1,0,24H104A12,12,0,0,1,92,144ZM236,88V200.89A19.13,19.13,0,0,1,216.89,220H39.38A19.41,19.41,0,0,1,20,200.62V52A20,20,0,0,1,40,32H92.41a20,20,0,0,1,15,6.71l26,29.29H216A20,20,0,0,1,236,88ZM44,68h57.28L90.61,56H44ZM212,92H44V196H212Z"/></svg>`;
}
