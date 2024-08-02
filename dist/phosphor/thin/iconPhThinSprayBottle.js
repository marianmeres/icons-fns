export const iconPhThinSprayBottle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,76a4,4,0,0,0,4-4,52.06,52.06,0,0,0-52-52H80A12,12,0,0,0,68,32V80a28,28,0,0,1-28,28,4,4,0,0,0,0,8A36,36,0,0,0,76,80V76h40v28.62a27.85,27.85,0,0,1-10.51,21.86l-16,12.79A35.8,35.8,0,0,0,76,167.38V224a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V211.47A266.86,266.86,0,0,0,167.09,76ZM76,32a4,4,0,0,1,4-4h72a44.06,44.06,0,0,1,43.82,40H76ZM196,211.47V224a4,4,0,0,1-4,4H88a4,4,0,0,1-4-4V167.38a27.85,27.85,0,0,1,10.51-21.86l16-12.79A35.8,35.8,0,0,0,124,104.62V76h33.76A258.83,258.83,0,0,1,196,211.47Z"/></svg>`;
}
