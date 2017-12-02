$(document).ready(function(){
   
 //Initiating the drawer
  $('.drawer').drawer({
    class: {
      nav: 'drawer-nav',
      toggle: 'drawer-toggle',
      overlay: 'drawer-overlay',
      open: 'drawer-open',
      close: 'drawer-close',
      dropdown: 'drawer-dropdown'
    },
    iscroll: {
      mouseWheel: true,
      preventDefault: false
    },
    showOverlay: true
  });




var notes= JSON.parse(localStorage.getItem("resume"));

//To ensure the the bookmarked notes are saved
if(notes!=null && notes.length>0 ) 
    {
    document.getElementById("resume-heading").innerHTML= "<span class='new-resume-heading'>NOTES<span>"
    var listElement=document.createElement("ul"); 
    listElement.setAttribute("id","ullist");
    document.getElementById("resume-heading").appendChild(listElement); 

    for(var i=0; i<notes.length; i++){
    var liItem=document.createElement("li");
    liItem.setAttribute("class","liClass");
    liItem.appendChild(document.createTextNode(notes[i]));
    listElement.appendChild(liItem);
    }

  }
  else {
     document.getElementById("resume-heading").innerHTML= " <h2 class ='bkmark'>Bookmark messages that you wish to make a note of<h2>"
  }

 }); 


