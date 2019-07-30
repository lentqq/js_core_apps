const family = [
    {
        id: 1,
        name: 'Niksy',
        age: 30,
        birthDay: 13355678

    },
    {
        id: 2,
        name: 'Mil',
        age: 20,
        birthDay: 13356

    },
    {
        id: 3,
        name: 'Nik',
        age: 15,
        birthDay: 125

    },
    {
        id: 4,
        name: 'Boko - Maus',
        age: 10,
        birthDay: 12

    }
]
let aboutMeTrigger = document.getElementById('me-trigger');
let familyTrigeer = document.getElementById('family-trigger');
let familyContent = document.getElementById('family-content');

function showMember(id) {
    let member = family.find((member) => member.id === id);

    if (member) {
        familyContent.innerHTML = `
    <h1>Name: ${member.name}</h1>
    <h1>Age: ${member.age}</h1>
    <h1>Birthday: ${member.birthDay}</h1>
    `;
    };
};

aboutMeTrigger.addEventListener('click', () => {
    const memberId = 1;
    history.pushState({ memberId }, '', `#/member/${memberId}`);
    showMember(memberId);
});

familyTrigeer.addEventListener('click', () => {
    const memberId = 4;
    history.pushState({ memberId }, '', `#/member/${memberId}`);
    showMember(memberId);
});

window.addEventListener('popstate', ({ state }) => {
    if(!state) {
        familyContent.innerHTML = 'Look again at first';
    }

    let { memberId } = state;

    showMember(memberId);
});