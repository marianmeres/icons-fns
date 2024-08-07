export const iconPhBoldMusicNotesPlus = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M236,48a12,12,0,0,1-12,12H212V72a12,12,0,0,1-24,0V60H176a12,12,0,0,1,0-24h12V24a12,12,0,0,1,24,0V36h12A12,12,0,0,1,236,48Zm-16,64v52a40,40,0,1,1-24-36.65V112a12,12,0,0,1,24,0Zm-24,52a16,16,0,1,0-16,16A16,16,0,0,0,196,164ZM92,113.37V196a40,40,0,1,1-24-36.65V56a12,12,0,0,1,9.09-11.64l56-14a12,12,0,0,1,5.82,23.28L92,65.37V88.63l65.09-16.27a12,12,0,0,1,5.82,23.28ZM68,196a16,16,0,1,0-16,16A16,16,0,0,0,68,196Z"/></svg>`;
}
