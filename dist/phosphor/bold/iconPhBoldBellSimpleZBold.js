export const iconPhBoldBellSimpleZBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M156,140a12,12,0,0,1-12,12H112a12,12,0,0,1-10-18.66L121.58,104H112a12,12,0,1,1,0-24h32a12,12,0,0,1,10,18.66L134.42,128H144A12,12,0,0,1,156,140Zm69.33,46A19.77,19.77,0,0,1,208,196H48a19.77,19.77,0,0,1-17.31-10,20.08,20.08,0,0,1,.05-20.06C39.39,151,44,129.58,44,104a84,84,0,0,1,168,0c0,25.57,4.59,47,13.27,61.93A20.08,20.08,0,0,1,225.34,186Zm-24-14C192.49,154,188,131.13,188,104a60,60,0,0,0-120,0c0,27.14-4.48,50-13.33,68ZM160,212H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24Z"/></svg>`;
}
