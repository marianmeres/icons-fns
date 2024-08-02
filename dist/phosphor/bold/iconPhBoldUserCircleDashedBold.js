export const iconPhBoldUserCircleDashedBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M92.38,38.05A12,12,0,0,1,101,23.42a108,108,0,0,1,54,0,12,12,0,1,1-6,23.23,84,84,0,0,0-42,0A12,12,0,0,1,92.38,38.05ZM32.29,113.87a12.2,12.2,0,0,0,3.2.43,12,12,0,0,0,11.56-8.8,84,84,0,0,1,21-36.35A12,12,0,1,0,50.94,52.34a108.1,108.1,0,0,0-27,46.76A12,12,0,0,0,32.29,113.87ZM149,209.35a84,84,0,0,1-42,0,12,12,0,1,0-6,23.23,108,108,0,0,0,54,0,12,12,0,1,0-6-23.23Zm59.95-103.83a12,12,0,0,0,23.12-6.42,108,108,0,0,0-27-46.78A12,12,0,1,0,188,69.15,84,84,0,0,1,208.94,105.52Zm23.15,51.39a107.86,107.86,0,0,1-31.86,51.38,12,12,0,0,1-18.72-3.48,60,60,0,0,0-107,0,12,12,0,0,1-8.5,6.36,12.48,12.48,0,0,1-2.19.2,12,12,0,0,1-8-3.08A107.85,107.85,0,0,1,23.91,156.9,12,12,0,0,1,47,150.49,83.58,83.58,0,0,0,62,180a83.46,83.46,0,0,1,29-23.47,52,52,0,1,1,74,0A83.59,83.59,0,0,1,194,180a83.73,83.73,0,0,0,15-29.49,12,12,0,0,1,23.13,6.42ZM128,148a28,28,0,1,0-28-28A28,28,0,0,0,128,148Z"/></svg>`;
}
