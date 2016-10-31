(
    function () {
        var ctrls = {};
        ctrls.firstName = document.getElementById("txtFirstName");
        ctrls.lastName = document.getElementById("txtLastName");

        ctrls.countries = document.getElementById("ddlCountry");

        ctrls.agreeTerms = document.getElementById("chkAgree");

        ctrls.registerButton = document.getElementById("btnRegister");

        function readData() {

            var profile = {};
            profile.firstName = ctrls.firstName.value;
            profile.lastName = ctrls.lastName.value;
            profile.country = ctrls.countries.value;
            profile.agreeTerms = ctrls.agreeTerms.checked;

            var indexData = ctrls.countries.selectedIndex;

        }


        function changeColor() {
            ctrls.registerButton.style.backgroundColor = "orange";
        };

        function alphabetsOnly(evt) {
            console.log(evt);
            if ((evt.keyCode >= 65 && evt.keyCode <= 90) ||
                (evt.keyCode >= 97 && evt.keyCode <= 122)
            ) {
                console.log("Valid");
            } else {
                console.log("Invalid");
                evt.preventDefault();
            }

        }


        function enableRegister(evt) {
            //console.log(evt);
            console.log(this.checked);
            if (this.checked) {
                //to show the button.
                ctrls.registerButton.style.display ="block";
            } else {
                
                //to hide the button
                ctrls.registerButton.style.display = "None";
            }

        }

        function bindEvents() {
            ctrls.agreeTerms.addEventListener("click", enableRegister);

            ctrls.registerButton.addEventListener("click", readData);
            ctrls.registerButton.addEventListener("mouseover", changeColor);
            ctrls.firstName.addEventListener("keypress", alphabetsOnly);
            ctrls.lastName.addEventListener("keypress", alphabetsOnly);
        }

        bindEvents();
    }
)();
