export const iconPhThinTipJarThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M180,52.23V32a12,12,0,0,0-12-12H88A12,12,0,0,0,76,32V52.23A36,36,0,0,0,44,88V200a36,36,0,0,0,36,36h96a36,36,0,0,0,36-36V88A36,36,0,0,0,180,52.23ZM148,28h20a4,4,0,0,1,4,4V52H148Zm-32,0h24V52H116ZM84,32a4,4,0,0,1,4-4h20V52H84ZM204,200a28,28,0,0,1-28,28H80a28,28,0,0,1-28-28V88A28,28,0,0,1,80,60h96a28,28,0,0,1,28,28Zm-48-40a20,20,0,0,1-20,20h-4v12a4,4,0,0,1-8,0V180H112a4,4,0,0,1,0-8h24a12,12,0,0,0,0-24H120a20,20,0,0,1,0-40h4V96a4,4,0,0,1,8,0v12h12a4,4,0,0,1,0,8H120a12,12,0,0,0,0,24h16A20,20,0,0,1,156,160Z"/></svg>`;
}
