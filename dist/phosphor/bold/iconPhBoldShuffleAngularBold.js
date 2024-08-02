export const iconPhBoldShuffleAngularBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240.49,175.51a12,12,0,0,1,0,17l-24,24a12,12,0,0,1-17-17L203,196H168a12,12,0,0,1-9.76-5L81.82,84H32a12,12,0,0,1,0-24H88a12,12,0,0,1,9.76,5l76.42,107H203l-3.52-3.51a12,12,0,0,1,17-17ZM110.4,152.64a12,12,0,0,0-16.74,2.79L81.82,172H32a12,12,0,0,0,0,24H88a12,12,0,0,0,9.76-5l15.43-21.59A12,12,0,0,0,110.4,152.64Zm35.2-49.28a12,12,0,0,0,16.74-2.79L174.18,84H203l-3.52,3.51a12,12,0,0,0,17,17l24-24a12,12,0,0,0,0-17l-24-24a12,12,0,0,0-17,17L203,60H168a12,12,0,0,0-9.76,5l-15.43,21.6A12,12,0,0,0,145.6,103.36Z"/></svg>`;
}
