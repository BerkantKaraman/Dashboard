export default () => ({
  payload: {
    activity_hours: [
      {
        date: "2024-05-01",
        exams_completed: 1,
        hours: 5,
        lessons_taken: 2,
      },
      {
        date: "2024-05-02",
        exams_completed: 1,
        hours: 6,
        lessons_taken: 3,
      },
      {
        date: "2024-05-03",
        exams_completed: 1,
        hours: 4,
        lessons_taken: 2,
      },
      {
        date: "2024-05-04",
        exams_completed: 1,
        hours: 5,
        lessons_taken: 2,
      },
      {
        date: "2024-05-05",
        exams_completed: 1,
        hours: 6,
        lessons_taken: 3,
      },
      {
        date: "2024-05-06",
        exams_completed: 1,
        hours: 4,
        lessons_taken: 2,
      },
      {
        date: "2024-05-07",
        exams_completed: 1,
        hours: 5,
        lessons_taken: 2,
      },
    ],
    average_employee_score: "4.3",
    in_progress_courses: [
      {
        assigned_to: "john.doe@example.com",
        description: "Advanced JavaScript Course",
        due_date: "2024-07-20",
        status: "In Progress",
        title: "JavaScript Advanced",
      },
      {
        assigned_to: "jane.doe@example.com",
        description: "React for Beginners",
        due_date: "2024-07-25",
        status: "In Progress",
        title: "React Basics",
      },
    ],
    skills_in_development: [
      {
        employees: 3,
        skill: "Active Listening",
      },
      {
        employees: 2,
        skill: "Empathy",
      },
      {
        employees: 2,
        skill: "Problem Solving",
      },
      {
        employees: 2,
        skill: "Negotiation",
      },
      {
        employees: 2,
        skill: "Communication",
      },
      {
        employees: 2,
        skill: "Prospecting",
      },
      {
        employees: 5,
        skill: "Python",
      },
      {
        employees: 5,
        skill: "JavaScript",
      },
      {
        employees: 5,
        skill: "React",
      },
      {
        employees: 4,
        skill: "Content Marketing",
      },
      {
        employees: 4,
        skill: "Social Media",
      },
      {
        employees: 4,
        skill: "SEO",
      },
    ],
    teams: [
      {
        description:
          "The Frontend Development Team is responsible for creating and maintaining the user interface and user experience of our applications. This team ensures that the visual elements are functional, user-friendly, and aligned with the design specifications. They work closely with designers, backend developers, and product managers to implement interactive features, optimize performance, and deliver a seamless experience across different devices and browsers.",
        employees: [
          {
            current_score: 90,
            email: "john.doe@example.com",
            lessons_taken: 10,
            name: "John Doe",
            skills_being_developed: ["JavaScript", "React"],
            title: "Senior Developer",
            description:
              "John Doe is a highly skilled Senior Developer with extensive experience in JavaScript and React. He has taken 10 lessons to further enhance his expertise. John is known for his leadership abilities, attention to detail, and ability to mentor junior developers.",
          },
          {
            current_score: 85,
            email: "jane.doe@example.com",
            lessons_taken: 8,
            name: "Jane Doe",
            skills_being_developed: ["React"],
            title: "Junior Developer",
            description:
              "Jane Doe is a promising Junior Developer who has quickly adapted to the React ecosystem. With 8 lessons completed, she is steadily improving her skills. Jane is dedicated to learning and contributes fresh ideas and perspectives to the team.",
          },
        ],
        overall_score: 87.5,
        title: "Frontend Team",
        total_employee_count: 2,
      },
      {
        description:
          "The Backend Development Team focuses on server-side logic, database management, and ensuring the reliability and efficiency of our application's backend infrastructure. This team is responsible for developing APIs, integrating third-party services, and maintaining the systems that support the frontend. They work collaboratively with frontend developers to ensure seamless data flow and optimal performance.",
        employees: [
          {
            current_score: 92,
            email: "alice.smith@example.com",
            lessons_taken: 12,
            name: "Alice Smith",
            skills_being_developed: ["Node.js", "Database Management"],
            title: "Lead Backend Developer",
            description:
              "Alice Smith is a seasoned Lead Backend Developer with a strong background in Node.js and database management. She has completed 12 lessons to enhance her skills. Alice is known for her problem-solving abilities and expertise in building scalable backend systems.",
          },
          {
            current_score: 88,
            email: "bob.jones@example.com",
            lessons_taken: 9,
            name: "Bob Jones",
            skills_being_developed: ["Python", "API Development"],
            title: "Backend Developer",
            description:
              "Bob Jones is a proficient Backend Developer specializing in Python and API development. With 9 lessons taken, he is constantly improving his technical knowledge. Bob is dedicated to creating efficient and reliable backend solutions.",
          },
        ],
        overall_score: 90,
        title: "Backend Team",
        total_employee_count: 2,
      },
      {
        description:
          "The Quality Assurance Team is tasked with ensuring that the applications meet the highest standards of quality and reliability. This team conducts various tests to identify bugs, performance issues, and areas for improvement. They work closely with both frontend and backend developers to ensure all features are tested thoroughly before deployment.",
        employees: [
          {
            current_score: 93,
            email: "charles.brown@example.com",
            lessons_taken: 15,
            name: "Charles Brown",
            skills_being_developed: ["Automated Testing", "Manual Testing"],
            title: "QA Lead",
            description:
              "Charles Brown is an expert QA Lead with significant experience in both automated and manual testing. He has taken 15 lessons to keep his skills sharp and up-to-date. Charles is known for his meticulous attention to detail and ability to catch even the smallest issues.",
          },
          {
            current_score: 87,
            email: "emily.white@example.com",
            lessons_taken: 10,
            name: "Emily White",
            skills_being_developed: ["Manual Testing"],
            title: "QA Tester",
            description:
              "Emily White is a diligent QA Tester with a focus on manual testing. With 10 lessons under her belt, she is continually improving her testing methodologies. Emily is dedicated to ensuring that our products are of the highest quality.",
          },
        ],
        overall_score: 90,
        title: "Quality Assurance Team",
        total_employee_count: 2,
      },
      {
        description:
          "The DevOps Team is responsible for managing and automating the deployment processes, ensuring continuous integration and continuous delivery (CI/CD), and maintaining infrastructure as code. They work to streamline development and operations, enhancing the productivity of the entire engineering team.",
        employees: [
          {
            current_score: 91,
            email: "david.lee@example.com",
            lessons_taken: 14,
            name: "David Lee",
            skills_being_developed: ["CI/CD", "Infrastructure as Code"],
            title: "DevOps Engineer",
            description:
              "David Lee is a proficient DevOps Engineer with expertise in continuous integration and delivery as well as infrastructure as code. He has taken 14 lessons to stay ahead in his field. David is known for his ability to automate complex processes and improve deployment efficiency.",
          },
          {
            current_score: 89,
            email: "susan.clark@example.com",
            lessons_taken: 11,
            name: "Susan Clark",
            skills_being_developed: ["Infrastructure as Code"],
            title: "Junior DevOps Engineer",
            description:
              "Susan Clark is an emerging talent in the DevOps field, focusing on infrastructure as code. With 11 lessons completed, she is quickly gaining the skills necessary to support and enhance our infrastructure. Susan is committed to learning and implementing the best practices in DevOps.",
          },
        ],
        overall_score: 90,
        title: "DevOps Team",
        total_employee_count: 2,
      },
      {
        description:
          "The Design Team is tasked with creating the visual elements and user interfaces for our products. They ensure that the designs are not only aesthetically pleasing but also user-friendly and aligned with the overall brand identity. This team collaborates closely with frontend developers to implement designs effectively.",
        employees: [
          {
            current_score: 94,
            email: "laura.martin@example.com",
            lessons_taken: 18,
            name: "Laura Martin",
            skills_being_developed: ["UI/UX Design", "Graphic Design"],
            title: "Lead Designer",
            description:
              "Laura Martin is a highly talented Lead Designer with a keen eye for detail and a passion for creating user-centric designs. She has completed 18 lessons to refine her skills further. Laura is known for her ability to translate complex requirements into beautiful, functional designs.",
          },
          {
            current_score: 88,
            email: "mark.jones@example.com",
            lessons_taken: 9,
            name: "Mark Jones",
            skills_being_developed: ["UI Design"],
            title: "Junior Designer",
            description:
              "Mark Jones is a creative Junior Designer focusing on UI design. With 9 lessons taken, he is constantly improving his design skills. Mark is dedicated to learning new design techniques and contributing innovative ideas to the team.",
          },
        ],
        overall_score: 91,
        title: "Design Team",
        total_employee_count: 2,
      },
    ],

    top_employees: [
      {
        current_score: 95,
        email: "john.doe@example.com",
        name: "John Doe",
        title: "Senior Developer",
      },
      {
        current_score: 92,
        email: "jane.doe@example.com",
        name: "Jane Doe",
        title: "Junior Developer",
      },
    ],
    top_skills: [
      {
        employees: 10,
        skill: "JavaScript",
      },
      {
        employees: 8,
        skill: "React",
      },
    ],
    total_completed_courses: 100,
    total_employees: 50,
    upcoming_courses: [
      {
        assigned_to: "john.doe@example.com",
        description: "Node.js Basics",
        due_date: "2024-08-01",
        status: "Not Started",
        title: "Node.js Introduction",
      },
      {
        assigned_to: "jane.doe@example.com",
        description: "Advanced CSS Techniques",
        due_date: "2024-08-05",
        status: "Not Started",
        title: "CSS Advanced",
      },
    ],
  },

  lastUpdatedAt: null,
});
