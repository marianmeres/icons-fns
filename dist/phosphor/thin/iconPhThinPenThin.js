export const iconPhThinPenThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224.49,76.2,179.8,31.51a12,12,0,0,0-17,0L39.51,154.83A12,12,0,0,0,36,163.31V208a12,12,0,0,0,12,12H92.69a11.93,11.93,0,0,0,8.48-3.51l88.67-88.67,5.73,23-38.39,38.4a4,4,0,1,0,5.65,5.66l40-40a4,4,0,0,0,1.06-3.8l-7.46-29.8,28.06-28.06A12,12,0,0,0,224.49,76.2ZM44,208V169.66L86.35,212H48A4,4,0,0,1,44,208Zm52,2.34L45.66,160,136,69.66,186.35,120ZM218.83,87.51,192,114.34,141.66,64l26.83-26.83a4,4,0,0,1,5.66,0l44.68,44.69A4,4,0,0,1,218.83,87.51Z"/></svg>`;
}
