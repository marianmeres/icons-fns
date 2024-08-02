export const iconPhBoldGoogleChromeLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,24a83.89,83.89,0,0,1,65.9,32H128a52.05,52.05,0,0,0-46.15,28.07L64.18,73.47A83.82,83.82,0,0,1,128,44Zm28,84a28,28,0,1,1-28-28A28,28,0,0,1,156,128ZM44,128a83.41,83.41,0,0,1,6-31.11L83,154c.06.11.14.2.2.3A52,52,0,0,0,128,180q1.19,0,2.34-.06l-17.68,30.63A84.12,84.12,0,0,1,44,128Zm96.05,83.12L173,154c.09-.15.16-.3.24-.46A51.81,51.81,0,0,0,171.78,100h35.4a83.95,83.95,0,0,1-67.13,111.12Z"/></svg>`;
}
