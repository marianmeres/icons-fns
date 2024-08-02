export const iconPhThinMicrosoftExcelLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,28H72A12,12,0,0,0,60,40V68H40A12,12,0,0,0,28,80v96a12,12,0,0,0,12,12H60v28a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V40A12,12,0,0,0,200,28Zm-44,72h48v56H156Zm48-60V92H156V80a12,12,0,0,0-12-12h-4V36h60A4,4,0,0,1,204,40ZM68,40a4,4,0,0,1,4-4h60V68H68ZM36,176V80a4,4,0,0,1,4-4H144a4,4,0,0,1,4,4v96a4,4,0,0,1-4,4H40A4,4,0,0,1,36,176Zm32,40V188h64v32H72A4,4,0,0,1,68,216Zm132,4H140V188h4a12,12,0,0,0,12-12V164h48v52A4,4,0,0,1,200,220ZM68.93,149.44,86.79,128,68.93,106.56a4,4,0,0,1,6.14-5.12L92,121.75l16.93-20.31a4,4,0,1,1,6.14,5.12L97.21,128l17.86,21.44a4,4,0,1,1-6.14,5.12L92,134.25,75.07,154.56A4,4,0,0,1,72,156a3.94,3.94,0,0,1-2.56-.93A4,4,0,0,1,68.93,149.44Z"/></svg>`;
}
