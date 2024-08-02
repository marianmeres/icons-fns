export const iconPhRegularCherries = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M176,72a71.5,71.5,0,0,0-7.76.43,91.77,91.77,0,0,0-21.62-25.11C108.78,16.79,57.05,23.77,54.87,24.08a8,8,0,0,0-3.31,14.58c17.5,11.66,25.51,31,28.85,49.74A72,72,0,1,0,142,207.5,72,72,0,1,0,176,72ZM76,39.37c16.67.72,41.24,4.78,60.64,20.48a75.28,75.28,0,0,1,15,16.4A72.2,72.2,0,0,0,121.9,96.5a71.46,71.46,0,0,0-25.23-8C93.54,68.59,86.56,52,76,39.37ZM88,216a56,56,0,0,1-5.76-111.7,176.49,176.49,0,0,1-1,31.08c-7.58-1.43-11.35-4.85-11.55-5a8,8,0,0,0-11.32,11.32C59.4,142.71,69.2,152,87.92,152h.25c18.66-.05,28.43-9.28,29.49-10.33a8,8,0,0,0-11.32-11.32,22.31,22.31,0,0,1-8.93,4.44A190.36,190.36,0,0,0,98.34,105,56,56,0,0,1,88,216Zm57-99.89a72.27,72.27,0,0,0-9.82-10.42,56.15,56.15,0,0,1,24.22-15.16A110.84,110.84,0,0,1,167,118.88c-6.09-1.6-9.16-4.37-9.33-4.54A8,8,0,0,0,145,116.11ZM176,200a55.76,55.76,0,0,1-24.69-5.73,71.83,71.83,0,0,0,2.5-63.42A47.47,47.47,0,0,0,175.67,136H176c18.77,0,28.6-9.28,29.66-10.34a8,8,0,0,0-11.32-11.32c-.19.19-3.84,3.49-11.15,5A131.66,131.66,0,0,0,175.7,88h.3a56,56,0,0,1,0,112Z"/></svg>`;
}
