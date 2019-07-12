// import MathJax from 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=AM_HTMLorMML';
const MathJaxRender = {
    initialize() {
        MathJax.Hub.Config({
            showMathMenu: false,
            jax: ["input/AsciiMath", "output/HTML-CSS"],
            asciimath2jax: {
                delimiters: [['`', '`']]
            },
            "HTML-CSS": {
                styles: {
                    ".MathJax": {
                        "text-align": "center",
                        color: "#6c757d !important"
                    }
                }
            }
        });

        MathJax.Hub.Register.StartupHook("End",function () {
            //console.log("end hook");
        });
        setTimeout(() => {
            if (window.MathJax) {
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
            }
        },1000);
    }
}

export default MathJaxRender;
