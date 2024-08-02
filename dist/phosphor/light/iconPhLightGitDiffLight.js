export const iconPhLightGitDiffLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M112,154a6,6,0,0,0-6,6v33.52L64.93,152.44A9.93,9.93,0,0,1,62,145.37v-52a30,30,0,1,0-12,0v52a21.88,21.88,0,0,0,6.44,15.56L97.52,202H64a6,6,0,0,0,0,12h48a6,6,0,0,0,6-6V160A6,6,0,0,0,112,154ZM38,64A18,18,0,1,1,56,82,18,18,0,0,1,38,64Zm168,98.6v-52a21.88,21.88,0,0,0-6.44-15.56L158.48,54H192a6,6,0,0,0,0-12H144a6,6,0,0,0-6,6V96a6,6,0,0,0,12,0V62.48l41.07,41.08a9.93,9.93,0,0,1,2.93,7.07v52a30,30,0,1,0,12,0ZM200,210a18,18,0,1,1,18-18A18,18,0,0,1,200,210Z"/></svg>`;
}
