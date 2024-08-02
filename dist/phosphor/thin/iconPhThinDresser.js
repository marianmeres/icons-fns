export const iconPhThinDresser = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M140,192a4,4,0,0,1-4,4H120a4,4,0,0,1,0-8h16A4,4,0,0,1,140,192ZM120,68h16a4,4,0,0,0,0-8H120a4,4,0,0,0,0,8Zm16,56H120a4,4,0,0,0,0,8h16a4,4,0,0,0,0-8Zm76-84V216a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V40A12,12,0,0,1,56,28H200A12,12,0,0,1,212,40ZM52,156H204V100H52ZM52,40V92H204V40a4,4,0,0,0-4-4H56A4,4,0,0,0,52,40ZM204,216V164H52v52a4,4,0,0,0,4,4H200A4,4,0,0,0,204,216Z"/></svg>`;
}
