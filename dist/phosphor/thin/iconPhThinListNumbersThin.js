export const iconPhThinListNumbersThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,128a4,4,0,0,1-4,4H104a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM104,68H216a4,4,0,0,0,0-8H104a4,4,0,0,0,0,8ZM216,188H104a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8ZM41.79,51.58,52,46.47V104a4,4,0,0,0,8,0V40a4,4,0,0,0-5.79-3.58l-16,8a4,4,0,1,0,3.58,7.16ZM72,204H48l23.85-31.92a19.54,19.54,0,0,0,4-14.8,19.76,19.76,0,0,0-8-13.28,20.84,20.84,0,0,0-28.59,3.92,19.85,19.85,0,0,0-3,5.38A4,4,0,0,0,43.76,156a12.1,12.1,0,0,1,1.78-3.22,12.78,12.78,0,0,1,17.54-2.37,11.85,11.85,0,0,1,4.81,7.94,11.65,11.65,0,0,1-2.41,8.85L36.8,205.61A4,4,0,0,0,40,212H72a4,4,0,0,0,0-8Z"/></svg>`;
}
