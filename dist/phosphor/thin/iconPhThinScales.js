export const iconPhThinScales = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M235.71,134.51l-32-80h0a4,4,0,0,0-4.57-2.41L132,67V40a4,4,0,0,0-8,0V68.79L55.13,84.1a4,4,0,0,0-2.84,2.41h0v0h0l-32,80A4,4,0,0,0,20,168c0,20.4,22.08,28,36,28s36-7.6,36-28a4,4,0,0,0-.29-1.49L61.46,90.88,124,77V212H104a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8H132V75.21l61.47-13.66-29.18,73A4,4,0,0,0,164,136c0,20.4,22.08,28,36,28s36-7.6,36-28A4,4,0,0,0,235.71,134.51ZM56,188c-7.15,0-27.37-3.56-28-19.27l28-70,28,70C83.37,184.44,63.15,188,56,188Zm144-32c-7.15,0-27.37-3.56-28-19.27l28-70,28,70C227.37,152.44,207.15,156,200,156Z"/></svg>`;
}
