document.addEventListener('DOMContentLoaded', function () {
  const aboutBtn = document.getElementById('aboutBtn');
  const socialBtn = document.getElementById('socialBtn');
  const heading = document.querySelector('.info_container h4');
  const paragraph = document.querySelector('.info_container p');

  const aboutContent = {
    title: 'ABOUT ME',
    text: `Hi! I am a second-year Computational Media student (switching to CS next semester lol).
            I am originally from Lima, Peru, and I moved to Lilburn, GA in 2021.`
  };

  const socialContent = {
    title: 'SOCIAL GOOD',
    text: `I am passionate about helping others and making a positive impact on people's lives.
    I am particularly interested in helping hispanic youth access higher education, which is something I am currently doing through my work at La Amistad's College Club.`
  };

  function setActive(tab) {
    aboutBtn.classList.toggle('active', tab === 'about');
    socialBtn.classList.toggle('active', tab === 'social');

    const content = tab === 'about' ? aboutContent : socialContent;
    heading.textContent = content.title;
    paragraph.textContent = content.text;
  }

  setActive('about');

  aboutBtn.addEventListener('click', () => setActive('about'));
  socialBtn.addEventListener('click', () => setActive('social'));

  const card = document.querySelector('.card');
    card.addEventListener('click', (e) => {
      if (e.target.closest('.tab')) return; // ignore button clicks
      document.body.classList.toggle('dark');
      card.classList.toggle('dark');
    });
});