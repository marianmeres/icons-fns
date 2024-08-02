export const iconPhLightTrafficSign = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M241.74,117.71,138.29,14.26a14.56,14.56,0,0,0-20.58,0L14.26,117.71a14.56,14.56,0,0,0,0,20.58L117.71,241.74h0a14.56,14.56,0,0,0,20.58,0L241.74,138.29a14.56,14.56,0,0,0,0-20.58Zm-8.49,12.1L129.81,233.25a2.56,2.56,0,0,1-3.62,0h0L22.75,129.81a2.56,2.56,0,0,1,0-3.62L126.19,22.75a2.56,2.56,0,0,1,3.62,0L233.25,126.19a2.56,2.56,0,0,1,0,3.62Zm-61-14a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.48-8.48L153.51,126H112a18,18,0,0,0-18,18v8a6,6,0,0,1-12,0v-8a30,30,0,0,1,30-30h41.51l-13.75-13.76a6,6,0,0,1,8.48-8.48Z"/></svg>`;
}
