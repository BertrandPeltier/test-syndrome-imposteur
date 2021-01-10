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

    start: function() {
        buttonStart = document.getElementById('startBtn');
        buttonStart.addEventListener('click', app.handleStartClick);
    },

    handleStartClick: function() {

        questionsListElement = document.getElementById('questionsList');

        for (let question = 0; question < app.questions.length; question++ ) {
            questionsListElement.innerHTML += `
            <div id="question" class="question">
                <label for="question${question}">${app.questions[question]}</br></label>
                <select name="question${question}" id="question${question}">
                    <option value="">--Votre choix--</option>
                    <option value="1">Pas du tout</option>
                    <option value="2">Rarement</option>
                    <option value="3">Parfois</option>
                    <option value="4">Souvent</option>
                    <option value="5">Tout le temps</option>
                </select>
            </div>   
            `;
        };

        submitBtnZoneElement = document.getElementById('submitBtnZone');
        submitBtnZoneElement.innerHTML = `
            <button id="submitBtn" type="button">Voir résultat</button>
        `;
      
        app.submit();

      },

    submit: function() {

        buttonSubmitElement = document.getElementById('submitBtn');
        buttonSubmitElement.addEventListener('click', app.handleSubmitClick);
    },

    handleSubmitClick: function() {
        contentElement = document.getElementById('content');

        scoreElement = document.getElementById('score');

        score = [];
        for (let answer = 0; answer < app.questions.length; answer++) {
            score.push(Number(document.getElementById(`question${answer}`).value));
        };
        
        finalScore = score.reduce(function(accumulateur, valeurCourante){
            return accumulateur + valeurCourante;
        });
        
        scoreElement.innerHTML = finalScore;
        contentElement.innerHTML = '';

    }

};


document.addEventListener('DOMContentLoaded', app.start);

