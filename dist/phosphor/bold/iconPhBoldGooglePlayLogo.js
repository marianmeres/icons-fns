export const iconPhBoldGooglePlayLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M241.79,110.7,74,14.65a20.24,20.24,0,0,0-20.12.06A19.62,19.62,0,0,0,44,31.84V224.16a19.62,19.62,0,0,0,9.91,17.13,20.22,20.22,0,0,0,20.12.06l167.76-96a19.76,19.76,0,0,0,0-34.6ZM68,203V53l75,75ZM160,145l12.4,12.4-58,33.2ZM114.41,65.43l58,33.2L160,111ZM194,145l-17-17,17-17,29.72,17Z"/></svg>`;
}
