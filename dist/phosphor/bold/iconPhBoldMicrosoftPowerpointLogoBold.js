export const iconPhBoldMicrosoftPowerpointLogoBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M94,88H76a12,12,0,0,0-12,12v52a12,12,0,0,0,24,0v-4h6a30,30,0,0,0,0-60Zm0,36H88V112h6a6,6,0,0,1,0,12ZM136,20A108.16,108.16,0,0,0,59.27,52H40A20,20,0,0,0,20,72V180a20,20,0,0,0,20,20H55.5A108,108,0,1,0,136,20Zm0,24a84.12,84.12,0,0,1,83.13,72H164V72a20,20,0,0,0-20-20H100.27A83.88,83.88,0,0,1,136,44ZM44,76h96V176H44Zm92,136a83.67,83.67,0,0,1-43.32-12H144a20,20,0,0,0,20-20V140h55.13A84.12,84.12,0,0,1,136,212Z"/></svg>`;
}
