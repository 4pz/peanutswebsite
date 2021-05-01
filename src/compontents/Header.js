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

    function decode() {
        var value = document.getElementById("formvalue1").value
        axios.get("https://peanutsrestapi.herokuapp.com/decode?value=" + value)
            .then(response => {
                var encodedvalue = document.getElementById("decodedvalue")
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

    function clear1() {
        var value = document.getElementById("formvalue1")
        var encodedvalue = document.getElementById("decodedvalue")
        encodedvalue.value = ""
        value.value = ""
    }

    return (
        <div className="container">
            <div class="sec">
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
            <div class="sec">
                <div className="half">
                    <textarea id="formvalue1" rows = "20" cols = "136" name = "value" >

                    </textarea>
                    <input id="formsubmit" type="submit" value="Decode" onClick={decode}></input>
                </div>
                <div className="half">
                    <textarea id="decodedvalue" rows = "20" cols = "136" name = "value" >

                    </textarea>
                    <input id="formsubmit" type="submit" value="Clear" onClick={clear1}></input>
                </div>
            </div>
            <h1>Results for Decoding are not 100% Accurate</h1>
        </div>
    )
}

export default Header