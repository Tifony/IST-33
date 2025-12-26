document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const btnDesktop = document.getElementById('btn-desktop');
    const btnMobile = document.getElementById('btn-mobile');
    const btnAuto = document.getElementById('btn-auto');
    const body = document.body;

    const toggleMonthly = document.getElementById('toggle-monthly');
    const toggleYearly = document.getElementById('toggle-yearly');
    const priceTags = document.querySelectorAll('.price-val');
    const periodTags = document.querySelectorAll('.price-period');


    // --- View Switching Logic ---
    function setActiveView(mode) {
        // Update Classes
        body.classList.remove('auto-layout', 'view-desktop', 'view-mobile');

        if (mode === 'auto') {
            body.classList.add('auto-layout');
        } else if (mode === 'desktop') {
            body.classList.add('view-desktop');
        } else if (mode === 'mobile') {
            body.classList.add('view-mobile');
        }

        // Update Buttons
        [btnDesktop, btnMobile, btnAuto].forEach(btn => btn.classList.remove('active'));
        if (mode === 'auto') btnAuto.classList.add('active');
        if (mode === 'desktop') btnDesktop.classList.add('active');
        if (mode === 'mobile') btnMobile.classList.add('active');
    }

    btnDesktop.addEventListener('click', () => setActiveView('desktop'));
    btnMobile.addEventListener('click', () => setActiveView('mobile'));
    btnAuto.addEventListener('click', () => setActiveView('auto'));


    // --- Pricing Toggle Logic ---
    function setPricing(period) {
        // Toggle buttons
        if (period === 'monthly') {
            toggleMonthly.classList.add('active');
            toggleYearly.classList.remove('active');
        } else {
            toggleYearly.classList.add('active');
            toggleMonthly.classList.remove('active');
        }

        // Update Prices
        priceTags.forEach(tag => {
            if (period === 'monthly') {
                tag.textContent = tag.getAttribute('data-monthly') + ' руб.';
            } else {
                tag.textContent = tag.getAttribute('data-yearly') + ' руб.';
            }
        });

        // Update Text (/ month vs / year)
        periodTags.forEach(tag => {
            tag.textContent = (period === 'monthly') ? '/ месяц' : '/ год';
        });
    }

    toggleMonthly.addEventListener('click', () => setPricing('monthly'));
    toggleYearly.addEventListener('click', () => setPricing('yearly'));

});
