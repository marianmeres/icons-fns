export const iconPhThinParkThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,196H196V164h28a4,4,0,0,0,3.88-5l-32-128a4,4,0,0,0-7.76,0l-32,128a4,4,0,0,0,3.88,5h28v32H116V172h12a4,4,0,0,0,0-8H116V140h12a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8H52v24H40a4,4,0,0,0,0,8H52v24H24a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM192,48.49,218.88,156H165.12ZM60,140h48v24H60Zm0,32h48v24H60Zm56-80A24,24,0,1,0,92,68,24,24,0,0,0,116,92Zm0-40a16,16,0,1,1-16,16A16,16,0,0,1,116,52Z"/></svg>`;
}
