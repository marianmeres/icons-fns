export const iconPhLightBluetoothSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220.44,212,60.44,36A6,6,0,0,0,51.56,44l72.32,79.55L60.4,171.2a6,6,0,0,0,7.2,9.6L122,140v84a6,6,0,0,0,9.6,4.8l52.28-39.21L211.56,220a6,6,0,0,0,8.88-8.08ZM134,212V140l15.09,11.31,26.68,29.36ZM122,71.63V32a6,6,0,0,1,9.6-4.8l64,48a6,6,0,0,1,0,9.6L162.07,110a6,6,0,0,1-7.2-9.6L182,80,134,44V71.63a6,6,0,0,1-12,0Z"/></svg>`;
}
