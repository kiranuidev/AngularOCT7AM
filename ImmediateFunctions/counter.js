/*var companyName="K3informatics";
function displayAlert(){
    alert("I am k3");
}*/

var counter = {};
//company.companyName="k3informatics";


(
    function (context) {

        var id = 0;
        context.next = function () {
            return id++;
        };
        context.previous = function () {
            return id--;
        };

    }
)
(counter);

counter.next();
counter.next();
counter.previous();

