const reg = [
    "0", "23BCE10409", "23BAI10686", "23BAI10572", "23BAI10847", "23BSA10008",
    "23BCE10425", "23BCE10472", "23BCE10448", "23BCE10331", "22BCE10177",
    "23BAI10038", "23BAI10904", "23BAI10383", "23BCY10085", "23BCE11203",
    "23BCE10422", "23BAI10916", "23BAS10082", "23BCE10169", "23BCE11233",
    "23BCE10963", "23BME10027", "23BCE10514", "23BCE10271", "23BET10038",
    "23BCE10462", "23BCE10655", "23BCE11144", "23BAI10048", "23BAI10321",
    "23BAI10546", "23BAI10766", "23BAI10831", "23BAI10993", "23BAI11168",
    "23BAI11174", "23BAI11218", "23MEI10090", "23BCE10361", "23BCE11026",
    "23BCE11536", "23BAC10036", "23BCE10404", "23BHI10177", "23BSA10080",
    "23BCE10110", "23BCE10143", "23BCE10134", "23MIM10012", "23BCE10334"
];

document.querySelector("form").addEventListener("submit", (e) => {

    e.preventDefault();

    const regNo = document.getElementById("regno").value.trim().toUpperCase();
    const name = document.getElementById("name").value.trim();
    const imgContainer = document.querySelector(".letter-img img");

    const index = reg.indexOf(regNo);
    const downloadBtn = document.getElementById('downloadBtn');

    if (index !== -1) {
        imgContainer.src = `/images/Appointment/'24/${index}.png`;
        imgContainer.alt = `${name}'s Appointment Letter`;

        downloadBtn.style.display = 'inline-block';
        downloadBtn.setAttribute('data-file', `/images/Appointment/'24/${index}.png`);
    }

    else {
        imgContainer.alt = "No certificate found.";
        downloadBtn.style.display = 'none';
        alert("Invalid Registration Number. Please try again.");
    }
});

document.getElementById('downloadBtn').addEventListener('click', function () {
    const file = this.getAttribute('data-file'); 
    const regNo = document.getElementById("regno").value.trim().toUpperCase();
    
    if (file) {
        const link = document.createElement('a');
        link.href = file;
        link.download = `${regNo} Appointment Letter.png`;
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } 
    
    else {
        alert("No certificate to download. Please search for a valid registration number.");
    }
});