export const iconPhThinTwitchLogoThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,36H48A12,12,0,0,0,36,48V192a12,12,0,0,0,12,12H68v36a4,4,0,0,0,2.3,3.62A3.9,3.9,0,0,0,72,244a4,4,0,0,0,2.56-.93L121.45,204H165.1a12.06,12.06,0,0,0,7.69-2.78l42.89-35.75a11.93,11.93,0,0,0,4.32-9.22V48A12,12,0,0,0,208,36Zm4,120.25a4,4,0,0,1-1.44,3.08l-42.9,35.74a4,4,0,0,1-2.56.93H120a4,4,0,0,0-2.56.93L76,231.46V200a4,4,0,0,0-4-4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM172,88v48a4,4,0,0,1-8,0V88a4,4,0,0,1,8,0Zm-48,0v48a4,4,0,0,1-8,0V88a4,4,0,0,1,8,0Z"/></svg>`;
}
