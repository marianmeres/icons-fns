export const iconPhThinGoogleDriveLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M234.19,145.86,165.74,33.64A11.94,11.94,0,0,0,155.56,28H100.43a11.93,11.93,0,0,0-10.17,5.64l0,0L21.83,145.82a12,12,0,0,0-.25,12.32L48.91,206A12,12,0,0,0,59.32,212H196.67A12,12,0,0,0,207.09,206l27.32-47.81A12,12,0,0,0,234.19,145.86ZM226.13,148H170.26l-37.6-62.67,27.39-45.65ZM95.06,148,128,93.11,160.93,148Zm70.67,8,28.8,48H61.47l28.79-48ZM128,77.56,103.06,36h49.87ZM95.94,39.68l27.39,45.65L85.74,148H29.87ZM29.58,156H80.94L54.63,199.85Zm171.79,43.85L175.06,156h51.36Z"/></svg>`;
}
