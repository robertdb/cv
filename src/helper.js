import profile from './assets/cv-mock.jpg';

export const data = {
    profile: {
        name: 'Jon',
        surname: 'Snow',
        imageProfile: profile,
        career: 'Developer'
    },
    contact: [{ key: 'Email', value: 'jonsnow@gmail.com' },
    { key: 'Celular', value: '(011) 1161781402' },
    { key: 'Dni', value: '37345934' },
    { key: 'Localidad', value: 'Capital Federal' },
    { key: 'Fecha de nacimiento', value: '10/02/1990' }],
    intro: {
        description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
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