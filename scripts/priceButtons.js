


document.addEventListener("DOMContentLoaded", () => {
    function buttons() {
        const $firstBtn = document.querySelector("#firstPricesDisplayer")
        const $secondBtn = document.querySelector("#secondPricesDisplayer")
        const $firstDisplay = document.querySelector("#firstPrices")
        const $secondDisplay = document.querySelector("#secondPrices")
    
        $firstBtn.addEventListener("click", () => {
            $firstDisplay.classList.add("displayed")
            $firstDisplay.classList.remove("notDisplayed")
            $secondDisplay.classList.add("notDisplayed")
            $secondDisplay.classList.remove("Displayed")
    
        })
    
        $secondBtn.addEventListener("click", () => {
            $firstDisplay.classList.remove("displayed")
            $firstDisplay.classList.add("notDisplayed")
            $secondDisplay.classList.remove("notDisplayed")
            $secondDisplay.classList.add("Displayed")
        })
    }

    buttons()
});
