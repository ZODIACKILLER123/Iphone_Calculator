# IPHONE CALCULATOR

### This is my first proyect, this proyect is realized with: 

- HTML
- CSS
- JAVASCRIPT

#### HTML

I'm use html for my page architecture.

I'm use the following tags: 
- div 
- section
- header
- input

It is structured the following way: 

~~~html
</head>
<body>
    <div class="calculator">
        <section>
            <header>
                <!--this part is for input-->
                <input type="text" name="ans" value="" autocomplete="off" readonly class="input1">                
            </header>
        </section>
        <!--this part is for buttons -->
        <section >
            <div class="botones" name="calculadora">
                <input type= "button" value="-/+" class="plusorminos" onclick="numInput('*(-1)')"></input>
                <input type= "button" value="%" class="porce" onclick="numInput('%')"></input>
                <input type= "button" value="," class="comma" onclick="numInput(',')"></input>
                <input type= "button" value="*" class="multi" onclick="numInput('*')"></input>
                <input type= "button" value="÷" class="div" onclick="numInput('/')"></input>
                <input type= "button" value="-" class="minos" onclick="numInput('-')"></input>
                <input type= "button" value="+" class="plus" onclick="numInput('+')"></input>
                <input type= "button" value="=" class="iquals" onclick="calcular()"></input>
                <input type= "button" value="AC" class="deletall" onclick="reset()"></input>
                <input type= "button" value="9" class="nine" onclick="numInput('9')"></input>
                <input type= "button" value="8" class="eight" onclick="numInput('8')"></input>
                <input type= "button" value="7" class="seven" onclick="numInput('7')"></input>
                <input type= "button" value="6" class="six" onclick="numInput('6')"></input>
                <input type= "button" value="5" class="five" onclick="numInput('5')"></input>
                <input type= "button" value="4" class="four" onclick="numInput('4')"></input>
                <input type= "button" value="3" class="three" onclick="numInput('3')"></input>
                <input type= "button" value="2" class="two" onclick="numInput('2')"></input>
                <input type= "button" value="1" class="one" onclick="numInput('1')"></input>
                <input type= "button" value="0" class="zero" onclick="numInput('0')"></input>
            </div>
        </section>
    </div>
    <script src="/project1/scripts.js"></script>
</body>
~~~

## CSS PART

With CSS Languaje i stilized the page.
~~~css
*{
    padding: 0;
    margin: 0;
}


/* general styles */
.calculator{
    background-color: black;
    width: 500px;
    height: 800px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
}


/* buttons position*/
.botones{
    display: grid;
    grid-template-columns: repeat(4, 110px);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    margin-left: 15px;

}

.deletall{
    grid-column: 1;
    grid-row: 1;
}

.plusorminos{
    grid-column: 2;
    grid-row: 1;
}

.porce{
    grid-column: 3;
    grid-row: 1;
}

.div{
    grid-column: 4;
    grid-row: 1;
}

.multi{
    grid-column: 4;
    grid-row: 2;
}

.minos{
    grid-column: 4;
    grid-row: 3;
}

.plus{
    grid-column: 4;
    grid-row: 4;
}

.iquals{
    grid-column: 4;
    grid-row: 5;
}

.nine{
    grid-column: 3;
    grid-row: 2;
}

.eight{
    grid-column: 2;
    grid-row: 2;
}
.seven{
    grid-column: 1;
    grid-row: 2;
}

.six{
    grid-column: 3;
    grid-row: 3;
}

.five{
    grid-column: 2;
    grid-row: 3;
}

.four{
    grid-column: 1;
    grid-row: 3;
}

.three{
    grid-column: 3;
    grid-row: 4;
}

.two{
    grid-column: 2;
    grid-row: 4;
}

.one{
    grid-column: 1;
    grid-row: 4;
}

.zero{
    grid-column: 1;
    grid-row: 5;
    width: 230px;
}

.comma{
    grid-column: 3;
    grid-row: 5;
}

/*buttons design*/

.deletall, .plusorminos, .porce{
    background-color: rgb(146, 145, 145);
    border: none;
    color: black;
    font-size: 40px;
    border-radius: 50px;
}

.div, .minos, .plus, .iquals, .multi{
    background-color: orange;
    border: none;
    color: white;
    font-size: 60px;
    border-radius: 50px;
}

.zero, .one, .two, .three, .four, .five, .six, .seven, .eight, .nine, .comma{
    background-color: rgb(26, 25, 25);
    border: none;
    color: white;
    font-size: 40px;
    border-radius: 50px;
}

/*hover*/

.deletall:hover, .plusorminos:hover, .porce:hover{
    background-color: rgb(26, 25, 25);
    color: white;
}

.div:hover, .minos:hover, .plus:hover, .iquals:hover, .multi:hover{
    background-color: orangered;
}

.zero:hover, .one:hover, .two:hover, .three:hover, .four:hover, .five:hover, .six:hover, .seven:hover, .eight:hover, .nine:hover, .comma:hover{
    background-color: rgb(146, 145, 145);
    color: black;
}

/* input*/

.input1{
    text-align: right;
    caret-color: white;
    color: white;
    font-size: 100px;
    border: 0;
    background-color: black;
    width: 96%;
    height: 100px;
    margin-top: 50px;
    margin-left: 10px;
    margin-bottom: 50px;
}

~~~

To finish also use Javascript for the operations.

~~~javascript
function numInput(numero){
    document.querySelector('Input[name="ans"]').value += numero;
};

function calcular(){
    var input = document.querySelector('Input[name="ans"]');
    var expresion = input.value;
    var resultado = eval(expresion)
    input.value = resultado;
}

function reset(){
    document.querySelector('Input[name="ans"]').value = "0";
}

~~~