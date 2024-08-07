export const iconPhThinChurch = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M226.06,148.57,188,125.74V104a4,4,0,0,0-2-3.47L132,69.68V44h20a4,4,0,0,0,0-8H132V16a4,4,0,0,0-8,0V36H104a4,4,0,0,0,0,8h20V69.68L70,100.53A4,4,0,0,0,68,104v21.74L29.94,148.57A4,4,0,0,0,28,152v64a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4V168a12,12,0,0,1,24,0v48a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4V152A4,4,0,0,0,226.06,148.57ZM36,154.26l32-19.2V212H36ZM128,148a20,20,0,0,0-20,20v44H76V106.32l52-29.71,52,29.71V212H148V168A20,20,0,0,0,128,148Zm92,64H188V135.06l32,19.2Z"/></svg>`;
}
