export const iconPhBoldPencilCircleBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M204.37,51.6A108.08,108.08,0,1,0,236,128,108.09,108.09,0,0,0,204.37,51.6ZM92,200a12,12,0,1,1,24,0v11.11a83.78,83.78,0,0,1-24-7.22Zm48,0a12,12,0,1,1,24,0v3.89a83.78,83.78,0,0,1-24,7.22Zm-33.86-52h43.72l7.57,16.42A35.95,35.95,0,0,0,128,173.22a35.95,35.95,0,0,0-29.43-8.79Zm11.08-24L128,100.62,138.78,124ZM188,186.79V176a12.15,12.15,0,0,0-1.1-5l-48-104a12,12,0,0,0-21.8,0L69.1,171a12.15,12.15,0,0,0-1.1,5v10.77a84,84,0,1,1,120,0Z"/></svg>`;
}
