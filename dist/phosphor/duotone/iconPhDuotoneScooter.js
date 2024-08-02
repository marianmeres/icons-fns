export const iconPhDuotoneScooter = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M72,172a28,28,0,1,1-28-28A28,28,0,0,1,72,172Zm140-28a28,28,0,1,0,28,28A28,28,0,0,0,212,144Z" opacity="0.2"/><path d="M212,136c-1.18,0-2.35.06-3.51.17l-32.9-98.7A8,8,0,0,0,168,32H136a8,8,0,0,0,0,16h26.23l17.44,52.31L124.21,168H79.77a36,36,0,1,0-1.83,16H128a8,8,0,0,0,6.19-2.93l51.46-62.81,7.66,23A36,36,0,1,0,212,136ZM44,192a20,20,0,1,1,20-20A20,20,0,0,1,44,192Zm168,0a20,20,0,1,1,20-20A20,20,0,0,1,212,192Z"/></svg>`;
}
