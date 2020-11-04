//important js tags variable
let box = document.querySelector('.box');
let container = document.querySelector('.container');
let boxes = document.querySelector('.boxes');
let back2 = document.querySelector('.back2');
let tagBox = document.querySelector('.important-js-tags');
let totalTag = document.querySelector('.important-js-tags h3');
let tagBoxHeader = document.querySelector('.header');
let tagsCount = document.querySelector('.tags-count');
let minimise = document.querySelector('.minimise');
//js keyword variable
let mainBox = document.querySelector('.js-keyword');
let jsHeader = document.querySelector('.js-header h1');
let courseNameBox = document.querySelector('.js-course-name');
let courseNameHeader = document.querySelector('.course-header');
let courseNameText = document.querySelector('.course-name-header');
let totalTopicbox = document.querySelector('.total-topic-box');
let totalTopic = document.querySelector('.total-topic');
let getInsideButtonBox = document.querySelector('.get-inside-btn-box');
let getInsideButton = document.querySelector('.get-inside');
let searchBox = document.querySelector('.search-box');
let searchInput = document.querySelector('.search');
let topicList = document.querySelector('.topic-list');
let topicListnDescription = document.querySelector('.topic-n-description');
let tags = document.querySelector('.tags');
let backBtn = document.querySelector('.back');
let key = document.querySelector('.key');
let back3 = document.querySelector('.back3');








class JsonData {
  async getJson(){
   let resFetch = await fetch ('mytags.json');
   let resJson = await resFetch.json();
   return resJson;
  }
  async getJson2(){
  let keyWords = await fetch ('mykeywords.json');
  let resKeyWords = await keyWords.json();
  return resKeyWords;
  }
  
}



class UI{
//UI function for display content
  uiDisplay(name, description, id){
  let div = document.createElement('div');
  div.className = 'box';
  let h1 = document.createElement('h1');
  h1.textContent = name;
  let p = document.createElement('p');
  p.textContent = description;
  let span = document.createElement('span');
  span.textContent = id;
  span.className = 'id';
  
  div.appendChild(span);
  div.appendChild(h1);
  div.appendChild(p);
  boxes.insertAdjacentElement('beforeend', div)
  // container.insertBefore(div, boxes);
  }
  displayTopicList(topic,about, id){
    let div = document.createElement('div');
    div.className = 'tags';
    let h1 = document.createElement('h1');
    h1.textContent = topic;
    let p = document.createElement('p');
    p.textContent = about;
    let span = document.createElement('span');
    span.textContent = id;
    span.className = 'id';
    
    div.appendChild(span);
    div.appendChild(h1);
    div.appendChild(p);
    
    topicList.insertAdjacentElement('beforeend', div)
  }
  keyWordsDisplay(id, name, des){
    let div = document.createElement('div');
    div.className = 'key';
    let h1 = document.createElement('h1');
    h1.textContent = name;
    let p = document.createElement('p');
    p.textContent = des;
    let span = document.createElement('span');
    span.textContent = id;
    span.className = 'id';
    
    div.appendChild(span);
    div.appendChild(h1);
    div.appendChild(p);
    
    topicListnDescription.insertAdjacentElement('beforeend', div)
  }

}


//Intentiate variable for classes
let ui = new UI;
let rr = new JsonData();





//Important Js tags section


//Initial display for Js tags
boxes.style.display = 'none';
minimise.style.display = 'none';
back2.style.display = 'none';
totalTag.style.display = 'none';



//Event listeners For Important js tags
tagBox.addEventListener('click', tagBoxEvent);
minimise.addEventListener('click', minimiseContent);
back2.addEventListener('click', back2Evant)

//function for tag box event

function tagBoxEvent(e){
  
  if(e.target.classList.contains('header')){
  console.log('header box clicked');
  document.querySelector('.header').style.pointerEvents = 'none';
  setTimeout(function(){
    tagBoxHeader.style.opacity = '0';
    tagBoxHeader.style.transition = 'all 0.5s'
  })
  setTimeout(function(){
    tagBoxHeader.style.display = 'none';
  }, 600)

  setTimeout(function(){
    tagBox.style.height = '100vh';
    tagBox.style.transition = 'all 1s'
  })
  setTimeout(function(){
    boxes.style.display = '';
    boxes.style.opacity = '0'
  })
  setTimeout(function(){
    
    boxes.style.opacity = '1'
    boxes.style.transition = 'all 3s'
  }, 300)



  back2.style.display = '';
  totalTag.style.display = '';
  

  
  
rr.getJson().then(function(data){
  console.log(data.length);
  tagsCount.textContent = data.length;
  for(let i = 0; i<data.length; i++){
   ui.uiDisplay(data[i].name, data[i].description, i);
   console.log(data[i].name);
  
  }})}}

