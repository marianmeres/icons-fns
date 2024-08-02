export const iconPhBoldLegoBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M245.36,77.28h0L203.74,56.45C201.38,40.24,183,28,160,28c-24.67,0-44,14.06-44,32a25,25,0,0,0,2.69,11.24l-9.4,4.7C101.56,71,91.35,68,80,68c-24.67,0-44,14.06-44,32a25,25,0,0,0,2.69,11.24l-28.06,14A12,12,0,0,0,4,136H4v56a12,12,0,0,0,6.63,10.73l64,32a12,12,0,0,0,10.74,0l160-80A12,12,0,0,0,252,144V88A12,12,0,0,0,245.36,77.28ZM80,154.58,42.83,136l15.81-7.9A58.2,58.2,0,0,0,80,132c24.67,0,44-14.06,44-32a25.39,25.39,0,0,0-.4-4.38l15-7.52A58.2,58.2,0,0,0,160,92c14.72,0,27.53-5,35.47-12.85L213.17,88ZM160,52c12.91,0,20,6,20,8s-7.09,8-20,8-20-6-20-8S147.09,52,160,52ZM80,92c12.91,0,20,6,20,8s-7.09,8-20,8-20-6-20-8S67.09,92,80,92ZM28,155.42l40,20v29.16l-40-20Zm64,49.16V175.42l136-68v29.16Z"/></svg>`;
}
