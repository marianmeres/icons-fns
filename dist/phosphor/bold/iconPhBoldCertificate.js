export const iconPhBoldCertificate = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,140a12,12,0,0,1-12,12H72a12,12,0,0,1,0-24h44A12,12,0,0,1,128,140ZM116,88H72a12,12,0,0,0,0,24h44a12,12,0,0,0,0-24Zm120,79.14V228a12,12,0,0,1-17.95,10.42L196,225.82,174,238.42A12,12,0,0,1,156,228V204H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216a20,20,0,0,1,20,20V88.86a55.87,55.87,0,0,1,0,78.28ZM196,160a32,32,0,1,0-32-32A32,32,0,0,0,196,160Zm-40,20V167.14a56,56,0,0,1,56-92.8V60H44V180Zm56,27.32V181.66a55.87,55.87,0,0,1-32,0v25.66l10.05-5.74a12,12,0,0,1,11.9,0Z"/></svg>`;
}
