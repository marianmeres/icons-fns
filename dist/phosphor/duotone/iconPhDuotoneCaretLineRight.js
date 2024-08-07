export const iconPhDuotoneCaretLineRight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M144,128,64,208V48Z" opacity="0.2"/><path d="M69.66,42.34A8,8,0,0,0,56,48V208a8,8,0,0,0,13.66,5.66l80-80a8,8,0,0,0,0-11.32ZM72,188.69V67.31L132.69,128ZM192,48V208a8,8,0,0,1-16,0V48a8,8,0,0,1,16,0Z"/></svg>`;
}
