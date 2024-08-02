export const iconPhThinNetworkXThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,116H132V84h12a12,12,0,0,0,12-12V40a12,12,0,0,0-12-12H112a12,12,0,0,0-12,12V72a12,12,0,0,0,12,12h12v32H24a4,4,0,0,0,0,8H60v40H48a12,12,0,0,0-12,12v32a12,12,0,0,0,12,12H80a12,12,0,0,0,12-12V176a12,12,0,0,0-12-12H68V124H188v20a4,4,0,0,0,8,0V124h36a4,4,0,0,0,0-8ZM108,72V40a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4V72a4,4,0,0,1-4,4H112A4,4,0,0,1,108,72ZM84,176v32a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V176a4,4,0,0,1,4-4H80A4,4,0,0,1,84,176Zm134.83-5.17L197.66,192l21.17,21.17a4,4,0,0,1-5.66,5.66L192,197.66l-21.17,21.17a4,4,0,0,1-5.66-5.66L186.34,192l-21.17-21.17a4,4,0,0,1,5.66-5.66L192,186.34l21.17-21.17a4,4,0,0,1,5.66,5.66Z"/></svg>`;
}
