var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

input.addEventListener("keyup",mrs);
inputType.addEventListener("change",mrs);
resultType.addEventListener("change",mrs);

inputTypeValue=inputType.value;
resultTypeValue=resultType.value;

function mrs() {
  inputTypeValue=inputType.value;
  resultTypeValue=resultType.value;

// Same resultTypeValue and inputTypeValue
if (inputTypeValue==="Ropani" && resultTypeValue==="Ropani" || (inputTypeValue==="Khetmuri" && resultTypeValue==="Khetmuri")
       || (inputTypeValue==="Kattha" && resultTypeValue==="Kattha") || (inputTypeValue==="Bigha" && resultTypeValue==="Bigha")
       ||  (inputTypeValue==="Square meter (m^2)" && resultTypeValue==="Square meter (m^2)")
       ||  (inputTypeValue==="Daam" && resultTypeValue==="Daam")
       ||  (inputTypeValue==="Dhur" && resultTypeValue==="Dhur")
       ||  (inputTypeValue==="Aana" && resultTypeValue==="Aana")
       ||  (inputTypeValue==="Paisa" && resultTypeValue==="Paisa")
       ||  (inputTypeValue==="Square foot (ft^2)" && resultTypeValue==="Square foot (ft^2)")
       ||  (inputTypeValue==="llka" && resultTypeValue==="llka")) {

   result.value=input.value;
  }

//Khetmuri to ropani and vice versa
  if (inputTypeValue==="Khetmuri" && resultTypeValue==="Ropani") {
    result.value= input.value*25;
  }
  else if (inputTypeValue==="Ropani" && resultTypeValue==="Khetmuri") {
    result.value=input.value/25;
  }

//Khetmuri to Bigha and vice versa
  if (inputTypeValue==="Khetmuri" && resultTypeValue==="Bigha") {
    result.value= input.value*1.87828700225394425;
  }
  else if (inputTypeValue==="Bigha" && resultTypeValue==="Khetmuri") {
    result.value=input.value/1.87828700225394425;
  }

  // Bigha to Kattha
  if (inputTypeValue==="Bigha" && resultTypeValue==="Kattha") {
    result.value= input.value*20;
  }
  else if (inputTypeValue==="Kattha" && resultTypeValue==="Bigha") {
    result.value=input.value/20 ;
  }

// Bigha to Square meter (m^2)
  if (inputTypeValue==="Bigha" && resultTypeValue==="Square meter (m^2)") {
    result.value= input.value*6772.63;
  }
  else if (inputTypeValue==="Square meter (m^2)" && resultTypeValue==="Bigha") {
    result.value= input.value/6772.63;
  }

// Bigha to Square foot (ft^2)
  if (inputTypeValue==="Bigha" && resultTypeValue==="Square foot (ft^2)") {
    result.value= input.value*72900;
  }
  else if (inputTypeValue==="Square foot (ft^2)" && resultTypeValue==="Bigha") {
    result.value= input.value/72900;
  }

// Bigha to Ropani
  if (inputTypeValue==="Bigha" && resultTypeValue==="Ropani") {
    result.value= input.value*13.31;
  }
  else if (inputTypeValue==="Ropani" && resultTypeValue==="Bigha") {
    result.value= input.value/13.31;
  }

  // Dhur to Square meter(m^2)
    if (inputTypeValue==="Dhur" && resultTypeValue==="Square meter (m^2)") {
      result.value= input.value*16.93;
    }
    else if (inputTypeValue==="Square meter (m^2)" && resultTypeValue==="Dhur") {
      result.value= input.value/16.93;
    }

  // Dhur to Square foot (ft^2
    if (inputTypeValue==="Dhur" && resultTypeValue==="Square foot (ft^2)") {
      result.value= input.value*182.25;
    }
    else if (inputTypeValue==="Square foot (ft^2)" && resultTypeValue==="Dhur") {
      result.value= input.value/182.25;
    }

    // Ropani to Aana
    if (inputTypeValue==="Ropani" && resultTypeValue==="Aana") {
      result.value= input.value*16;
    }
    else if (inputTypeValue==="Aana" && resultTypeValue==="Ropani") {
      result.value= input.value/16;
    }

    // Ropani to Paisa
    if (inputTypeValue==="Ropani" && resultTypeValue==="Paisa") {
      result.value= input.value*64;
    }
    else if (inputTypeValue==="Paisa" && resultTypeValue==="Ropani") {
      result.value= input.value/64;
    }

    // Ropani to Square meter (m^2)
    if (inputTypeValue==="Ropani" && resultTypeValue==="Square meter (m^2)") {
      result.value= input.value* 508.72;
    }
    else if (inputTypeValue==="Square meter (m^2)" && resultTypeValue==="Ropani") {
      result.value= input.value/ 508.72;
    }

    // Ropani to Square foot (ft^2)
    if (inputTypeValue==="Ropani" && resultTypeValue==="Square foot (ft^2)") {
      result.value= input.value*5476;
    }
    else if (inputTypeValue==="Square foot (ft^2)" && resultTypeValue==="Ropani") {
      result.value= input.value/5476;
    }

    // Ropani to Daam
    if (inputTypeValue==="Ropani" && resultTypeValue==="Daam") {
      result.value= input.value*256;
    }
    else if (inputTypeValue==="Daam" && resultTypeValue==="Ropani") {
      result.value= input.value/256;
    }


        // Ropani to llka
        if (inputTypeValue==="Ropani" && resultTypeValue==="llka") {
          result.value= input.value*4;
        }
        else if (inputTypeValue==="llka" && resultTypeValue==="Ropani") {
          result.value= input.value/4;
        }

        // Aana to Paisa
        if (inputTypeValue==="Aana" && resultTypeValue==="Paisa") {
          result.value= input.value*4;
        }
        else if (inputTypeValue==="Paisa" && resultTypeValue==="Aana") {
          result.value= input.value/4;
        }

        // Aana to Square Square meter (m^2)
        if (inputTypeValue==="Aana" && resultTypeValue==="Square meter (m^2)") {
          result.value= input.value*31.80;
        }
        else if (inputTypeValue==="Square meter (m^2)" && resultTypeValue==="Aana") {
          result.value= input.value/31.80;
        }

       //Aana to Square Square foot (ft^2)
   if (inputTypeValue==="Aana" && resultTypeValue==="Square foot (ft^2)") {
       result.value= input.value*342.25;
      }
       else if (inputTypeValue==="Square foot (ft^2)" && resultTypeValue==="Aana") {
          result.value= input.value/342.25;
       }

        // // Aana to Daam
      if (inputTypeValue==="Aana" && resultTypeValue==="Daam") {
        result.value= input.value*16;
       }
      else if (inputTypeValue==="Daam" && resultTypeValue==="Aana") {
         result.value= input.value/16;
       }

      //  Paisa to Daam
        if (inputTypeValue==="Paisa" && resultTypeValue==="Daam") {
          result.value= input.value*4;
        }
        else if (inputTypeValue==="Daam" && resultTypeValue==="Paisa") {
          result.value= input.value/4;
        }

        // Paisa to Square Square meter (m^2)
        if (inputTypeValue==="Paisa" && resultTypeValue==="Square meter (m^2)") {
          result.value= input.value* 7.95;
        }
        else if (inputTypeValue==="Square meter (m^2)" && resultTypeValue==="Paisa") {
          result.value= input.value/ 7.95;
        }

        // Paisa to Square Square foot (ft^2)
        if (inputTypeValue==="Paisa" && resultTypeValue==="Square foot (ft^2)") {
          result.value= input.value* 85.56;
        }
        else if (inputTypeValue==="Square foot (ft^2)" && resultTypeValue==="Paisa") {
          result.value= input.value/ 85.56;
        }

        // Daam to Square Square meter (m^2)
        if (inputTypeValue==="Daam" && resultTypeValue==="Square meter (m^2)") {
          result.value= input.value* 1.99;
        }
        else if (inputTypeValue==="Square meter (m^2)" && resultTypeValue==="Daam") {
          result.value= input.value/ 1.99;
        }

        // Daam to Square Square foot (ft^2)
        if (inputTypeValue==="Daam" && resultTypeValue==="Square foot (ft^2)") {
          result.value= input.value*21.39;
        }
        else if (inputTypeValue==="Square foot (ft^2)" && resultTypeValue==="Daam") {
          result.value= input.value/21.39;
        }



}