//Initialising the bot and the entire script of the bot
var botui = new BotUI('hello-world');

  botui.message.bot({ // show first message
  delay: 200,
  content: 'Hi There 👋'
  }).then(function(){
     return botui.message.bot({ // second one
      delay: 1000, // wait 1 sec.
      content: 'I am Samadrita, a product designer currently studying Human Computer Interaction at CMU 👩‍🎓'
     });
  }).then(function(index){ // will send the index of the previous message to the showBookmark function which shows a star icon against the message.
      setTimeout(showBookmark(index),1500);   
      }).then(function () {
        return botui.message.bot({ // second one
        delay: 1000, // wait 1 sec.
        content: 'What is your name?'
        });
  }).then(function () {
     return botui.action.text({ // will print whatever was typed in the field.
     delay: 800,
     action: {
        value: 'John Doe',
        placeholder: 'Your name'
    }
    });
  }).then(function (res) { // will be called when it is submitted.
      return botui.message.bot({
      delay: 500,
      content: 'Alright '+ res.value + '! Before we get started a quick heads up',
      });
 }).then(function () { 
      return botui.message.bot({
      delay: 1200,
      content:  'I tend to talk, ALOT 😬.'
    }); // will print whatever was typed in the field.

  }).then(function () { // will be called when it is submitted.
      return botui.message.bot({
      delay: 1000,
      type: 'embed',
      content:  'https://giphy.com/embed/l2RnootA2yelmseL6'
    }); 

  }).then(function () { 
      return botui.message.bot({
      delay: 4000,
      content:  'So feel free to skip the conversation by clicking the hamburger icon on the left and jumping to specific questions you have in mind'
    }); 

  }).then(function () {

            return botui.action.button({ 
            action: [
              {
                text: 'Okay! Got it',
                value: 'got_it'
              },
              {
                text: 'How can I reach out to you?',
                value: 'reach_out'
               
              }
            ]
          });
      
  }).then(function (res) {
        if(res.value == 'reach_out') {
          return botui.message.bot({ 
           delay: 1000, 
           content: 'Shoot me a mail at samadrid@andrew.cmu.edu', 

            }).then(function(index){
                     setTimeout(showBookmark(index),1500);   

            }).then(function (){
                       return botui.message.bot({ 
                       delay: 1000,
                       content: 'Alternatively if you are in Pittsburgh, I am always down for coffee ☕' ,
                       });
                     }); 
        } 

        else {
          botui.message.bot({ // second one
          delay: 1000, // wait 1 sec.
          content: 'Great'
          }).then(function () {
             return botui.action.button({ // let user do something
             delay: 1000,
             action: [
                    { 
                      text: 'Share your journey',
                      value: 'journey'
                      
                    },
                    {
                      text: 'Where have you worked',
                      value: 'work_ex'
                     
                    }
                  ]
                });
            }).then(function (res) {
               if(res.value == 'work_ex') 
               {
                  botui.message.bot({ 
                  delay: 1000,
                  content: 'Prior to CMU, I was working as a Product designer at Practo, a leading healthcare startup in India. As part of the book team, I was responsible for the booking experience of the patients in the Prato platform.'
                  }).then(function(index){
                      setTimeout(showBookmark(index),1500);   
                      }).then(function(){
                          botui.message.bot({ 
                            delay: 1000,
                            content: 'In the summer of 2015, I interned as a UX designer at Amazon India where I was responsible for redesigning the detail page for amazon mobile app'
                            });
                      }).then(function(){
                           botui.message.bot({ 
                            delay: 1000,
                           content: 'I have also worked as a research associate at Embedded Interactions lab and worked with Samsung over a year to design accessibility features for their flagship models'
                          });
                      }).then(function () {
                         return botui.action.button({ // let user do something
                         delay: 1000,
                         action: [
                                { 
                                  text: 'Tell me more',
                                  value: 'more'
                                  
                                },
                                {
                                  text: 'How can I reach out to you?',
                                  value: 'reach_out'
                                 
                                }
                              ]
                            });
                          }).then(function (res) {
                                if(res.value == 'more') {
                                  return botui.message.bot({ 
                                   delay: 1000, 
                                   content: 'While these experiences have helped me consolidate my learning of Human-centric Design processes they have also made me aware of the intricacies involved in developing products and services which are shippable to the commercial market', 
                                    }).then(function(index){
                                    setTimeout(showBookmark(index),1500);   

                                    }).then(function (){
                                    return botui.message.bot({ 
                                    delay: 1000,
                                    content: 'What else do you want to talk about? Select it from the menu on the left' ,
                                     });
                                    }); 
                                  }

                                else{
                                  return botui.message.bot({ 
                                  delay: 1000, 
                                  content: 'Shoot me a mail at samadrid@andrew.cmu.edu', 
                                  }).then(function(index){
                                     setTimeout(showBookmark(index),1500);   
                                  }).then(function (){
                                     return botui.message.bot({ 
                                      delay: 1000,
                                      content: 'Alternatively if you are in Pittsburgh, I am always down for coffee ☕' ,
                                      });
                                  }); 

                                }
                            }); 
                }   
                                         
                else{
                      return botui.message.bot({ 
                        // show first message
                        delay: 1000,
                        content: 'I was born in Assam, a state in North-East India and grew up in Mumbai.'
                        }).then(function(){
                        return botui.message.bot({ 
                        // show first message
                        delay: 1000,
                        content: 'Having changed over more than 5 schools while growing up, I can easily adapt to newer environments and attempt to understand and embrace change positively'
                        });
                      }).then(function(index){
                        setTimeout(showBookmark(index),1500);   
                        }).then(function(){
                        return botui.message.bot({ 
                        // show first message
                        delay: 1000,
                        content: 'I pursued design in my undergraduate. It was here when I was formally introduced to the world of (and behind ) the screens 🖥️'
                        });
                      }).then(function(index){
                      setTimeout(showBookmark(index),1500);   
                      });
                }
            });
        }

     }); 






// Click functions for the links in the drawer
document.getElementById("journey").onclick=function(){
  journey();
}

document.getElementById("philosophy").onclick=function(){
  philosophy();
}

document.getElementById("experience").onclick=function(){
  experience();
}


document.getElementById("interest").onclick=function(){
  interest();
}

document.getElementById("skills").onclick=function(){
  skills();
}

document.getElementById("research").onclick=function(){
  research();
}

document.getElementById("exploration").onclick=function(){
  exploration();
}

document.getElementById("achievements").onclick=function(){
  achievements();
}


document.getElementById("book").onclick=function(){
 book();
}

document.getElementById("facts").onclick=function(){
 facts();
}

document.getElementById("touch").onclick=function(){
 touch();
}


