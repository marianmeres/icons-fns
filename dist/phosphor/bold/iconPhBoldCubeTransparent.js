export const iconPhBoldCubeTransparent = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224.5,95.53v0l-64-64A12,12,0,0,0,152,28H40A12,12,0,0,0,28,40V152a11.94,11.94,0,0,0,3,7.93c.15.18.31.36.5.56l64,64h0A12,12,0,0,0,104,228H216a12,12,0,0,0,12-12V104A12,12,0,0,0,224.5,95.53ZM164,69l23,23H164ZM92,187,69,164H92Zm0-47H52V69l40,40ZM69,52h71V92H109Zm71,64v24H116V116Zm-24,88V164h31l40,40Zm88-17-40-40V116h40Z"/></svg>`;
}
