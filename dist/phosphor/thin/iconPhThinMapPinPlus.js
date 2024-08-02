export const iconPhThinMapPinPlus = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M164,104a4,4,0,0,1-4,4H132v28a4,4,0,0,1-8,0V108H96a4,4,0,0,1,0-8h28V72a4,4,0,0,1,8,0v28h28A4,4,0,0,1,164,104Zm48,0c0,30.42-14.17,62.79-41,93.62a250,250,0,0,1-40.73,37.66,4,4,0,0,1-4.58,0A250,250,0,0,1,85,197.62C58.17,166.79,44,134.42,44,104a84,84,0,0,1,168,0Zm-8,0a76,76,0,0,0-152,0c0,35.9,21.15,67.8,38.9,88.23A254.62,254.62,0,0,0,128,227a254.62,254.62,0,0,0,37.1-34.81C182.85,171.8,204,139.9,204,104Z"/></svg>`;
}
