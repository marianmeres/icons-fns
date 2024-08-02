export const iconPhBoldPhoneDisconnect = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M234.39,87.29c-57.67-57.72-155.11-57.72-212.78,0-21.45,21.47-23.52,53.13-5,77a20,20,0,0,0,22.92,6.37L88.4,153.29l.45-.16A20,20,0,0,0,101,138.47l5.44-27.24a72.48,72.48,0,0,1,42.76-.09L155,138.62a20,20,0,0,0,12.14,14.49l.45.17,48.94,17.37a20,20,0,0,0,22.91-6.37C257.91,140.42,255.84,108.76,234.39,87.29Zm-12.23,59.9L178,131.5,172.24,104a20,20,0,0,0-13-14.8,96.49,96.49,0,0,0-62.94.14A20,20,0,0,0,83.4,104.24L78,131.53,33.84,147.19c-9.16-13.85-7.41-30.77,4.73-42.92C62.81,80,95.41,67.88,128,67.88S193.19,80,217.43,104.27C229.57,116.42,231.32,133.35,222.16,147.19ZM228,200a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,200Z"/></svg>`;
}
