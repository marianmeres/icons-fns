export const iconPhThinMedalMilitary = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M207,44H49A13,13,0,0,0,36,57v49.21A13,13,0,0,0,43.62,118l70.72,32.14a44,44,0,1,0,27.32,0L212.38,118A13,13,0,0,0,220,106.21V57A13,13,0,0,0,207,44Zm-43,8v79.24l-36,16.37L92,131.24V52ZM44,106.21V57a5,5,0,0,1,5-5H84v75.61L46.93,110.76A5,5,0,0,1,44,106.21ZM164,192a36,36,0,1,1-36-36A36,36,0,0,1,164,192Zm48-85.79a5,5,0,0,1-2.93,4.55L172,127.61V52h35a5,5,0,0,1,5,5Z"/></svg>`;
}
