export const iconPhFillBluetoothSlashFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M221.38,221.92a8,8,0,0,1-11.3-.54l-26.45-29.1L132.8,230.4a8,8,0,0,1-8.89.47,8.29,8.29,0,0,1-3.91-7.18V144L68.8,182.4a8,8,0,0,1-11.16-1.55,8.26,8.26,0,0,1,1.81-11.43l61.47-46.11L50.08,45.38A8,8,0,0,1,61.92,34.62l160,176A8,8,0,0,1,221.38,221.92ZM155,113.22a4,4,0,0,0,5.36.51L196.8,86.4a8,8,0,0,0,0-12.8l-64-48a8,8,0,0,0-10,.29A8.25,8.25,0,0,0,120,32.24V73.18a4,4,0,0,0,1,2.69Z"/></svg>`;
}
