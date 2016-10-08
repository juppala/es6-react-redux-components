import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "clip-foreground": {
        "background": "-webkit-linear-gradient(#0ede9b, #2c1b73)",
        "WebkitBackgroundClip": "text",
        "WebkitTextFillColor": "transparent"
    }
});