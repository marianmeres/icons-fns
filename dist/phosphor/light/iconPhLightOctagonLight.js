export const iconPhLightOctagonLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M225.9,81.65,174.35,30.1a13.92,13.92,0,0,0-9.9-4.1H91.55a13.92,13.92,0,0,0-9.9,4.1L30.1,81.65a13.92,13.92,0,0,0-4.1,9.9v72.9a13.92,13.92,0,0,0,4.1,9.9L81.65,225.9a13.92,13.92,0,0,0,9.9,4.1h72.9a13.92,13.92,0,0,0,9.9-4.1l51.55-51.55a13.92,13.92,0,0,0,4.1-9.9V91.55A13.92,13.92,0,0,0,225.9,81.65Zm-7.9,82.8a2,2,0,0,1-.59,1.42l-51.55,51.54a2,2,0,0,1-1.41.59H91.55a2,2,0,0,1-1.42-.59L38.59,165.87a2,2,0,0,1-.59-1.42V91.55a2,2,0,0,1,.59-1.42L90.14,38.59A2,2,0,0,1,91.55,38h72.9a2,2,0,0,1,1.42.59l51.54,51.55a2,2,0,0,1,.59,1.41Z"/></svg>`;
}
