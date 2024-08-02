export const iconPhBoldCherries = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M176,68c-1.88,0-3.76.08-5.62.22a95.72,95.72,0,0,0-21.24-24C110,12.6,56.56,19.8,54.3,20.12a12,12,0,0,0-5,21.86C64.52,52.1,72.13,68.45,75.71,85a76,76,0,1,0,67.22,127.43A76,76,0,1,0,176,68Zm-22.76,53.06A76.78,76.78,0,0,0,141,105.59a52.11,52.11,0,0,1,16.14-10,106.78,106.78,0,0,1,5.12,18.9A12,12,0,0,0,153.24,121.06ZM134.19,63a70.79,70.79,0,0,1,11.23,11.46A76.31,76.31,0,0,0,121,91.55,75.37,75.37,0,0,0,100.19,85C97.72,71.05,93,56.65,84.58,44,99.78,45.68,118.75,50.48,134.19,63ZM88,212a52,52,0,0,1-9.53-103.11,173.37,173.37,0,0,1-.75,21.59,12,12,0,0,0-5.09,23.38,56.27,56.27,0,0,0,30.74,0,12,12,0,0,0-1.5-23.36,193.45,193.45,0,0,0,.69-20.41A52,52,0,0,1,88,212Zm88-16a51.92,51.92,0,0,1-19.24-3.68,75.83,75.83,0,0,0,4-54.43,56.36,56.36,0,0,0,30.66,0,12,12,0,0,0-4.79-23.42,136.4,136.4,0,0,0-5.12-22.15A52,52,0,0,1,176,196Z"/></svg>`;
}
