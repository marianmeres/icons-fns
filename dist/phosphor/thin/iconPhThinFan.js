export const iconPhThinFan = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M229.12,136a56,56,0,0,0-86-31.56,28.25,28.25,0,0,0-4.56-2.39l17.27-68.94a4,4,0,0,0-1.72-4.34A56,56,0,1,0,100,126.62c0,.46,0,.92,0,1.38a27.39,27.39,0,0,0,.26,3.76L31.91,151.28A4,4,0,0,0,29,154.94a56,56,0,0,0,41.45,56.62,56.46,56.46,0,0,0,14.59,1.93,56.07,56.07,0,0,0,55.73-60.59,27.93,27.93,0,0,0,4.33-2.77l51.09,49.44A4,4,0,0,0,199,200.7a4.06,4.06,0,0,0,1.84-.45A56,56,0,0,0,229.12,136ZM128,148a20,20,0,1,1,20-20A20,20,0,0,1,128,148ZM76,76a48,48,0,0,1,71.4-41.92l-16.55,66.06c-.94-.09-1.89-.14-2.85-.14a28.06,28.06,0,0,0-26.34,18.49A47.82,47.82,0,0,1,76,76Zm33,123a48,48,0,0,1-72-40.87l65.5-18.7A28,28,0,0,0,128,156a28.81,28.81,0,0,0,4.94-.44A47.81,47.81,0,0,1,109,199ZM216.6,174.54a47.93,47.93,0,0,1-17,17.22l-49-47.37a27.91,27.91,0,0,0-1.3-34.44,48,48,0,0,1,67.22,64.59Z"/></svg>`;
}
