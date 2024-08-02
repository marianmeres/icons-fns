export const iconPhDuotoneSeatbelt = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M92,68a36,36,0,1,1,36,36A36,36,0,0,1,92,68Zm36,52a72,72,0,0,0-72,72v32H200V192A72,72,0,0,0,128,120Z" opacity="0.2"/><path d="M172,68a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,68ZM128,96a28,28,0,1,1,28-28A28,28,0,0,1,128,96Zm80,128a8,8,0,0,1-8,8H56a8,8,0,0,1-5.29-14l98.07-86.54a64,64,0,0,0-84,50.33A8,8,0,0,1,49,179.25a80,80,0,0,1,113.16-59.59L186.71,98a8,8,0,0,1,10.58,12L77.16,216H200A8,8,0,0,1,208,224Zm-14.27-77.62A79.6,79.6,0,0,1,208,192a8,8,0,0,1-16,0,63.67,63.67,0,0,0-11.41-36.49,8,8,0,0,1,13.14-9.13Z"/></svg>`;
}
