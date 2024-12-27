const imgContent = document.querySelectorAll('.img-content-hover');

document.getElementById('currentYear').textContent = new Date().getFullYear();

function showImgContent(e) {
    for (var i = 0; i < imgContent.length; i++) {
        imgContent[i].style.left = e.pageX + 'px';
        imgContent[i].style.top = e.pageY + 'px';
    }
};

document.addEventListener('mousemove', showImgContent);

// Function to filter table rows
document.getElementById('filterInput').addEventListener('input', function() {
    let filterValue = this.value.toLowerCase();
    let rows = document.querySelectorAll('#dataTable tbody tr');
    
    rows.forEach(row => {
        let cells = row.getElementsByTagName('td');
        let match = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(filterValue));
        row.style.display = match ? '' : 'none';
    });
    
});

function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var mailtoLink = "mailto:info@israelistoronto.ca" // Replace with your email
        + "?subject=" + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);

    window.location.href = mailtoLink;
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to filter the table based on profession
function filterTable(filterValue) {
    const table = document.getElementById("dataTable");
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) { // Start from 1 to skip the header
        const professionCell = rows[i].getElementsByTagName("td")[0]; // Assuming "Field" is the first column
        const profession = professionCell ? professionCell.textContent.trim().toLowerCase() : "";

        if (profession.includes(filterValue.toLowerCase())) {
            rows[i].style.display = ""; // Show row
        } else {
            rows[i].style.display = "none"; // Hide row
        }
    }
}
// Handle Smooth Scrolling After Page Load
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get("filter");
    const tableSection = document.querySelector("#data-Table");
    
    if (filter && tableSection) {
      setTimeout(() => {
        tableSection.scrollIntoView({ behavior: "smooth" });
      }, 500); // Delay to ensure loading is complete
    }
  });

// On document ready, check if there's a filter in the URL
document.addEventListener("DOMContentLoaded", function() {
    const filter = getQueryParam("filter");
    if (filter) {
        filterTable(filter); // Apply the filter to the table
    }
});


