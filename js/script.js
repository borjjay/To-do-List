




let addNameBtn = document.querySelector("#addBtn")
addNameBtn.addEventListener("click", addName)

function addName() {


    
    //get value from input
    let firstName = document.querySelector("#firstName").value;

    //get parent node
    let nameList = document.querySelector("#nameList");

    //create child nodes
    let nameItem = document.createElement("div");
    let nameInput = document.createElement("input");
    
    nameInput.type = "text";
    nameInput.setAttribute("disabled", ""); //add disabled attribute
    nameInput.value = firstName;
    nameInput.classList = "inputUi"
    nameInput.defaultValue = firstName;

    //create edit btn
    let editBtn = document.createElement("button");
    editBtn.innerHTML= "<span class='material-symbols-outlined'> redo</span>";
    editBtn.classList = "editBtn";
    editBtn.addEventListener("click", editValue);
 
    // code for enter
    document.querySelector("#addBtn").addEventListener('keypress', 
    
    function () {
        if (("#addBtn") === 'Enter') {
         
        }
    });

    //create delit btn


    let delBtn = document.createElement("button");
    delBtn.innerHTML = "<span class='material-symbols-outlined'>delete</span>";
    delBtn.classList = "delBtn";
    delBtn.addEventListener("click", delValue);
 
   
    //append child nodes
    nameList.appendChild(nameItem);
    nameItem.appendChild(nameInput);
    nameItem.appendChild(editBtn);
    nameItem.appendChild(delBtn);
    

 

    //
    if(nameList.childElementCount === 8){
        document.querySelector("#addBtn").disabled = true;
      alert("LIMIT")
     } 
    
     


    function editValue() {

        //remove disabled attribute
        nameInput.removeAttribute("disabled", "");

        //disable edit button to avoid multiple save buttons
        editBtn.setAttribute("disabled", "");

        //create save btn
        let saveBtn = document.createElement("button");
        saveBtn.innerHTML= "<span class='material-symbols-outlined'>done</span>"
        saveBtn.classList = "saveBtn";
        saveBtn.addEventListener("click", saveValue);

        

        //append saveBtn
        nameItem.appendChild(saveBtn);


        function saveValue() {

            let text = "Are you sure you want to save changes?" + nameInput.value + "as name";

            if (confirm(text) == true) {

                //enable edit button again
                editBtn.removeAttribute("disabled", "");
               
                //get new Value
                let newValue = nameInput.value;
                nameInput.defaultValue = newValue;
                console.log(newValue);


                //disable  input type
                nameInput.setAttribute("disabled", "");

                //hid save button
                nameItem.removeChild(saveBtn);

                text = "Saved succesfully"
            } else {
                text = "cancelled";
                nameInput.value = nameInput.defaultValue;

            }
            alert(text);

            }
          
          
        }
        //del value
        function delValue(){
            this.parentNode.remove();
            document.querySelector("#addBtn").disabled = false;
             }
        

      
    }



