export const iconPhDuotoneToothDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,79.76c.07,71.42-23.48,128.23-44,142.78a8,8,0,0,1-12.52-6C158,196.31,152,160,128,160s-30,36.31-31.51,56.53a8,8,0,0,1-12.52,6C63.48,208,39.93,151.18,40,79.76A47.94,47.94,0,0,1,88,32h80A47.94,47.94,0,0,1,216,79.76Z" opacity="0.2"/><path d="M171,71.42,149.54,80,171,88.57A8,8,0,1,1,165,103.42L128,88.61,91,103.42A8,8,0,1,1,85,88.57L106.46,80,85,71.42A8,8,0,1,1,91,56.57l37,14.81,37-14.81A8,8,0,1,1,171,71.42Zm53,8.33c0,42.72-8,75.4-14.7,95.28-8.72,25.8-20.62,45.49-32.64,54a15.69,15.69,0,0,1-15.95,1.41,16.09,16.09,0,0,1-9.18-13.36C150.68,205.58,146.48,168,128,168s-22.68,37.59-23.53,49.11a16.09,16.09,0,0,1-16,14.9,15.67,15.67,0,0,1-9.13-2.95c-12-8.53-23.92-28.22-32.64-54C40,155.15,32,122.47,32,79.75A56,56,0,0,1,88,24h80A56,56,0,0,1,224,79.75Zm-16,0A40,40,0,0,0,168,40H88A40,40,0,0,0,48,79.76c0,40.55,7.51,71.4,13.85,90.14,11.05,32.66,23,43.37,26.61,46C91.57,174.67,105.59,152,128,152s36.45,22.71,39.49,63.94h0c3.6-2.59,15.57-13.26,26.66-46C200.49,151.16,208,120.31,208,79.76Z"/></svg>`;
}
