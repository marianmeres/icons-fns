export const iconPhThinUsb = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M250.22,124.67l-48-32A4,4,0,0,0,196,96v28H68V72a4,4,0,0,1,4-4h36.29a28,28,0,1,0,0-8H72A12,12,0,0,0,60,72v52H8a4,4,0,0,0,0,8H60v52a12,12,0,0,0,12,12h36v12a12,12,0,0,0,12,12h32a12,12,0,0,0,12-12V176a12,12,0,0,0-12-12H120a12,12,0,0,0-12,12v12H72a4,4,0,0,1-4-4V132H196v28a4,4,0,0,0,2.11,3.53,4,4,0,0,0,4.11-.2l48-32a4,4,0,0,0,0-6.66ZM136,44a20,20,0,1,1-20,20A20,20,0,0,1,136,44ZM116,176a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4v32a4,4,0,0,1-4,4H120a4,4,0,0,1-4-4Zm88-23.47V103.47L240.79,128Z"/></svg>`;
}
