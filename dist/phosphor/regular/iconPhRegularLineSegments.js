export const iconPhRegularLineSegments = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M238.64,33.36a32,32,0,0,0-45.26,0h0a32,32,0,0,0,0,45.26c.29.29.6.57.9.85l-26.63,49.46a32.19,32.19,0,0,0-23.9,3.5l-20.18-20.18a32,32,0,0,0-50.2-38.89h0a32,32,0,0,0,0,45.26c.29.29.59.57.89.85L47.63,168.94a32,32,0,0,0-30.27,8.44h0a32,32,0,1,0,45.26,0c-.29-.29-.6-.57-.9-.85l26.63-49.46A32.4,32.4,0,0,0,96,128a32,32,0,0,0,16.25-4.41l20.18,20.18a32,32,0,1,0,50.2-6.38c-.29-.29-.59-.57-.89-.85l26.63-49.46A32.33,32.33,0,0,0,216,88a32,32,0,0,0,22.63-54.62ZM51.3,211.33a16,16,0,0,1-22.63-22.64h0A16,16,0,1,1,51.3,211.33Zm33.38-104a16,16,0,0,1,0-22.63h0a16,16,0,1,1,0,22.63Zm86.64,64a16,16,0,0,1-22.63-22.63h0a16,16,0,0,1,22.63,22.63Zm56-104A16,16,0,1,1,204.7,44.67h0a16,16,0,0,1,22.63,22.64Z"/></svg>`;
}
