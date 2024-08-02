export const iconPhLightPersonSimple = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,78A30,30,0,1,0,98,48,30,30,0,0,0,128,78Zm0-48a18,18,0,1,1-18,18A18,18,0,0,1,128,30ZM229.14,131.09a6,6,0,0,1-8.23,2c-.37-.21-36.49-21.43-86.91-23v39.61L196.48,220a6,6,0,0,1-9,8L128,161,68.48,228a6,6,0,0,1-9-8L122,149.72V110.11c-50.42,1.6-86.55,22.82-86.92,23a6,6,0,0,1-6.17-10.29C30.6,121.84,71,98,128,98s97.39,23.84,99.09,24.86A6,6,0,0,1,229.14,131.09Z"/></svg>`;
}
