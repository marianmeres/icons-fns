export const iconPhBoldVanBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M253.11,104.18,207.54,51.09A19.94,19.94,0,0,0,192.26,44H32A20,20,0,0,0,12,64V176a20,20,0,0,0,20,20H46.06a36,36,0,0,0,67.88,0h40.12a36,36,0,0,0,67.88,0H236a20,20,0,0,0,20-20V112A12.05,12.05,0,0,0,253.11,104.18ZM217.89,100H176V68h14.42ZM104,100V68h48v32ZM80,68v32H36V68Zm0,128a12,12,0,1,1,12-12A12,12,0,0,1,80,196Zm108,0a12,12,0,1,1,12-12A12,12,0,0,1,188,196Zm33.94-24a36,36,0,0,0-67.88,0H113.94a36,36,0,0,0-67.88,0H36V124H232v48Z"/></svg>`;
}
