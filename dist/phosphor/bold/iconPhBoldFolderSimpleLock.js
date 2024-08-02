export const iconPhBoldFolderSimpleLock = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M236,88v4a12,12,0,0,1-24,0H130.67a20.12,20.12,0,0,1-12-4L92,68H44V196h60a12,12,0,0,1,0,24H40a20,20,0,0,1-20-20V64A20,20,0,0,1,40,44H93.33a20.12,20.12,0,0,1,12,4L132,68h84A20,20,0,0,1,236,88Zm0,76v44a12,12,0,0,1-12,12H152a12,12,0,0,1-12-12V164a12,12,0,0,1,12-12h4v-4a32,32,0,0,1,64,0v4h4A12,12,0,0,1,236,164Zm-56-12h16v-4a8,8,0,0,0-16,0Zm32,24H164v20h48Z"/></svg>`;
}
