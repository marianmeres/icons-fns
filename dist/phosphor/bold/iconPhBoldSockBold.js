export const iconPhBoldSockBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192,12H104A20,20,0,0,0,84,32v75L46.43,144.6a62.91,62.91,0,1,0,89,89l68.4-68.4a27.81,27.81,0,0,0,8.2-19.8V32A20,20,0,0,0,192,12Zm-4,24V52H108V36ZM118.43,216.6a38.91,38.91,0,1,1-55-55l41.09-41.08A12,12,0,0,0,108,112V76h80v25.21A60.09,60.09,0,0,0,140,160a59.37,59.37,0,0,0,7,28.07Zm68.4-68.4-21.51,21.51A36.06,36.06,0,0,1,188,126.06v19.31A4,4,0,0,1,186.83,148.2Z"/></svg>`;
}
