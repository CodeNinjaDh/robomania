document.addEventListener('DOMContentLoaded', () => {

  // Sample team data (replace with your actual data)
  const teamData = {
      developers: [
          { name: "Alice Smith", designation: "Senior Developer", image: "assets/alice.jpg", role: "Backend Engineer" },
          { name: "Bob Johnson", designation: "Frontend Engineer", image: "assets/bob.jpg", role: "React Specialist" },
          { name: "Charlie Brown", designation: "Data Scientist", image: "assets/charlie.jpg", role: "Machine Learning" },
      ],
      contributors: [
          { name: "David Lee", designation: "UI Designer", image: "assets/david.jpg", role: "UX/UI Design" },
          { name: "Eve Wilson", designation: "Technical Writer", image: "assets/eve.jpg", role: "Documentation" },
          { name: "Eve Wilson", designation: "Technical Writer", image: "assets/eve.jpg", role: "Documentation" },
      ]
  };

  // Function to create a team member card
  function createTeamMemberCard(member) {
      const card = document.createElement('div');
      card.classList.add('team-member');

      card.innerHTML = `
          <div class="image-container">
              <img src="${member.image}" alt="${member.name}">
          </div>
          <h3>${member.name}</h3>
          <p class="designation">${member.designation}</p>
          <p class="role">${member.role}</p>
      `;

      return card;
  }

  // Function to populate a team section
  function populateTeamSection(sectionId, teamMembers) {
      const section = document.getElementById(sectionId);
      const grid = section.querySelector('.team-grid');

      teamMembers.forEach(member => {
          const card = createTeamMemberCard(member);
          grid.appendChild(card);
      });
  }

  // Populate the developer and contributor sections
  populateTeamSection('developers', teamData.developers);
  populateTeamSection('contributors', teamData.contributors);

  // --- Intersection Observer for Section Animations ---
  function handleIntersect(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target); // Stop observing after animation
          }
      });
  }

  const observerOptions = {
      threshold: 0.15 // Trigger when 15% of the section is visible
  };

  const sectionObserver = new IntersectionObserver(handleIntersect, observerOptions);

  document.querySelectorAll('.animate-section').forEach(section => {
      sectionObserver.observe(section);
  });


});