var skills = function(){
  botui.message.bot({
   human: true,
   delay: 1000, // wait 1 sec.
   content: 'What skills ya got?'
  }).then(function(){
    botui.message.bot({ 
    // show first message
    delay: 1000,
    content: 'I have hands-on experience with both conducting UX research as well designing user interfaces.'
    });
  }).then(function(index){
    setTimeout(showBookmark(index),1500);   
  }).then(function(){
    botui.message.bot({ 
    // show first message
    delay: 1000,
    content: 'Proficient in Sketch, Adobe Photoshop, Adobe Illustrator, Adobe Indesign and Principle'
    });
  }).then(function(index){
    setTimeout(showBookmark(index),1500);   
  }).then(function(){
    botui.message.bot({ 
    // show first message
    delay: 1000,
    content: 'Comfortable with HTML, CSS, Javascript, Jquery, C++/C'
    });
  }).then(function(index){
    setTimeout(showBookmark(index),1500);   
  }).then(function(){
    botui.message.bot({ 
    // show first message
    delay: 1000,
    content: 'Occasionally tinker with arduino and sensors to build interactive prototypes '
    });
  }).then(function(index){
    setTimeout(showBookmark(index),1500);   
  });

}






var philosophy = function(){
  botui.message.bot({
   human: true,
   delay: 1000, // wait 1 sec.
   content: 'Do you have a design philosophy'
  }).then(function(){
    botui.message.bot({ 
    // show first message
    delay: 1000,
    content: 'I am a strong believer in Function over form; Usability over aesthetics'
    });
  }).then(function(){
    botui.message.bot({ 
    // show first message
    delay: 1000,
    content: 'Design thinking should be used to make a product useful above all. And this philosophy is reflected in all my work'
    });
  });

}




var journey = function(){
  
    return botui.message.bot({ 
    // show first message
    human: true,
    delay: 1000,
    content: 'Tell me about your journey'
    }).then(function(){
    return botui.message.bot({ 
    // show first message
    delay: 1000,
    content: 'I was born in Assam, a state in North-East India and grew up in Mumbai.'
    });
  }).then(function(){
    return botui.message.bot({ 
    delay: 1000,
    content: 'Having changed over more than 5 schools while growing up, I can easily adapt to newer environments and attempt to understand and embrace change positively'
    });
  }).then(function(index){
     setTimeout(showBookmark(index),1500);   
     }).then(function(){
    return botui.message.bot({ 
    delay: 1000,
    content: 'I pursued design in my undergraduate. It was here when I was formally introduced to the world of (and behind ) the screens 🖥️'
    });
  }).then(function(index){
     setTimeout(showBookmark(index),1500);   
     });

}


var experience = function(){ 
  botui.message.bot({ 
      human: true,
      delay: 1000,
      content: 'Tell me about your work experience'
    }).then(function(){
        return botui.message.bot({ 
        delay: 1000,
        content: 'Prior to CMU, I was working as a Product designer at Practo, a leading healthcare startup in India. As part of the book team, I was responsible for the booking experience of the patients in the Prato platform.'
        });
    }).then(function(index){
    setTimeout(showBookmark(index),1500);   
    }).then(function(){
       botui.message.bot({ 
       delay: 1000,
       content: 'In the summer of 2015, I interned as a UX designer at Amazon India where I was responsible for redesigning the detail page for amazon mobile app'
       });
    });  

}


