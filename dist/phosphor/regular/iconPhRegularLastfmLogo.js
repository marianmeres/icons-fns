export const iconPhRegularLastfmLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,160a40,40,0,0,1-40,40H190.57a56.22,56.22,0,0,1-50.75-32.32l-30.14-64.6A40.15,40.15,0,0,0,73.43,80H64a40,40,0,0,0-40,40v24a40,40,0,0,0,40,40h8a32,32,0,0,0,29.34-19.2A8,8,0,1,1,116,171.2,48,48,0,0,1,72,200H64A56.06,56.06,0,0,1,8,144V120A56.06,56.06,0,0,1,64,64h9.43a56.22,56.22,0,0,1,50.75,32.32l30.14,64.6A40.15,40.15,0,0,0,190.57,184H208a24,24,0,0,0,0-48H188a36,36,0,0,1,0-72h20a32,32,0,0,1,32,32,8,8,0,0,1-16,0,16,16,0,0,0-16-16H188a20,20,0,0,0,0,40h20A40,40,0,0,1,248,160Z"/></svg>`;
}
