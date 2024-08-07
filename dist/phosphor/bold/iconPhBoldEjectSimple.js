export const iconPhBoldEjectSimple = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M236,200a12,12,0,0,1-12,12H32a12,12,0,1,1,0-24H224A12,12,0,0,1,236,200ZM22,152.57a20,20,0,0,1,2.52-21.32L106.16,30.43a28.08,28.08,0,0,1,43.68,0l81.65,100.82A20.1,20.1,0,0,1,215.91,164H40.09A19.9,19.9,0,0,1,22,152.57ZM48.3,140H207.7L131.2,45.53a4.11,4.11,0,0,0-6.4,0Z"/></svg>`;
}
