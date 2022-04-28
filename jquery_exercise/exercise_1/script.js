$(function() {
    // Hide all answers
    $(".answer").hide();

    // Routine for expansions
    $(".expand_contract_toggle").click(function(){
        // Capture ID of question
        let question_number = $(this).attr("id").slice(9);        
        // Generate ID of answer a  number
        let answer_id = "#answer_" + question_number;
        let expand_text_id = "#expand_text_" + question_number;
        if ($(expand_text_id).text() === "+") 
        {
            $(expand_text_id).text("-");
        }
        else
        {
            $(expand_text_id).text("+");
        }
        $(answer_id).toggle()
    });
});