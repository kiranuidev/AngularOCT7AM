(
    function () {
        var profile = {
            firstName: "Kiran",
            lastName: "paturi"
        };

        /*function displayProfile(){
            var fName=document.getElementById("txtFirstName");
            fName.value =profile.firstName;//set property
            lName =document.getElementById("txtLastName");
            lName.value=profile.lastName;
        }*/

        /*function displayProfile() {
            getElementsByTagName()
             This will give you an array of elements with
             the same tag name.
            
            var inputs = document.getElementsByTagName("input");
            console.log(inputs);
            for(var i=0;i<inputs.length;i++){
                inputs[i].value=profile.firstName;
                inputs[i].style.backgroundColor="red";
            }
        }*/
        function displayProfile(){
            var classElements = document.getElementsByClassName("label-control");
             console.log(classElements);
            for(var i=0;i<classElements.length;i++){
             classElements[i].style.backgroundColor="yellow";
            }
        
        }

        displayProfile();
    }
)();