//function for minimise
function minimiseContent(e){
  console.log('minimise button working');
//  boxes.style.display = 'none';
 window.location.reload();
}


//function for back2 button event
function back2Evant(){
  boxes.style.display = 'none';
minimise.style.display = 'none';
back2.style.display = 'none';
totalTag.style.display = 'none';
setTimeout(function(){
  tagBox.style.height = '20vh';
  tagBox.style.transition = 'all 1s'
})


setTimeout(function(){
  tagBoxHeader.style.display = '';
  tagBoxHeader.style.opacity = '0'
})

setTimeout(function(){
  tagBoxHeader.style.opacity = '1';
  tagBoxHeader.style.transition = 'all 0.5s'
}, 200)


document.querySelector('.header').style.pointerEvents = 'auto';
}








//Js keyword section


//Initial Display Element for js keyword
totalTopicbox.style.display = 'none';
getInsideButtonBox.style.display = 'none';
searchBox.style.display = 'none';
topicList.style.display = 'none';
topicListnDescription.style.display = 'none';
backBtn.style.display = 'none';
back3.style.display = 'none';






//Event Listener for Javascript keyword
jsHeader.addEventListener('click', jsHeaderEventFunction);
getInsideButton.addEventListener('click', getInsideEvent);
topicList.addEventListener('click', tagsEvent);
backBtn.addEventListener('click', backEvent);
back3.addEventListener('click', back3Event);





//Event Functions for jsHeader
function jsHeaderEventFunction(e){
  console.log('jsheader function worked');
  
  jsHeader.style.left = '2%';
  jsHeader.style.top = '10%';
  jsHeader.style.width = '50%';
  jsHeader.style.height = '40px';
  jsHeader.style.fontSize = '20px';
  jsHeader.style.boxShadow = 'none';
  // jsHeader.style.border = '1px solid rgba(0, 0, 0, 0.3)';
  jsHeader.style.display = 'flex';
  jsHeader.style.alignItems = 'center';
  jsHeader.style.justifyContent = 'flex-atart';
  jsHeader.style.transition = 'all 1s';


  courseNameBox.style.left = '2%';
  
  courseNameBox.style.bottom = '10%';
  courseNameBox.style.width = '50%';
  courseNameBox.style.height = '40px';
  courseNameBox.style.fontSize = '15px';
  courseNameBox.style.boxShadow = 'none';
  // courseNameBox.style.border = '1px solid rgba(0, 0, 0, 0.3)';
  courseNameBox.style.display = 'flex';
  courseNameBox.style.alignItems = 'center';
  courseNameBox.style.justifyContent = 'flex-atart';
  courseNameBox.style.transition = 'all 1s';
  


  setTimeout(function(){
    totalTopicbox.style.display = '';
    totalTopicbox.style.right = '2%';
    totalTopicbox.style.top = '15%';
    totalTopicbox.style.width = '50%';
    totalTopicbox.style.height = '40px';
    totalTopicbox.style.fontSize = '13px';
    totalTopicbox.style.boxShadow = 'none';
    // totalTopicbox.style.border = '1px solid rgba(0, 0, 0, 0.3)';
    totalTopicbox.style.display = 'flex';
    totalTopicbox.style.alignItems = 'center';
    totalTopicbox.style.justifyContent = 'flex-end';
    totalTopicbox.style.transition = 'all 5s';
  }, 1000)
  


  setTimeout(function(){
    getInsideButtonBox.style.display = '';
    getInsideButtonBox.style.right = '5%';
    getInsideButtonBox.style.bottom = '15%';
    getInsideButtonBox.style.width = '50%';
    getInsideButtonBox.height = '40px';
    getInsideButtonBox.fontSize = '13px';
    getInsideButtonBox.style.boxShadow = 'none';
    // getInsideButtonBox.style.border = '1px solid rgba(0, 0, 0, 0.3)';
    getInsideButtonBox.style.display = 'flex';
    getInsideButtonBox.style.alignItems = 'center';
    getInsideButtonBox.style.justifyContent = 'flex-end';
    getInsideButtonBox.style.opacity = '100%';
    getInsideButtonBox.style.transition = 'all 5s';
  }, 1000) 
}



