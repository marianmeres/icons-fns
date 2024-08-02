export const iconPhBoldGoogleDriveLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M241,141.65,172.59,29.51l-.07-.11a19.85,19.85,0,0,0-17-9.4H100.44a19.85,19.85,0,0,0-17,9.4l-.07.11L15,141.65a20,20,0,0,0-.36,20.46L42,209.92A20,20,0,0,0,59.33,220H196.67A20,20,0,0,0,214,209.92l27.32-47.81A20,20,0,0,0,241,141.65ZM211.88,140H174.79L142,85.33l18.12-30.19ZM54.8,184,43.36,164H66.81Zm40-20h66.4l19.2,32H75.6Zm14.4-24L128,108.66,146.8,140Zm80,24h23.45L201.2,184ZM128,62,117.19,44h21.62ZM95.89,55.14,114,85.33,81.21,140H44.12Z"/></svg>`;
}
