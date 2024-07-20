const getBtn = document.querySelector("#getBtn");
const paraDetails = document.querySelector("#paraDetails");
const pincodeInput = document.querySelector("#pincode");


const getCityDetails = async () => {
   console.log("Wait - getting details about your enterd pinCode.......");
   const pincode = pincodeInput.value; 
   const APIurl = `https://api.postalpincode.in/pincode/${pincode}`;
   try {
      const response = await fetch(APIurl);
      const data = await response.json();
      console.log(data[0].PostOffice[0]);
      console.log(data);

      document.querySelector("#name").textContent = data[0].PostOffice[0].Name || "N/A";
      document.querySelector("#branchType").textContent = data[0].PostOffice[0].BranchType || "N/A";
      document.querySelector("#deliveryStatus").textContent = data[0].PostOffice[0].DeliveryStatus
      || "N/A";
      document.querySelector("#circle").textContent = data[0].PostOffice[0].Circle || "N/A";
      document.querySelector("#district").textContent = data[0].PostOffice[0].District || "N/A";
      document.querySelector("#divison").textContent = data[0].PostOffice[0].Divison || "N/A";
      document.querySelector("#region").textContent = data[0].PostOffice[0].Region || "N/A";
      document.querySelector("#state").textContent = data[0].PostOffice[0].State || "N/A";
      document.querySelector("#country").textContent = data[0].PostOffice[0].Country|| "N/A";
   } catch (eve) {
      console.error("error-faild to fetch", eve);
      window.alert("please check out the network and filling of data process, its type....")
   }
} 

getBtn.addEventListener('click', getCityDetails);

function createTable(){
   const table = document.getElementById("tableContainer");
   const headerRow = document.createElement("tr");
   headerName = document.createElement("th");
   headerName.appendChild
}

createTable(); 