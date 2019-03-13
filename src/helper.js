import profile from './assets/cv-mock.jpg';

export const data = {
    profile: {
        name: 'Francisco Jonas',
        surname: 'GONZALEZ',
        imageProfile: profile,
        career: ''
    },
    contact: [{ key: 'Email', value: 'gonzalez.franciscojonas@gmail.com' },
    { key: 'Celular', value: '011-5-385-7270 ' },
    { key: 'Estado Civil', value: 'Soltero' },
    { key: 'Localidad', value: 'Capital Federal' },
    { key: 'Fecha de nacimiento', value: ' 8/02/1990 ' }],
    intro: {
        description: `Me considero una persona emprendedora, responsable, predispuesta y con capacidad de resolución. Me motivan los nuevos desafíos, aprender y relacionarme con otras personas. Interesado en ampliar mi experiencia y conocimientos laborales para seguir desarrollándome profesional y personalmente, y ser parte de un proyecto del cual sentirme orgulloso`
    },
    Skills: [
        { percentage: 70, title: 'Git' },
        { percentage: 50, title: 'Javascript' },
        { percentage: 80, title: 'React' },
        { percentage: 50, title: 'React Native' },
        { percentage: 60, title: 'Java' },
        { percentage: 40, title: 'Python' },
    ],
    Personal: [
        { percentage: 70, title: 'Management' },
        { percentage: 50, title: 'Self-motivation' },
        { percentage: 80, title: 'Adaptability' },
        { percentage: 50, title: 'Leadership' },
        { percentage: 60, title: 'Resolution' },
        { percentage: 90, title: 'Under Pressure' },
    ]

}