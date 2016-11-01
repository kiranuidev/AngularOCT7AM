(function () {
    //step 1. create employee List
    //step 2: loop through the employees
    //step 3: get each employee
    //step 4: build tr tag
    //step 5: build td tags for id,fname,lname
    //step 6: append td to tr.
    //step 7  append tr to table.
    var ctrls = {};
    ctrls.empTable = document.getElementById("tblEmployees");
    var employees = [{
            empId: 100,
            fName: "Kiran",
            lName: "PVS"
        },
        {
            empId: 101,
            fName: "Sneha",
            lName: "P"
        }, ];

    function buildTrTag(emp) {
        //step 4:
        var trForEmployee = document.createElement("tr");
        
         //step 5: build td tags for id,fname,lname
        var tdForEmpId = document.createElement("td");
        tdForEmpId.textContent=emp.empId;
        
        var tdForFName = document.createElement("td");
        tdForFName.textContent= emp.fName;
        
        var tdForLName = document.createElement("td");
        tdForLName.textContent=emp.lName;
        
       //step 6: append td to tr.
        trForEmployee.appendChild(tdForEmpId);
        trForEmployee.appendChild(tdForFName);
        trForEmployee.appendChild(tdForLName);
        console.log(trForEmployee);
        
        //step 7  append tr to table.
        ctrls.empTable.appendChild(trForEmployee);
        


    }



    function buildEmployeeTable() {
        //step2. 
        for (var i = 0; i < employees.length; i++) {
            var employee = employees[i];
            //step 3 build tr tag
            buildTrTag(employee);
        }
    }


    function init() {
        buildEmployeeTable();
    }

    init();

})();
