//////// DO NOT EDIT BELOW THIS LINE ////////////////
/////////////////////////////////////////////////////

let
	Admin = ["Fowlkes", "Lynch", "Woodham", "Stahl", "Peter"],
	CTE = ["Alphonse", "Donahue", "Santana", "Vaduva", "Woods", "Shams", "Urena"],
	History = ["McQuilkin", "Amell", "Hablenko", "Schmidt", "Headlem", "Lucas", "Smith"],
	Counselor = ["Grant", "Weaver"],
	Maths = ["Freck", , "Ventimiglia"],
	Gym = ["Banta", "Proper", "Moll", "Murray"],
	Dean = ["Frazier", "Vaduva", "Mollison"],
	Language = ["Levystone", "Ortiz", "Stratman", "Vaduva", "Streeter", "Weaver"],
	Science = ["Koelsch", "Willet", "Lagana", "Fonrose"],
	English = ["Brown", "DelValle", "Duran", "Griszell", "King", "Fonrose", "Constant"],
	Office = ["Verley"],
	Support = ["Kabir", "Minto"],
	SSC = ["Stephine"];

//////// DO NOT EDIT ABOVE THIS LINE ////////////////
/////////////////////////////////////////////////////

////////// MAKE YOUR UPDATES WITHIN THIS SECTION //// 


const manageAccountBtn = document.getElementById('pfp');
const modal = document.getElementById('edit-modal');
const closeBtn = document.querySelector('.close-btn');
const form = document.getElementById('edit-form');


document.addEventListener("DOMContentLoaded", () => {
  const manageAccountBtn = document.getElementById('pfp');
  const editModal = document.getElementById('edit-modal');
  const editCloseBtn = document.querySelector('#edit-modal .close-btn');
  const editForm = document.getElementById('edit-form');

  manageAccountBtn.addEventListener('click', () => {
    editModal.style.display = 'flex';
  });

  editCloseBtn.addEventListener('click', () => {
    editModal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === editModal) {
      editModal.style.display = 'none';
    }
  });

  editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newName = document.getElementById('name').value;
    const fileInput = document.getElementById('edit-avatar'); // Updated ID

    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];

      if (!file.type.startsWith('image/')) {
        alert('Please upload a valid image file.');
        return;
      }

      const reader = new FileReader();
      reader.onload = function(e) {
        manageAccountBtn.style.backgroundImage = `url(${e.target.result})`;
        manageAccountBtn.style.backgroundSize = 'cover';
      };
      reader.readAsDataURL(file);
    }

    editModal.style.display = 'none';
  });

  const villagers = [
    {
      id: 1,
      villager: 'Raymond',
      species: 'Cat',
      color: '#B0B3B7',
      avatar: 'https://files.catbox.moe/5hybew.jpg'
    },
    {
      id: 2,
      villager: 'Stitches',
      species: 'Cub',
      color: '#FFB3BA',
      avatar: 'https://files.catbox.moe/r8b90d.png'
    },
    {
      id: 3,
      villager: 'Erik',
      species: 'Deer',
      color: '#D2B48C',
      avatar: 'https://files.catbox.moe/7w1yyb.jpg'
    }
  ];

  function createVillagerCard(villagerItem) {
    return `
      <div class="card-wrapper">
        <div class="class-card" style="background-color: ${villagerItem.color};">
          <div class="avatar" style="background-image: url(${villagerItem.avatar});"></div>
          <div class="info">
            <h3>${villagerItem.villager}</h3>
            <p class="species">${villagerItem.species}</p>
          </div>
        </div>
      </div>
    `;
  }

  const villagerContainer = document.getElementById('class-container');
  villagers.forEach(villagerItem => {
    villagerContainer.insertAdjacentHTML('beforeend', createVillagerCard(villagerItem));
  });

  const addMemberBtn = document.getElementById('add-member');
  const addMemberModal = document.getElementById('add-member-modal');
  const addCloseBtns = document.querySelectorAll('#add-member-modal .close-btn');
  const addVillagerForm = document.getElementById('add-villager-form');

  addMemberBtn.addEventListener('click', () => {
    addMemberModal.style.display = 'flex';
  });

  addCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      addMemberModal.style.display = 'none';
    });
  });

  window.addEventListener('click', (event) => {
    if (event.target === addMemberModal) {
      addMemberModal.style.display = 'none';
    }
  });

  addVillagerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const villagerName = document.getElementById('villager-name').value;
    const species = document.getElementById('species').value;
    const color = document.getElementById('villager-color').value; // Updated ID
    const avatarInput = document.getElementById('villager-avatar'); // Updated ID

    if (avatarInput.files.length > 0) {
      const file = avatarInput.files[0];
      const reader = new FileReader();

      reader.onloadend = function() {
        const newVillager = {
          id: villagers.length + 1,
          villager: villagerName,
          species: species,
          color: color,
          avatar: reader.result
        };

        villagers.push(newVillager);
        villagerContainer.insertAdjacentHTML('beforeend', createVillagerCard(newVillager));

        addVillagerForm.reset();
        addMemberModal.style.display = 'none';
      };

      reader.readAsDataURL(file);
    } else {
      alert('Please select an avatar file.');
    }
  });
});










































/////////////////////////////////////////////////////
//////// DO NOT EDIT BELOW THIS LINE ////////////////
/////////////////////////////////////////////////////

const STAFF = [Admin, Office, Counselor, CTE, History, Maths, Gym, Dean, Language, Science, English, Support, SSC];

e("table").innerHTML = createTableCotents();
