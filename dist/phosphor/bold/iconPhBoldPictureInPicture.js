export const iconPhBoldPictureInPicture = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,44H40A20,20,0,0,0,20,64V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V64A20,20,0,0,0,216,44ZM44,68H212v48H136a12,12,0,0,0-12,12v60H44ZM148,188V140h64v48Z"/></svg>`;
}
