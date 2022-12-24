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
            office: "Frontend Developer (Projeto)",
            local: "HEALTH",
            date: "ago 2022 - nov 2022 ",
            descripton: "Lorem Ipsum is simply dummy text of the printing e ind"
        },
        {
            office: "Frontend Developer (estágio)",
            local: "ENEXT",
            date: "out 2021 - jun 2022 ",
            descripton: "Lorem Ipsum is simply dummy text of the printing e ind"
        },
        {
            office: "Fullstack Developer (Projeto)",
            local: "Prime Car",
            date: "ago 2021 - nov 2021",
            descripton: "Lorem Ipsum is sm has been the ind"
        },
        {
            office: "Web Developer",
            local: "RB Fotografias",
            date: "2020",
            descripton: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
    ]
}