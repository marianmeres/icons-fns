export const iconFaSolidHouseTsunami = (props) => {
    const { size, class: cls, style, strokeWidth } = props || {};
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 576 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M80.8 136.5C104.9 93.8 152.6 64 209 64c16.9 0 33.1 2.7 48.2 7.7c16.8 5.5 34.9-3.6 40.4-20.4s-3.6-34.9-20.4-40.4C255.8 3.8 232.8 0 209 0C95.2 0 0 88 0 200c0 91.6 53.5 172.1 142.2 194.1c13.4 3.8 27.5 5.9 42.2 5.9c.7 0 1.4 0 2.1-.1c1.8 0 3.7 .1 5.5 .1l0 0c31.9 0 60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.5 18.9 80.4 18.9c33 0 65.5-10.3 94.5-25.8c13.4 8.4 33.7 19.3 58.2 25c17.2 4 34.4-6.7 38.4-23.9s-6.7-34.4-23.9-38.4c-18.1-4.2-36.2-13.3-50.6-25.2c-11.1-9.5-27.3-10.1-39.2-1.7l0 0C439.4 325.2 410.9 336 384 336c-27.5 0-55-10.6-77.5-26.1c-11.1-7.9-25.9-7.9-37 0c-22.4 15.5-49.9 26.1-77.4 26.1c0 0-.1 0-.1 0c-12.4 0-24-1.5-34.9-4.3C121.6 320.2 96 287 96 248c0-48.5 39.5-88 88.4-88c13.5 0 26.1 3 37.5 8.3c16 7.5 35.1 .6 42.5-15.5s.6-35.1-15.5-42.5C229.3 101.1 207.4 96 184.4 96c-40 0-76.4 15.4-103.6 40.5zm252-18.1c-8.1 6-12.8 15.5-12.8 25.6V265c1.6 1 3.3 2 4.8 3.1c18.4 12.7 39.6 20.3 59.2 20.3c19 0 41.2-7.9 59.2-20.3c23.8-16.7 55.8-15.3 78.1 3.4c10.6 8.8 24.2 15.6 37.3 18.6c5.8 1.4 11.2 3.4 16.2 6.2c.7-2.7 1.1-5.5 1.1-8.4l-.4-144c0-10-4.7-19.4-12.7-25.5l-95.5-72c-11.4-8.6-27.1-8.6-38.5 0l-96 72zM384 448c-27.5 0-55-10.6-77.5-26.1c-11.1-7.9-25.9-7.9-37 0C247 437.4 219.5 448 192 448c-26.9 0-55.3-10.8-77.4-26.1l0 0c-11.9-8.5-28.1-7.8-39.2 1.7c-14.4 11.9-32.5 21-50.6 25.2c-17.2 4-27.9 21.2-23.9 38.4s21.2 27.9 38.4 23.9c24.5-5.7 44.9-16.5 58.2-25C126.5 501.7 159 512 192 512c31.9 0 60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.5 18.9 80.4 18.9c33 0 65.5-10.3 94.5-25.8c13.4 8.4 33.7 19.3 58.2 25c17.2 4 34.4-6.7 38.4-23.9s-6.7-34.4-23.9-38.4c-18.1-4.2-36.2-13.3-50.6-25.2c-11.1-9.4-27.3-10.1-39.2-1.7l0 0C439.4 437.2 410.9 448 384 448z"/></svg>`;
}
