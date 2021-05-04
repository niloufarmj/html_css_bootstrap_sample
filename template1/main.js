
$(document).ready(function(){

    $.fn.toggleClick=function(){
        var functions=arguments
        return this.click(function(){
            var iteration=$(this).data('iteration')||0
            //	console.log(iteration)
            functions[iteration].apply(this,arguments)
            iteration= (iteration+1) %functions.length
            $(this).data('iteration',iteration)
        })
    }

    $("#change-blue").toggleClick(
        function(){$("#row1").css("color", "blue");},
        function(){$("#row1").css("color","white");
        });

    $("#change-pink").toggleClick(
        function(){$("#row2").css("color", "pink");},
        function(){$("#row2").css("color","white");
        });

    $("#change-yellow").toggleClick(
        function(){$("#row3").css("color", "yellow");},
        function(){$("#row3").css("color","white");
        });

    $("#change-green").toggleClick(
        function(){$("#row4").css("color", "green");},
        function(){$("#row4").css("color","white");
        });

    $("#border1").toggleClick(
        function () {
        $("#row1").css("border-bottom", "4px solid #ff2060");
        $("#row2").css("border-bottom", "none");
        $("#row3").css("border-bottom", "none");
        $("#row4").css("border-bottom", "none");
    },
      function () {
          $("#row1").css("border-bottom", "none");
          $("#row2").css("border-bottom", "none");
          $("#row3").css("border-bottom", "none");
          $("#row4").css("border-bottom", "none");
      });

    $("#border2").toggleClick(
        function () {
            $("#row2").css("border-bottom", "4px solid #ff2060");
            $("#row1").css("border-bottom", "none");
            $("#row3").css("border-bottom", "none");
            $("#row4").css("border-bottom", "none");
        },
        function () {
            $("#row1").css("border-bottom", "none");
            $("#row2").css("border-bottom", "none");
            $("#row3").css("border-bottom", "none");
            $("#row4").css("border-bottom", "none");
        });

    $("#border3").toggleClick(
        function () {
            $("#row3").css("border-bottom", "4px solid #ff2060");
            $("#row2").css("border-bottom", "none");
            $("#row1").css("border-bottom", "none");
            $("#row4").css("border-bottom", "none");
        },
        function () {
            $("#row1").css("border-bottom", "none");
            $("#row2").css("border-bottom", "none");
            $("#row3").css("border-bottom", "none");
            $("#row4").css("border-bottom", "none");
        });

    $("#border4").toggleClick(
        function () {
            $("#row4").css("border-bottom", "4px solid #ff2060");
            $("#row2").css("border-bottom", "none");
            $("#row3").css("border-bottom", "none");
            $("#row1").css("border-bottom", "none");
        },
        function () {
            $("#row1").css("border-bottom", "none");
            $("#row2").css("border-bottom", "none");
            $("#row3").css("border-bottom", "none");
            $("#row4").css("border-bottom", "none");
        });
});