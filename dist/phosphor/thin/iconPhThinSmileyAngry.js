export const iconPhThinSmileyAngry = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M100,140a8,8,0,1,1-8-8A8,8,0,0,1,100,140Zm64-8a8,8,0,1,0,8,8A8,8,0,0,0,164,132Zm64-4A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128ZM173.78,84.67,128,115.19,82.22,84.67a4,4,0,1,0-4.44,6.66l48,32a4,4,0,0,0,4.44,0l48-32a4,4,0,1,0-4.44-6.66Zm-19.57,96c-7.82-5.2-15.27-8.67-26.21-8.67s-18.39,3.47-26.21,8.67a4,4,0,1,0,4.42,6.66C113.2,182.69,119,180,128,180s14.8,2.69,21.79,7.33a4,4,0,1,0,4.42-6.66Z"/></svg>`;
}
