export const iconPhThinBreadThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M236,80a36,36,0,0,0-36-36H48a36,36,0,0,0-12,69.94V200a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V113.94A36.07,36.07,0,0,0,236,80ZM44,200V115.77a35.22,35.22,0,0,0,4,.23,4,4,0,0,0,0-8,28,28,0,0,1,0-56h96a28,28,0,0,1,0,56,4,4,0,0,0,0,8,35.22,35.22,0,0,0,4-.23V200a4,4,0,0,1-4,4H48A4,4,0,0,1,44,200Zm156-92a4,4,0,0,0,0,8,35.22,35.22,0,0,0,4-.23V200a4,4,0,0,1-4,4H155.3a11.8,11.8,0,0,0,.7-4V113.94A36,36,0,0,0,166.59,52H200a28,28,0,0,1,0,56Z"/></svg>`;
}
