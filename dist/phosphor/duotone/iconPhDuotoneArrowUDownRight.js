export const iconPhDuotoneArrowUDownRight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,168l-48,48V120Z" opacity="0.2"/><path d="M229.66,162.34l-48-48A8,8,0,0,0,168,120v40H88a48,48,0,0,1,0-96h88a8,8,0,0,0,0-16H88a64,64,0,0,0,0,128h80v40a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,229.66,162.34ZM184,196.69V139.31L212.69,168Z"/></svg>`;
}
