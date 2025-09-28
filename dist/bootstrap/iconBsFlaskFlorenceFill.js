export const iconBsFlaskFlorenceFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}fill="currentColor" viewBox="0 0 16 16"><path d="m10.5 0 .1.01a.5.5 0 0 1-.1.99H10v5.417c.517.226.986.538 1.394.916l.043.038.14.14a6 6 0 0 1 .303.34l.101.128q.045.06.088.122a5 5 0 0 1 .26.4l.066.12a5 5 0 0 1 .16.32q.029.062.053.124.035.08.067.163.115.3.19.62l.024.111a5 5 0 0 1 .096.68Q13 10.82 13 11l-.007.257A5 5 0 0 1 8 16l-.257-.007A5 5 0 0 1 6 6.417V1h-.5a.5.5 0 0 1 0-1zM8 6a.5.5 0 0 0 0 1h1.065A.5.5 0 0 1 9 6.756V6zm0-2a.5.5 0 0 0 0 1h1V4zm0-2a.5.5 0 0 0 0 1h1V2z"/></svg>`;
}
