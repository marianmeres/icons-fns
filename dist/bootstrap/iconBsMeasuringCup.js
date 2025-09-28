export const iconBsMeasuringCup = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}fill="currentColor" viewBox="0 0 16 16"><path d="M.038.309A.5.5 0 0 1 .5 0H14a2 2 0 0 1 2 2v5.959a1.041 1.041 0 0 1-2.069.17l-.849-5.094A.041.041 0 0 0 13 3.04V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3.743a2.5 2.5 0 0 0-.732-1.768L.146.854A.5.5 0 0 1 .038.309M1.708 1l.267.268A3.5 3.5 0 0 1 3 3.743V14a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3.041a1.041 1.041 0 0 1 2.069-.17l.849 5.094A.041.041 0 0 0 15 7.96V2a1 1 0 0 0-1-1zM4 3h3.5a.5.5 0 1 1 0 1H4zm0 2h1.5a.5.5 0 1 1 0 1H4zm0 2h3.5a.5.5 0 1 1 0 1H4zm0 2h1.5a.5.5 0 1 1 0 1H4zm0 2h3.5a.5.5 0 0 1 0 1H4zm0 2h1.5a.5.5 0 0 1 0 1H4z"/></svg>`;
}
