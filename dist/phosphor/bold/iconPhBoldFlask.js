export const iconPhBoldFlask = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M225.15,197.71,164,95.81V44h4a12,12,0,0,0,0-24H88a12,12,0,0,0,0,24h4V95.81L30.85,197.71A20,20,0,0,0,48,228H208a20,20,0,0,0,17.15-30.29ZM140,44V99.14a12,12,0,0,0,1.71,6.17l35.13,58.54c-10.79.86-25.15-1.31-43.42-10.56-14-7.08-27.46-11.33-40.27-12.76l21.14-35.22A12,12,0,0,0,116,99.14V44ZM55.06,204,79,164.19c13-1.11,27.62,2.42,43.62,10.52,19.61,9.92,36.25,13.31,49.85,13.31A75.44,75.44,0,0,0,190.11,186l10.83,18Z"/></svg>`;
}
