function attachEvents() {
    let btn = document.getElementById('btnLoadTowns');
    btn.addEventListener('click', loadTowns);
    let container = document.getElementById('root');

    function loadTowns() {
        let towns = document.getElementById('towns')
            .value
            .split(', ')
            .map(town =>  town = {
                name: town
            });
        renderTowns(towns);
        
        function renderTowns(towns) {
            let template = document.getElementById('towns-template').innerHTML;
            let compiled = Handlebars.compile(template);
            let rendered = compiled({ towns });
            container.innerHTML = rendered;
        };
    }
    return loadTowns;
};