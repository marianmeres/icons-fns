export const iconPhDuotonePlugsConnected = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M185,127,127,185a24,24,0,0,1-33.94,0L71,162.91A24,24,0,0,1,71,129L129,71a24,24,0,0,1,33.94,0L185,93.09A24,24,0,0,1,185,127Z" opacity="0.2"/><path d="M237.66,18.34a8,8,0,0,0-11.32,0l-52.4,52.41-5.37-5.38a32.05,32.05,0,0,0-45.26,0L100,88.69l-6.34-6.35A8,8,0,0,0,82.34,93.66L88.69,100,65.37,123.31a32,32,0,0,0,0,45.26l5.38,5.37-52.41,52.4a8,8,0,0,0,11.32,11.32l52.4-52.41,5.37,5.38a32.06,32.06,0,0,0,45.26,0L156,167.31l6.34,6.35a8,8,0,0,0,11.32-11.32L167.31,156l23.32-23.31a32,32,0,0,0,0-45.26l-5.38-5.37,52.41-52.4A8,8,0,0,0,237.66,18.34Zm-116.29,161a16,16,0,0,1-22.62,0L76.69,157.25a16,16,0,0,1,0-22.62L100,111.31,144.69,156Zm57.94-57.94h0L156,144.69,111.31,100l23.32-23.31a16,16,0,0,1,22.62,0l22.06,22a16,16,0,0,1,0,22.63ZM88.57,35A8,8,0,0,1,103.43,29l8,20A8,8,0,0,1,96.57,55ZM24.57,93A8,8,0,0,1,35,88.57l20,8A8,8,0,0,1,49,111.43l-20-8A8,8,0,0,1,24.57,93ZM231.43,163a8,8,0,0,1-10.4,4.46l-20-8A8,8,0,1,1,207,144.57l20,8A8,8,0,0,1,231.43,163Zm-64,58.06A8,8,0,0,1,152.57,227l-8-20A8,8,0,0,1,159.43,201Z"/></svg>`;
}
