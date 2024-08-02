export const iconPhRegularApproximateEquals = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M222.16,153.26a8,8,0,0,1-1,11.25c-17.36,14.38-32.86,19.49-47,19.49-18.58,0-34.82-8.81-49.93-17-25.35-13.75-47.24-25.63-79.07.74a8,8,0,1,1-10.22-12.3c40.17-33.27,70.32-16.92,96.93-2.48,25.35,13.75,47.24,25.62,79.07-.75A8,8,0,0,1,222.16,153.26Zm-177-49.46c31.83-26.37,53.72-14.5,79.07-.75,15.11,8.2,31.35,17,49.93,17,14.14,0,29.64-5.11,47-19.49a8,8,0,1,0-10.22-12.3c-31.83,26.37-53.72,14.49-79.07.74-26.61-14.43-56.76-30.79-96.93,2.48A8,8,0,0,0,45.11,103.8Z"/></svg>`;
}
