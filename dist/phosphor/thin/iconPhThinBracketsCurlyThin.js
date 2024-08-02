export const iconPhThinBracketsCurlyThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M35.89,128C52,136.23,52,155.64,52,172c0,24.8,1.35,40,28,40a4,4,0,0,1,0,8c-36,0-36-26.61-36-48,0-24.8-1.35-40-28-40a4,4,0,0,1,0-8c26.65,0,28-15.2,28-40,0-21.39,0-48,36-48a4,4,0,0,1,0,8C53.35,44,52,59.2,52,84,52,100.36,52,119.77,35.89,128ZM240,124c-26.65,0-28-15.2-28-40,0-21.39,0-48-36-48a4,4,0,0,0,0,8c26.65,0,28,15.2,28,40,0,16.36,0,35.77,16.11,44C204,136.23,204,155.64,204,172c0,24.8-1.35,40-28,40a4,4,0,0,0,0,8c36,0,36-26.61,36-48,0-24.8,1.35-40,28-40a4,4,0,0,0,0-8Z"/></svg>`;
}
