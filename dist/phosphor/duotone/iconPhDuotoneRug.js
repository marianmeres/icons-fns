export const iconPhDuotoneRug = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M56,48V208H200V48Zm72,120-24-40,24-40,24,40Z" opacity="0.2"/><path d="M200,16a8,8,0,0,0-8,8V40H160V24a8,8,0,0,0-16,0V40H112V24a8,8,0,0,0-16,0V40H64V24a8,8,0,0,0-16,0V232a8,8,0,0,0,16,0V216H96v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V24A8,8,0,0,0,200,16Zm-8,184H64V56H192Zm-70.86-27.88a8,8,0,0,0,13.72,0l24-40a8,8,0,0,0,0-8.24l-24-40a8,8,0,0,0-13.72,0l-24,40a8,8,0,0,0,0,8.24ZM128,103.55,142.67,128,128,152.45,113.33,128Z"/></svg>`;
}
