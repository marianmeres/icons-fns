export const iconPhBoldBookBookmarkBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,20H72A36,36,0,0,0,36,56V224a12,12,0,0,0,12,12H192a12,12,0,0,0,0-24H60v-4a12,12,0,0,1,12-12H208a12,12,0,0,0,12-12V32A12,12,0,0,0,208,20ZM120,44h36v59l-10.51-8.41a12,12,0,0,0-15,0L120,103Zm76,128H72a35.59,35.59,0,0,0-12,2.06V56A12,12,0,0,1,72,44H96v84a12,12,0,0,0,19.5,9.37l22.49-18,22.51,18A12,12,0,0,0,180,128V44h16Z"/></svg>`;
}
