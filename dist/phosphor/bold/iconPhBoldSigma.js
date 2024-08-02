export const iconPhBoldSigma = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M180,72V60H89l48.4,60.5a12,12,0,0,1,0,15L89,196h91V184a12,12,0,0,1,24,0v24a12,12,0,0,1-12,12H64a12,12,0,0,1-9.37-19.5l58-72.5-58-72.5A12,12,0,0,1,64,36H192a12,12,0,0,1,12,12V72a12,12,0,0,1-24,0Z"/></svg>`;
}
