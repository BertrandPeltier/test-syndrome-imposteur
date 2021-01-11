const app = {

    questions: [
        'J’ai souvent réussi à un test ou un une tâche, même si j’avais peur de ne pas réussir avant de commencer.',
        'Je peux donner l’impression que je suis plus compétent(e) qu’en réalité.',
        'J’évite, si possible, les évaluations et je crains que les autres m’évaluent.',
        'Quand les gens me félicitent pour quelque chose que j’aurais accompli, j’ai peur de ne pas être capable de rester à la hauteur de leurs attentes, la prochaine fois.',
        'Il m’arrive de penser que j’ai obtenu ma position actuelle ou ma réussite actuelle parce que je me trouvais au bon endroit au bon moment ou parce que j’ai rencontré les bonnes personnes.',
        'J’ai peur que les gens qui sont importants pour moi découvrent que je ne suis pas aussi compétent(e) que ce qu’ils pensent.',
        'Je me souviens plus facilement des moments où je n’ai pas été le/la meilleure par rapport à ceux où j’ai vraiment réussi.',
        'Je réussis rarement un projet ou une tâche aussi bien que ce que j’aurais voulu.',
        'J’ai l’impression ou je crois que les réussites dans ma vie ou dans mon job sont dû à une erreur.',
        'Il m’est difficile d’accepter les compliments ou félicitations qui concernent mon intelligence ou mes accomplissements.',
        'Je pense que mes succès sont dus à une sorte de chance.',
        'Je suis déçu(e) de mes accomplissements actuels et je pense que j’aurais pu faire plus.',
        'Je suis effrayé(e) que les gens découvrent mon manque de connaissances et de compétences.',
        'Lors d’une nouvelle mission ou tâche, j’ai peur d’échouer alors que je j’ai tendance à réussir ce que j’entreprends.',
        'Quand je réussi quelque chose et que je reçois de la reconnaissance pour ce que j’ai accompli, j’ai des doutes quant à mes capacités à réussir à nouveau.',
        'Si je reçois des compliments et de la reconnaissance pour ce que j’ai accompli, j’ai tendance à minimiser l’importance de ce que j’ai fait.',
        'Je compare mes capacités à celles des autres et je pense qu’ils sont, peut-être, plus intelligents que moi.',
        'Je m’inquiète de ne pas réussir un projet ou une évaluation, alors que les gens qui m’entourent se montrent très confiants sur le fait que je réussisse.',
        'Si je dois être promu(e) ou que je dois recevoir une marque de reconnaissance de quelque sorte, j’hésite à en parler aux autres jusqu’à temps que ce soit certain.',
        'Je me sens mal et découragé(e) si je ne suis pas le/la « meilleur(e) » ou au minimum « remarquable » dans les situations de compétitions.'
    ],

    score: [],

    start: function() {
        buttonStart = document.getElementById('startBtn');
        buttonStart.addEventListener('click', app.handleStartClick);
    },

    handleStartClick: function() {

        document.getElementById('explaination').innerHTML = 'Pour chaque question, cochez l’affirmation qui vous correspond le mieux. Répondez de la manière la plus intuitive possible.';
        document.getElementById('explaination').classList.add('explaination');


        startButtonZoneElement = document.getElementById('startBtnZone');
        startButtonZoneElement.innerHTML = '';

        questionsListElement = document.getElementById('questionsList');

        for (let question = 0; question < app.questions.length; question++ ) {
            questionsListElement.innerHTML += `
                <div id="question-${question}">

                    <p id =question-${question}-text>${question + 1} - ${app.questions[question]}</p>
                    <div class="choice">
                        <div>
                            <input type="radio" id="choix1question${question}" name="question${question}" value="1">
                            <label for="choix1question${question}">Pas du tout</label>
                        </div>
                
                        <div>
                            <input type="radio" id="choix2question${question}" name="question${question}" value="2">
                            <label for="choix2question${question}">Rarement</label>
                        </div>
                    
                        <div>
                            <input type="radio" id="choix3question${question}" name="question${question}" value="3">
                            <label for="choix3question${question}">Parfois</label>
                        </div>
                    
                        <div>
                            <input type="radio" id="choix4question${question}" name="question${question}" value="4">
                            <label for="choix4question${question}">Souvent</label>
                        </div>
                    
                        <div>
                            <input type="radio" id="choix5question${question}" name="question${question}" value="5">
                            <label for="choix5question${question}">Tout le temps</label>
                        </div>
                    </div>
            
                </div>  
            `;

            document.getElementById(`question-${question}`).classList.add('question');

            document.getElementById(`question-${question}-text`).classList.add('question_text');
        };
        
        submitBtnZoneElement = document.getElementById('submitBtnZone');
        submitBtnZoneElement.innerHTML = `
            <button id="submitBtn" type="button">Résultat du test</button>
        `;

        document.getElementById('submitBtn').classList.add('submit_button');
      
        app.submit();

    },

    submit: function() {

        buttonSubmitElement = document.getElementById('submitBtn');
        buttonSubmitElement.addEventListener('click', app.handleSubmitClick);
    },

    handleSubmitClick: function() {

        app.score = [];

        allAnswers = true;

        for (let question = 0; question < app.questions.length; question++) {

            for (let choice = 1; choice < 6 ; choice++) {
                choiceElement = document.getElementById(`choix${choice}question${question}`);
                if(choiceElement.checked) {
                    app.score.push(Number(choiceElement.value));
                }
            };
        };

        if (app.score.length !== app.questions.length) {
            alert('Vous devez répondre à toutes les questions.');
            app.submit();
        } else {
            app.displayScore();
        }

    },

    displayScore: function() {
        
        finalScore = app.score.reduce(function(accumulateur, valeurCourante){
            return accumulateur + valeurCourante;
        });

        if (finalScore <= 40) {Interpretation = 'Vous vivez faiblement l’expérience du sentiment d’imposture.'};
        if (finalScore > 40 && finalScore <= 60) { Interpretation = 'Vous vivez modérément l’expérience du sentiment d’imposture.'};
        if (finalScore > 60 && finalScore <= 80) {Interpretation = 'vous vivez fréquemment l’expérience de sentiment d’imposture.'};
        if (finalScore > 80) {Interpretation = 'vous vivez intensément l’expérience du sentiment d’imposture.'};

        contentElement = document.getElementById('content');
        
        contentElement.innerHTML = `
        <h2 id="interpretation_title">Interprétation des résultats</h2>
        <p id="interpretation_text">Le test de l’Imposteur a été développé pour aider les individus à déterminer s’ils ont ou non les caractéristiques correspondant au sentiment d’imposture et si oui dans quelle mesure.</br>
        Après avoir fait le test, il faut additionner le nombre points par réponses pour chaque affirmation.</br>
        Pas du tout = 1point / Rarement = 2 points / Parfois = 3 points / Souvent = 4 points / Tout le temps = 5 points</p>
        
        <ul id="interpretation_liste">
            <li>Si votre score est de 40 ou moins : vous vivez faiblement l’expérience du sentiment d’imposture.</li>
            <li>Si votre score est compris entre 41 et 60 : vous vivez modérément l’expérience du sentiment d’imposture.</li>
            <li>Si votre score est compris entre 61 et 80 : vous vivez fréquemment l’expérience de sentiment d’imposture.</li>
            <li>Si votre score est plus élevé que 80 : vous vivez intensément l’expérience du sentiment d’imposture.</li>
        </ul>

        <P id="interpretation_text2">Plus le score est élevé, le plus fréquemment et sérieusement le Syndrome de l’Imposteur peut interférer dans la vie d’un individu.</p>

        <h2 id="interpretation_title2">Votre score est de ${finalScore}</h2>
        <p id="interpretation_text3">${Interpretation}</P>
      
        `;

        document.getElementById('interpretation_title').classList.add('explaination');
        document.getElementById('interpretation_title2').classList.add('explaination', 'color_background');

        document.getElementById('interpretation_text').classList.add('explaination_text');
        document.getElementById('interpretation_text2').classList.add('explaination_text');
        document.getElementById('interpretation_text3').classList.add('explaination_text', 'color_background');

    },

};


document.addEventListener('DOMContentLoaded', app.start);

