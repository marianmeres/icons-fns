export const iconPhThinAirplaneTilt = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M180.67,113.1l31.05-29.23.09-.08a28,28,0,0,0-39.6-39.6l-.08.09L142.9,75.33,57.37,44.23a4,4,0,0,0-4.2.93l-24,24a4,4,0,0,0,.61,6.16l68,45.29L78.35,140H56a4,4,0,0,0-2.83,1.18l-24,24a4,4,0,0,0,1.34,6.54l38.42,15.36,15.34,38.37,0,.09a4,4,0,0,0,6.59,1.23l23.93-23.93A4,4,0,0,0,116,200V177.65l19.38-19.38,45.29,67.95a4,4,0,0,0,6.16.61l24-24a4,4,0,0,0,.93-4.2Zm4,104.62-45.29-67.94A4,4,0,0,0,136.4,148l-.39,0a4,4,0,0,0-2.83,1.18l-24,24A4,4,0,0,0,108,176v22.34L89.47,216.88,75.72,182.51a4,4,0,0,0-2.23-2.23L39.12,166.53,57.66,148H80a4,4,0,0,0,2.83-1.17l24-24a4,4,0,0,0-.61-6.16L38.28,71.37,57,52.62l85.61,31.13a4,4,0,0,0,4.28-1l31-32.93A20,20,0,0,1,206.2,78.09l-32.93,31a4,4,0,0,0-1,4.28L203.38,199Z"/></svg>`;
}
