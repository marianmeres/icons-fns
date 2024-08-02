export const iconPhLightRug = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,18a6,6,0,0,0-6,6V42H158V24a6,6,0,0,0-12,0V42H110V24a6,6,0,0,0-12,0V42H62V24a6,6,0,0,0-12,0V232a6,6,0,0,0,12,0V214H98v18a6,6,0,0,0,12,0V214h36v18a6,6,0,0,0,12,0V214h36v18a6,6,0,0,0,12,0V24A6,6,0,0,0,200,18ZM62,54H194V202H62Zm66,120a6,6,0,0,0,5.14-2.91l24-40a6,6,0,0,0,0-6.18l-24-40a6,6,0,0,0-10.28,0l-24,40a6,6,0,0,0,0,6.18l24,40A6,6,0,0,0,128,174Zm0-74.34L145,128l-17,28.34L111,128Z"/></svg>`;
}
