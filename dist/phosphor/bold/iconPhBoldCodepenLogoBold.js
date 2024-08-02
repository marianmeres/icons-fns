export const iconPhBoldCodepenLogoBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M237.68,85.43l-104-56a12,12,0,0,0-11.38,0l-104,56A12,12,0,0,0,12,96v64a12,12,0,0,0,6.32,10.57l104,56a12,12,0,0,0,11.38,0l104-56A12,12,0,0,0,244,160V96A12,12,0,0,0,237.68,85.43ZM220,139.91,197.88,128,220,116.09Zm-47.43-25.54L140,96.83V60.09L206.69,96Zm-44.57,24L108.74,128,128,117.63,147.26,128ZM116,60.09V96.83L83.43,114.37,49.31,96Zm-80,56L58.12,128,36,139.91Zm47.43,25.54L116,159.17v36.74L49.31,160ZM140,195.91V159.17l32.57-17.54L206.69,160Z"/></svg>`;
}
