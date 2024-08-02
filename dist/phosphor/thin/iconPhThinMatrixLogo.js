export const iconPhThinMatrixLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M44,44V212H64a4,4,0,0,1,0,8H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H64a4,4,0,0,1,0,8Zm172-8H192a4,4,0,0,0,0,8h20V212H192a4,4,0,0,0,0,8h24a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM152,92a28,28,0,0,0-24,13.6,28,28,0,0,0-44-5.17V96a4,4,0,0,0-8,0v64a4,4,0,0,0,8,0V120a20,20,0,0,1,40,0v40a4,4,0,0,0,8,0V120a20,20,0,0,1,40,0v40a4,4,0,0,0,8,0V120A28,28,0,0,0,152,92Z"/></svg>`;
}
