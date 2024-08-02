export const iconPhThinCakeThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,112a20,20,0,0,0-20-20H132V75.71A28,28,0,0,0,156,48c0-25.84-24.73-42.63-25.78-43.33a4,4,0,0,0-4.44,0C124.73,5.37,100,22.16,100,48a28,28,0,0,0,24,27.71V92H48a20,20,0,0,0-20,20v23.33a36.85,36.85,0,0,0,8,22.91V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V158.24a36.85,36.85,0,0,0,8-22.91ZM108,48c0-17.39,14.37-30.53,20-35,5.63,4.48,20,17.62,20,35a20,20,0,0,1-40,0Zm92,164H56a12,12,0,0,1-12-12V165.73A35.16,35.16,0,0,0,63,172a36.13,36.13,0,0,0,33-19.48,36,36,0,0,0,64,0A36.13,36.13,0,0,0,192,172h1a35.16,35.16,0,0,0,19-6.26V200A12,12,0,0,1,200,212Zm20-76.67c0,15.39-12.21,28.25-27.21,28.66A28,28,0,0,1,164,136a4,4,0,0,0-8,0,28,28,0,0,1-56,0,4,4,0,0,0-8,0,28,28,0,0,1-28.79,28c-15-.41-27.21-13.27-27.21-28.66V112a12,12,0,0,1,12-12H208a12,12,0,0,1,12,12Z"/></svg>`;
}
