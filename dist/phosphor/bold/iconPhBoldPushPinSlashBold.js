export const iconPhBoldPushPinSlashBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M56.88,31.93A12,12,0,1,0,39.12,48.07L60,71A76,76,0,0,0,35.46,84.51a20,20,0,0,0-1.6,29.73l45.46,45.47-39.8,39.8a12,12,0,0,0,17,17l39.8-39.81,45.47,45.46A20,20,0,0,0,155.9,228c.47,0,.94,0,1.41-.05A20,20,0,0,0,171.87,220a97.47,97.47,0,0,0,9.54-15.46l17.72,19.49a12,12,0,1,0,17.76-16.14Zm98.49,169.88L54.08,100.52C62,95,70.31,92.12,78.91,91.83l84.51,93A62,62,0,0,1,155.37,201.81Zm82.78-95-39,39.11a12,12,0,1,1-17-16.95l36.19-36.3-55-55L130.59,70.5a12,12,0,0,1-17-16.94l35.57-35.69a20,20,0,0,1,28.3,0l60.69,60.68A20,20,0,0,1,238.15,106.83Z"/></svg>`;
}