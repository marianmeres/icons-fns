export const iconPhBoldCat = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M223.65,29.53a20,20,0,0,0-21.79,4.34c-.2.2-.39.4-.57.61l-15,17.3a115.34,115.34,0,0,0-116.5,0l-15-17.3c-.18-.21-.37-.41-.57-.61A20,20,0,0,0,20,48v88c0,55.14,48.45,100,108,100s108-44.86,108-100V48A20,20,0,0,0,223.65,29.53ZM212,136c0,38.22-31.35,69.93-72,75.21V197l12.49-12.49a12,12,0,0,0-17-17L128,175l-7.51-7.52a12,12,0,0,0-17,17L116,197v14.24c-40.65-5.28-72-37-72-75.21V58.74L58.54,75.47a12,12,0,0,0,16.21,1.76A86,86,0,0,1,96,65.74V88a12,12,0,0,0,24,0V60.35q4-.35,8-.35t8,.35V88a12,12,0,0,0,24,0V65.74a86.2,86.2,0,0,1,21.25,11.49,12,12,0,0,0,16.21-1.76L212,58.74Zm-112,4a16,16,0,1,1-16-16A16,16,0,0,1,100,140Zm88,0a16,16,0,1,1-16-16A16,16,0,0,1,188,140Z"/></svg>`;
}
