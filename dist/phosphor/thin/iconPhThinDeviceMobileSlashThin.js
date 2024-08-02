export const iconPhThinDeviceMobileSlashThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M211,213.31,51,37.31A4,4,0,0,0,45,42.69L60,59.15V216a20,20,0,0,0,20,20h96a20,20,0,0,0,20-20v-7.25l9,9.94a4,4,0,1,0,5.92-5.38ZM188,216a12,12,0,0,1-12,12H80a12,12,0,0,1-12-12V68L188,200ZM72.7,24a4,4,0,0,1,4-4H176a20,20,0,0,1,20,20V150.83a4,4,0,1,1-8,0V40a12,12,0,0,0-12-12H76.7A4,4,0,0,1,72.7,24Z"/></svg>`;
}
