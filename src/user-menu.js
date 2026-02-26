// src/user-menu.js

const generateMenuOptions = (isMember) => {
    if (isMember) {
        return [
            { name: 'Dashboard', action: '/dashboard' },
            { name: 'Profile', action: '/profile' },
            { name: 'Settings', action: '/settings' },
            { name: 'Logout', action: '/logout' }
        ];
    } else {
        return [
            { name: 'Home', action: '/home' },
            { name: 'Login', action: '/login' },
            { name: 'Register', action: '/register' }
        ];
    }
};

module.exports = generateMenuOptions;