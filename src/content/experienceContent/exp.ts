interface ExperienceType {
    office?: string;
    local: string;
    date: string;
    descripton: string;
}

interface ExpType {
    experience: Array<ExperienceType>
}

export const ExperienceData: ExpType = {

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