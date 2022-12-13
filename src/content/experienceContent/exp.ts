interface ExperienceType {
    office: string;
    local: string;
    date: string;
}

interface EducationType {
    course: string;
    local: string;
    date: string;
}

interface ExpType {
    education: Array<EducationType>,
    experience: Array<ExperienceType>
}

export const ExperienceData: ExpType = {
    education:[
        {
            course: "Ciência da Computação",
            local: "UFERSA",
            date: "2020 - Present",
        },
        {
            course: "Ciência da Computação",
            local: "UFERSA",
            date: "2020 - Present",
        },
        {
            course: "Ciência da Computação",
            local: "UFERSA",
            date: "2020 - Present",
        },
    ],
    experience:[
        {
            office: "Web designer",
            local: "UFERSA",
            date: "2021 - Present",
        },
        {
            office: "Web developer",
            local: "Enext",
            date: "2021 - Present",
        },
        {
            office: "Software Enginner",
            local: "Brasil",
            date: "2021 - Present",
        },
    ]
}