export const iconPhDuotoneEarSlashDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,104c0,40-14.44,72-48,112-8.07,9.77-18.34,16-32,16a44,44,0,0,1-44-44c0-41.49-36-28-36-84a80,80,0,0,1,160,0Z" opacity="0.2"/><path d="M213.92,210.62a8,8,0,1,1-11.84,10.76l-35-38.45A24,24,0,0,1,136,160a40.83,40.83,0,0,1,1.21-10L96,104.66A8,8,0,0,1,80,104a47.84,47.84,0,0,1,2.22-14.46L64.5,70A71.47,71.47,0,0,0,56,104c0,26.7,8.53,34.92,17.57,43.64C82.21,156,92,165.41,92,188a36,36,0,0,0,36,36c10.24,0,18.45-4.16,25.83-13.09a8,8,0,1,1,12.34,10.18C155.81,233.64,143,240,128,240a52.06,52.06,0,0,1-52-52c0-15.79-5.68-21.27-13.54-28.84C52.46,149.5,40,137.5,40,104A87.26,87.26,0,0,1,53.21,57.62L42.08,45.38A8,8,0,1,1,53.92,34.62ZM91.09,42.17A72,72,0,0,1,200,104a8,8,0,0,0,16,0A88,88,0,0,0,82.87,28.44a8,8,0,1,0,8.22,13.73Zm69.23,85a8,8,0,0,0,10.78-3.44A41.93,41.93,0,0,0,176,104a48,48,0,0,0-63.57-45.42,8,8,0,0,0,5.19,15.14A32,32,0,0,1,160,104a26,26,0,0,1-3.12,12.34A8,8,0,0,0,160.32,127.12Z"/></svg>`;
}