let topic1 = [];
let topic2 = [];
let topic3 = [];
let topic4 = [];
let topic5 = [];
let topic6 = [];
let topic7 = [];
let topic8 = [];
let topic9 = [];
let topic10 = [];
let topic11 = [];
let topic12 = [];
let topic13 = [];
let topic14 = [];
let topic15 = [];
let topic16 = [];
let topic17 = [];
let topic18 = [];
let topic19 = [];
let topic20 = [];
let topic21 = [];
let topic22 = [];
let topic23 = [];
let topic24 = [];
let topic25 = [];
let topic26 = [];
let topic27 = [];
let topic28 = [];
let topic29 = [];
let topic30 = [];
let topic31 = [];
let topic32 = [];
let topic33 = [];
let topic34 = [];
let topic35 = [];
let topic36 = [];
let topic37 = [];
let topic38 = [];
let topic39 = [];
let topic40 = [];
let topic41 = [];
let topic42 = [];
let topic43 = [];
let topic44 = [];
let topic45 = [];
let topic46 = [];
let topic47 = [];
let topic48 = [];
let topic49 = [];
let topic50 = [];
let topic51 = [];
let topic52 = [];
let topic53 = [];
let topic54 = [];
let topic55 = [];
let topic56 = [];
let topic57 = [];
let topic58 = [];
let topic59 = [];
let topic60 = [];



