import my from "./variables.js"

document.addEventListener("DOMContentLoaded", e => {
    const includeHTML = async (el, url) => {
        try {
            let options = {
                method: "GET",
                headers: {
                    "Content-type":"text/html; charset=utf-8"
                }
            },
            res = await axios.get(`${my}${url}`, options),
            json = await res.data;
            // console.log(res)
            // console.log(json)
    
            if(!res.status == 200) throw { status: res.status, statusText: res.statusText }
            
            el.outerHTML = json;
            
    
        } catch(err) {
            let message = err.statusText || "Ocurrio un error";
            // console.log(message);
        }
    }
    
    
        document
    .querySelectorAll("[data-include]")
    .forEach((el) => includeHTML(el, el.getAttribute("data-include")));
});
