import Typography from "typography"
// import doelgerTheme from "typography-theme-doelger"
import lincolnTheme from "typography-theme-lincoln"

// simple style override
lincolnTheme.overrideStyles = () => ({
  a: {
    textDecoration: "none",
    textShadow: "none",
  },
  p: {
    fontFamily: "Avenir, Helvetica, Lora",
  },
})

// const typography = new Typography(doelgerTheme)
const typography = new Typography(lincolnTheme)

export default typography
