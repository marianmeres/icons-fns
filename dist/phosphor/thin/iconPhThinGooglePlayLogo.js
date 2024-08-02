export const iconPhThinGooglePlayLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M237.89,117.69,70.05,21.62a12,12,0,0,0-12.13,0A11.69,11.69,0,0,0,52,31.87V224.13a11.69,11.69,0,0,0,5.92,10.21,12,12,0,0,0,12.13,0l167.77-96a11.76,11.76,0,0,0,.07-20.66Zm-52.44-20.8L160,122.34,66.4,28.75ZM60,222.33V33.67L154.34,128Zm6.4,4.92L160,133.66l25.45,25.45Zm167.51-95.88L192.65,155l-27-27,27-27L234,124.66a3.77,3.77,0,0,1-.07,6.71Z"/></svg>`;
}
