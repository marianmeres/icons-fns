export const iconPhLightPencilCircle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200.12,55.87A102,102,0,1,0,55.88,200.12,102,102,0,1,0,200.12,55.87ZM106,134h44l14.1,30.56A30,30,0,0,0,128,174a30,30,0,0,0-36.11-9.46Zm5.54-12L128,86.32,144.47,122ZM134,192a18,18,0,0,1,36,0v15.64a89.26,89.26,0,0,1-36,10.14Zm-48,0a18,18,0,0,1,36,0v25.78a89.26,89.26,0,0,1-36-10.14Zm105.64-.36A92.76,92.76,0,0,1,182,200V176a6,6,0,0,0-.55-2.51l-48-104a6,6,0,0,0-10.9,0l-48,104A6,6,0,0,0,74,176v24a92.76,92.76,0,0,1-9.64-8.37,90,90,0,1,1,127.28,0Z"/></svg>`;
}
