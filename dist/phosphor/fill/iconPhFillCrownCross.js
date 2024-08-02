export const iconPhFillCrownCross = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,83.22a53.86,53.86,0,0,0-8-10.06V40H104a8,8,0,0,1,0-16h16V8a8,8,0,0,1,16,0V24h16a8,8,0,0,1,0,16H136V73.16A53.86,53.86,0,0,0,128,83.22ZM180,56c-17.74,0-33.21,6.48-44,17.16V176a8,8,0,0,1-16,0V73.16C109.21,62.48,93.74,56,76,56a60.07,60.07,0,0,0-60,60c0,29.86,14.54,48.85,26.73,59.52A90.48,90.48,0,0,0,64,189.34V208a16,16,0,0,0,16,16h96a16,16,0,0,0,16-16V189.34a90.48,90.48,0,0,0,21.27-13.82C225.46,164.85,240,145.86,240,116A60.07,60.07,0,0,0,180,56Z"/></svg>`;
}
