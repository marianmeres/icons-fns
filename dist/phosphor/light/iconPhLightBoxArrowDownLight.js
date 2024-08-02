export const iconPhLightBoxArrowDownLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M221.37,69.32l-16-32A6,6,0,0,0,200,34H56a6,6,0,0,0-5.37,3.32l-16,32A6.07,6.07,0,0,0,34,72V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V72A6.07,6.07,0,0,0,221.37,69.32ZM59.71,46H196.29l10,20H49.71ZM208,210H48a2,2,0,0,1-2-2V78H210V208A2,2,0,0,1,208,210Zm-43.76-62.24a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48,0l-32-32a6,6,0,0,1,8.48-8.48L122,169.51V104a6,6,0,0,1,12,0v65.51l21.76-21.75A6,6,0,0,1,164.24,147.76Z"/></svg>`;
}
