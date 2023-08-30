const CANDIDATOS = {
    candidato01Nome: "Cleidiane Nunes",
    candidato01Num: 889,
    candidato02Nome: "Jorge Brga",
    candidato02Num: 847,
    candidato03Nome: "Renan Souza",
    candidato03Num: 515,
    brancoNome: "Branco",
    brancoNum: 0,
    nuloNome: "Nulo",
}

var qtdVotoscandidato01 = 0;
var qtdVotoscandidato02 = 0;
var qtdVotoscandidato03 = 0;
var qtdVotosBranco = 0;
var qtdVotosNulo = 0;

do {
    do {
        do {
            var testeLetra = false;
            var voto = prompt(`               Bem-vindo a votação!
        Candidatos:
            ${CANDIDATOS.candidato01Nome} : ${CANDIDATOS.candidato01Num}
            ${CANDIDATOS.candidato02Nome} : ${CANDIDATOS.candidato02Num}
            ${CANDIDATOS.candidato03Nome} : ${CANDIDATOS.candidato03Num}
            ${CANDIDATOS.brancoNome} : ${CANDIDATOS.brancoNum}
        Vote:`);

            for (let i = 0; i < voto.length; i++) {
                if (isNaN(Number(voto[i]))) {
                    testeLetra = true;
                    break;
                }
            }
        } while (testeLetra);

        voto = Number(voto);

        switch (voto) {
            case CANDIDATOS.candidato01Num:
                qtdVotoscandidato01++;
                break;
            case CANDIDATOS.candidato02Num:
                qtdVotoscandidato02++;
                break;
            case CANDIDATOS.candidato03Num:
                qtdVotoscandidato03++;
                break;
            case CANDIDATOS.brancoNum:
                qtdVotosBranco++;
                break;
            default:
                qtdVotosNulo++;
                break;
        }

        var finalizar = prompt("Deseja finalizar a votação? (SIM | NÃO);").toUpperCase();

    } while (finalizar !== "SIM");

    alert(`Final das Eleições
Votos por Candidatos:
    ${CANDIDATOS.candidato01Nome} : ${qtdVotosCandidato01}
    ${CANDIDATOS.candidato02Nome} : ${qtdVotoscandidato02}
    ${CANDIDATOS.candidato03Nome} : ${qtdVotoscandidato03}
    ${CANDIDATOS.brancoNome} : ${qtdVotosBranco}
    ${CANDIDATOS.nuloNome} : ${qtdVotosNulo}`);

    var eleicaoIndef = false;

    if (qtdVotoscandidato01 > qtdVotoscandidato02 && qtdVotoscandidato01 > qtdVotoscandidato03) {
        alert(`${CANDIDATOS.candidato01Nome} venceu a eleição!`);
    } else if (qtdVotoscandidato02 > qtdVotoscandidato01 && qtdVotoscandidato02 > qtdVotoscandidato03) {
        alert(`${CANDIDATOS.candidato02Nome} venceu a eleição!`);
    } else if (qtdVotoscandidato03 > qtdVotoscandidato01 && qtdVotoscandidato03 > qtdVotoscandidato02) {
        alert(`${CANDIDATOS.candidato03Nome} venceu a eleição!`);
    } else {
        alert("Eleições Indefinidas!");
        eleicaoIndef = true;
    }

} while (eleicaoIndef);