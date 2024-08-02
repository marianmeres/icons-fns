export const iconPhThinDotsNineThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M68,60a8,8,0,1,1-8-8A8,8,0,0,1,68,60Zm60-8a8,8,0,1,0,8,8A8,8,0,0,0,128,52Zm68,16a8,8,0,1,0-8-8A8,8,0,0,0,196,68ZM60,120a8,8,0,1,0,8,8A8,8,0,0,0,60,120Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,128,120Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,196,120ZM60,188a8,8,0,1,0,8,8A8,8,0,0,0,60,188Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,128,188Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,196,188Z"/></svg>`;
}
