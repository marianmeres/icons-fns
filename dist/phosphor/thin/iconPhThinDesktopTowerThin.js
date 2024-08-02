export const iconPhThinDesktopTowerThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M212,72a4,4,0,0,1-4,4H176a4,4,0,0,1,0-8h32A4,4,0,0,1,212,72Zm-4,28H176a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8Zm36-52V208a12,12,0,0,1-12,12H152a12,12,0,0,1-12-12V188H92v24h20a4,4,0,0,1,0,8H64a4,4,0,0,1,0-8H84V188H32a20,20,0,0,1-20-20V96A20,20,0,0,1,32,76H140V48a12,12,0,0,1,12-12h80A12,12,0,0,1,244,48ZM140,180V84H32A12,12,0,0,0,20,96v72a12,12,0,0,0,12,12ZM236,48a4,4,0,0,0-4-4H152a4,4,0,0,0-4,4V208a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4ZM192,172a8,8,0,1,0,8,8A8,8,0,0,0,192,172Z"/></svg>`;
}
