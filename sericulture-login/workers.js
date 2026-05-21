document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const daysInput = row.querySelectorAll('input')[0];
        const wageInput = row.querySelectorAll('input')[1];
        const totalTd = row.querySelector('.total-salary');
        
        function updateSalary() {
            const days = parseFloat(daysInput.value) || 0;
            const wage = parseFloat(wageInput.value) || 0;
            totalTd.textContent = '$' + (days * wage).toFixed(0);
        }
        
        daysInput.addEventListener('input', updateSalary);
        wageInput.addEventListener('input', updateSalary);
    });
});