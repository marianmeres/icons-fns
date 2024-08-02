export const iconPhThinDiceSix = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192,36H64A28,28,0,0,0,36,64V192a28,28,0,0,0,28,28H192a28,28,0,0,0,28-28V64A28,28,0,0,0,192,36Zm20,156a20,20,0,0,1-20,20H64a20,20,0,0,1-20-20V64A20,20,0,0,1,64,44H192a20,20,0,0,1,20,20ZM100,84a8,8,0,1,1-8-8A8,8,0,0,1,100,84Zm72,0a8,8,0,1,1-8-8A8,8,0,0,1,172,84Zm-72,44a8,8,0,1,1-8-8A8,8,0,0,1,100,128Zm72,0a8,8,0,1,1-8-8A8,8,0,0,1,172,128Zm-72,44a8,8,0,1,1-8-8A8,8,0,0,1,100,172Zm72,0a8,8,0,1,1-8-8A8,8,0,0,1,172,172Z"/></svg>`;
}
