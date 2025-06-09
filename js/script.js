// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};
//klik di luar sidebar untuk menghilangkan nav
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

//  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
//    searchForm.classList.remove('active');
//  }

//  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
//    shoppingCart.classList.remove('active');
//  }
});

fetch('jadwal.json')
  .then(response => {
    console.log('Response status:', response.status);
    return response.json();
  })
  .then(data => {
    console.log('Data diterima:', data); // 👈 Ini penting
    const tbody = document.querySelector('#jadwal-table tbody');
    data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.hari}</td>
        <td>${item.tanggal}</td>
        <td>${item.waktu}</td>
        <td>${item.ustadz}</td>
        <td>${item.tempat}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

