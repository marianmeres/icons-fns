export const iconPhDuotoneSplitVertical = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M160,56H96l32-32ZM128,232l32-32H96Z" opacity="0.2"/><path d="M208,144H48a8,8,0,0,0,0,16h72v32H96a8,8,0,0,0-5.66,13.66l32,32a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,160,192H136V160h72a8,8,0,0,0,0-16Zm-80,76.69L115.31,208h25.38ZM48,112H208a8,8,0,0,0,0-16H136V64h24a8,8,0,0,0,5.66-13.66l-32-32a8,8,0,0,0-11.32,0l-32,32A8,8,0,0,0,96,64h24V96H48a8,8,0,0,0,0,16Zm80-76.69L140.69,48H115.31Z"/></svg>`;
}
