export const iconPhLightCampfire = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M221.72,225.82a6,6,0,0,1-7.54,3.9L128,202.3,41.82,229.72a6,6,0,1,1-3.64-11.44l70-22.28-70-22.28a6,6,0,1,1,3.64-11.44L128,189.7l86.18-27.42a6,6,0,1,1,3.64,11.44l-70,22.28,70,22.28A6,6,0,0,1,221.72,225.82ZM70,108c0-46.81,52.62-79.73,54.86-81.11a6,6,0,0,1,6.28,0C133.38,28.27,186,61.19,186,108a58,58,0,0,1-116,0Zm58,46a18,18,0,0,0,18-18c0-15.48-12-27.43-18-32.44-6,5-18,17-18,32.44A18,18,0,0,0,128,154ZM82,108a45.93,45.93,0,0,0,17,35.67A29.87,29.87,0,0,1,98,136c0-26.9,25.58-44.27,26.67-45a6,6,0,0,1,6.66,0c1.09.72,26.67,18.09,26.67,45a29.87,29.87,0,0,1-1,7.67A45.93,45.93,0,0,0,174,108c0-34.06-35.15-61.22-46-68.78C117.15,46.78,82,73.93,82,108Z"/></svg>`;
}
