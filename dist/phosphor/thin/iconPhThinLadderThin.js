export const iconPhThinLadderThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M211.76,214.63,160.26,73,170.8,44H184a4,4,0,0,0,0-8H88a4,4,0,0,0,0,8H98.29l-62,170.63a4,4,0,0,0,2.39,5.13A4.16,4.16,0,0,0,40,220a4,4,0,0,0,3.76-2.63L54.44,188h55.49l-9.69,26.63a4,4,0,0,0,2.39,5.13A4.12,4.12,0,0,0,104,220a4,4,0,0,0,3.76-2.63L127.17,164h57.66l19.41,53.37A4,4,0,0,0,208,220a4.16,4.16,0,0,0,1.37-.24A4,4,0,0,0,211.76,214.63ZM130.29,132H74.8L89.35,92h55.48Zm32-88L147.74,84H92.26L106.8,44ZM57.35,180l14.54-40h55.49l-14.55,40Zm72.72-24L156,84.7,181.92,156Z"/></svg>`;
}
