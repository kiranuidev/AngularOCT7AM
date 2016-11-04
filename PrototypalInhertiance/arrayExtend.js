(
    function () {
        'use strict';
       

        Array.prototype.getEvenElements = function () {
            var evenElements =[];
            if(this && this.length>0){
                for(var i=0;i<this.length;i++){
                    if(i%2==0){
                        console.log(this[i]);
                        evenElements.push(this[i]);
                    }
                }
            }
            return evenElements;
        };

        
        


    })();
