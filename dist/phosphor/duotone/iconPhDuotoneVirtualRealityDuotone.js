export const iconPhDuotoneVirtualRealityDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,128h0a72,72,0,0,1-72,72H80A72,72,0,0,1,8,128H8A72,72,0,0,1,80,56h96A72,72,0,0,1,248,128Z" opacity="0.2"/><path d="M123.49,98.81l-24,64a8,8,0,0,1-15,0l-24-64a8,8,0,1,1,15-5.62l16.51,44,16.51-44a8,8,0,1,1,15,5.62ZM256,128a80.09,80.09,0,0,1-80,80H80A80,80,0,0,1,80,48h96A80.09,80.09,0,0,1,256,128Zm-16,0a64.07,64.07,0,0,0-64-64H80a64,64,0,0,0,0,128h96A64.07,64.07,0,0,0,240,128Zm-59.16,10.35L191,156a8,8,0,0,1-13.9,7.94l-11.44-20c-.53,0-1.07.05-1.61.05H152v16a8,8,0,0,1-16,0V96a8,8,0,0,1,8-8h20a28,28,0,0,1,16.84,50.35ZM152,128h12a12,12,0,0,0,0-24H152Z"/></svg>`;
}
