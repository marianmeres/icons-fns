export const iconPhBoldShieldCheckered = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,36H48A20,20,0,0,0,28,56v56c0,54.29,26.32,87.22,48.4,105.29,23.71,19.39,47.44,26,48.44,26.29a12.1,12.1,0,0,0,6.32,0c1-.28,24.73-6.9,48.44-26.29,22.08-18.07,48.4-51,48.4-105.29V56A20,20,0,0,0,208,36Zm-4,76c0,1.34,0,2.68-.06,4H140V60h64ZM52,60h64v56H52.06c0-1.32-.06-2.66-.06-4Zm3,80h61v74.29a127,127,0,0,1-25.09-16.14C72.22,182.61,60.2,163.13,55,140Zm110.1,58.15A127,127,0,0,1,140,214.29V140h61C195.8,163.13,183.78,182.61,165.09,198.15Z"/></svg>`;
}
