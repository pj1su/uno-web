module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        "uno-point": "#3F3DE5",
        "uno-pointlightsub": "#DADBFB",
        "uno-pointdarksub": "#9899CA",
        "uno-black": "#292A29",
        "uno-darkmode": "#5D6265",
        "uno-darkmodegray": "#C8C8C8",
        "uno-gray": "#79797C",
        "uno-success": "#007B40",
        "uno-focus": "#E85B81",
        "uno-error": "#F03D3E",
        "uno-background": "#F2F5FA",
      }
    },
    fontSize: {
      h1: ["30px",{
        lineHeight: "40px",
      }],
      h2: ["20px",{
        lineHeight: "30px",
      }],
      h3: ["15px",{
        lineHeight: "25px",
      }],
      h4: ["10px",{
        lineHeight: "15px",
      }],
      h5: ["8px",{
        lineHeight: "12px",
      }],
    },
    spacing: {
      "7": "1.75rem",
    },
    borderRadius: {
      "14": "14px",
      "16": "16px",
    },
    fontFamily: {
      'montserrat': ['Montserrat'],
    }
  },
  variants: {},
  plugins: [],
}
