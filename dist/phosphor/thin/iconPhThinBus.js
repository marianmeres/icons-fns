export const iconPhThinBus = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184,36H72A28,28,0,0,0,44,64V208a12,12,0,0,0,12,12H80a12,12,0,0,0,12-12V188h72v20a12,12,0,0,0,12,12h24a12,12,0,0,0,12-12V64A28,28,0,0,0,184,36ZM52,180V116H204v64Zm152-72H52V76H204ZM84,208a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V188H84Zm116,4H176a4,4,0,0,1-4-4V188h32v20A4,4,0,0,1,200,212Zm4-144H52V64A20,20,0,0,1,72,44H184a20,20,0,0,1,20,20ZM100,148a8,8,0,1,1-8-8A8,8,0,0,1,100,148Zm72,0a8,8,0,1,1-8-8A8,8,0,0,1,172,148Zm72-68v24a4,4,0,0,1-8,0V80a4,4,0,0,1,8,0ZM20,80v24a4,4,0,0,1-8,0V80a4,4,0,0,1,8,0Z"/></svg>`;
}
