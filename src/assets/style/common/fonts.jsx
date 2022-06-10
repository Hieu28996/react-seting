import { css } from 'styled-components';
import QualyWOFF from '../../fonts/Qualy/Qualy.woff'
import QualyWOFF2 from '../../fonts/Qualy/Qualy.woff2';

export const FontName = {
    Qualy: {
        woff: QualyWOFF,
        woff2: QualyWOFF2,
    }
}

export const fontFace = css`
    @font-face {
        font-family: "SofiaPro-Medium";
        src: url(${FontName.Qualy.woff2}) format('woff2'), url(${FontName.Qualy.woff2}) format('woff');
    }
`


// export const fonts = {
//     @font-face {
//         font-family: "SofiaPro-Medium";
//         src: url('../fonts/SofiaProMedium/font.woff2') format('woff2'), url('../fonts/SofiaProMedium/font.woff') format('woff');
//     }
// }