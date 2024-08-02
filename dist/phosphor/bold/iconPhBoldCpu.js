export const iconPhBoldCpu = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M156,88H100a12,12,0,0,0-12,12v56a12,12,0,0,0,12,12h56a12,12,0,0,0,12-12V100A12,12,0,0,0,156,88Zm-12,56H112V112h32Zm88-4H220V116h12a12,12,0,0,0,0-24H220V56a20,20,0,0,0-20-20H164V24a12,12,0,0,0-24,0V36H116V24a12,12,0,0,0-24,0V36H56A20,20,0,0,0,36,56V92H24a12,12,0,0,0,0,24H36v24H24a12,12,0,0,0,0,24H36v36a20,20,0,0,0,20,20H92v12a12,12,0,0,0,24,0V220h24v12a12,12,0,0,0,24,0V220h36a20,20,0,0,0,20-20V164h12a12,12,0,0,0,0-24Zm-36,56H60V60H196Z"/></svg>`;
}
