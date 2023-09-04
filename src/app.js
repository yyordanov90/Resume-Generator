const { ResumePDF } = require('./generator.js');

const resumeContent = {
    header: {
        name: 'Yordan Yordanov',
        phone: '-',
        email: 'yordan90.yordanov90@abv.bg'
    },
    summary: {
        description: 'Aiming to advance my skill to become a full-stack developer.' 
    },
    top_skills: {
        skills: [ 'JavaScript', 'Node.js', 'NPM', 'React.js', 'C#', 'Python'] 
    },
    experience: {
        exp: [
            {
                company: "Z-cast",
                position: "Technical Assistant",
                year_start: "2020",
                year_end: "2021",
                bullets: [
                    "Assist with online streaming software",
                ]
            },
            {
                company: "Uanet",
                position: "Technical Assistant",
                year_start: "2022",
                year_end: "Present",
                bullets: [
                    "Assist with office management tasks",
                ]
            }
        ]
    },
    education: {
        school: "High School 105 Atanas Dalchev",
        degree: "High School Degree",
        gpa: "4.5 GPA",
        grad_year: "2022"
    }
}

const myResume = ResumePDF(resumeContent)

myResume.save('MyResume.pdf')
