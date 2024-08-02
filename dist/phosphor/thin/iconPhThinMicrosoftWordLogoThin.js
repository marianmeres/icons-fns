export const iconPhThinMicrosoftWordLogoThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,28H72A12,12,0,0,0,60,40V68H40A12,12,0,0,0,28,80v96a12,12,0,0,0,12,12H60v28a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V40A12,12,0,0,0,200,28Zm-44,72h48v56H156ZM68,40a4,4,0,0,1,4-4H200a4,4,0,0,1,4,4V92H156V80a12,12,0,0,0-12-12H68ZM36,176V80a4,4,0,0,1,4-4H144a4,4,0,0,1,4,4v96a4,4,0,0,1-4,4H40A4,4,0,0,1,36,176Zm164,44H72a4,4,0,0,1-4-4V188h76a12,12,0,0,0,12-12V164h48v52A4,4,0,0,1,200,220ZM72.12,153l-12-48A4,4,0,1,1,67.88,103l9.38,37.51,11.16-22.33a4,4,0,0,1,7.16,0l11.16,22.33L116.12,103a4,4,0,0,1,7.76,1.94l-12,48a4,4,0,0,1-3.44,3l-.44,0a4,4,0,0,1-3.58-2.21L92,128.94,79.58,153.79a4,4,0,0,1-7.46-.82Z"/></svg>`;
}
