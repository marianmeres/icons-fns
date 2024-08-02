export const iconPhThinFileHtmlThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M212,88a4,4,0,0,0-1.17-2.83l-2-2h0l-54-54A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v80a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52v28a4,4,0,0,0,8,0ZM156,41.65,198.34,84H156ZM64,160v48a4,4,0,0,1-8,0V188H28v20a4,4,0,0,1-8,0V160a4,4,0,0,1,8,0v20H56V160a4,4,0,0,1,8,0Zm56,0a4,4,0,0,1-4,4H104v44a4,4,0,0,1-8,0V164H84a4,4,0,0,1,0-8h32A4,4,0,0,1,120,160Zm72,0v48a4,4,0,0,1-8,0V172l-16.8,22.4a4,4,0,0,1-6.4,0L144,172v36a4,4,0,0,1-8,0V160a4,4,0,0,1,7.2-2.4L164,185.33l20.8-27.73A4,4,0,0,1,192,160Zm56,48a4,4,0,0,1-4,4H216a4,4,0,0,1-4-4V160a4,4,0,0,1,8,0v44h24A4,4,0,0,1,248,208Z"/></svg>`;
}
