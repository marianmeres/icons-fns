export const iconPhThinFloppyDiskBack = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,36H83.31a12,12,0,0,0-8.48,3.51L39.52,74.83A11.9,11.9,0,0,0,36,83.31V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM84,44h88V80a4,4,0,0,1-4,4H88a4,4,0,0,1-4-4ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V83.31a4,4,0,0,1,1.17-2.82L76,49.66V80A12,12,0,0,0,88,92h80a12,12,0,0,0,12-12V44h28a4,4,0,0,1,4,4Zm-84-92a36,36,0,1,0,36,36A36,36,0,0,0,128,116Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,180Z"/></svg>`;
}
