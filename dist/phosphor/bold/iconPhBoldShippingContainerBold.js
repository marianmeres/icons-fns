export const iconPhBoldShippingContainerBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M237.5,66.8,131.3,36.46a12.07,12.07,0,0,0-5-.34l-105.13,15A20.1,20.1,0,0,0,4,70.94V185.06a20.1,20.1,0,0,0,17.17,19.8l105.13,15a12.15,12.15,0,0,0,1.7.12,12,12,0,0,0,3.3-.46L237.5,189.2A20.09,20.09,0,0,0,252,170V86A20.08,20.08,0,0,0,237.5,66.8ZM92,116H84V66.41l32-4.57V194.16l-32-4.57V140h8a12,12,0,0,0,0-24ZM28,74.41l32-4.57V116H52a12,12,0,0,0,0,24h8v46.16l-32-4.57ZM228,167l-88,25.14V63.91l88,25.14Z"/></svg>`;
}
