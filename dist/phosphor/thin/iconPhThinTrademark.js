export const iconPhThinTrademark = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM108,104a4,4,0,0,1-4,4H92v44a4,4,0,0,1-8,0V108H72a4,4,0,0,1,0-8h32A4,4,0,0,1,108,104Zm80,0v48a4,4,0,0,1-8,0V114.65l-21,24a4,4,0,0,1-6,0l-21-24V152a4,4,0,0,1-8,0V104a4,4,0,0,1,7-2.63l25,28.56,25-28.56a4,4,0,0,1,7,2.63Z"/></svg>`;
}
