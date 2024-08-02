export const iconPhBoldChatDots = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M88,128a16,16,0,1,1,16,16A16,16,0,0,1,88,128Zm64,16a16,16,0,1,0-16-16A16,16,0,0,0,152,144Zm84-80V192a20,20,0,0,1-20,20H84.47L53,239.17l-.12.11A19.91,19.91,0,0,1,40.05,244a20.14,20.14,0,0,1-8.49-1.9A19.82,19.82,0,0,1,20,224V64A20,20,0,0,1,40,44H216A20,20,0,0,1,236,64Zm-24,4H44V215.23l28.16-24.32A11.93,11.93,0,0,1,80,188H212Z"/></svg>`;
}
