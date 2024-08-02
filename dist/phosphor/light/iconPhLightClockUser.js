export const iconPhLightClockUser = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M134,72v46.29l39.32-19.66a6,6,0,0,1,5.36,10.74l-48,24A6,6,0,0,1,122,128V72a6,6,0,0,1,12,0Zm-6,146a90,90,0,1,1,90-90,6,6,0,0,0,12,0A102,102,0,1,0,128,230a6,6,0,0,0,0-12Zm101.8,4.46a6,6,0,0,1-11.6,3.08C215.14,214,204.37,206,192,206s-23.14,8-26.2,19.54A6,6,0,0,1,160,230a6.26,6.26,0,0,1-1.54-.2,6,6,0,0,1-4.26-7.34A38.09,38.09,0,0,1,172.72,199a30,30,0,1,1,38.56,0A38.09,38.09,0,0,1,229.8,222.46ZM174,176a18,18,0,1,0,18-18A18,18,0,0,0,174,176Z"/></svg>`;
}
