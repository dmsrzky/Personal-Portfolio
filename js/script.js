// MOBILE MENU
document.getElementById('burger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});
function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// SCROLL REVEAL
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));


// MODALS
const projectData = {
  p1: {
    images: [
      { src: 'assets/images/studiowebsite.jpg', alt: 'Freelance Website — Desktop View' },
      // { src: '', alt: 'Freelance Website — mobile view' },
      // { src: '', alt: 'Freelance Website — section detail' },
    ]
  },
  p2: {
    images: [
      { src: 'assets/images/tim-audros.jpeg', alt: 'IoT Monitoring System — Team' },
      { src: 'assets/images/final.jpg', alt: 'IoT Monitoring System — Hardware Setup' },
      { src: '', alt: 'IoT Monitoring System — Program & Blynk Dashboard' },
    ]
  },
  p3: {
    images: [
      { src: 'assets/images/remix.jpg', alt: 'ERC-20 Token — Remix IDE Deployment' },
      // { src: '', alt: 'ERC-20 Token — testnet transaction' },
    ]
  }
};

let activeModal = null;

function openModal(projectId) {
  const modal = document.getElementById('modal-' + projectId);
  const overlay = document.getElementById('modalOverlay');
  if (!modal) return;

  if (activeModal && activeModal !== modal) closeModal(false);

  activeModal = modal;
  overlay.classList.add('active');
  modal.classList.add('active');
  document.body.classList.add('modal-open');

  loadGalleryImage(projectId, 0);

  document.addEventListener('keydown', handleEsc);
}

function closeModal(resetActive = true) {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', handleEsc);

  if (activeModal) {
    activeModal.classList.remove('active');
    if (resetActive) activeModal = null;
  }
}

function handleEsc(e) {
  if (e.key === 'Escape') closeModal();
}

function loadGalleryImage(projectId, idx) {
  const data = projectData[projectId];
  if (!data) return;

  const imgData = data.images[idx];
  const mainContainer = document.getElementById('gallery-' + projectId + '-main');
  if (!mainContainer) return;

  if (imgData && imgData.src) {
    mainContainer.innerHTML = `<img src="${imgData.src}" alt="${imgData.alt}" loading="lazy" />`;
  } else {
    mainContainer.innerHTML = `
      <div class="modal-img-placeholder">
        <div class="ph-inner">
          <span class="ph-icon">${getProjectIcon(projectId)}</span>
          <span class="ph-label">${imgData ? imgData.alt : 'Project image'}</span>
          <span class="ph-hint">Add image path in index.js → projectData.${projectId}</span>
        </div>
      </div>`;
  }

  const thumbContainer = document.getElementById('thumbs-' + projectId);
  if (thumbContainer) {
    thumbContainer.querySelectorAll('.modal-thumb').forEach((t, i) => {
      t.classList.toggle('active', i === idx);
    });
  }
}

function getProjectIcon(id) {
  const icons = { p1: '◻', p2: '◈', p3: '⬡' };
  return icons[id] || '○';
}

document.querySelectorAll('.modal-thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    const gallery = thumb.dataset.gallery;
    const idx = parseInt(thumb.dataset.idx, 10);
    if (gallery !== undefined && !isNaN(idx)) {
      loadGalleryImage(gallery, idx);
    }
  });
});
