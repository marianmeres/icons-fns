export const iconBxSolidTraffic = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="m2.958 16 .043 1.042c.005.12.142 2.255 2.999 3.338v1.12a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-1.12c2.857-1.083 2.994-3.218 2.999-3.338L21.043 16H18v-1.62c2.857-1.083 2.994-3.218 2.999-3.338L21.043 10H18V8.38c2.857-1.083 2.994-3.218 2.999-3.338L21.043 4H18V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V4H2.958l.043 1.042c.005.12.142 2.255 2.999 3.338V10H2.958l.043 1.042c.005.12.142 2.255 2.999 3.338V16H2.958zM12 4a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 4zm0 6a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 10zm0 6a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 16z"/></svg>`;
}
