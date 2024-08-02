export const iconPhLightSoundcloudLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M22,120v48a6,6,0,0,1-12,0V120a6,6,0,0,1,12,0ZM48,90a6,6,0,0,0-6,6v96a6,6,0,0,0,12,0V96A6,6,0,0,0,48,90Zm32-8a6,6,0,0,0-6,6V192a6,6,0,0,0,12,0V88A6,6,0,0,0,80,82Zm32-32a6,6,0,0,0-6,6V192a6,6,0,0,0,12,0V56A6,6,0,0,0,112,50Zm109.06,57.88A78,78,0,0,0,144,42a6,6,0,0,0,0,12,65.75,65.75,0,0,1,65.67,59.33,6,6,0,0,0,4.83,5.29A34,34,0,0,1,208,186H144a6,6,0,0,0,0,12h64a46,46,0,0,0,13.06-90.12Z"/></svg>`;
}
