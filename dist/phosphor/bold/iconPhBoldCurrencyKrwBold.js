export const iconPhBoldCurrencyKrwBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,124H223.83l19.29-47.48a12,12,0,0,0-22.24-9l-23,56.51H162.08l-23-56.51a12,12,0,0,0-22.24,0L93.92,124H58.08l-23-56.51a12,12,0,0,0-22.24,9L32.17,124H16a12,12,0,0,0,0,24H41.92l23,56.52a12,12,0,0,0,22.24,0l23-56.52h35.84l23,56.52a12,12,0,0,0,22.24,0l23-56.52H240a12,12,0,0,0,0-24ZM76,168.12,67.83,148H84.17ZM119.83,124,128,103.89,136.17,124ZM180,168.12,171.83,148h16.34Z"/></svg>`;
}
