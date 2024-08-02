export const iconPhRegularBulldozer = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,200h-8a8,8,0,0,1-8-8V160a8,8,0,0,1,8-8h8a8,8,0,0,0,0-16h-8a24,24,0,0,0-24,24v8H199.2a40.09,40.09,0,0,0-33.71-31.61L129.44,49.85A16,16,0,0,0,114.67,40H24A16,16,0,0,0,8,56v96a40,40,0,0,0,32,64H160a40.07,40.07,0,0,0,39.2-32H216v8a24,24,0,0,0,24,24h8a8,8,0,0,0,0-16ZM148,136H64V56h50.67ZM48,56v80H40a39.72,39.72,0,0,0-16,3.35V56ZM160,200H40a24,24,0,0,1,0-48H160a24,24,0,0,1,0,48Zm8-24a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H160A8,8,0,0,1,168,176Z"/></svg>`;
}