var interest = function(){

  botui.message.bot({
   human: true,
   delay: 1000, // wait 1 sec.
   content: 'What are your interest?'
  }).then(function(){
    botui.message.bot({ 
    // show first message
    delay: 200,
    content: 'From e-textiles to driverless cars, Internet of Things is giving life to a growing range of everyday objects. My interest lies in helping people adapt to these emerging modalities of technologies'
    });
  }).then(function () {
      return botui.message.bot({ 
      delay: 1000, 
      content: 'I am particularly keen on designing for human-vehicle interaction as driverless cars has the potential to transform how people commute'

      })
    }).then(function(index){
        setTimeout(showBookmark(index),1500);   
    }).then(function () {
            return botui.action.button({ // let user do something
            delay: 1000,
            action: [
              {
                text: 'Tell me more!',
                value: 'tell_me_more'
              },
              {
                text: 'Get in touch',
                value: 'reach_out'
               
              }
            ]
          });
      
         }).then(function (res) {
        if(res.value == 'reach_out') {


              return botui.message.bot({ 
               delay: 1000, // wait 1 sec.
              content: 'Shoot me a mail at samadrid@andrew.cmu.edu or connect to me https://www.linkedin.com/in/samadrita-das',    
              }).then(function(index){
                  setTimeout(showBookmark(index),1500);   
                  }).then(function (){
                      return botui.message.bot({ // let user do something
                      delay: 1000,
                      content: 'Alternatively if you are in Pittsburgh, I am always down for coffee ☕' ,
                      });
        
                }); 
          
      
        } 

        else {
              botui.message.bot({ // second one
              delay: 1000, // wait 1 sec.
              content: 'Check out my work [here](www.samadrita.info)'
              })
            }

      }); 


}


var research = function(){

  botui.message.bot({
   human: true,
   delay: 1000, // wait 1 sec.
   content: 'Tell me about your research work'
  }).then(function(){
    botui.message.bot({ 
    // show first message
    delay: 200,
    content: 'I view design thinking as a tool to solve complex humanitarian problem and this philosophy is reflected in my work I undertook during my undergraduate'
    });
  }).then(function () {
      return botui.message.bot({ // second one
      delay: 1000, // wait 1 sec.
      content: 'While one of study focusses on teaching maths to specially abled kids by designing tangible toolkits, the other study educates young adolescent girls in rural India about PCOS using serious games. '

      })
    }).then(function () {
      return botui.message.bot({ // second one
      delay: 1000, // wait 1 sec.
      content: 'You can find the papers here and here'

      })
    }).then(function () {

            messageCounter();
            return botui.action.button({ // let user do something
            delay: 1000,
            action: [
              {
                text: 'Good',
                value: 'good'
              },
              {
                text: 'Really Good',
                value: 'really_good'
               
              }
            ]
          });
      
         });


}

var exploration = function(){

  botui.message.bot({
   human: true,
   delay: 1000, // wait 1 sec.
   content: 'What are you upto in college'
  }).then(function () {
      return botui.message.bot({ // second one
      delay: 1000, // wait 1 sec.
      content: 'Keeping with my interest with emerging technologies, I am currently working on two projects. The first is a project to study human factors consideration in designing for VR',
      });
    }).then(function () {
      return botui.message.bot({ // second one
      delay: 1000, // wait 1 sec.
      content: 'My second project is a little too explorative as I am trying to build an electronic nose that can sense smell of food. Why? Because if done successfully this can be starting point for capturing smell',
      });
    });


}

var achievements = function(){

  botui.message.bot({
   human: true,
   delay: 1000, // wait 1 sec.
   content: 'Tell me about your achievements'
  }).then(function () {
      return botui.message.bot({ // second one
      delay: 1000, // wait 1 sec.
      content: 'Our team won the first runners-up at OzCHI24 2015, an International Student Design competition organized by OzCHI conference in Australia. It was a 24hr long Desiathon where we designed an AR based app that could help people beat social isolation',
      });
    }).then(function () {
      return botui.message.bot({ // second one
      delay: 1000, // wait 1 sec.
      content: 'Our study on Tangible learning kit won the best students paper award at IHCI',
      });
    });


}

var book = function(){

  botui.message.bot({
   human: true,
   delay: 1000, // wait 1 sec.
   content: 'What are you reading these days?'
  }).then(function () {
      return botui.message.bot({ // second one
      delay: 1000, // wait 1 sec.
      content: 'I have just started reading Golden Krishnas "The Best Interface Is No Interface" 📖. Hoping to get some useful insights about designing natural user interfaces',
      });
    });


}

