import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';
import { useState } from 'react'



const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
 
  // função para limpar o display da calculadora
  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('0');
  }

  //  função para manipular a adição de numeros
  const handleAddNumber = (num) =>{
    setCurrentNumber(prev => `${prev === '0' ? ' ' :  prev}${num}`);
  }
   
  // função para o botão de soma 
  const handleSumNumbers = () => {
    if(firstNumber === '0'){ //verifica se o primeiro numero é 0
      setFirstNumber(String(currentNumber)); //Adicionamos o valor de currentnumber em firstNumber 
      setCurrentNumber('0');//voltamos o Current Number para 0
      setOperation('+');
    }else{ //se não
      //Criamos uma constante chamada sum e colocamos seu valor convertendo o currentNumber e 
      //O firstNumber para numeros em vez de Strings e somams os dois
      const sum = parseFloat(currentNumber) + parseFloat(firstNumber);
      setCurrentNumber(String(sum)); //armazena a constante sum   
      setOperation('');
    }
  }

    // função para o botão de subtração 
    const handleMinusNumbers = () => {
      if(firstNumber === '0'){ //verifica se o primeiro numero é 0
        setFirstNumber(String(currentNumber)); //Adicionamos o valor de currentnumber em firstNumber 
        setCurrentNumber('0');//voltamos o Current Number para 0
        setOperation('-');
      }else{ 
        //se não
        //Criamos uma constante chamada sum e colocamos seu valor convertendo o currentNumber e 
        //O firstNumber para numeros em vez de Strings e somams os dois
        const sum = parseFloat(firstNumber) - parseFloat(currentNumber);
        setCurrentNumber(String(sum))//armazena a constante sum   
        setOperation(' ');
      }
    }

        // função para o botão de potencia
        const handletimesNumbers = () => {
          if(firstNumber === '0'){ //verifica se o primeiro numero é 0
            setFirstNumber(String(currentNumber)); //Adicionamos o valor de currentnumber em firstNumber 
            setCurrentNumber('0');//voltamos o Current Number para 0
            setOperation('*');
          }else{ 
            //se não
            //Criamos uma constante chamada sum e colocamos seu valor convertendo o currentNumber e 
            //O firstNumber para numeros em vez de Strings e somams os dois
            const sum = parseFloat(firstNumber) * parseFloat(currentNumber);
            setCurrentNumber(String(sum))//armazena a constante sum   
            setOperation('*');
          }
        }

                // função para o botão de divisão
                const handleDivisionNumbers = () => {
                  if(firstNumber === '0'){ //verifica se o primeiro numero é 0
                    setFirstNumber(String(currentNumber)); //Adicionamos o valor de currentnumber em firstNumber 
                    setCurrentNumber('0');//voltamos o Current Number para 0
                    setOperation('/');
                  }else{ 
                    //se não
                    //Criamos uma constante chamada sum e colocamos seu valor convertendo o currentNumber e 
                    //O firstNumber para numeros em vez de Strings e somams os dois
                    const sum = parseFloat(firstNumber) / parseFloat(currentNumber);
                    setCurrentNumber(String(sum))//armazena a constante sum   
                    setOperation('/');
                  }
                }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !==''  && currentNumber !== '0'){ //verifica se o primeiro numero é 0
       switch(operation){
        case '+': 
        handleSumNumbers();
        break;

        case '-': 
        handleMinusNumbers();
        break;
        
        case '*':
        handletimesNumbers();
        break;

        case '/':
          handleDivisionNumbers();
          break;

        default:
           break;
       }
    }
  }

  

  return (
    <Container>
      <Content>
        <Input value = {currentNumber}/>

        <Row> 
          <Button label=","  onClick={handletimesNumbers}/>
          <Button label="c"  onClick={handleOnClear}/>
          <Button label="/"  onClick={handleDivisionNumbers}/>
          <Button label="."  onClick={handletimesNumbers}/>
        </Row>

        <Row>
          <Button label="7"  onClick={() => handleAddNumber('7')}/>
          <Button label="8"  onClick={() => handleAddNumber('8')}/>
          <Button label="9"  onClick={() => handleAddNumber('9')}/>
          <Button label="-"  onClick={handleMinusNumbers}/>
        </Row>

        <Row>
          <Button label="4"  onClick={() => handleAddNumber('4')}/>
          <Button label="5"  onClick={() => handleAddNumber('5')}/>
          <Button label="6"  onClick={() => handleAddNumber('6')}/>
          <Button label="+"  onClick={handleSumNumbers }/>
        </Row>

        <Row>
          <Button label="1"  onClick={() => handleAddNumber('1')}/>
          <Button label="2"  onClick={() => handleAddNumber('2')}/>
          <Button label="3"  onClick={() => handleAddNumber('3')}/>
          <Button label="="  onClick={handleEquals}/>
        </Row>

      </Content>

    </Container>
  );
}

export default App;
