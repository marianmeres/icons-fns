export const iconPhBoldHandFistBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,76H188V64a36,36,0,0,0-60-26.8A36,36,0,0,0,69.27,54.54,36,36,0,0,0,20,88v40a108,108,0,0,0,216,0V112A36,36,0,0,0,200,76ZM140,64a12,12,0,0,1,24,0V76H140ZM92,64a12,12,0,0,1,24,0v40a12,12,0,0,1-24,0ZM44,88a12,12,0,0,1,24,0v16a12,12,0,0,1-24,0Zm168,40A84,84,0,0,1,44.61,138.15,35.93,35.93,0,0,0,80,130.8a35.89,35.89,0,0,0,43.65,3.34A36.23,36.23,0,0,0,130,140.5,51.82,51.82,0,0,0,116,176a12,12,0,0,0,24,0,28,28,0,0,1,28-28,12,12,0,0,0,0-24H152a12,12,0,0,1-12-12V100h60a12,12,0,0,1,12,12Z"/></svg>`;
}
