export const iconPhBoldPipeBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,100H216V60h16a12,12,0,0,0,0-24H212a20,20,0,0,0-16-8H172a20,20,0,0,0-16,8H144A108.12,108.12,0,0,0,36,144v12a20,20,0,0,0-8,16v24a20,20,0,0,0,8,16v20a12,12,0,0,0,24,0V216h40v16a12,12,0,0,0,24,0V212a20,20,0,0,0,8-16V172a20,20,0,0,0-8-16V144a20,20,0,0,1,20-20h12a20,20,0,0,0,16,8h24a20,20,0,0,0,16-8h20a12,12,0,0,0,0-24ZM108,176v16H52V176Zm-8-32v8H60v-8a84.09,84.09,0,0,1,84-84h8v40h-8A44.05,44.05,0,0,0,100,144Zm76-92h16v56H176Z"/></svg>`;
}
