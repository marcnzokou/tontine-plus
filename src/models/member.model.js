const memberModel = {
    sex: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    settings: {
        general : {
            language: 'francais',
            admission: 0,
            payment: 0,
            payMonth: '',
            notificationByEmail: true,
            notificationBySms: true
        }
    }
};

export default memberModel;