var facts = function(){

  botui.message.bot({
   human: true,
   delay: 1000, // wait 1 sec.
   content: 'Have fun facts to share? '
  }).then(function () {
      return botui.message.bot({ // second one
      delay: 1000, // wait 1 sec.
      content: 'I am a trained Indian classical singer and as a kid, have sung for the radio',
      });
    });


}

var touch = function(){

  botui.message.remove(index).then(function(){
    botui.message.bot({
              human: true, // second one
              delay: 1000, // wait 1 sec.
              content: 'How can I reach out to you?',
              })
  }).then(function(){ 
                return botui.message.bot({ 
               delay: 1000, // wait 1 sec.
              content: 'Shoot me a mail at samadrid@andrew.cmu.edu or connect to me https://www.linkedin.com/in/samadrita-das',    
              })
              }).then(function(index){
  setTimeout(showBookmark(index),1500);   
  }).then(function (){
                      return botui.message.bot({ // let user do something
                      delay: 1000,
                      content: 'Alternatively if you are in Pittsburgh, I am always down for coffee ☕' ,
                      });
        
                });
}

  
//Function to show checkbox  
var checkboxNumber=[];
var showBookmark = function (msgno) {
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    var span = document.createElement('span');
    span.className = "check";

    var value= "checkbox" + msgno;
    checkbox.id= "checkbox" + msgno;
    var label = document.createElement('label')
    document.getElementsByClassName("botui-message")[msgno].appendChild(label);
    label.appendChild(span);
    label.appendChild(checkbox);


    if(localStorage.getItem("checkbox"+msgno)!==null && localStorage.getItem("checkbox"+msgno)=="true" ){
           console.log("not null");
            $("#checkbox"+ msgno).prev('span').addClass('checked');
            $("#checkbox"+ msgno).prop('checked', true);
            
    }
      


    $("#checkbox"+ msgno).change(function() {
    if ($("#checkbox"+ msgno).is(':checked')) { $(this).prev('span').addClass('checked');
    save($(this).parent().prev().find("span").html(),msgno);
    } else {
      $(this).prev('span').toggleClass('checked');
      deleteListItem($(this).parent().prev().find("span").html(),msgno);
    }
    });

}


//function to save a message when bookmark is clicked
var save = function (text,msgno) {
localStorage.setItem("notes", text);
var notes = localStorage.getItem("notes");
    var newNote=[]; 
    if(JSON.parse(localStorage.getItem("resume"))==null){
      newNote.push(notes); 
      localStorage.setItem("resume",  JSON.stringify(newNote));
      }
    else{
      var saved= JSON.parse(localStorage.getItem("resume"));
      saved.push(notes);
      localStorage.setItem("resume", JSON.stringify(saved));

        }
    var notes= JSON.parse(localStorage.getItem("resume"));
    if(notes!=null) 
    {
    document.getElementById("resume-heading").innerHTML= "<span class='new-resume-heading'>NOTES<span>"
    var listElement=document.createElement("ul"); 
        //listElement.id= "ullist";
        listElement.setAttribute("id","ullist");
        document.getElementById("resume-heading").appendChild(listElement); 

        for(var i=0; i<notes.length; i++){
        var liItem=document.createElement("li");
        //liItem.className="liClass";
        liItem.setAttribute("class","liClass");
        liItem.appendChild(document.createTextNode(notes[i]));
        listElement.appendChild(liItem);
    }

  }
   
  localStorage.setItem("checkbox"+msgno,"true");
 
 }


//Function to delete an item when bookmark is deselected
var deleteListItem = function(text,msgno){
  localStorage.removeItem("checkbox"+msgno);
      var notes= JSON.parse(localStorage.getItem("resume"));
      for(var i=0; i<notes.length; i++){
        if(text==notes[i]){
          notes.splice(i,1);
          localStorage.setItem("resume",  JSON.stringify(notes));
          document.getElementsByClassName("liClass")[i].remove();
          if (notes.length==0){
       document.getElementById("resume-heading").innerHTML= " <h2 class ='bkmark'>Bookmark messages that you wish to make a note of<h2>"
    

          
          }
          break;
          }

          
      }
 
}



































