export const iconPhLightTelevisionLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,66H142.48l37.76-37.76a6,6,0,0,0-8.48-8.48L128,63.51,84.24,19.76a6,6,0,1,0-8.48,8.48L113.52,66H40A14,14,0,0,0,26,80V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V80A14,14,0,0,0,216,66ZM38,200V80a2,2,0,0,1,2-2H146V202H40A2,2,0,0,1,38,200Zm180,0a2,2,0,0,1-2,2H158V78h58a2,2,0,0,1,2,2Zm-20-84a10,10,0,1,1-10-10A10,10,0,0,1,198,116Zm0,48a10,10,0,1,1-10-10A10,10,0,0,1,198,164Z"/></svg>`;
}
