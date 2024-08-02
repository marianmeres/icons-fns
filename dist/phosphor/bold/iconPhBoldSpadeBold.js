export const iconPhBoldSpadeBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M133.37,13.27a12,12,0,0,0-10.74,0C118.44,15.36,20,65.4,20,136a60,60,0,0,0,69.51,59.25l-5.28,26.4A12,12,0,0,0,96,236h64a12,12,0,0,0,11.77-14.35l-5.28-26.4A60,60,0,0,0,236,136C236,65.4,137.56,15.36,133.37,13.27ZM176,172a35.88,35.88,0,0,1-19.09-5.47,12,12,0,0,0-18.14,12.52L145.36,212H110.64l6.59-32.95a12,12,0,0,0-18.14-12.52A36,36,0,0,1,44,136c0-28.29,23.57-53.95,43.34-70.49A274.68,274.68,0,0,1,128,37.63a274.16,274.16,0,0,1,40.66,27.88C188.43,82.05,212,107.71,212,136A36,36,0,0,1,176,172Z"/></svg>`;
}
