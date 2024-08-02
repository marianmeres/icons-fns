export const iconPhThinDetectiveThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,116H218L169.35,49a12,12,0,0,0-19-.51L137.45,63.38l-.1.12a12,12,0,0,1-18.7,0l-.1-.12L105.66,48.44a12,12,0,0,0-19,.51L38,116H8a4,4,0,0,0,0,8H248a4,4,0,0,0,0-8ZM93.13,53.65A4,4,0,0,1,96.26,52a4,4,0,0,1,3.2,1.5l.1.12,12.89,14.94A19.86,19.86,0,0,0,128,76h0a19.86,19.86,0,0,0,15.55-7.44l12.89-14.94.1-.12a4.06,4.06,0,0,1,3.2-1.5,4,4,0,0,1,3.13,1.65L208.15,116H47.85ZM180,148a32,32,0,0,0-32,32H108a32,32,0,1,0-1,8h42a32,32,0,1,0,31-40ZM76,204a24,24,0,1,1,24-24A24,24,0,0,1,76,204Zm104,0a24,24,0,1,1,24-24A24,24,0,0,1,180,204Z"/></svg>`;
}
