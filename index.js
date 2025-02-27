console.log('----index.js working correctly----')

// this is the questions data that you should use, feel free to change the questions data
// for testing purpose
const data = {
  questions: [
      {
          prompt: 'Slowly, over time, have your parents stopped saying your name and started calling you by generic names like "champ", "kiddo", "disappointment", or "buddy"?',
          options: {
              A: "They usually say my name two to five times every sentence to make sure they don't forget it.",
              B: "When I call, they tell me to 'hold on, I need to check your birth certificate.'",
              C: "They usually ask me if I'm calling the wrong number.",
              D: "I never talk to my parents."
          }
      },
      {
          prompt: 'When was the last time your parents expressed disappointment in you?',
          options: {
              A: "Never. I am a paradigm of human excellence.",
              B: "The third time they caught me in a compromising position with a peach.",
              C: "When I asked them for a single bean.",
              D: "When I called them over the phone sobbing, telling them that I miss them and wish they were a larger presence in my life."
          }
      },
      {
          prompt: 'How much of your childhood trauma stems specifically from the way your parents raised you?',
          options: {
              A: "T-trauma? Who has that? Ha. Hahahahahahahahah-",
              B: "My parents are two very nice, gentle people who never really wanted to commit to the responsibilities of childrearing and I suffered for it.",
              C: "Let's not talk about it.",
              D: "I was raised as an upstanding, moral individual thanks to the occasional spanking."
          }
      },
      {
          prompt: 'Do you often dream of your mother giving you a nice, warm sponge bath, as if your brain is craving maternal comfort?',
          options: {
              A: "Yes, but it is my father who is doing the sponging.",
              B: "No, I do not dream because I cannot fall asleep at night because I worry that my parents hate me.",
              C: "Yes, except I wasn't dreaming, and I was, in fact, remembering the last night I spent time with my mother before returning to school.",
              D: " I'm allergic to sponges, so this is not a dream, but a nightmare."
          }
      },
      {
          prompt: "If you were asked to identify the sound of your father's voice, would you be able to do it?",
          options: {
              A: "No, because my father's voice is identical to that of James Earl Jones and I think every man sounds like James Earl Jones.",
              B: "No, because my father has a medical condition that does not allow him to speak.",
              C: "No, because I have not talked to my father since I left home.",
              D: "No, because my father is a chronic smoker, smokes twenty cigarettes a day, and as a result his voice becomes more unrecognizable with every passing day."
          }
      },
      {
          prompt: "If you do not call your parents, will they ever call you?",
          options: {
              A: "No.",
              B: "No.",
              C: "No.",
              D: "No.",
          }
      },
  ],
  results: [
      "Your parents don't miss you and just feel obligated to talk to you when they call. You are a nuisance in their life and a constant drain on their financial resources. You're the reason they weren't able to go to Cancun this year, and you should be ashamed of it.",
      "Your parents don't miss you and just feel obligated to talk to you! You are their greatest disappointment, and you will never live up to the high expectations set by your older sibling. You will forever live in their shadow, and your parents will leave everything to your high-achieving sibling and will only leave you one bean.",
      "Your parents feel obligated to talk to you, but still love you. They are just rediscovering themselves in their old age and deserve the time to do so. They'll always be there for you, and are your biggest supporters. I hope you give them the chance to do so.",
      "Your parents don't miss you, and you are in fact a horrible person. Your parents are right to disown you. I am sorry, but you will need to put yourself up for adoption right now.",
  ]
}

// Write your code below...
function getResult() {
    const answers = [];
    const frequencies = {};

    data["questions"].forEach(function(question, index) {
        const selection = $('input[name="question_'+index+'"]:checked').val();
        if (selection) {
            answers.push(selection);
            frequencies[selection] = frequencies[selection] ? frequencies[selection] + 1 : 1;
        } else { //unanswered question
            $('html, body').animate({scrollTop: $('#question_'+index).offset().top}, 1000);
            this.setAttribute("class", "not_answered")

        }
    })

    console.log(answers, frequencies);
    const result = Object.keys(frequencies).reduce(function(a, b) {
        return frequencies[a] > frequencies[b] ? a : b;
    })
    const result_index = result.toLocaleLowerCase().charCodeAt(0) - 97;

    $('#result').html("<h3>Result:</h3>" + data["results"][result_index])
    console.log(result, result_index);

    $('input:radio').attr("disabled", true);
}

$(document).ready(function() {
    console.log("start")
    // load questions
    data["questions"].forEach(function (question, index) {
        const question_index = "question_" + index;

        const question_container = document.createElement("div");
        question_container.setAttribute("id", question_index);
        question_container.setAttribute("class", "question");

        const answer_container = document.createElement("div");
        answer_container.setAttribute("class", "radio_answers")

        $(question_container).append("<h4>Question " + (index + 1) + ": " + question.prompt + "</h4>");
        Object.entries(question.options).forEach(function ([key, val]) {
            // console.log(key, val)
            const answer_choice = key + ": " + val;
            const answer_index = question_index + "_" + key;
            $(answer_container).append(
                "<div class='indiv_radio_container'>" +
                "<input type='radio' id=" + answer_index + "' name=" + question_index + " title=" + answer_index + " value=" + key + ">" +
                "<label for=" + answer_index + "'>" + answer_choice + "</label>" +
                "</div><br>");
        })
        $(question_container).append(answer_container);
        $('#quiz').append(question_container)
    })

    $('#submit').on('click', function (event) {
        event.preventDefault();
        getResult();
    })

    $('#retake').click('click', function () {
        $('input:radio').prop("checked", false).attr("disabled", false)
        $('#result').html('')
    })


})