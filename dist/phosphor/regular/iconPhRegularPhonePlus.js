export const iconPhRegularPhonePlus = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M214.36,166.46l-47.1-21.11-.12-.06a16,16,0,0,0-15.18,1.4,8.12,8.12,0,0,0-.75.56L126.87,168c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06.61.61,0,0,1,0-.12L89.54,41.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,24,88c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,214.36,166.46ZM168,216A128.14,128.14,0,0,1,40,88,40.2,40.2,0,0,1,74.87,48a.61.61,0,0,0,0,.12l21,47L75.2,119.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,6.92,6.92,0,0,0,.74-.57L160.89,160l47,21.06h0s.08,0,.11,0A40.21,40.21,0,0,1,168,216ZM136,80a8,8,0,0,1,8-8h24V48a8,8,0,0,1,16,0V72h24a8,8,0,0,1,0,16H184v24a8,8,0,0,1-16,0V88H144A8,8,0,0,1,136,80Z"/></svg>`;
}
