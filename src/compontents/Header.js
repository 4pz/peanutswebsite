import React from "react"
import axios from "axios";

function Header() {

    function encode() {
        var value = document.getElementById("formvalue").value
        axios.get("https://peanutsrestapi.herokuapp.com/encode?value=" + value)
            .then(response => {
                var encodedvalue = document.getElementById("encodedvalue")
                encodedvalue.value = response.data
            })
            .catch(console.error)
    }

    function clear() {
        var value = document.getElementById("formvalue")
        var encodedvalue = document.getElementById("encodedvalue")
        encodedvalue.value = ""
        value.value = ""
    }

    return (
        <div className="container">
            <div className="half">
                <textarea id="formvalue" rows = "20" cols = "136" name = "value" >

                </textarea>
                <input id="formsubmit" type="submit" value="Encode" onClick={encode}></input>
            </div>
            <div className="half">
                <textarea id="encodedvalue" rows = "20" cols = "136" name = "value" >

                </textarea>
                <input id="formsubmit" type="submit" value="Clear" onClick={clear}></input>
            </div>
        </div>
    )
}

export default Header