const persons = [
    {me: true,
    admin: true,
    name: 'Adrian'},
    {me: false,
    admin: false,
    name: 'Carla'},
    {me: false,
    admin: true,
    name: 'Carlos'}
];

const whatsapp = (whatsapp) => {
    whatsapp.sort((a, b) => {
    if(a.me === true && b.me === false) {
        return -1;
    } 
});
    console.log(whatsapp);

    whatsapp.sort((a, b) => {
        if(a.admin === true && b.admin === false) {
            return -1;
        } 
    });
    console.log(whatsapp);

};

whatsapp (persons);