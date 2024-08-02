export const iconPhBoldPopcorn = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232.28,71.32a12,12,0,0,0-7-3.25,48,48,0,0,0-55.19-31,48,48,0,0,0-84.24,0,48,48,0,0,0-55.19,31A12,12,0,0,0,20.32,82.75L50.87,212.58A19.92,19.92,0,0,0,70.34,228H185.66a19.92,19.92,0,0,0,19.47-15.42L235.68,82.75A12,12,0,0,0,232.28,71.32ZM76,60a23.68,23.68,0,0,1,11.23,2.79,12,12,0,0,0,17.35-8,24,24,0,0,1,46.84,0,12,12,0,0,0,17.35,8A23.68,23.68,0,0,1,180,60a24,24,0,0,1,21.78,13.87l-33.13,9.46L135.43,70.05a19.89,19.89,0,0,0-14.86,0L87.35,83.33,54.22,73.87A24,24,0,0,1,76,60Zm25.13,43.67L128,92.92l26.87,10.75L141.49,204h-27ZM48.36,97.16l28.78,8.22L90.29,204H73.5ZM182.5,204H165.71l13.15-98.62,28.78-8.22Z"/></svg>`;
}