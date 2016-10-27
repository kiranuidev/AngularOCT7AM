(
    function () {
        var ctrls = {};
        ctrls.firstName = document.getElementById("txtFirstName");
        ctrls.lastName = document.getElementById("txtLastName");
        ctrls.registerButton = document.getElementById("btnRegister");

        function readData() {

            var profile = {};
            profile.firstName = ctrls.firstName.value;
            profile.lastName = ctrls.lastName.value;

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

        function bindEvents() {
            ctrls.registerButton.addEventListener("click", readData);
            ctrls.registerButton.addEventListener("mouseover", changeColor);
            ctrls.firstName.addEventListener("keypress", alphabetsOnly);
            ctrls.lastName.addEventListener("keypress", alphabetsOnly);
        }

        bindEvents();
    }
)();
