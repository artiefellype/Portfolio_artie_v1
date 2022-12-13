interface ExperienceType {
    office?: string;
    local: string;
    date: string;
    descripton: string;
}

interface EducationType {
    course: string;
    locale: string;
    datee: string;
}

interface ExpType {
    education: Array<EducationType>,
    experience: Array<ExperienceType>
}

export const ExperienceData: ExpType = {
    education:[
        {
            course: "Ciência da Computação",
            locale: "UFERSA",
            datee: "2020 - Present",
        },
        {
            course: "Ciência da Computação",
            locale: "UFERSA",
            datee: "2020 - Present",
        },
        {
            course: "Ciência da Computação",
            locale: "UFERSA",
            datee: "2020 - Present",
        },
    ],
    experience:[
        {
            office: "Web designer",
            local: "UFERSA",
            date: "2021 - Present",
            descripton: "Lorem Ipsum is simply dummy text of the printing e ind"
        },
        {
            office: "Web developer",
            local: "Enext",
            date: "2021 - Present",
            descripton: "Lorem Ipsum is sm has been the ind"
        },
        {
            office: "Software Enginner",
            local: "Brasil",
            date: "2021 - Present",
            descripton: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
    ]
}