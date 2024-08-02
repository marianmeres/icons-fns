export const iconPhLightPanorama = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240.53,52.9a13.88,13.88,0,0,0-12.12-2.42l-3.48.94C206,56.51,170.87,66,128,66S50,56.51,31.07,51.42l-3.48-.94A14,14,0,0,0,10,64V192a13.95,13.95,0,0,0,17.61,13.52l3.18-.85C49.7,199.53,84.91,190,128,190s78.3,9.53,97.21,14.66l3.18.85A14,14,0,0,0,246,192V64A13.93,13.93,0,0,0,240.53,52.9ZM22.78,62.42A2,2,0,0,1,24,62a2.06,2.06,0,0,1,.52.08l3.44.92C47.37,68.24,83.54,78,128,78s80.63-9.76,100.06-15l3.44-.92A2,2,0,0,1,234,64V187.57L172.53,126.1a14,14,0,0,0-19.8,0l-21.42,21.41L85.9,102.1a14,14,0,0,0-19.8,0L22,146.2V64A2,2,0,0,1,22.78,62.42ZM220.41,191a400.39,400.39,0,0,0-56.52-10.86L139.8,156l21.41-21.41a2,2,0,0,1,2.83,0ZM27.65,193.07l-3.15.86A2,2,0,0,1,22,192V163.17l52.58-52.58a2,2,0,0,1,2.84,0l67.91,67.91c-5.63-.32-11.42-.5-17.33-.5C83.31,178,45.72,188.18,27.65,193.07ZM194,108a10,10,0,1,1,10,10A10,10,0,0,1,194,108Z"/></svg>`;
}