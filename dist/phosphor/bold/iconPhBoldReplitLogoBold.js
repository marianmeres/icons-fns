export const iconPhBoldReplitLogoBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,84H156V40a20,20,0,0,0-20-20H72A20,20,0,0,0,52,40V88a20,20,0,0,0,20,20h60v40H72a20,20,0,0,0-20,20v48a20,20,0,0,0,20,20h64a20,20,0,0,0,20-20V172h60a20,20,0,0,0,20-20V104A20,20,0,0,0,216,84ZM132,212H76V172h56Zm0-128H76V44h56Zm80,64H156V108h56Z"/></svg>`;
}
