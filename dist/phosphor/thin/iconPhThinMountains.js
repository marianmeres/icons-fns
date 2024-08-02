export const iconPhThinMountains = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M164,76a24,24,0,1,0-24-24A24,24,0,0,0,164,76Zm0-40a16,16,0,1,1-16,16A16,16,0,0,1,164,36Zm87.44,162-54.56-92.08A11.91,11.91,0,0,0,186.55,100h0a11.89,11.89,0,0,0-10.32,5.88l-29.61,50L98.34,73.91a12,12,0,0,0-20.68,0L4.55,198A4,4,0,0,0,8,204H248a4,4,0,0,0,3.44-6ZM84.55,78a4,4,0,0,1,6.9,0l27.12,46H57.43ZM15,196l37.71-64h70.58L161,196Zm155.29,0-19-32.29L183.11,110a4,4,0,0,1,6.88,0l51,86Z"/></svg>`;
}
