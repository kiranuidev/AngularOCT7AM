(
    function () {
        var user = {};

        function employee() {
            this.empId = "";
            this.firstName = "";
            this.lastName = "";
            var ssn = "";

        }
        //static properties.
        employee.country = "IN";

        var manager = new employee();
        manager.count = 5;

        console.log(manager.count);
        var teamLead = new employee();
        teamLead.employees = 10;

        console.log(manager);
        console.log(teamLead);
        employee.prototype.gender = "";


        var superAdmin = new Object(manager);
        superAdmin.reportingManagersCount = 10;
        console.log(superAdmin);
    }
)();
