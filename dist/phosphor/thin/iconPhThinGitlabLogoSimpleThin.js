export const iconPhThinGitlabLogoSimpleThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M226.27,118.11,206.38,42a7.94,7.94,0,0,0-15.16-.75L172.57,92H83.43L64.78,41.24A7.94,7.94,0,0,0,49.62,42L29.73,118.11a53.16,53.16,0,0,0,20.44,56.68l73.27,51.76a7.9,7.9,0,0,0,9.12,0l73.27-51.76A53.16,53.16,0,0,0,226.27,118.11Zm-25.05,50.14L128,220,54.78,168.25a45.11,45.11,0,0,1-17.31-48.11l19.84-76L76.89,97.38A4,4,0,0,0,80.64,100h94.72a4,4,0,0,0,3.75-2.62l19.57-53.22,19.85,76A45.11,45.11,0,0,1,201.22,168.25Z"/></svg>`;
}
