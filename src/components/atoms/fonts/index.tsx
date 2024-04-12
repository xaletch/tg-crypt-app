import { Global } from "@emotion/react";

export const Fonts = () => {
  return (
    <Global
      styles={`
      /* inter-latin-300-normal */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-display: swap;
        font-weight: 300;
        src: url(https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-300-normal.woff2) format('woff2'), url(https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-300-normal.woff) format('woff');
        unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
      }
      
      /* inter-latin-400-normal */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url(https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.woff2) format('woff2'), url(https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.woff) format('woff');
        unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
      }
      
      /* inter-latin-500-normal */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-display: swap;
        font-weight: 500;
        src: url(https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-500-normal.woff2) format('woff2'), url(https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-500-normal.woff) format('woff');
        unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
      }
      
      /* inter-latin-600-normal */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-display: swap;
        font-weight: 600;
        src: url(https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-600-normal.woff2) format('woff2'), url(https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-600-normal.woff) format('woff');
        unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
      }
      
      /* inter-latin-700-normal */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-display: swap;
        font-weight: 700;
        src: url(https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.woff2) format('woff2'), url(https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.woff) format('woff');
        unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
      }
      
      /* inter-cyrillic-300-normal */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-display: swap;
        font-weight: 300;
        src: url(https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/cyrillic-300-normal.woff2) format('woff2'), url(https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/cyrillic-300-normal.woff) format('woff');
        unicode-range: U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;
      }
      
      /* inter-cyrillic-400-normal */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url(https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/cyrillic-400-normal.woff2) format('woff2'), url(https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/cyrillic-400-normal.woff) format('woff');
        unicode-range: U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;
      }
      
      /* inter-cyrillic-500-normal */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-display: swap;
        font-weight: 500;
        src: url(https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/cyrillic-500-normal.woff2) format('woff2'), url(https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/cyrillic-500-normal.woff) format('woff');
        unicode-range: U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;
      }
      
      /* inter-cyrillic-600-normal */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-display: swap;
        font-weight: 600;
        src: url(https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/cyrillic-600-normal.woff2) format('woff2'), url(https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/cyrillic-600-normal.woff) format('woff');
        unicode-range: U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;
      }
      
      /* inter-cyrillic-700-normal */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-display: swap;
        font-weight: 700;
        src: url(https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/cyrillic-700-normal.woff2) format('woff2'), url(https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/cyrillic-700-normal.woff) format('woff');
        unicode-range: U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;
      }
      `}
    />
  );
};
