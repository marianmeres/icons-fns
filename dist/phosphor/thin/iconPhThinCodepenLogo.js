export const iconPhThinCodepenLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M234,92.55s-.05,0-.09-.07l-104-56a4,4,0,0,0-3.8,0l-104,56-.11.08A4,4,0,0,0,20,96v64a4,4,0,0,0,2,3.45.71.71,0,0,0,.09.07l104,56a4,4,0,0,0,3.8,0l104-56a.27.27,0,0,0,.08-.07,4,4,0,0,0,2-3.45V96A4,4,0,0,0,234,92.55Zm-6,60.75L181,128l47-25.3Zm-55.43-29.84L132,101.61V46.7L223.56,96Zm-44.57,24L91.87,128,128,108.54,164.13,128ZM124,46.7v54.91L83.43,123.46,32.44,96Zm-96,56L75,128,28,153.3Zm55.43,29.84L124,154.39V209.3L32.44,160ZM132,209.3V154.39l40.57-21.85,51,27.46Z"/></svg>`;
}
