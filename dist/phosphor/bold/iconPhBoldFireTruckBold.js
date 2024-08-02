export const iconPhBoldFireTruckBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M255.14,115.54l-14-35A19.9,19.9,0,0,0,222.58,68H204V64a12,12,0,0,0-24,0v94.06A36.23,36.23,0,0,0,158.06,180H113.94a36,36,0,0,0-67.88,0H36V144a12,12,0,0,0-24,0v40a20,20,0,0,0,20,20H46.06a36,36,0,0,0,67.88,0h44.12a36,36,0,0,0,67.88,0H236a20,20,0,0,0,20-20V120A12,12,0,0,0,255.14,115.54ZM219.88,92l6.4,16H204V92ZM80,204a12,12,0,1,1,12-12A12,12,0,0,1,80,204Zm112,0a12,12,0,1,1,12-12A12,12,0,0,1,192,204Zm33.94-24A36.23,36.23,0,0,0,204,158.06V132h28v48ZM24,92a12,12,0,0,0,0,24H152a12,12,0,0,0,0-24H140V76h12a12,12,0,0,0,0-24H24a12,12,0,0,0,0,24H36V92Zm92,0H100V76h16ZM60,76H76V92H60Z"/></svg>`;
}
