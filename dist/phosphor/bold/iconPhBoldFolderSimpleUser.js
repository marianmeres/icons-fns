export const iconPhBoldFolderSimpleUser = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220.51,197.94a36,36,0,1,0-57,0,43.75,43.75,0,0,0-15.08,23,12,12,0,0,0,8.52,14.67A11.77,11.77,0,0,0,160,236a12,12,0,0,0,11.59-8.92C174,218.2,182.35,212,192,212s18,6.2,20.4,15.08a12,12,0,0,0,23.19-6.17A43.7,43.7,0,0,0,220.51,197.94ZM192,164a12,12,0,1,1-12,12A12,12,0,0,1,192,164Zm44-76v20a12,12,0,0,1-24,0V92H130.67a20.1,20.1,0,0,1-12-4L92,68H44V196h68a12,12,0,0,1,0,24H40a20,20,0,0,1-20-20V64A20,20,0,0,1,40,44H93.33a20.12,20.12,0,0,1,12,4L132,68h84A20,20,0,0,1,236,88Z"/></svg>`;
}
