  const commentsData = {
    1:{logo:'AG',bg:'var(--sky)',name:'Association Graine D éveil',company:'Préstation CM'},
    2:{logo:'AS',bg:'var(--coral)',name:'Association SoeurLidaire',company:'Création de Flyers'},
    3:{logo:'CC',bg:'var(--lavender)',name:'Crowned Copnsulting',company:'Stage'},
    4:{logo:'RE',bg:'var(--lavender)',name:'Reelia',company:'Stage'}
  };

  function openCommentModal(id){
    const data = commentsData[id];
    const fullText = document.getElementById('comment-text-' + id).textContent;
    document.getElementById('modal-logo').textContent = data.logo;
    document.getElementById('modal-logo').style.background = data.bg;
    document.getElementById('modal-name').textContent = data.name;
    document.getElementById('modal-company').textContent = data.company;
    document.getElementById('modal-text').textContent = fullText;
    document.getElementById('comment-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCommentModal(){
    document.getElementById('comment-modal').classList.remove('open');
    document.body.style.overflow = '';
  }

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeCommentModal();
  });
