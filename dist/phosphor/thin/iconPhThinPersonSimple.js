export const iconPhThinPersonSimple = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M227.43,130.06a4,4,0,0,1-5.49,1.37c-.38-.23-37.87-22.29-89.94-23.38v42.43l63,70.86a4,4,0,0,1-6,5.32L128,158,67,226.66a4,4,0,0,1-6-5.32l63-70.86V108.05c-52.07,1.09-89.56,23.15-89.94,23.38a4,4,0,0,1-4.12-6.86c1.67-1,41.6-24.57,98.06-24.57s96.39,23.57,98.06,24.57A4,4,0,0,1,227.43,130.06ZM100,48a28,28,0,1,1,28,28A28,28,0,0,1,100,48Zm8,0a20,20,0,1,0,20-20A20,20,0,0,0,108,48Z"/></svg>`;
}
