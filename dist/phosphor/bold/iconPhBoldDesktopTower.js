export const iconPhBoldDesktopTower = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M168,76a12,12,0,0,1,12-12h24a12,12,0,0,1,0,24H180A12,12,0,0,1,168,76Zm12,48h24a12,12,0,0,0,0-24H180a12,12,0,0,0,0,24Zm72-76V208a20,20,0,0,1-20,20H152a20,20,0,0,1-20-20V192H100v12h8a12,12,0,0,1,0,24H68a12,12,0,0,1,0-24h8V192H32A28,28,0,0,1,4,164V96A28,28,0,0,1,32,68H132V48a20,20,0,0,1,20-20h80A20,20,0,0,1,252,48ZM132,168V92H32a4,4,0,0,0-4,4v68a4,4,0,0,0,4,4ZM228,52H156V204h72ZM192,160a16,16,0,1,0,16,16A16,16,0,0,0,192,160Z"/></svg>`;
}
