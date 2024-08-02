export const iconPhThinRadioThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M100,168a4,4,0,0,1-4,4H64a4,4,0,0,1,0-8H96A4,4,0,0,1,100,168Zm-4-36H64a4,4,0,0,0,0,8H96a4,4,0,0,0,0-8ZM228,80V192a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V72a4,4,0,0,1,2.85-3.81l160-48a4,4,0,0,1,2.3,7.66L59.25,68H216A12,12,0,0,1,228,80Zm-8,0a4,4,0,0,0-4-4H36V192a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Zm-24,56a36,36,0,1,1-36-36A36,36,0,0,1,196,136Zm-8,0a28,28,0,1,0-28,28A28,28,0,0,0,188,136ZM96,100H64a4,4,0,0,0,0,8H96a4,4,0,0,0,0-8Z"/></svg>`;
}
