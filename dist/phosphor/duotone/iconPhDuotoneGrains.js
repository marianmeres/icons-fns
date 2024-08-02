export const iconPhDuotoneGrains = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,64v56a80,80,0,0,0-80,80,80,80,0,0,0-80-80V64a79.67,79.67,0,0,1,36.05,8.59v0C95.62,40.19,128,24,128,24S160.39,40.19,172,72.58h0A79.6,79.6,0,0,1,208,64Z" opacity="0.2"/><path d="M208,56a87.53,87.53,0,0,0-31.85,6c-14.32-29.7-43.25-44.46-44.57-45.13a8,8,0,0,0-7.16,0c-1.33.67-30.25,15.43-44.57,45.13A87.53,87.53,0,0,0,48,56a8,8,0,0,0-8,8v80a88,88,0,0,0,176,0V64A8,8,0,0,0,208,56ZM120,215.56A72.1,72.1,0,0,1,56,144V128.44A72.1,72.1,0,0,1,120,200Zm0-66.1a88,88,0,0,0-64-37.09V72.44A72.1,72.1,0,0,1,120,144ZM94.15,69.11C103.37,49.89,120.58,37.76,128,33.2c7.44,4.54,24.6,16.6,33.84,35.91A88.51,88.51,0,0,0,128,107.36,88.51,88.51,0,0,0,94.15,69.11ZM200,144a72.1,72.1,0,0,1-64,71.56V200a72.1,72.1,0,0,1,64-71.56Zm0-31.63a88,88,0,0,0-64,37.09V144a72.1,72.1,0,0,1,64-71.56Z"/></svg>`;
}
