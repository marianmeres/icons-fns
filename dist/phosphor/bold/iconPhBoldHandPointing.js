export const iconPhBoldHandPointing = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M196,84a31.94,31.94,0,0,0-11.22,2A32,32,0,0,0,148,69V44a32,32,0,0,0-64,0v66.83A32,32,0,0,0,32.25,148l4.68,8.24C71.11,216.48,86.72,244,136,244a92.1,92.1,0,0,0,92-92V116A32,32,0,0,0,196,84Zm8,68a68.08,68.08,0,0,1-68,68c-34,0-43.49-14.45-78.2-75.65l-4.69-8.28a.16.16,0,0,1,0-.07,8,8,0,0,1,13.86-8c.06.12.13.23.2.35l18.68,30A12,12,0,0,0,108,152V44a8,8,0,0,1,16,0v68a12,12,0,0,0,24,0V100a8,8,0,0,1,16,0v20a12,12,0,0,0,24,0v-4a8,8,0,0,1,16,0Z"/></svg>`;
}