//Get Inside Event function
function getInsideEvent(){
  console.log('getInside button work');
  courseNameText.style.fontSize = '1.8em';
  back3.style.display = '';

  setTimeout(function(){
    mainBox.style.height = '80vh';
    mainBox.style.transition = 'all 2s'
  })
  setTimeout(function(){
    courseNameBox.style.display = 'none';
  })

  setTimeout(function(){
    getInsideButtonBox.style.transition = 'all 0.5s'
    getInsideButtonBox.style.opacity = '0';
    }, 250);
  setTimeout(function(){
  getInsideButtonBox.style.display = 'none';
  }, 800)


  setTimeout(function(){
    jsHeader.style.transition = 'all 0.5s'
    jsHeader.style.opacity = '0';
    }, 250);
  setTimeout(function(){
  jsHeader.style.display = 'none';
  }, 800)


  setTimeout(function(){
    totalTopicbox.style.transition = 'all 0.5s'
    totalTopicbox.style.opacity = '0';
    }, 250);
  setTimeout(function(){
  totalTopicbox.style.display = 'none';
  }, 800)

  setTimeout(function(){
    courseNameHeader.style.transition = 'all 0.5s'
    totalTopicbox.style.opacity = '0';
    }, 250);
  setTimeout(function(){
  courseNameHeader.style.display = 'none';
  }, 800)



  setTimeout(function(){
    // courseNameBox.style.position = 'absolute';
    courseNameBox.style.display = '';
    courseNameBox.style.left = '25%';
  courseNameBox.style.top = '-65%';
  courseNameBox.style.bottom = 'none';
  courseNameBox.style.width = '50%';
  courseNameBox.style.height = '40px';
  courseNameBox.style.fontSize = '15px';
  courseNameBox.style.boxShadow = 'none';
  // courseNameBox.style.border = '1px solid rgba(0, 0, 0, 0.3)';
  courseNameBox.style.display = 'flex';
  courseNameBox.style.alignItems = 'flex-start';
  courseNameBox.style.justifyContent = 'center';
  courseNameBox.style.fontWeight = '700';
  courseNameBox.style.transition = 'all 1s';
  courseNameBox.style.borderBottom = '5px solid rgba(255, 255, 255, 0.6)';
  courseNameBox.style.paddingBottom = '22px';
 
  }, 1000) 

  // setTimeout(function(){
  //   searchBox.style.display = '';
   
  // }, 1000);

  setTimeout(function(){
    topicList.style.display = '';
    topicList.style.opacity = '0';
  }, 500)
  setTimeout(function(){
    topicList.style.opacity = '1';
    topicList.style.transition = 'all 0.5s'
  }, 800);

  
  setTimeout(function(){
    rr.getJson2().then(function(data){
      console.log(data);
      let test
      for(let i=0; i<data.length; i++){

        if(data[i].topic === 'Data Types In Javascript'){
          topic1.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Type Converesion'){
          topic2.push(data[i]);
          continue;
        }
       
        if(data[i].topic === 'Numbers The Math Object'){
          topic3.push(data[i]);
          continue;
        }
        
        if(data[i].topic === 'Arrayes Method'){
          topic4.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Object Method'){
          topic5.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Date Times'){
          topic6.push(data[i]);
          continue;
        }
        if(data[i].topic === 'If Statement'){
          topic7.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Switches'){
          topic8.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Function'){
          topic9.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Loops'){
          topic10.push(data[i]);
          continue;
        }
        
        if(data[i].topic === 'Window'){
          topic11.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Dom Selector'){
          topic12.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Dom Multi Selector'){
          topic13.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Traversy'){
          topic14.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Create Element'){
          topic15.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Remove Replace'){
          topic16.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Event Listener'){
          topic17.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Event Bubbling And Delegation'){
          topic18.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Task list Project'){
          topic19.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Loan Calculator'){
          topic20.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Number Guesser'){
          topic21.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Build In Constructor'){
          topic22.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Prototype Explained'){
          topic23.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Prototype Inheritence'){
          topic24.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Uaing Object.create'){
          topic25.push(data[i]);
          continue;
        }
        if(data[i].topic === 'ES6 Classes'){
          topic26.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Sub Classes'){
          topic27.push(data[i]);
          continue;
        }
        if(data[i].topic === 'The Book List'){
          topic28.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Convert To ES6 Classes'){
          topic29.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Ajax & XHR Methods'){
          topic30.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Working With Ajax & JSON'){
          topic31.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Getting Data From An Extarnal Api'){
          topic32.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Rest APIs HTTP Request'){
          topic33.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Callback Functions'){
          topic34.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Custom HTTP Library'){
          topic35.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Custom HTTP Library Part-2'){
          topic36.push(data[i]);
          continue;
        }
        if(data[i].topic === 'ES6 Promises'){
          topic37.push(data[i]);
          continue;
        }
        if(data[i].topic === 'The Fetch Api'){
          topic38.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Arrow Function'){
          topic39.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Custom Http Library With Fetch Promises'){
          topic40.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Asinc And Await'){
          topic41.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Fetch With Async Await'){
          topic42.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Github Finder Part1'){
          topic43.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Github Finder Part2'){
          topic44.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Github Finder Part3'){
          topic45.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Github Finder Part 4'){
          topic46.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Github finder part 5'){
          topic47.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Error Handling With try_catch'){
          topic48.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Regular Expression Part-1'){
          topic49.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Regular Expression Part 2 n 3 n 4'){
          topic50.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Iterators Generators'){
          topic51.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Profile Scroller'){
          topic52.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Symbols'){
          topic53.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Destructuring'){
          topic54.push(data[i]);
          continue;
        }
        if(data[i].topic === 'MAPS'){
          topic55.push(data[i]);
          continue;
        }
        if(data[i].topic === 'ES6 SETS'){
          topic56.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Module Revaling Module Pattern'){
          topic57.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Fectory Pattern'){
          topic58.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Tracalorie Project Using Module'){
          topic59.push(data[i]);
          continue;
        }
        if(data[i].topic === 'Traclorie Project By Me'){
          topic60.push(data[i]);
          continue;
        }
        
       
      // ui.displayTopicList(data[i].topic, data[i].topicAbout, i)
      
      // console.log(data[i].topic);
      }
    });
  })

  

  


setTimeout(function(){
  
  
      ui.displayTopicList(topic1[0].topic, topic1[0].topicAbout, 0);
      ui.displayTopicList(topic2[0].topic, topic2[0].topicAbout, 1);
      ui.displayTopicList(topic3[0].topic, topic3[0].topicAbout, 2);
      ui.displayTopicList(topic4[0].topic, topic4[0].topicAbout, 3);
      ui.displayTopicList(topic5[0].topic, topic5[0].topicAbout, 4);
      ui.displayTopicList(topic6[0].topic, topic6[0].topicAbout, 5);
      ui.displayTopicList(topic7[0].topic, topic7[0].topicAbout, 6);
      ui.displayTopicList(topic8[0].topic, topic8[0].topicAbout, 7);
      ui.displayTopicList(topic9[0].topic, topic9[0].topicAbout, 8);
      ui.displayTopicList(topic10[0].topic, topic10[0].topicAbout, 9);
      ui.displayTopicList(topic11[0].topic, topic11[0].topicAbout, 10);
      ui.displayTopicList(topic12[0].topic, topic12[0].topicAbout, 11);
      ui.displayTopicList(topic13[0].topic, topic13[0].topicAbout, 12);
      ui.displayTopicList(topic14[0].topic, topic14[0].topicAbout, 13);
      ui.displayTopicList(topic15[0].topic, topic15[0].topicAbout, 14);
      ui.displayTopicList(topic16[0].topic, topic16[0].topicAbout, 15 );
      ui.displayTopicList(topic17[0].topic, topic17[0].topicAbout, 16);
      ui.displayTopicList(topic18[0].topic, topic18[0].topicAbout, 17);
      ui.displayTopicList(topic19[0].topic, topic19[0].topicAbout, 18);
      ui.displayTopicList(topic20[0].topic, topic20[0].topicAbout, 19);
      ui.displayTopicList(topic21[0].topic, topic21[0].topicAbout, 20);
      ui.displayTopicList(topic22[0].topic, topic22[0].topicAbout, 21);
      ui.displayTopicList(topic23[0].topic, topic23[0].topicAbout, 22);
      ui.displayTopicList(topic24[0].topic, topic24[0].topicAbout, 23);
      ui.displayTopicList(topic25[0].topic, topic25[0].topicAbout, 24);
      ui.displayTopicList(topic26[0].topic, topic26[0].topicAbout, 25);
      ui.displayTopicList(topic27[0].topic, topic27[0].topicAbout, 26);
      ui.displayTopicList(topic28[0].topic, topic28[0].topicAbout, 27);
      ui.displayTopicList(topic29[0].topic, topic29[0].topicAbout, 28);
      ui.displayTopicList(topic30[0].topic, topic30[0].topicAbout, 29);
      ui.displayTopicList(topic31[0].topic, topic31[0].topicAbout, 30);
      ui.displayTopicList(topic32[0].topic, topic32[0].topicAbout, 31);
      ui.displayTopicList(topic33[0].topic, topic33[0].topicAbout, 32);
      ui.displayTopicList(topic34[0].topic, topic34[0].topicAbout, 33);
      ui.displayTopicList(topic35[0].topic, topic35[0].topicAbout, 34);
      ui.displayTopicList(topic36[0].topic, topic36[0].topicAbout, 35);
      ui.displayTopicList(topic37[0].topic, topic37[0].topicAbout, 36);
      ui.displayTopicList(topic38[0].topic, topic38[0].topicAbout, 37);
      ui.displayTopicList(topic39[0].topic, topic39[0].topicAbout, 38);
      ui.displayTopicList(topic40[0].topic, topic40[0].topicAbout, 39);
      ui.displayTopicList(topic41[0].topic, topic41[0].topicAbout, 40);
      ui.displayTopicList(topic42[0].topic, topic42[0].topicAbout, 41);
      ui.displayTopicList(topic43[0].topic, topic43[0].topicAbout, 42);
      ui.displayTopicList(topic44[0].topic, topic44[0].topicAbout, 43);
      ui.displayTopicList(topic45[0].topic, topic45[0].topicAbout, 44);
      ui.displayTopicList(topic46[0].topic, topic46[0].topicAbout, 45);
      ui.displayTopicList(topic47[0].topic, topic47[0].topicAbout, 46);
      ui.displayTopicList(topic48[0].topic, topic48[0].topicAbout, 47);
      ui.displayTopicList(topic49[0].topic, topic49[0].topicAbout, 48);
      ui.displayTopicList(topic50[0].topic, topic50[0].topicAbout, 49);
      ui.displayTopicList(topic51[0].topic, topic51[0].topicAbout, 50);
      ui.displayTopicList(topic52[0].topic, topic52[0].topicAbout, 51);
      ui.displayTopicList(topic53[0].topic, topic53[0].topicAbout, 52);
      ui.displayTopicList(topic54[0].topic, topic54[0].topicAbout, 53);
      ui.displayTopicList(topic55[0].topic, topic55[0].topicAbout, 54);
      ui.displayTopicList(topic56[0].topic, topic56[0].topicAbout, 55);
      ui.displayTopicList(topic57[0].topic, topic57[0].topicAbout, 56);
      ui.displayTopicList(topic58[0].topic, topic58[0].topicAbout, 57);
      ui.displayTopicList(topic59[0].topic, topic59[0].topicAbout, 58);
      ui.displayTopicList(topic60[0].topic, topic60[0].topicAbout, 59);
     
    
    
    
  
}, 500);

}




