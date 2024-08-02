export const iconPhBoldGitlabLogoBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M234,116.09,214.13,40a15.94,15.94,0,0,0-30.42-1.48L167,84H89L72.29,38.49A15.94,15.94,0,0,0,41.87,40L22,116.09a61.19,61.19,0,0,0,23.57,65.23l73.27,51.77a15.93,15.93,0,0,0,18.36,0l73.27-51.77A61.19,61.19,0,0,0,234,116.09ZM58.61,70.86l10.76,29.28A12,12,0,0,0,80.64,108h94.72a12,12,0,0,0,11.27-7.86l10.76-29.28,9.14,35L128,161.31,49.47,105.83ZM44,131.37,107.2,176l-13.79,9.74-34-24A36.86,36.86,0,0,1,44,131.37Zm84,78.82-13.79-9.75L128,190.7l13.79,9.74Zm68.6-48.47-34,24L148.8,176,212,131.37A36.86,36.86,0,0,1,196.6,161.72Z"/></svg>`;
}
