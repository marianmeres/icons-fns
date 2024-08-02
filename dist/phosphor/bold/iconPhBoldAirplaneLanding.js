export const iconPhBoldAirplaneLanding = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M256,216a12,12,0,0,1-12,12H104a12,12,0,0,1,0-24H244A12,12,0,0,1,256,216Zm-27.24-24.45L52.14,142.09A44.13,44.13,0,0,1,20,99.72V48A20,20,0,0,1,46.32,29l5.48,1.83a12,12,0,0,1,7.49,7.3L69.2,65.59,92,72.09V48a20,20,0,0,1,26.32-19l5.48,1.83a12,12,0,0,1,7.27,6.74l21.75,51.85,59,16.49A44.12,44.12,0,0,1,244,148.32V180a12,12,0,0,1-15.24,11.55ZM220,148.32a20.05,20.05,0,0,0-14.65-19.27L140.77,111a12,12,0,0,1-7.84-6.91L116,63.71V88a12,12,0,0,1-15.29,11.54L56.71,87a12,12,0,0,1-8-7.46L44,66.48V99.72A20.07,20.07,0,0,0,58.61,119L220,164.18Z"/></svg>`;
}
