export const iconPhThinTrafficSignThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240.32,119.12,136.88,15.68a12.55,12.55,0,0,0-17.76,0L15.68,119.12a12.55,12.55,0,0,0,0,17.76L119.12,240.32h0a12.55,12.55,0,0,0,17.76,0L240.32,136.88a12.55,12.55,0,0,0,0-17.76Zm-5.66,12.1L131.22,234.67a4.56,4.56,0,0,1-6.44,0h0L21.33,131.22a4.55,4.55,0,0,1,0-6.44L124.78,21.33a4.56,4.56,0,0,1,6.44,0L234.67,124.78a4.55,4.55,0,0,1,0,6.44Zm-63.83-14a4,4,0,0,1,0,5.66l-24,24a4,4,0,0,1-5.66-5.66L158.34,124H112a20,20,0,0,0-20,20v8a4,4,0,0,1-8,0v-8a28,28,0,0,1,28-28h46.34L141.17,98.83a4,4,0,0,1,5.66-5.66Z"/></svg>`;
}
