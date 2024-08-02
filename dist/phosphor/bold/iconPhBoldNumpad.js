export const iconPhBoldNumpad = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M84,48A20,20,0,1,1,64,28,20,20,0,0,1,84,48Zm44-20a20,20,0,1,0,20,20A20,20,0,0,0,128,28Zm64,40a20,20,0,1,0-20-20A20,20,0,0,0,192,68ZM64,84a20,20,0,1,0,20,20A20,20,0,0,0,64,84Zm64,0a20,20,0,1,0,20,20A20,20,0,0,0,128,84Zm64,0a20,20,0,1,0,20,20A20,20,0,0,0,192,84ZM64,140a20,20,0,1,0,20,20A20,20,0,0,0,64,140Zm64,0a20,20,0,1,0,20,20A20,20,0,0,0,128,140Zm0,56a20,20,0,1,0,20,20A20,20,0,0,0,128,196Zm64-56a20,20,0,1,0,20,20A20,20,0,0,0,192,140Z"/></svg>`;
}
