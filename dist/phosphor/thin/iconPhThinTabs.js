export const iconPhThinTabs = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M251.81,166.86h0l-22.29-74.3A11.92,11.92,0,0,0,218.05,84H208a4,4,0,0,0,0,8h10.05a4,4,0,0,1,3.83,2.85L242.62,164H203L181.54,92.55A11.92,11.92,0,0,0,170.05,84H160a4,4,0,0,0,0,8h10.05a4,4,0,0,1,3.83,2.85L194.62,164H155L133.54,92.55A11.92,11.92,0,0,0,122.05,84H38a11.92,11.92,0,0,0-11.49,8.55L4.17,166.85c0,.06,0,.12,0,.17A4,4,0,0,0,8,172H248a4,4,0,0,0,4-4A3.89,3.89,0,0,0,251.81,166.86Zm-217.69-72A4,4,0,0,1,38,92h84.1a4,4,0,0,1,3.83,2.85L146.62,164H13.38Z"/></svg>`;
}
