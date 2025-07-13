const names = [
  'Sophia', 'Isabella', 'Emma', 'Olivia', 'Ava', 'Mia',
  'Charlotte', 'Amelia', 'Harper', 'Evelyn', 'Abigail', 'Emily',
  'Elizabeth', 'Sofia', 'Avery', 'Ella', 'Scarlett', 'Grace',
  'Chloe', 'Victoria', 'Riley', 'Aria', 'Lily', 'Aubrey',
  'Zoey', 'Penelope', 'Lillian', 'Addison', 'Layla', 'Natalie',
  'Camila', 'Hannah', 'Brooklyn', 'Zoe', 'Nora', 'Leah',
  'Savannah', 'Audrey', 'Claire', 'Peyton', 'Anna', 'Samantha'
];
const notification = document.getElementById('notification');
const faqQuestions = document.querySelectorAll('.faq-question');

function getRandomName() {
  return names[Math.floor(Math.random() * names.length)];
}

function showNotification(message) {
  notification.textContent = message;
  notification.style.display = 'block';
  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
}

function scheduleNotification() {
  const applyName = getRandomName();
  showNotification(`${applyName} has applied for their PR Package`);
  setTimeout(() => {
    const shipName = getRandomName();
    showNotification(`${shipName}'s PR Package has been shipped`);
  }, 1000);
}

setInterval(scheduleNotification, 3000);

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle('active');
  });
});