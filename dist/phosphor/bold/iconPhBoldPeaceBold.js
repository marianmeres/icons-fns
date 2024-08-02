export const iconPhBoldPeaceBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm84,108a83.43,83.43,0,0,1-9,37.84l-63-44.09V44.87A84.12,84.12,0,0,1,212,128ZM116,44.87v76.88L53,165.84a83.93,83.93,0,0,1,63-121ZM66.83,185.48,116,151.05v60.08A83.86,83.86,0,0,1,66.83,185.48ZM140,211.13V151.05l49.17,34.43A83.86,83.86,0,0,1,140,211.13Z"/></svg>`;
}
