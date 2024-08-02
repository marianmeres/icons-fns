export const iconPhThinCurrencyDollarSimpleThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M196,168a44.05,44.05,0,0,1-44,44H132v20a4,4,0,0,1-8,0V212H104a44.05,44.05,0,0,1-44-44,4,4,0,0,1,8,0,36,36,0,0,0,36,36h48a36,36,0,0,0,0-72H112a44,44,0,0,1,0-88h12V24a4,4,0,0,1,8,0V44h12a44.05,44.05,0,0,1,44,44,4,4,0,0,1-8,0,36,36,0,0,0-36-36H112a36,36,0,0,0,0,72h40A44.05,44.05,0,0,1,196,168Z"/></svg>`;
}
