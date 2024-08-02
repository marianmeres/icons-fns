export const iconPhBoldSmileyWink = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM76,108a16,16,0,1,1,16,16A16,16,0,0,1,76,108Zm112,0a12,12,0,0,1-12,12H152a12,12,0,0,1,0-24h24A12,12,0,0,1,188,108Zm-9.61,50c-11,19.06-29.39,30-50.39,30s-39.36-10.93-50.39-30a12,12,0,0,1,20.78-12c3.89,6.73,12.91,18,29.61,18s25.72-11.28,29.61-18a12,12,0,1,1,20.78,12Z"/></svg>`;
}