//Tags event function
function tagsEvent(x){
  
  if(x.target.parentElement.classList.contains('tags')){
    console.log('tags event works')
    if(x.target.parentNode.children[1].textContent === 'Data Types In Javascript'){
      console.log('topic 0 clicked');

      setTimeout(function(){
      topicList.style.opacity = '0';
      topicList.style.transition = 'all 0.3s'
      })
      setTimeout(function(){
        topicList.style.display = 'none';
        backBtn.style.display = '';
        }, 400 )



        // setTimeout(function(){
        //   topicListnDescription.style.display = '';
        //   topicListnDescription.style.opacity = '1';
        //   topicListnDescription.style.transition = 'all 3s';
        // }, 600 )

      setTimeout(function(){
        topicListnDescription.style.display = '';
        topicListnDescription.style.opacity = '1';
        topicListnDescription.style.transition = 'all 3s';
        
        for(let i=0; i<topic1.length; i++){

          ui.keyWordsDisplay(i, topic1[i].name, topic1[i].description )
        }
        
      }, 400)

    }

    if(x.target.parentNode.children[1].textContent === 'Type Converesion'){
      console.log('topic 1 clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic2.length; i++){
  
            ui.keyWordsDisplay(i, topic2[i].name, topic2[i].description )
          }
          
        }, 400)
    }

    if(x.target.parentNode.children[1].textContent === 'Numbers The Math Object'){
      console.log('topic 2 clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic3.length; i++){
  
            ui.keyWordsDisplay(i, topic3[i].name, topic3[i].description )
          }
          
        }, 400)
    }

    if(x.target.parentNode.children[1].textContent === 'Arrayes Method'){
      console.log('topic 3 clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic4.length; i++){
  
            ui.keyWordsDisplay(i, topic4[i].name, topic4[i].description )
          }
          
        }, 400)
    }

    if(x.target.parentNode.children[1].textContent === 'Object Method'){
      console.log('topic 4 clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic5.length; i++){
  
            ui.keyWordsDisplay(i, topic5[i].name, topic5[i].description )
          }
          
        }, 400)
    }

    if(x.target.parentNode.children[1].textContent === 'Date Times'){
      console.log('topic 5 clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic6.length; i++){
  
            ui.keyWordsDisplay(i, topic6[i].name, topic6[i].description )
          }
          
        }, 400)
    }

    if(x.target.parentNode.children[1].textContent === 'If Statement'){
      console.log('topic 6 clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic7.length; i++){
  
            ui.keyWordsDisplay(i, topic7[i].name, topic7[i].description )
          }
          
        }, 400)
    }

    if(x.target.parentNode.children[1].textContent === 'Switches'){
      console.log('topic 7 clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic8.length; i++){
  
            ui.keyWordsDisplay(i, topic8[i].name, topic8[i].description )
          }
          
        }, 400)
    }

    if(x.target.parentNode.children[1].textContent === 'Function'){
      console.log('topic 8 clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic9.length; i++){
  
            ui.keyWordsDisplay(i, topic9[i].name, topic9[i].description )
          }
          
        }, 400)
    }

    if(x.target.parentNode.children[1].textContent === 'Loops'){
      console.log('topic 9 clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic10.length; i++){
  
            ui.keyWordsDisplay(i, topic10[i].name, topic10[i].description )
          }
          
        }, 400)
    }

    // if(x.target.parentNode.children[1].textContent === 'Window'){
    //   console.log('topic 10 clicked');
      
    //   setTimeout(function(){
    //     topicList.style.opacity = '0';
    //     topicList.style.transition = 'all 0.3s'
    //     })
    //     setTimeout(function(){
    //       topicList.style.display = 'none';
    //       backBtn.style.display = '';
    //       }, 400 )

    if(x.target.parentNode.children[1].textContent === 'Window'){
      console.log('topic 10 clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic11.length; i++){
  
            ui.keyWordsDisplay(i, topic11[i].name, topic11[i].description )
          }
          
        }, 400)
    }

    if(x.target.parentNode.children[1].textContent === 'Dom Selector'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic12.length; i++){
  
            ui.keyWordsDisplay(i, topic12[i].name, topic12[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Dom Multi Selector'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic13.length; i++){
  
            ui.keyWordsDisplay(i, topic13[i].name, topic13[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Traversy'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic14.length; i++){
  
            ui.keyWordsDisplay(i, topic14[i].name, topic14[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Create Element'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic15.length; i++){
  
            ui.keyWordsDisplay(i, topic15[i].name, topic15[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Remove Replace'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic16.length; i++){
  
            ui.keyWordsDisplay(i, topic16[i].name, topic16[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Event Listener'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic17.length; i++){
  
            ui.keyWordsDisplay(i, topic17[i].name, topic17[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Event Bubbling And Delegation'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic18.length; i++){
  
            ui.keyWordsDisplay(i, topic18[i].name, topic18[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Task list Project'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic19.length; i++){
  
            ui.keyWordsDisplay(i, topic19[i].name, topic19[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Loan Calculator'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic20.length; i++){
  
            ui.keyWordsDisplay(i, topic20[i].name, topic20[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Number Guesser'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic21.length; i++){
  
            ui.keyWordsDisplay(i, topic21[i].name, topic21[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Build In Constructor'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic22.length; i++){
  
            ui.keyWordsDisplay(i, topic22[i].name, topic22[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Prototype Explained'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic23.length; i++){
  
            ui.keyWordsDisplay(i, topic23[i].name, topic23[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Prototype Inheritence'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic24.length; i++){
  
            ui.keyWordsDisplay(i, topic24[i].name, topic24[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Uaing Object.create'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic25.length; i++){
  
            ui.keyWordsDisplay(i, topic25[i].name, topic25[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'ES6 Classes'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic26.length; i++){
  
            ui.keyWordsDisplay(i, topic26[i].name, topic26[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Sub Classes'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic27.length; i++){
  
            ui.keyWordsDisplay(i, topic27[i].name, topic27[i].description )
          }
          
        }, 400)
    }

    if(x.target.parentNode.children[1].textContent === 'The Book List'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic28.length; i++){
  
            ui.keyWordsDisplay(i, topic28[i].name, topic28[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Convert To ES6 Classes'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic29.length; i++){
  
            ui.keyWordsDisplay(i, topic29[i].name, topic29[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Ajax & XHR Methods'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic30.length; i++){
  
            ui.keyWordsDisplay(i, topic30[i].name, topic30[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Working With Ajax & JSON'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic31.length; i++){
  
            ui.keyWordsDisplay(i, topic31[i].name, topic31[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Getting Data From An Extarnal Api'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic32.length; i++){
  
            ui.keyWordsDisplay(i, topic32[i].name, topic32[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Rest APIs HTTP Request'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic33.length; i++){
  
            ui.keyWordsDisplay(i, topic33[i].name, topic33[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Callback Functions'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic34.length; i++){
  
            ui.keyWordsDisplay(i, topic34[i].name, topic34[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Custom HTTP Library'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic35.length; i++){
  
            ui.keyWordsDisplay(i, topic35[i].name, topic35[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Custom HTTP Library Part-2'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic36.length; i++){
  
            ui.keyWordsDisplay(i, topic36[i].name, topic36[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'ES6 Promises'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic37.length; i++){
  
            ui.keyWordsDisplay(i, topic37[i].name, topic37[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'The Fetch Api'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic38.length; i++){
  
            ui.keyWordsDisplay(i, topic38[i].name, topic38[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Arrow Function'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic39.length; i++){
  
            ui.keyWordsDisplay(i, topic39[i].name, topic39[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Custom Http Library With Fetch Promises'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic40.length; i++){
  
            ui.keyWordsDisplay(i, topic40[i].name, topic40[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Asinc And Await'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic41.length; i++){
  
            ui.keyWordsDisplay(i, topic41[i].name, topic41[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Fetch With Async Await'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic42.length; i++){
  
            ui.keyWordsDisplay(i, topic42[i].name, topic42[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Github Finder Part1'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic43.length; i++){
  
            ui.keyWordsDisplay(i, topic43[i].name, topic43[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Github Finder Part2'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic44.length; i++){
  
            ui.keyWordsDisplay(i, topic44[i].name, topic44[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Github Finder Part3'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic45.length; i++){
  
            ui.keyWordsDisplay(i, topic45[i].name, topic45[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Github Finder Part 4'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic46.length; i++){
  
            ui.keyWordsDisplay(i, topic46[i].name, topic46[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Github finder part 5'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic47.length; i++){
  
            ui.keyWordsDisplay(i, topic47[i].name, topic47[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Error Handling With try_catch'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic48.length; i++){
  
            ui.keyWordsDisplay(i, topic48[i].name, topic48[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Regular Expression Part-1'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic49.length; i++){
  
            ui.keyWordsDisplay(i, topic49[i].name, topic49[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Regular Expression Part 2 n 3 n 4'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic50.length; i++){
  
            ui.keyWordsDisplay(i, topic50[i].name, topic50[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Iterators Generators'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic51.length; i++){
  
            ui.keyWordsDisplay(i, topic51[i].name, topic51[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Profile Scroller'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic52.length; i++){
  
            ui.keyWordsDisplay(i, topic52[i].name, topic52[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Symbols'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic53.length; i++){
  
            ui.keyWordsDisplay(i, topic53[i].name, topic53[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Destructuring'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic54.length; i++){
  
            ui.keyWordsDisplay(i, topic54[i].name, topic54[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'MAPS'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic55.length; i++){
  
            ui.keyWordsDisplay(i, topic55[i].name, topic55[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Module Revaling Module Pattern'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic56.length; i++){
  
            ui.keyWordsDisplay(i, topic56[i].name, topic56[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'ES6 SETS'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic57.length; i++){
  
            ui.keyWordsDisplay(i, topic57[i].name, topic57[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Fectory Pattern'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic58.length; i++){
  
            ui.keyWordsDisplay(i, topic58[i].name, topic58[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Tracalorie Project Using Module'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic59.length; i++){
  
            ui.keyWordsDisplay(i, topic59[i].name, topic59[i].description )
          }
          
        }, 400)
    }
    if(x.target.parentNode.children[1].textContent === 'Traclorie Project By Me'){
      console.log('topic  clicked');
      
      setTimeout(function(){
        topicList.style.opacity = '0';
        topicList.style.transition = 'all 0.3s'
        })
        setTimeout(function(){
          topicList.style.display = 'none';
          backBtn.style.display = '';
          }, 400 )
  
  
  
       
  
        setTimeout(function(){
          topicListnDescription.style.display = '';
          topicListnDescription.style.opacity = '1';
          for(let i=0; i<topic60.length; i++){
  
            ui.keyWordsDisplay(i, topic60[i].name, topic60[i].description )
          }
          
        }, 400)
    }
   
  }
  
}

//Back button event function
function backEvent(e){
  
  
  setTimeout(function(){
    for(let i=0; i<e.target.parentNode.children[6].children.length; i++){
      e.target.parentNode.children[6].children[i].remove();
      
    }
    for(let i=0; i<e.target.parentNode.children[6].children.length; i++){
      e.target.parentNode.children[6].children[i].remove();
      
    }
    for(let i=0; i<e.target.parentNode.children[6].children.length; i++){
      e.target.parentNode.children[6].children[i].remove();
      
    }
    for(let i=0; i<e.target.parentNode.children[6].children.length; i++){
      e.target.parentNode.children[6].children[i].remove();
      
    }

    for(let i=0; i<e.target.parentNode.children[6].children.length; i++){
      e.target.parentNode.children[6].children[i].remove();
      
    }

    for(let i=0; i<e.target.parentNode.children[6].children.length; i++){
      e.target.parentNode.children[6].children[i].remove();
      
    }
    for(let i=0; i<e.target.parentNode.children[6].children.length; i++){
      e.target.parentNode.children[6].children[i].remove();
      
    }
    for(let i=0; i<e.target.parentNode.children[6].children.length; i++){
      e.target.parentNode.children[6].children[i].remove();
      
    }
    for(let i=0; i<e.target.parentNode.children[6].children.length; i++){
      e.target.parentNode.children[6].children[i].remove();
      
    }
    for(let i=0; i<e.target.parentNode.children[6].children.length; i++){
      e.target.parentNode.children[6].children[i].remove();
      
    }
    
    topicListnDescription.style.transition = 'all 0.5s'
  })

  setTimeout(function(){
    
    topicListnDescription.style.display = 'none';
    
  }, 100);
  
  
  topicList.style.display = '';
  setTimeout(function(){
    topicList.style.opacity = '1';
    topicList.style.transition = 'all 0.5s';
  },200);
  backBtn.style.display = 'none';
  
}



//Back3 Button Event

function back3Event(){

  totalTopicbox.style.display = 'none';
getInsideButtonBox.style.display = 'none';
searchBox.style.display = 'none';
topicList.style.display = 'none';
topicListnDescription.style.display = 'none';
backBtn.style.display = 'none';
back3.style.display = 'none';

setTimeout(function(){
  courseNameBox.style.display = '';
})



setTimeout(function(){
  jsHeader.style.display = '';
  jsHeader.style.opacity = '0';
  })
setTimeout(function(){
  jsHeader.style.transition = 'all 0.5s'
  jsHeader.style.opacity = '1';
  }, 250);

  setTimeout(function(){
    mainBox.style.height = '40vh';
    mainBox.style.transition = 'all 2s'
  })

  jsHeader.style.marginBottom = '10px';
  jsHeader.style.top = '20%';
  jsHeader.style.left = '15%';
  jsHeader.style.fontSize = '30px';
  jsHeader.style.width = '70%';
  jsHeader.style.margin = 'auto';
  jsHeader.style.boxShadow = ' 5px 7px 8px 3px rgba(0, 0, 0, 0.3), -1px -1px 7px 2px rgba(255, 255, 255, 0.3)';
  

  courseNameHeader.style.display = '';
  courseNameBox.style.position = 'absolute';
  courseNameBox.style.bottom = '-10px';
  courseNameBox.style.left = '15%';
  courseNameBox.style.margin = 'auto';
  courseNameBox.style.width = '70%';
  courseNameBox.style.fontSize = '1em';
  courseNameBox.style.borderBottom = 'none';
 courseNameBox.style.border = '0';
  courseNameText.style.fontSize = '1em';
  courseNameBox.style.top = '0';





  // courseNameBox.style.display = '';
  //   courseNameBox.style.left = '25%';
  // courseNameBox.style.top = '-65%';
  // courseNameBox.style.bottom = 'none';
  // courseNameBox.style.width = '50%';
  // courseNameBox.style.height = '40px';
  // courseNameBox.style.fontSize = '15px';
  // courseNameBox.style.boxShadow = 'none';
  // courseNameBox.style.border = '1px solid rgba(0, 0, 0, 0.3)';
  // courseNameBox.style.display = 'flex';
  // courseNameBox.style.alignItems = 'flex-start';
  // courseNameBox.style.justifyContent = 'center';
  // courseNameBox.style.fontWeight = '700';
  // courseNameBox.style.transition = 'all 1s';
  // courseNameBox.style.borderBottom = '5px solid rgba(255, 255, 255, 0.6)';
  // courseNameBox.style.paddingBottom = '22px';
  // position: absolute;
  // bottom: 50px;
  // left: 15%;
  // margin: auto;
  // width: 70%;
  // font-size: 1em

}











