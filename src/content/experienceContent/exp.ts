interface ExperienceType {
    office?: string;
    local: string;
    date: string;
    descripton: Array<String>;
}

interface ExpType {
    experience: Array<ExperienceType>;
}

export const ExperienceData: ExpType = {
    experience: [
        {
            office: "FullStack Developer",
            local: "GestClinic",
            date: "fev 2024 - atual ",
            descripton: [
                " Liderei o desenvolvimento do backend de uma aplicação online, construindo sua API com Java, Spring e Docker para o gerenciamento eficiente de containers",
                " Contribuí significativamente para o desenvolvimento da interface de projetos, empregando TypeScript e Next.js em conjunto com Tailwind CSS para proporcionar uma experiência moderna e intuitiva aos usuários.",
            ],
        },
        {
            office: "Frontend Developer",
            local: "MindSafe",
            date: "fev 2023 - fev 2024 ",
            descripton: [
                "Contribuí diretamente no desenvolvimento de uma plataforma dedicada a psicólogos, utilizando as tecnologias Next.js e TypeScript. ",
            ],
        },
        {
            office: "Frontend Developer",
            local: "HEALTH",
            date: "ago 2022 - nov 2022 ",
            descripton: [
                "Desenvolvi em equipe o Design da aplicação ",
                "Em conjunto com a equipe, desenvolvi o frontend da aplicação em React se utilizando de bibliotecas como o ant design para acelerar a entrega do software",
                "Realizei a integração completa da aplicação com o backend feito em Nest",
            ],
        },
        {
            office: "Frontend Developer",
            local: "ENEXT",
            date: "out 2021 - jun 2022 ",
            descripton: [
                "Trabalhei com lojas de e-commerces utilizando tecnologias como React e jquery",
                "Utilizando-se da plataforma VTEX realizei manutenções e refatoramentos de código",
                "Em equipe pude acompanhar a lógica e o desenvolvimento dos ambientes de lojas e-commerces como Mercafé, Finistore e 'L'Oréal ",
            ],
        },
        {
            office: "Fullstack Developer",
            local: "Prime Car",
            date: "ago 2021 - nov 2021",
            descripton: [
                "Fazendo pair programming desenvolvi a interface de um sistema de gerenciamento de oficinas mecânicas utilizando javafx",
                "Desenvolvi o backend da aplicação utilizando java e postgresql",
                "Realizei a integração da interface do sistema com o backend",
            ],
        },
    ],
};
