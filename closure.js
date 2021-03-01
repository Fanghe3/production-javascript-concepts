var quiz = (function()
  {    let score = 100;

        return function quiz1()
        {
          var answers = [] ;
           
          let  answer1 = prompt ("how many is 5 + 5 ? "); 
          let  answer2 = prompt ("how many is 5 - 5 ? ");  
           
           if( answer1)
            answers.push(answer1); 
          else
            answers.push("question 1 was skiped");  
            
          if( answer2)
            answers.push(answer2); 
          else
            answers.push("question 2 was skiped");  
           
           if ( answer1 !== '10') 
           { 
              score=  score - 50 ;            
           }
          
           if ( answer2 !== '0') 
           {
             score =  score - 50 ;            
           }
           
           console.log(`your total score is :  ${score}`);
           answers.forEach((item, index) => {
               console.log(`your answer on question ${index +1} :  ${item}`);                   }           
           ) 
           
           return score;           
        }  
  } )();
  
