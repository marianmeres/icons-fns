export const iconPhBoldHoodieBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M244.64,118.31l-54.27-81.4A20,20,0,0,0,173.73,28H82.27a20,20,0,0,0-16.64,8.91l-54.27,81.4a20,20,0,0,0-2.65,16.36l21.43,78.59A20,20,0,0,0,49.43,228H76a20,20,0,0,0,20-20V196h64v12a20,20,0,0,0,20,20h26.57a20,20,0,0,0,19.29-14.74l21.43-78.59A20,20,0,0,0,244.64,118.31ZM84,172V70.64l12,7.5V136a12,12,0,0,0,24,0V93.15l1.64,1a12,12,0,0,0,12.72,0l1.64-1V128a12,12,0,0,0,24,0V78.14l12-7.5V172ZM128,69.85,99.46,52h57.08ZM52.49,204,32.34,130.11,60,88.62V176a20,20,0,0,0,12,18.32V204Zm151,0H184v-9.68A20,20,0,0,0,196,176V88.62l27.66,41.49Z"/></svg>`;
}
