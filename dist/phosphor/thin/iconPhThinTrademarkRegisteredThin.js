export const iconPhThinTrademarkRegisteredThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm17.12-81.53A28,28,0,0,0,136,84H104a4,4,0,0,0-4,4v80a4,4,0,0,0,8,0V140h28.52l20.15,30.23a4,4,0,0,0,6.66-4.44ZM108,92h28a20,20,0,0,1,0,40H108Z"/></svg>`;
}
