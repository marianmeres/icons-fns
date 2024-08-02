export const iconPhBoldBoxingGloveBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M168,12H120A60.08,60.08,0,0,0,60.13,68H56a36,36,0,0,0-36,36v29.19a20.13,20.13,0,0,0,4.38,12.5,11.46,11.46,0,0,0,.94,1L60,181v35a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V177.68l15.23-53.3a20.07,20.07,0,0,0,.77-5.5V72A60.07,60.07,0,0,0,168,12Zm36,106.32L188.46,172.7A12.28,12.28,0,0,0,188,176v36H84V176a12,12,0,0,0-3.56-8.53L44,131.45V104A12,12,0,0,1,56,92h4v12a12,12,0,0,0,24,0V72a36,36,0,0,1,36-36h48a36,36,0,0,1,36,36ZM166.66,162l-9,6,9,6a12,12,0,1,1-13.32,20L136,182.42,118.66,194a12,12,0,0,1-13.32-20l9-6-9-6a12,12,0,0,1,13.32-20L136,153.58,153.34,142a12,12,0,1,1,13.32,20Z"/></svg>`;
}
