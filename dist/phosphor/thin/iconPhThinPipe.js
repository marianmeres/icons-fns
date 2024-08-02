export const iconPhThinPipe = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,108H204V52h28a4,4,0,0,0,0-8H203.3A12,12,0,0,0,192,36H176a12,12,0,0,0-11.3,8H144A100.11,100.11,0,0,0,44,144v20.7A12,12,0,0,0,36,176v16a12,12,0,0,0,8,11.3V232a4,4,0,0,0,8,0V204h56v28a4,4,0,0,0,8,0V203.3a12,12,0,0,0,8-11.3V176a12,12,0,0,0-8-11.3V144a28,28,0,0,1,28-28h20.7a12,12,0,0,0,11.3,8h16a12,12,0,0,0,11.3-8H232a4,4,0,0,0,0-8ZM116,192a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V176a4,4,0,0,1,4-4h64a4,4,0,0,1,4,4Zm-8-48v20H52V144a92.1,92.1,0,0,1,92-92h20v56H144A36,36,0,0,0,108,144Zm84-28H176a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h16a4,4,0,0,1,4,4v64A4,4,0,0,1,192,116Z"/></svg>`;
}
