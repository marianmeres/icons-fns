export const iconPhBoldHighHeel = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M227.93,152.31l-45.82-11.17L72.49,31.51a12,12,0,0,0-17.34.39C32.48,56.68,20,88,20,120v72a20,20,0,0,0,20,20H72a20,20,0,0,0,20-20V150.29l1.07.71a108.44,108.44,0,0,1,39.11,48.6A19.9,19.9,0,0,0,150.72,212H236a20,20,0,0,0,20-20v-4.73A35.68,35.68,0,0,0,227.93,152.31ZM68,188H44V132.67a106.69,106.69,0,0,1,24,5.51Zm164,0H153.35a132.44,132.44,0,0,0-46.67-56.77,131.08,131.08,0,0,0-62-22.63A106.69,106.69,0,0,1,64.87,57.84L167.51,160.49a12.06,12.06,0,0,0,5.65,3.17l49.2,12,.25.06a11.84,11.84,0,0,1,9.39,11.6Z"/></svg>`;
}
