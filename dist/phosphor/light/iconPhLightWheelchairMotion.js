export const iconPhLightWheelchairMotion = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M176,78a30,30,0,1,0-30-30A30,30,0,0,0,176,78Zm0-48a18,18,0,1,1-18,18A18,18,0,0,1,176,30ZM166,168a62,62,0,1,1-62-62,6,6,0,0,1,0,12,50,50,0,1,0,50,50,6,6,0,0,1,12,0Zm38.64-35.8a6,6,0,0,1,1.24,5l-16,80A6,6,0,0,1,184,222a6.08,6.08,0,0,1-1.19-.12,6,6,0,0,1-4.7-7.06L192.68,142H128a6,6,0,0,1-5.2-9l21.07-36.68a82.05,82.05,0,0,0-92.05,8.41,6,6,0,1,1-7.64-9.25,94,94,0,0,1,111.1-6.28,6,6,0,0,1,1.92,8L138.37,130H200A6,6,0,0,1,204.64,132.2Z"/></svg>`;
}
