//In larger sites, this file might be used to manage api endpoints. I won't be using this in my current configuraion
//This object gets imported and used in the reducer's action creator's payloads as part of axios calls
export default {
    swag: '/api/swag',
    cart: '/api/cart',
    login: '/api/login',
    register: '/api/register',
    signout: '/api/signout',
    search: '/api/search',
    user: '/api/user',
    checkout: '/api/cart/checkout'
  };