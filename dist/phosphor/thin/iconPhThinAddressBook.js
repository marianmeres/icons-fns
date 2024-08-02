export const iconPhThinAddressBook = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M154.7,142.75a36,36,0,1,0-37.4,0A63.61,63.61,0,0,0,84.8,165.6a4,4,0,0,0,6.4,4.8,56,56,0,0,1,89.6,0,4,4,0,0,0,6.4-4.8A63.65,63.65,0,0,0,154.7,142.75ZM108,112a28,28,0,1,1,28,28A28,28,0,0,1,108,112ZM208,28H64A12,12,0,0,0,52,40V68H32a4,4,0,0,0,0,8H52v48H32a4,4,0,0,0,0,8H52v48H32a4,4,0,0,0,0,8H52v28a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V40A12,12,0,0,0,208,28Zm4,188a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z"/></svg>`;
}
