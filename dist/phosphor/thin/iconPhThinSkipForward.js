export const iconPhThinSkipForward = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,36a4,4,0,0,0-4,4v76.44L70.31,37.84a12,12,0,0,0-12.18-.32A11.69,11.69,0,0,0,52,47.88V208.12a11.69,11.69,0,0,0,6.13,10.36,12,12,0,0,0,12.18-.32L196,139.56V216a4,4,0,0,0,8,0V40A4,4,0,0,0,200,36Zm-5.82,95.26L66.06,211.38a4,4,0,0,1-4.06.11,3.8,3.8,0,0,1-2-3.37V47.88a3.8,3.8,0,0,1,2-3.37A4,4,0,0,1,64,44a4,4,0,0,1,2.11.62l128.12,80.12a3.83,3.83,0,0,1,0,6.52Z"/></svg>`;
}
