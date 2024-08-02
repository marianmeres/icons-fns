export const iconPhBoldTestTubeBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240.49,83.51l-60-60a12,12,0,0,0-17,0L34.28,152.75a48.77,48.77,0,0,0,69,69L214.48,110.49l21.31-7.11a12,12,0,0,0,4.7-19.87ZM86.28,204.75a24.77,24.77,0,0,1-35-35l28.13-28.13c7.73-2.41,19.58-3,35.06,5a83.94,83.94,0,0,0,21.95,8ZM204.2,88.62a12.15,12.15,0,0,0-4.69,2.89l-38.89,38.9c-7.73,2.41-19.58,3-35.06-5a83.94,83.94,0,0,0-21.94-8L172,49l37.79,37.79Z"/></svg>`;
}
