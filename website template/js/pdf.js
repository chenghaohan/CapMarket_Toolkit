window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const dashborad = this.document.getElementById("exportReport");
            console.log(dashborad);
            console.log(window);
            var opt = {
                margin: 0.5,
                filename: 'your_stock_report.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
            };
            html2pdf().from(dashborad).set(opt).save();
        })
}