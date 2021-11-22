function result() {

    var students = {

        Ayushi: {
            english: "97",
            science: "89",
            maths: "94",
        },
        Pranali: {
            english: "94",
            science: "77",
            maths: "84",
        },
        Shruti: {
            english: "77",
            science: "70",
            maths: "91",
        },
        Durva: {
            english: "80",
            science: "89",
            maths: "90",
        },
        Aishwarya: {
            english: "80",
            science: "77",
            maths: "89",
        }

    }


    var studentname = document.getElementById('studentname').value;
    var input = studentname.toUpperCase();
    var definition = students[input];
    var output = document.getElementById("output");

    if (definition == undefined) {
        output.innerHTML = '<hr> There is no information. </hr>';
    } else {
        output.innerHTML = '<hr> English score is 97. <hr>Science score is 78. <hr> Maths score is 89 </hr>';

    };
};