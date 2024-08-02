export const iconPhBoldFileCode = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M180.49,143.51a12,12,0,0,1,0,17l-24,24a12,12,0,0,1-17-17L155,152l-15.52-15.51a12,12,0,1,1,17-17Zm-64-24a12,12,0,0,0-17,0l-24,24a12,12,0,0,0,0,17l24,24a12,12,0,0,0,17-17L101,152l15.52-15.51A12,12,0,0,0,116.49,119.51ZM220,88V216a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.52l56,56A12,12,0,0,1,220,88ZM160,57V80h23Zm36,155V104H148a12,12,0,0,1-12-12V44H60V212Z"/></svg>`;
}
