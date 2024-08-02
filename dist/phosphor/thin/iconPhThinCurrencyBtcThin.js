export const iconPhThinCurrencyBtcThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M170.27,117.21A40,40,0,0,0,148,44V24a4,4,0,0,0-8,0V44H116V24a4,4,0,0,0-8,0V44H72a4,4,0,0,0,0,8H84V196H72a4,4,0,0,0,0,8h36v20a4,4,0,0,0,8,0V204h24v20a4,4,0,0,0,8,0V204h12a44,44,0,0,0,10.27-86.79ZM92,52h56a32,32,0,0,1,0,64H92Zm68,144H92V124h68a36,36,0,0,1,0,72Z"/></svg>`;
}
