const loading = document.querySelector('#loading');

function showLoading() {
  loading.classList.remove('hidden');
}

function hideLoading() {
  loading.classList.add('hidden');
}

export default { showLoading, hideLoading };
