
function reset() {
    let x = document.querySelectorAll(".resettable");
    x.forEach(el => {
        el.value = '';
        el.innerHTML = '';
    });
}
function createA() {
    let row = document.getElementById("totalRowA").value;
    let col = document.getElementById("totalColA").value;
    let table = "<table>";
    for (i = 1; i <= row; i++) {
        table += "<tr>";
        for (j = 1; j <= col; j++) {
            table += "<td><input type=text size=1 id=a" + i + j + "></td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("matrixFirst").innerHTML = table;
}
function createB() {
    let row = document.getElementById("totalRowB").value;
    let col = document.getElementById("totalColB").value;
    let table = "<table>";
    for (i = 1; i <= row; i++) {
        table += "<tr>";
        for (j = 1; j <= col; j++) {
            table += "<td><input type=text size=1 id=b" + i + j + "></td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("matrixSecond").innerHTML = table;
}
/***********************************MATRIX ADDITION************************************************** */
function plus() {
    let row = parseInt(document.getElementById("totalRowA").value);
    let col = parseInt(document.getElementById("totalColA").value);
    let rowB = parseInt(document.getElementById("totalRowB").value);
    let colB = parseInt(document.getElementById("totalColB").value);
    if (row == rowB && col == colB) {
        let table = "<table>";
        for (i = 1; i <= row; i++) {
            table += "<tr>";
            for (j = 1; j <= col; j++) {
                let answer = parseInt(document.getElementById("a" + i + j).value) + parseInt(document.getElementById("b" + i + j).value);
                table += "<td><input type=text size=1 value=" + answer + "></td>";
            }
            table += "</tr>";
        }
        table += "</table>";
        document.getElementById("ans").innerHTML = table;
    }
    else {
        document.getElementById("ans").innerHTML = "Oops! the dimensions of two matrices must be same!!!!!";
    }
}
/***********************************MATRIX SUBTRACTION************************************************** */
function minus() {
    let row = parseInt(document.getElementById("totalRowA").value);
    let col = parseInt(document.getElementById("totalColA").value);
    let rowB = parseInt(document.getElementById("totalRowB").value);
    let colB = parseInt(document.getElementById("totalColB").value);
    if (row == rowB && col == colB) {
        let table = "<table>";
        for (i = 1; i <= row; i++) {
            table += "<tr>";
            for (j = 1; j <= col; j++) {
                let answer = parseInt(document.getElementById("a" + i + j).value) - parseInt(document.getElementById("b" + i + j).value);
                table += "<td><input type=text size=1 value=" + answer + "></td>";
            }
            table += "</tr>";
        }
        table += "</table>";
        document.getElementById("ans").innerHTML = table;
    }
    else {
        document.getElementById("ans").innerHTML = "Oops! the dimensions of two matrices should be same!!!!!";
    }
}
function mul() {
    if (parseInt(document.getElementById("totalRowA").value) == parseInt(document.getElementById("totalColB").value)) {
        let row = parseInt(document.getElementById("totalRowA").value);
        let col = parseInt(document.getElementById("totalColA").value);
        let table = "<table>";
        for (i = 1; i <= row; i++) {
            table += "<tr>";
            for (let j = 1; j <= col; j++) {
                let answer = 0;
                for (let k = 1; k <= col; k++) {
                    answer += parseInt(document.getElementById("a" + i + k).value) * parseInt(document.getElementById("b" + k + j).value);

                }
                table += "<td><input type=text size=1 value=" + answer + "></td>";
            }
            table += "</tr>";
        }
        table += "</table>";
        document.getElementById("ans").innerHTML = table;
    }
    else {
        document.getElementById("ans").innerHTML = "Oops! the number of rows of matrix A and the number of cols of matrix B should be same!!!!!";
    }
}

function trans() {
    let row = parseInt(document.getElementById("totalRowA").value);
    let col = parseInt(document.getElementById("totalColA").value);
    let table = "<table>";
    for (let i = 1; i <= row; i++) {
        table += "<tr>";
        for (let j = 1; j <= col; j++) {
            let answer = document.getElementById("a" + j + i).value;
            table += "<td><input type=text size=1 value=" + answer + "></td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("ans").innerHTML = table;
}
function pow() {
    let row = parseInt(document.getElementById("totalRowA").value);
    let col = parseInt(document.getElementById("totalColA").value);
    if (row == col) {
        document.getElementById("power_val").innerHTML = "Enter power value: <input type=text size=1 id=p_val>";
        document.getElementById("p_btn").innerHTML = "<button onclick=power();>calculate</button>";
    }
    else {
        document.getElementById("ans").innerHTML = "Oops!!!To find power of the matrix it should be a square matrix!!!"
    }
}
function power() {
    let p = parseInt(document.getElementById("p_val").value);
    let row = parseInt(document.getElementById("totalRowA").value);
    let col = parseInt(document.getElementById("totalColA").value);

    let arr1 = [];
    let ansarr1 = [];
    for (i = 1; i <= row; i++) {
        let arr2 = [];
        let ansarr2 = [];
        for (j = 1; j <= col; j++) {
            arr2.push(parseInt(document.getElementById("a" + i + j).value));
            ansarr2.push(parseInt(document.getElementById("a" + i + j).value));
        }
        arr1.push(arr2);
        ansarr1.push(ansarr2);

    }

    pwr(arr1, ansarr1, p);
}


function pwr(params, ansparams, pw) {
    if (pw <= 0) { document.getElementById("ans").innerHTML = "The power value should be positive"; }
    else if (pw == 1) {
        let table = "<table>";
        for (let i = 0; i < ansparams.length; i++) {
            table += "<tr>";
            for (let j = 0; j < ansparams.length; j++) {
                table += "<td><input type=text size=1 value=" + ansparams[i][j] + "></td>";
            }
            table += "</tr>";
        }
        table += "</table>";
        document.getElementById("ans").innerHTML = table;

    }

    else if (pw >= 2) {
        let ansarr1 = [];
        for (i = 0; i < params.length; i++) {
            let ansarr2 = [];
            for (j = 0; j < params.length; j++) {
                let answer = 0;
                for (k = 0; k < params.length; k++) {
                    answer += parseInt(params[i][k]) * parseInt(ansparams[k][j]);
                }
                ansarr2.push(answer);
            }
            ansarr1.push(ansarr2);
        }
        pwr(params, ansarr1, pw - 1);

    }
}
///////////////////////DITERMINANT OF MATRIX/////////////////////////////
function deter() {
    let row = parseInt(document.getElementById("totalRowA").value);
    let col = parseInt(document.getElementById("totalColA").value);
    let arr = [];
    for (let i = 0; i < row; i++)
        arr[i] = [];
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            arr[i - 1][j - 1] = parseInt(document.getElementById("a" + i + j).value);
        }
    }
    document.getElementById("ans").innerHTML = determinant(arr, arr.length);
}
function cofactor(arr, cofac, l, m) {
    let b = [];
    b = arr.filter(function (val, index) { return index != l; });
    for (let i = 0; i < b.length; i++) {
        cofac[i] = b[i].filter(function (val, index) { return index != m; });
    }
}
function determinant(arr, n) {
    let deter = 0;
    if (n == 1)
        return arr[0][0];
    let cofac = [];
    for (let i = 0; i < n; i++) {
        cofac[i] = [];
    }
    let sign = 1;
    for (let j = 0; j < n; j++) {
        cofactor(arr, cofac, 0, j);
        deter += sign * arr[0][j] * determinant(cofac, n - 1);
        sign = -sign;
    }
    return deter;
}
///////////////////////INVERSE OF MATRIX//////////////////////
function inverse() {
    let row = parseInt(document.getElementById("totalRowA").value);
    let col = parseInt(document.getElementById("totalColA").value);
    let arr = [], inv = [];
    for (let i = 0; i < row; i++) {
        arr[i] = [];
        inv[i] = [];
    }
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            arr[i - 1][j - 1] = parseInt(document.getElementById("a" + i + j).value);
        }
    }
    inver(arr, inv);
    let table = "<table>";
    for (let i = 1; i <= row; i++) {
        table += "<tr>";
        for (let j = 1; j <= col; j++) {

            table += "<td><input type=text size=5 value=" + inv[i - 1][j - 1] + "></td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("ans").innerHTML = table;
}
function inver(a, inv) {
    let det = determinant(a, a.length);
    if (det == 0) {
        document.getElementById("ans").innerHTML = "Can't find it's inverse, It determinant value is 0";
    }
    else {
        let adj = [];
        for (let i = 0; i < a.length; i++)
            adj[i] = [];
        adjecent(a, adj);
        for (let i = 0; i < a.length; i++)
            for (let j = 0; j < a.length; j++)
                inv[i][j] = adj[i][j] / det;
    }
    return inv;
}
function adjecent(arr, adj) {
    if (arr.length == 1) {
        adj[0][0] = 1; return;
    }
    let s = 1;
    let cofac = [];
    for (let i = 0; i < arr.length - 1; i++) {
        cofac[i] = [];
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            cofactor(arr, cofac, i, j);
            s = ((i + j) % 2 == 0) ? 1 : -1;
            adj[j][i] = (s) * (determinant(cofac, cofac.length));
        }
    }
}