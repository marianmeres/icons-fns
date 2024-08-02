export const iconPhLightMusicNotesPlusLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M230,48a6,6,0,0,1-6,6H206V72a6,6,0,0,1-12,0V54H176a6,6,0,0,1,0-12h18V24a6,6,0,0,1,12,0V42h18A6,6,0,0,1,230,48Zm-16,64v52a34.06,34.06,0,1,1-12-25.89V112a6,6,0,0,1,12,0Zm-12,52a22,22,0,1,0-22,22A22,22,0,0,0,202,164ZM86,108.68V196a34.06,34.06,0,1,1-12-25.89V56a6,6,0,0,1,4.54-5.82l56-14a6,6,0,1,1,2.92,11.64L86,60.68V96.32l72.54-18.14a6,6,0,1,1,2.92,11.64ZM74,196a22,22,0,1,0-22,22A22,22,0,0,0,74,196Z"/></svg>`;
}
