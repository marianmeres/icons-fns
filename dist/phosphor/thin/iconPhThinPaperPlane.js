export const iconPhThinPaperPlane = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M234.43,202.08,138.35,34.14a12,12,0,0,0-20.92,0l-95.88,168A12,12,0,0,0,36,219.3l92-31.08,91.94,31.06a12,12,0,0,0,14.49-17.2ZM227,210.56a3.94,3.94,0,0,1-4.47,1.16L132,181.13V120a4,4,0,0,0-8,0v61.13L33.37,211.74a4,4,0,0,1-4.85-5.69l95.87-168a4,4,0,0,1,7,0L227.47,206A3.91,3.91,0,0,1,227,210.56Z"/></svg>`;
}
