export const iconPhRegularCloudSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L81.32,88.55l-.06.12A65,65,0,0,0,72,88a64,64,0,0,0,0,128h88a87.34,87.34,0,0,0,31.8-5.93l10.28,11.31a8,8,0,1,0,11.84-10.76ZM160,200H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.3.12A88.4,88.4,0,0,0,72,128a8,8,0,0,0,16,0,72.25,72.25,0,0,1,5.06-26.54l87,95.7A71.66,71.66,0,0,1,160,200Zm88-72a87.89,87.89,0,0,1-22.35,58.61A8,8,0,0,1,213.71,176,72,72,0,0,0,117.37,70a8,8,0,0,1-9.48-12.89A88,88,0,0,1,248,128Z"/></svg>`;
}
