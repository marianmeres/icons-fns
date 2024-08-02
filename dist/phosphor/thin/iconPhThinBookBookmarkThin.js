export const iconPhThinBookBookmarkThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,28H72A28,28,0,0,0,44,56V224a4,4,0,0,0,4,4H192a4,4,0,0,0,0-8H52v-4a20,20,0,0,1,20-20H208a4,4,0,0,0,4-4V32A4,4,0,0,0,208,28Zm-92,8h56v84l-25.61-19.2a4,4,0,0,0-4.8,0L116,120Zm88,152H72a27.94,27.94,0,0,0-20,8.42V56A20,20,0,0,1,72,36h36v92a4,4,0,0,0,6.4,3.2L144,109l29.61,22.2a4,4,0,0,0,2.4.8,4,4,0,0,0,4-4V36h24Z"/></svg>`;
}
