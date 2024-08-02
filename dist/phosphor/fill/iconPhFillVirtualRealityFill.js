export const iconPhFillVirtualRealityFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M176,48H80a80,80,0,0,0,0,160h96a80,80,0,0,0,0-160ZM123.49,98.81l-24,64a8,8,0,0,1-15,0l-24-64a8,8,0,1,1,15-5.62l16.51,44,16.51-44a8,8,0,1,1,15,5.62ZM191,156a8,8,0,0,1-13.9,7.94l-11.44-20c-.53,0-1.07.05-1.61.05H152v16a8,8,0,0,1-16,0V96a8,8,0,0,1,8-8h20a28,28,0,0,1,16.84,50.35ZM176,116a12,12,0,0,1-12,12H152V104h12A12,12,0,0,1,176,116Z"/></svg>`;
}
