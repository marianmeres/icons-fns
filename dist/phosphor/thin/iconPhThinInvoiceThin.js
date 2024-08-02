export const iconPhThinInvoiceThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M28,124a4,4,0,0,1,0-8H56a12,12,0,0,0,0-24H40a20,20,0,0,1,0-40h4V48a4,4,0,0,1,8,0v4H64a4,4,0,0,1,0,8H40a12,12,0,0,0,0,24H56a20,20,0,0,1,0,40H52v4a4,4,0,0,1-8,0v-4ZM228,56V192a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V152a4,4,0,0,1,8,0v40a4,4,0,0,0,4,4H164V156H80a4,4,0,0,1,0-8h84V108H104a4,4,0,0,1,0-8H220V60H96a4,4,0,0,1,0-8H224A4,4,0,0,1,228,56Zm-56,92h48V108H172Zm48,44V156H172v40h44A4,4,0,0,0,220,192Z"/></svg>`;
}
