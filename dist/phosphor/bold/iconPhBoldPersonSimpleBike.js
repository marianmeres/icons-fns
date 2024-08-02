export const iconPhBoldPersonSimpleBike = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M168,84a32,32,0,1,0-32-32A32,32,0,0,0,168,84Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,168,44Zm36,96a40,40,0,1,0,40,40A40,40,0,0,0,204,140Zm0,56a16,16,0,1,1,16-16A16,16,0,0,1,204,196ZM54,136a42,42,0,1,0,42,42A42,42,0,0,0,54,136Zm0,60a18,18,0,1,1,18-18A18,18,0,0,1,54,196Zm134-68H152a12,12,0,0,1-8.49-3.51L120,101l-15,15,31.52,31.51A12,12,0,0,1,140,156v48a12,12,0,0,1-24,0V161L79.51,124.49a12,12,0,0,1,0-17l32-32a12,12,0,0,1,17,0L157,104h31a12,12,0,0,1,0,24Z"/></svg>`;
}
