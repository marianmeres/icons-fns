export const iconPhThinCraneThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M226.06,20.57a4,4,0,0,0-3.94-.1L103,84H32A12,12,0,0,0,20,96V200a12,12,0,0,0,12,12h88a12,12,0,0,0,12-12V168a4.05,4.05,0,0,0-.17-1.15L108.77,90,220,30.67V160a4,4,0,0,1-4,4H200a4,4,0,0,1-4-4v-8a4,4,0,0,0-8,0v8a12,12,0,0,0,12,12h16a12,12,0,0,0,12-12V24A4,4,0,0,0,226.06,20.57ZM101,92l21.6,72H60V92ZM32,92H52v72H28V96A4,4,0,0,1,32,92Zm88,112H32a4,4,0,0,1-4-4V172h96v28A4,4,0,0,1,120,204Z"/></svg>`;
}
