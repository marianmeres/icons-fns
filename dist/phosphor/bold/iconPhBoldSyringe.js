export const iconPhBoldSyringe = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240.49,63.51l-48-48a12,12,0,0,0-17,17L191,48,168,71,136.49,39.51a12,12,0,1,0-17,17L123,60,41.86,141.17A19.86,19.86,0,0,0,36,155.31V203L15.51,223.51a12,12,0,0,0,17,17L53,220h47.72a19.86,19.86,0,0,0,14.14-5.86L196,133l3.51,3.52a12,12,0,0,0,17-17L185,88l23-23,15.51,15.52a12,12,0,1,0,17-17ZM99,196H60V157l14-14,17.51,17.52a12,12,0,0,0,17-17L91,126l11-11,17.51,17.52a12,12,0,0,0,17-17L119,98l21-21,39,39Z"/></svg>`;
}
