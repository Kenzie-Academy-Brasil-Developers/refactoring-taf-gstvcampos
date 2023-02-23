// testar altura
function heightTest(gender, height) {
    if (((gender == "male") && (height >= 1.70)) || // Teste masculino
    ((gender == "female") && (height >= 1.60))) { // Teste feminino
        return true
    }
}
// teste barra
function barTest(gender, barReps, barSeconds) {
    if (((gender == "male") && (barReps >= 6 || barSeconds <= 15)) || //Teste masculino
    ((gender == "female") && (barReps >= 5 || barSeconds <= 12))) { //Teste feminino
        return true
    }
}
// teste abdominais
function absTest(abs) {
    if (abs >= 41) {
        return true
    }
}
// teste corrida
function runTest(gender, runDistance, runTime) {
    if (((gender == "male") && ((runDistance >= 3000 && runTime <= 720) || (runDistance >= 5000 && runTime <= 1200))) || 
    (gender == "female") && ((runDistance >= 4000 && runTime <= 900) || (runDistance >= 6000 && runTime <= 1320))) {
        return true
    }
}
// teste natação
function swimTest(swimDistance, swimTime, diveTime) {
    if ((swimDistance >= 100 && swimTime <= 60) || (diveTime <= 30)) {
        return true
    }
}
// caixa alta
function showMessage(message) {
    console.log(message.toUpperCase());
}

function areCandidateResultsValid(gender, height, barReps, barSeconds, abs, runDistance, runTime, swimDistance, swimTime, diveTime) { 
    if (
        heightTest(gender, height) && 
        barTest(gender, barReps, barSeconds) && 
        absTest(abs) && 
        runTest(gender, runDistance, runTime) && 
        swimTest(swimDistance, swimTime, diveTime)
        ) {
        return true
    }
    return false
}

// Chamando a função com os parametros recebidos via script de teste
// e atribuindo a variavel que devera ser mostrada no console
const areCandidateValid = areCandidateResultsValid(
    process.argv[2], // Genero
    process.argv[3], // Altura
    process.argv[4], // Repetições de barra
    process.argv[5], // Tempo de barra em segundos
    process.argv[6], // Abdominais
    process.argv[7], // Distancia percorrida em metros
    process.argv[8], // Tempo total da corrida em segundos
    process.argv[9], // Distancia do nado em metros
    process.argv[10], // Tempo total de nado em segundos
    process.argv[11], // Tempo total de mergulho em segundos
);

areCandidateResultsValid()
// Chame aqui a função que mostra o resultado no console
if (areCandidateResultsValid()) {
    showMessage("true")
} else {
    showMessage("false")
}
